import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

/* Scroll-in reveal, deliberately without framer-motion.
   `whileInView` keeps an observer + animation loop attached to every revealed
   element for as long as it is mounted, and re-evaluates them during scroll —
   with no GPU compositing that showed up as cards flickering as you scrolled.
   This fires one IntersectionObserver, adds a class, disconnects, and lets CSS
   transitions run on the compositor. */

const Reveal = ({ children, delay = 0, y, duration, className = '', style, ...rest }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    /* No reduced-motion branch here on purpose. The observer always runs and
       always adds the class; the stylesheet decides how much movement that
       class is allowed to produce. Short-circuiting in JS meant reduced-motion
       users got no transition at all rather than a gentler one. */
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect(); // once only — never watch this element again
        }
      },
      // Trigger a little before the element is fully on screen, so the whole
      // transition is visible rather than half of it happening off-view.
      { rootMargin: '0px 0px -18% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`.trim()}
      style={{
        '--reveal-delay': `${delay}s`,
        ...(y !== undefined ? { '--reveal-y': `${y}px` } : null),
        ...(duration !== undefined ? { '--reveal-dur': `${duration}s` } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
  y: PropTypes.number,
  duration: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Reveal;
