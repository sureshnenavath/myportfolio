import React from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import { profile } from '../data/content';

/* The reference's top ruler strip: tick marks, a live scroll-percentage badge,
   and a status readout on the right. Desktop only — it needs the width. */

const ScrollRuler = () => {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  /* translateX on a full-width rail, not `left`. Animating `left` is a layout
     property — it reflowed the fixed strip on every single scroll frame. */
  const slide = useTransform(smooth, [0, 1], ['0%', '100%']);
  const [pct, setPct] = React.useState(0);
  const [clock, setClock] = React.useState('');
  const lastPct = React.useRef(0);

  // Only re-render when the whole number actually changes — otherwise this
  // fires a setState on every animation frame of the scroll.
  useMotionValueEvent(smooth, 'change', (v) => {
    const next = Math.round(v * 100);
    if (next !== lastPct.current) {
      lastPct.current = next;
      setPct(next);
    }
  });

  React.useEffect(() => {
    const tick = () => {
      setClock(
        new Date().toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    };
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="ruler" aria-hidden="true">
      <span className="ruler__brand">{profile.name}</span>

      <div className="ruler__track">
        {/* Tick marks */}
        <div className="ruler__ticks" />

        {/* Progress fill */}
        <motion.div className="ruler__fill" style={{ scaleX: smooth }} />

        {/* Percentage badge, carried on a full-width rail */}
        <motion.div className="ruler__rail" style={{ x: slide }}>
          <span className="ruler__badge">{pct}%</span>
        </motion.div>
      </div>

      <span className="ruler__status">
        <span className="dot" />
        LIVE · {clock} IST
      </span>

      <style>{`
        .ruler {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1400;
          height: 30px;
          display: flex;
          align-items: center;
          gap: var(--space-5);
          padding: 0 var(--space-5);
          /* Solid, not backdrop-filter: a full-width blur on a fixed element
             repaints the whole strip on every scroll frame. */
          background: #f4f9fc;
          border-bottom: 1px solid var(--color-border);
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-text-tertiary);
          pointer-events: none;
        }
        .ruler__brand { font-weight: 700; color: var(--color-ink); white-space: nowrap; }
        .ruler__track {
          position: relative;
          flex: 1;
          height: 100%;
          overflow: hidden;
          contain: strict;
        }
        .ruler__ticks {
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(to right,
              rgba(20,32,43,0.28) 0 1px, transparent 1px 10px),
            repeating-linear-gradient(to right,
              rgba(20,32,43,0.45) 0 1px, transparent 1px 100px);
          background-size: 100% 7px, 100% 13px;
          background-position: 0 100%, 0 100%;
          background-repeat: repeat-x;
        }
        .ruler__fill {
          position: absolute;
          inset: 0;
          transform-origin: 0 50%;
          will-change: transform;
          background: linear-gradient(90deg, rgba(240,83,28,0.16), rgba(240,83,28,0.05));
        }
        .ruler__rail {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 0;
          will-change: transform;
        }
        .ruler__badge {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate(-50%, -50%);
          padding: 2px 7px;
          border-radius: var(--radius-xs);
          background: var(--color-accent);
          color: #fff;
          font-weight: 700;
          font-size: 10px;
          letter-spacing: 0.06em;
          white-space: nowrap;
        }
        .ruler__status {
          display: inline-flex;
          align-items: center;
          gap: var(--space-3);
          white-space: nowrap;
        }

        @media (max-width: 899px) {
          .ruler { display: none; }
        }
      `}</style>
    </div>
  );
};

export default ScrollRuler;
