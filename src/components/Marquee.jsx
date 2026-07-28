import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

/* Infinite ticker. The track holds two identical runs and translates by -50%,
   so the loop is seamless without measuring anything.
   It only runs while on screen — an animation left running off screen keeps
   repainting the page for no visible benefit. */

const Marquee = ({ items, speed = 34, reverse = false }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '120px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
  <div className="marquee" aria-hidden="true" ref={ref}>
    <div
      className="marquee__track"
      style={{
        animationDuration: `${speed}s`,
        animationDirection: reverse ? 'reverse' : 'normal',
        animationPlayState: visible ? 'running' : 'paused',
        willChange: visible ? 'transform' : 'auto',
      }}
    >
      {[0, 1].map((run) => (
        <div className="marquee__run" key={run}>
          {items.map((item, i) => (
            <span className="marquee__item" key={`${run}-${item}-${i}`}>
              {item}
              <span className="marquee__sep">✦</span>
            </span>
          ))}
        </div>
      ))}
    </div>

    <style>{`
      .marquee {
        position: relative;
        overflow: hidden;
        contain: content;
        padding: var(--space-5) 0;
        border-top: 1px solid var(--color-border-strong);
        border-bottom: 1px solid var(--color-border-strong);
      }
      /* Edge fades as overlays, not mask-image — masking a continuously
         animating element re-composites the whole band every frame. */
      .marquee::before,
      .marquee::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 70px;
        z-index: 1;
        pointer-events: none;
      }
      .marquee::before {
        left: 0;
        background: linear-gradient(90deg, var(--sky-bottom), rgba(207, 230, 245, 0));
      }
      .marquee::after {
        right: 0;
        background: linear-gradient(270deg, var(--sky-bottom), rgba(207, 230, 245, 0));
      }
      .marquee__track {
        display: flex;
        width: max-content;
        will-change: transform;
        animation-name: marquee-scroll;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
      .marquee:hover .marquee__track { animation-play-state: paused; }
      .marquee__run { display: flex; }
      .marquee__item {
        display: inline-flex;
        align-items: center;
        gap: var(--space-6);
        padding-right: var(--space-6);
        font-family: var(--font-mono);
        font-size: var(--text-md);
        font-weight: 500;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--color-text-tertiary);
        white-space: nowrap;
      }
      .marquee__sep { color: var(--color-accent); }

      @keyframes marquee-scroll {
        from { transform: translate3d(0, 0, 0); }
        to   { transform: translate3d(-50%, 0, 0); }
      }
    `}</style>
  </div>
  );
};

Marquee.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  speed: PropTypes.number,
  reverse: PropTypes.bool,
};

export default Marquee;
