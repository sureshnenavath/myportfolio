import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

/* Masked per-word rise, CSS-driven for the same reason as Reveal: no animation
   library on the scroll path. Each word sits in an overflow-hidden box and
   slides up on a transition-delay derived from its index.
   The full string stays in the accessibility tree via aria-label. */

const SplitText = ({
  text,
  as: Tag = 'span',
  className = '',
  style,
  stagger = 0.055,
  delay = 0,
  accentFrom = -1,
  animate = false,
}) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const words = String(text).split(' ');

  useEffect(() => {
    if (animate) {
      setShown(true);
      return undefined;
    }

    const node = ref.current;
    if (!node) return undefined;

    // CSS decides how much movement is allowed — see the reduced-motion block.
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <Tag
      ref={ref}
      aria-label={text}
      className={`split ${shown ? 'is-in' : ''} ${className}`.trim()}
      style={style}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} aria-hidden="true" className="split__word">
          <span
            className="split__inner"
            style={{
              '--split-delay': `${delay + i * stagger}s`,
              color: accentFrom >= 0 && i >= accentFrom ? 'var(--color-accent)' : undefined,
            }}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        </span>
      ))}
    </Tag>
  );
};

SplitText.propTypes = {
  text: PropTypes.string.isRequired,
  as: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  stagger: PropTypes.number,
  delay: PropTypes.number,
  accentFrom: PropTypes.number,
  animate: PropTypes.bool,
};

export default SplitText;
