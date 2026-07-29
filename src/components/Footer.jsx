import React from 'react';
import { motion } from 'framer-motion';
import { ArrowOutward, ArrowUpward } from '@mui/icons-material';
import { profile } from '../data/content';
import { scrollToY } from '../utils/smoothScroll';

/* Dark rounded slab with the oversized wordmark — the reference's footer.frame. */

const columns = [
  {
    title: 'SITE',
    links: [
      { label: 'About', href: '/#about' },
      { label: 'Stack', href: '/#stack' },
      { label: 'Work', href: '/#work' },
      { label: 'Projects', href: '/#projects' },
    ],
  },
  {
    title: 'MORE',
    links: [
      { label: 'Education', href: '/#education' },
      { label: 'Certifications', href: '/#education' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'CONNECT',
    links: [
      { label: 'GitHub', href: profile.github, external: true },
      { label: 'LinkedIn', href: profile.linkedin, external: true },
      { label: 'Email', href: `mailto:${profile.email}`, external: true },
    ],
  },
];

/* The wordmark is drawn as SVG with textLength, so it fits the slab exactly at
   every width. A CSS font-size cannot do this reliably — it depends on the
   font's own metrics, which is why it previously ran off the right edge. */
const Wordmark = () => (
  <svg
    className="footer-wordmark"
    viewBox="0 0 1000 132"
    role="img"
    aria-label={profile.name}
    preserveAspectRatio="xMidYMid meet"
  >
    <text
      x="0"
      y="104"
      textLength="1000"
      lengthAdjust="spacingAndGlyphs"
      fontFamily="'Hanken Grotesk', system-ui, sans-serif"
      fontWeight="800"
      fontSize="128"
    >
      {/* style, not fill="" — a presentation attribute does not resolve var() */}
      <tspan style={{ fill: 'var(--color-accent)' }}>N</tspan>
      <tspan style={{ fill: 'var(--color-text-on-dark)' }}>enavath <tspan style={{ fill: 'var(--color-accent)' }}>S</tspan>uresh</tspan>
    </text>
  </svg>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="on-dark"
      style={{ position: 'relative', zIndex: 2, padding: '0 var(--shell-pad) var(--shell-pad)' }}
    >
      <div className="footer-slab">
        {/* Top row */}
        <div className="footer-top">
          <span className="mono-label" style={{ color: 'var(--color-accent)' }}>
            HAVE SOMETHING WORTH BUILDING?
          </span>
          <motion.button
            type="button"
            onClick={() => scrollToY(0)}
            aria-label="Back to top"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.94 }}
            className="footer-top-btn"
          >
            <ArrowUpward style={{ fontSize: 20 }} />
          </motion.button>
        </div>

        {/* Address + link columns */}
        <div className="footer-grid">
          <div>
            <a href={`mailto:${profile.email}`} className="footer-email">
              <span>{profile.email}</span>
              <ArrowOutward className="footer-email-arrow" />
            </a>

            <div className="footer-actions">
              <a href="/#contact" className="btn btn--primary footer-cta">
                Start a conversation
              </a>
              <span className="mono-label footer-status">
                <span className="dot" />
                {profile.availabilityLabel}
              </span>
            </div>
          </div>

          <div className="footer-cols">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="mono-label mono-label--on-dark" style={{ marginBottom: 'var(--space-5)' }}>
                  {col.title}
                </p>
                <ul style={{ listStyle: 'none', display: 'grid', gap: 'var(--space-4)' }}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className="footer-link"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Wordmark />

        {/* Meta strip */}
        <div className="footer-meta">
          <span className="mono-label mono-label--on-dark">{profile.location}</span>
          <span className="mono-label mono-label--on-dark">
            © {year} {profile.name}. All rights reserved.
          </span>
        </div>
      </div>

      <style>{`
        .footer-slab {
          max-width: var(--shell-max);
          margin: 0 auto;
          background: var(--color-surface-dark);
          color: var(--color-text-on-dark);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-1);
          padding: clamp(28px, 4vw, 56px) clamp(20px, 3.5vw, 48px) clamp(20px, 2.5vw, 28px);
          overflow: hidden;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: var(--space-6);
          margin-bottom: var(--space-8);
        }
        .footer-top-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          border-radius: var(--radius-pill);
          border: 1px solid var(--color-border-on-dark);
          background: transparent;
          color: var(--color-text-on-dark);
          cursor: pointer;
          transition: background var(--duration-normal) var(--ease-out),
                      border-color var(--duration-normal) var(--ease-out);
        }
        .footer-top-btn:hover {
          background: var(--color-accent);
          border-color: var(--color-accent);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
          align-items: start;
        }

        /* Sized to stay on one line down to small screens — it used to break
           mid-word ("…09@g / mail.com"), which read as a layout bug. */
        .footer-email {
          display: inline-flex;
          align-items: center;
          gap: var(--space-4);
          max-width: 100%;
          font-size: clamp(1rem, 3.4vw, 2.5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: var(--color-text-on-dark);
          transition: color var(--duration-normal) var(--ease-out);
        }
        .footer-email > span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .footer-email:hover { color: var(--color-accent); }
        .footer-email-arrow {
          flex-shrink: 0;
          color: var(--color-accent);
          font-size: clamp(20px, 2.4vw, 30px) !important;
          transition: transform var(--duration-normal) var(--ease-out);
        }
        .footer-email:hover .footer-email-arrow { transform: translate(3px, -3px); }

        .footer-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--space-6);
          margin-top: var(--space-7);
        }
        /* The full orange glow was too heavy against the dark slab */
        .footer-cta { box-shadow: rgba(240, 83, 28, 0.35) 0 10px 22px -14px; }
        .footer-status {
          display: inline-flex;
          align-items: center;
          gap: var(--space-3);
          color: var(--color-text-on-dark-muted);
        }

        .footer-cols {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--space-6);
        }
        .footer-link {
          font-size: var(--text-base);
          color: var(--color-text-on-dark);
          transition: color var(--duration-normal) var(--ease-out);
        }
        .footer-link:hover { color: var(--color-accent); }

        .footer-wordmark {
          display: block;
          width: 100%;
          height: auto;
          margin-top: clamp(32px, 5vw, 64px);
        }

        .footer-meta {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: var(--space-4);
          padding-top: var(--space-6);
          margin-top: var(--space-6);
          border-top: 1px solid var(--color-border-on-dark);
        }

        @media (min-width: 900px) {
          .footer-grid { grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr); }
        }
        @media (max-width: 519px) {
          .footer-cols { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
