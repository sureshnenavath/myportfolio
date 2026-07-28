import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowOutward, ArrowForward } from '@mui/icons-material';
import Reveal from '../Reveal';
import SplitText from '../SplitText';
import Magnetic from '../Magnetic';
import { projects } from '../../data/content';

/* Featured work as rows, not cards — index, name, tags, year, arrow.
   Hovering a row floats a preview that tracks the cursor (pointer: fine only). */

const featured = projects.filter((p) => p.featured);

const PREVIEW_W = 340;
const PREVIEW_H = 260;

/* Keep the floating preview fully on screen near the right/bottom edges. */
const place = (e) => ({
  x: Math.min(e.clientX + 28, window.innerWidth - PREVIEW_W - 16),
  y: Math.min(Math.max(e.clientY - 130, 16), window.innerHeight - PREVIEW_H - 16),
});

const FeaturedWorks = () => {
  const [hovered, setHovered] = useState(null);

  // Pointer position lives in motion values, never in state — a mousemove must
  // not re-render this section, or the whole list stutters while you scroll.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 340, damping: 30, mass: 0.35 });
  const py = useSpring(my, { stiffness: 340, damping: 30, mass: 0.35 });

  const onMove = useCallback(
    (e) => {
      const { x, y } = place(e);
      mx.set(x);
      my.set(y);
    },
    [mx, my]
  );

  /* First hover must snap to the cursor. Without this the springs are still
     parked at 0,0 and the preview flies in from the top-left corner. */
  const onEnter = useCallback(
    (project, e) => {
      const { x, y } = place(e);
      mx.set(x);
      my.set(y);
      px.jump(x);
      py.jump(y);
      setHovered(project.id);
    },
    [mx, my, px, py]
  );

  const active = featured.find((p) => p.id === hovered);

  return (
    <section id="projects" className="section">
      <Reveal style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
        <p className="script-accent">explore the work</p>
      </Reveal>

      <SplitText
        as="h2"
        text="Featured works"
        className="display"
        style={{
          display: 'block',
          textAlign: 'center',
          fontSize: 'clamp(2.75rem, 8vw, 6.5rem)',
        }}
      />

      <Reveal style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
        <p
          className="pill"
          style={{
            marginTop: 'var(--space-6)',
            background: '#fdf3d8',
            boxShadow: 'var(--shadow-4)',
            fontSize: 'var(--text-base)',
          }}
        >
          Real products with real users. Hover to peek.
        </p>
      </Reveal>

      <div onMouseMove={onMove} onMouseLeave={() => setHovered(null)}>
        {featured.map((p, i) => (
          <Reveal key={p.id} delay={0.09 * i} y={34}>
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="work-row"
              onMouseEnter={(e) => onEnter(p, e)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="mono-label work-row__index">{p.index}</span>

              <span className="work-row__name">{p.name}</span>

              <span className="work-row__tags">
                {p.tags.map((t, ti) => (
                  <span
                    key={t}
                    className={ti === 0 ? 'chip chip--mono chip--accent' : 'chip chip--mono'}
                  >
                    {t}
                  </span>
                ))}
              </span>

              <span className="mono-label work-row__year">{p.year}</span>

              <span className="work-row__arrow" aria-hidden="true">
                <ArrowOutward style={{ fontSize: 20 }} />
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-8)' }}>
        <Magnetic>
          <Link to="/projects" className="btn btn--ghost">
            All {projects.length} projects
            <ArrowForward style={{ fontSize: 19 }} />
          </Link>
        </Magnetic>
      </Reveal>

      {/* Cursor-tracking preview */}
      <AnimatePresence>
        {active && (
          <motion.div
            key={active.id}
            className="work-preview"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              x: px,
              y: py,
              zIndex: 40,
              pointerEvents: 'none',
              width: 340,
              willChange: 'transform',
            }}
          >
            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '6px solid var(--color-surface-dark)',
                boxShadow: 'var(--shadow-1)',
                background: 'var(--color-surface-dark)',
              }}
            >
              <img
                src={active.image}
                alt=""
                style={{ width: '100%', height: 200, objectFit: 'cover' }}
              />
              <p
                className="mono-label mono-label--on-dark"
                style={{ padding: 'var(--space-4) var(--space-5)', textTransform: 'none' }}
              >
                {active.tagline}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .work-row {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          grid-template-areas:
            "index name arrow"
            ". tags tags"
            ". year year";
          align-items: center;
          gap: var(--space-3) var(--space-5);
          padding: var(--space-6) var(--space-4);
          border-top: 1px solid var(--color-border-strong);
          transition: padding-left var(--duration-slow) var(--ease-out);
        }
        .work-row:last-child { border-bottom: 1px solid var(--color-border-strong); }
        .work-row:hover { padding-left: var(--space-6); }

        .work-row__index { grid-area: index; }
        .work-row__name {
          grid-area: name;
          font-size: clamp(1.6rem, 5vw, 3.25rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.05;
          transition: color var(--duration-normal) var(--ease-out);
        }
        .work-row:hover .work-row__name,
        .work-row:focus-visible .work-row__name { color: var(--color-accent); }

        .work-row__tags { grid-area: tags; display: flex; flex-wrap: wrap; gap: var(--space-3); }
        .work-row__year { grid-area: year; }

        .work-row__arrow {
          grid-area: arrow;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          border-radius: var(--radius-pill);
          border: 1px solid var(--color-border-strong);
          transition: background var(--duration-normal) var(--ease-out),
                      color var(--duration-normal) var(--ease-out),
                      border-color var(--duration-normal) var(--ease-out);
        }
        .work-row:hover .work-row__arrow,
        .work-row:focus-visible .work-row__arrow {
          background: var(--color-accent);
          border-color: var(--color-accent);
          color: #fff;
        }

        @media (min-width: 900px) {
          .work-row {
            grid-template-columns: 4.5rem minmax(0, auto) minmax(0, 1fr) auto auto;
            grid-template-areas: "index name tags year arrow";
          }
        }

        /* No cursor preview on touch — it has nowhere to follow */
        @media (pointer: coarse), (max-width: 899px) {
          .work-preview { display: none; }
        }
      `}</style>
    </section>
  );
};

export default FeaturedWorks;
