import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/* Counts a metric up once it scrolls into view.
   The tween writes straight to the DOM node — a setState per frame would
   re-render the surrounding card sixty times a second while counting.
   Non-numeric values render as-is. */

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

const CountUp = ({ value, duration = 1.4 }) => {
  const ref = useRef(null);
  const target = Number(value);
  const numeric = Number.isFinite(target);

  useEffect(() => {
    const node = ref.current;
    if (!node || !numeric) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.textContent = String(target);
      return undefined;
    }

    let frame = 0;
    let start = 0;

    const step = (now) => {
      if (!start) start = now;
      const t = Math.min((now - start) / (duration * 1000), 1);
      node.textContent = String(Math.round(easeOut(t) * target));
      if (t < 1) frame = window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          frame = window.requestAnimationFrame(step);
          obs.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [numeric, target, duration]);

  return <span ref={ref}>{numeric ? 0 : value}</span>;
};

CountUp.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  duration: PropTypes.number,
};

export default CountUp;
