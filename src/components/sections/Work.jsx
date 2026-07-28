import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { KeyboardArrowUp, ArrowOutward } from '@mui/icons-material';
import Reveal from '../Reveal';
import SplitText from '../SplitText';
import Magnetic from '../Magnetic';
import { experience } from '../../data/content';

/* Numbered experience blocks — the reference's 01 / 02 / 03 service sections:
   index badge, split headline, collapsible process + deliverables. */

const BrowserMock = ({ role }) => (
  <div
    aria-hidden="true"
    style={{
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--color-surface-dark)',
      boxShadow: 'var(--shadow-1)',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        padding: 'var(--space-4) var(--space-5)',
        background: 'rgba(255,255,255,0.06)',
      }}
    >
      {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
        <span
          key={c}
          style={{ width: 10, height: 10, borderRadius: '50%', background: c, flexShrink: 0 }}
        />
      ))}
      <span
        className="mono-label"
        style={{
          flex: 1,
          marginLeft: 'var(--space-4)',
          padding: '5px 12px',
          borderRadius: 'var(--radius-pill)',
          background: 'rgba(255,255,255,0.08)',
          color: 'var(--color-text-on-dark-muted)',
          fontSize: 'var(--text-xs)',
          letterSpacing: '0.06em',
          textTransform: 'none',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {role.liveLabel}
      </span>
    </div>

    <div style={{ padding: 'clamp(20px, 3vw, 34px)' }}>
      <p className="mono-label" style={{ color: 'var(--color-accent)' }}>
        {role.kind}
      </p>
      <p
        style={{
          margin: 'var(--space-5) 0 var(--space-6)',
          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: 1.25,
          color: 'var(--color-text-on-dark)',
        }}
      >
        {role.summary}
      </p>
      <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
        {role.stack.slice(0, 5).map((s) => (
          <div
            key={s}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-4)',
              paddingBottom: 'var(--space-4)',
              borderBottom: '1px solid var(--color-border-on-dark)',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--color-accent)',
                flexShrink: 0,
              }}
            />
            <span
              className="mono-label mono-label--on-dark"
              style={{ textTransform: 'none', letterSpacing: '0.04em' }}
            >
              {s}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

BrowserMock.propTypes = { role: PropTypes.object.isRequired };

const RoleBlock = ({ role }) => {
  const [open, setOpen] = useState(false);
  const panelId = `work-panel-${role.id}`;

  /* Plain flow, deliberately. These cards run 700–900px tall, taller than the
     space left under the navbar, so position: sticky could never fully pin one
     — the browser re-resolved the stuck position every frame and the card
     appeared to blink. Expanding the disclosure inside a sticky card made it
     worse. The entrance reveal below carries the motion instead. */

  return (
    <Reveal className="reveal--far" style={{ marginBottom: 'var(--space-8)' }}>
      <div className="card work-card">
      <div className="work-split">
        <div>
          <span
            aria-hidden="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 64,
              height: 64,
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-surface-muted)',
              fontSize: 'var(--text-xl)',
              fontWeight: 700,
              color: 'var(--color-text-tertiary)',
              marginBottom: 'var(--space-6)',
            }}
          >
            {role.index}
          </span>

          <h3
            className="work-title"
            style={{ fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.05 }}
          >
            {role.company}
            <br />
            <span style={{ color: 'var(--color-accent)' }}>{role.tagline}</span>
          </h3>

          <p
            className="mono-label"
            style={{ margin: 'var(--space-5) 0 var(--space-5)' }}
          >
            {role.role} · {role.period}
          </p>

          <p
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: 'var(--text-lg)',
              maxWidth: '46ch',
            }}
          >
            {role.summary}
          </p>

          {role.live && (
            <Magnetic strength={0.25} style={{ marginTop: 'var(--space-6)' }}>
              <a
                href={role.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                }}
              >
                {role.liveLabel}
                <ArrowOutward style={{ fontSize: 18 }} />
              </a>
            </Magnetic>
          )}
        </div>

        <div className="work-mock">
          <BrowserMock role={role} />
        </div>
      </div>

      {/* Collapsible process + deliverables */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-5)',
          width: '100%',
          maxWidth: 420,
          marginTop: 'var(--space-7)',
          padding: '14px 14px 14px 22px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(240, 83, 28, 0.4)',
          background: 'var(--color-accent-soft)',
          cursor: 'pointer',
          font: 'inherit',
        }}
      >
        <span className="mono-label mono-label--accent">
          {open ? 'HIDE DETAILS' : 'SEE WHAT I SHIPPED'}
        </span>
        <motion.span
          animate={{ rotate: open ? 0 : 180 }}
          transition={{ duration: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 30,
            height: 30,
            borderRadius: '50%',
            background: 'var(--color-accent)',
            color: '#fff',
            flexShrink: 0,
          }}
        >
          <KeyboardArrowUp style={{ fontSize: 20 }} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="work-detail">
              <div>
                <p className="mono-label" style={{ marginBottom: 'var(--space-5)' }}>
                  THE WORK
                </p>
                <p
                  style={{
                    color: 'var(--color-text-secondary)',
                    fontSize: 'var(--text-lg)',
                    marginBottom: 'var(--space-6)',
                  }}
                >
                  {role.work}
                </p>
                <ul style={{ listStyle: 'none', display: 'grid', gap: 'var(--space-4)' }}>
                  {role.highlights.map((h) => (
                    <li
                      key={h}
                      style={{
                        display: 'flex',
                        gap: 'var(--space-4)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{ color: 'var(--color-accent)', flexShrink: 0, fontWeight: 700 }}
                      >
                        →
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mono-label" style={{ marginBottom: 'var(--space-5)' }}>
                  STACK
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                  {role.stack.map((s) => (
                    <span key={s} className="chip" style={{ padding: '7px 14px' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </Reveal>
  );
};

RoleBlock.propTypes = {
  role: PropTypes.object.isRequired,
};

const Work = () => (
  <section id="work" className="section">
    <Reveal style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
      <p className="script-accent" style={{ marginBottom: 'var(--space-3)' }}>
        where it ships
      </p>
    </Reveal>

    <SplitText
      as="h2"
      text="Experience"
      className="display"
      style={{
        display: 'block',
        textAlign: 'center',
        fontSize: 'clamp(2.75rem, 8vw, 6.5rem)',
        marginBottom: 'var(--space-8)',
      }}
    />

    {experience.map((role) => (
      <RoleBlock key={role.id} role={role} />
    ))}

    <style>{`
      .work-split {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-7);
        align-items: center;
      }
      .work-card { background: var(--color-surface); }
      .work-title { font-size: clamp(1.9rem, 4.5vw, 3.25rem); }
      .work-detail {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-7);
        margin-top: var(--space-7);
        padding-top: var(--space-7);
        border-top: 1px solid var(--color-border);
      }
      @media (min-width: 900px) {
        .work-split { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
        .work-detail { grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr); }
      }
      @media (max-width: 899px) {
        .work-mock { order: -1; }
      }
    `}</style>
  </section>
);

export default Work;
