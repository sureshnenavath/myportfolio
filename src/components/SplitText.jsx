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
  wordClass,
  suffix,
  suffixClass = '',
  animate = false,
}) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const words = String(text).split(' ');
  // Rendered tight against the last word, so it can be styled on its own
  // without a space between it and the text.
  const hasSuffix = suffix !== undefined && suffix !== null && suffix !== '';

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
      aria-label={hasSuffix ? `${text}${suffix}` : text}
      className={`split ${shown ? 'is-in' : ''} ${className}`.trim()}
      style={style}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} aria-hidden="true" className="split__word">
          <span
            className={`split__inner ${
              typeof wordClass === 'function' ? wordClass(i) : wordClass || ''
            }`.trim()}
            style={{
              '--split-delay': `${delay + i * stagger}s`,
              // A wordClass may paint the glyphs itself (halftone fill), in
              // which case it owns the colour.
              color:
                !wordClass && accentFrom >= 0 && i >= accentFrom
                  ? 'var(--color-accent)'
                  : undefined,
            }}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
            {hasSuffix && i === words.length - 1 && (
              <span className={suffixClass}>{suffix}</span>
            )}
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
  wordClass: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  suffix: PropTypes.node,
  suffixClass: PropTypes.string,
  animate: PropTypes.bool,
};

export default SplitText;
