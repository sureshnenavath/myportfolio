import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GitHub, ArrowOutward, Close, ArrowBack } from '@mui/icons-material';
import Reveal from '../components/Reveal';
import { projects } from '../data/content';

/* Deep-dive project index. Grid of cards; selecting one opens a detail modal. */

const ALL = 'ALL';

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState(ALL);

  const filters = useMemo(() => {
    const tags = new Set();
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return [ALL, ...Array.from(tags).sort()];
  }, []);

  const visible = useMemo(
    () => (filter === ALL ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter]
  );

  // Modal: lock scroll and close on Escape.
  useEffect(() => {
    if (!selected) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selected]);

  return (
    <div className="section" style={{ paddingTop: 'calc(var(--nav-clearance) + var(--space-8))' }}>
      <Reveal style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
        <Link
          to="/"
          className="mono-label"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)' }}
        >
          <ArrowBack style={{ fontSize: 16 }} />
          BACK HOME
        </Link>
        <h1
          className="display"
          style={{ fontSize: 'clamp(2.75rem, 8vw, 6.5rem)', margin: 'var(--space-5) 0 var(--space-4)' }}
        >
          Every project
        </h1>
        <p
          style={{
            color: 'var(--color-text-secondary)',
            fontSize: 'var(--text-lg)',
            maxWidth: '52ch',
            margin: '0 auto',
          }}
        >
          Production products, freelance builds, and the side projects that taught me the parts
          nobody documents.
        </p>
      </Reveal>

      {/* Filters */}
      <Reveal
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 'var(--space-3)',
          marginBottom: 'var(--space-8)',
        }}
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={filter === f ? 'chip chip--mono chip--accent' : 'chip chip--mono'}
            style={{ cursor: 'pointer', font: 'inherit', fontFamily: 'var(--font-mono)' }}
          >
            {f}
          </button>
        ))}
      </Reveal>

      {/* Grid */}
      <div className="proj-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: 0.03 * i, ease: [0.22, 1, 0.36, 1] }}
              className="card proj-card"
              style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <img
                src={p.image}
                alt=""
                loading="lazy"
                style={{ width: '100%', height: 180, objectFit: 'cover' }}
              />

              <div
                style={{
                  padding: 'clamp(20px, 2.5vw, 28px)',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 'var(--space-4)',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  <span className="mono-label">{p.index}</span>
                  <span className="mono-label">{p.year}</span>
                </div>

                <h2
                  style={{
                    fontSize: 'clamp(1.3rem, 2.4vw, 1.75rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.15,
                    marginBottom: 'var(--space-3)',
                  }}
                >
                  {p.name}
                </h2>

                <p
                  style={{
                    color: 'var(--color-text-secondary)',
                    marginBottom: 'var(--space-5)',
                  }}
                >
                  {p.description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--space-3)',
                    marginBottom: 'var(--space-6)',
                  }}
                >
                  {p.techStack.slice(0, 4).map((t) => (
                    <span key={t} className="chip chip--mono">
                      {t}
                    </span>
                  ))}
                  {p.techStack.length > 4 && (
                    <span className="chip chip--mono">+{p.techStack.length - 4}</span>
                  )}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-4)',
                    marginTop: 'auto',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setSelected(p)}
                    className="btn btn--ghost"
                    style={{ padding: '11px 18px', fontSize: 'var(--text-md)' }}
                  >
                    Details
                  </button>

                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary"
                      style={{ padding: '11px 18px', fontSize: 'var(--text-md)' }}
                    >
                      Live
                      <ArrowOutward style={{ fontSize: 16 }} />
                    </a>
                  )}

                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} source on GitHub`}
                      style={{ marginLeft: 'auto', color: 'var(--color-text-tertiary)', lineHeight: 0 }}
                    >
                      <GitHub style={{ fontSize: 22 }} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 1400,
                background: 'rgba(20, 32, 43, 0.55)',
                backdropFilter: 'blur(6px)',
              }}
            />
            <motion.div
              key="dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="proj-dialog-title"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 1500,
                display: 'grid',
                placeItems: 'center',
                padding: 'var(--shell-pad)',
                pointerEvents: 'none',
              }}
            >
              <div
                className="card"
                style={{
                  pointerEvents: 'auto',
                  width: 'min(760px, 100%)',
                  maxHeight: '86vh',
                  overflowY: 'auto',
                  padding: 0,
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={selected.image}
                    alt=""
                    style={{ width: '100%', height: 240, objectFit: 'cover' }}
                  />
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    aria-label="Close"
                    style={{
                      position: 'absolute',
                      top: 'var(--space-5)',
                      right: 'var(--space-5)',
                      width: 40,
                      height: 40,
                      borderRadius: 'var(--radius-pill)',
                      border: 'none',
                      background: 'var(--color-surface)',
                      cursor: 'pointer',
                      display: 'grid',
                      placeItems: 'center',
                      boxShadow: 'var(--shadow-4)',
                    }}
                  >
                    <Close style={{ fontSize: 20 }} />
                  </button>
                </div>

                <div style={{ padding: 'clamp(24px, 3.5vw, 40px)' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 'var(--space-3)',
                      marginBottom: 'var(--space-5)',
                    }}
                  >
                    {selected.tags.map((t, ti) => (
                      <span
                        key={t}
                        className={ti === 0 ? 'chip chip--mono chip--accent' : 'chip chip--mono'}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h2
                    id="proj-dialog-title"
                    className="display"
                    style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', marginBottom: 'var(--space-4)' }}
                  >
                    {selected.name}
                  </h2>

                  <p
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontSize: 'var(--text-lg)',
                      marginBottom: 'var(--space-7)',
                    }}
                  >
                    {selected.fullDescription}
                  </p>

                  <p className="mono-label" style={{ marginBottom: 'var(--space-4)' }}>
                    BUILT WITH
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 'var(--space-3)',
                      marginBottom: 'var(--space-7)',
                    }}
                  >
                    {selected.techStack.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
                    {selected.demo && (
                      <a
                        href={selected.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary"
                      >
                        Visit live site
                        <ArrowOutward style={{ fontSize: 18 }} />
                      </a>
                    )}
                    {selected.github && (
                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--ghost"
                      >
                        <GitHub style={{ fontSize: 18 }} />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .proj-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }
        .proj-card { transition: transform var(--duration-slow) var(--ease-out); }
        .proj-card:hover { transform: translateY(-6px); }
        @media (min-width: 700px) {
          .proj-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (min-width: 1100px) {
          .proj-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
      `}</style>
    </div>
  );
};

export default Projects;
