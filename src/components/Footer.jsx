import React from 'react';
import { motion } from 'framer-motion';
import { ArrowOutward, ArrowUpward } from '@mui/icons-material';
import { profile } from '../data/content';

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

const Footer = () => {
  const year = new Date().getFullYear();

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="on-dark"
      style={{ position: 'relative', zIndex: 1, padding: '0 var(--shell-pad) var(--shell-pad)' }}
    >
      <div
        style={{
          maxWidth: 'var(--shell-max)',
          margin: '0 auto',
          background: 'var(--color-surface-dark)',
          color: 'var(--color-text-on-dark)',
          borderRadius: 'var(--radius-2xl)',
          boxShadow: 'var(--shadow-1)',
          padding: 'clamp(28px, 4vw, 56px) clamp(20px, 3.5vw, 48px) clamp(20px, 2.5vw, 32px)',
          overflow: 'hidden',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-8)',
          }}
        >
          <span className="mono-label" style={{ color: 'var(--color-accent)' }}>
            HAVE SOMETHING WORTH BUILDING?
          </span>
          <motion.button
            type="button"
            onClick={toTop}
            aria-label="Back to top"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.94 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 48,
              height: 48,
              flexShrink: 0,
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--color-border-on-dark)',
              background: 'transparent',
              color: 'var(--color-text-on-dark)',
              cursor: 'pointer',
            }}
          >
            <ArrowUpward style={{ fontSize: 20 }} />
          </motion.button>
        </div>

        {/* Address + link columns */}
        <div className="footer-grid">
          <div>
            <a
              href={`mailto:${profile.email}`}
              className="footer-email"
              style={{
                display: 'inline-flex',
                alignItems: 'flex-start',
                gap: 'var(--space-4)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.05,
                color: 'var(--color-text-on-dark)',
                wordBreak: 'break-word',
              }}
            >
              {profile.email}
              <ArrowOutward style={{ fontSize: 28, color: 'var(--color-accent)', flexShrink: 0 }} />
            </a>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 'var(--space-6)',
                marginTop: 'var(--space-7)',
              }}
            >
              <a href="/#contact" className="btn btn--primary">
                Start a conversation
              </a>
              <span
                className="mono-label"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  color: 'var(--color-text-on-dark-muted)',
                }}
              >
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

        {/* Oversized wordmark */}
        <div
          aria-hidden="true"
          className="display"
          style={{
            marginTop: 'clamp(32px, 6vw, 72px)',
            fontSize: 'clamp(4rem, 21vw, 17rem)',
            letterSpacing: '-0.05em',
            lineHeight: 0.85,
            textTransform: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ color: 'var(--color-accent)' }}>N</span>
          <span>enavath Suresh</span>
        </div>

        {/* Meta strip */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            paddingTop: 'var(--space-6)',
            marginTop: 'var(--space-6)',
            borderTop: '1px solid var(--color-border-on-dark)',
          }}
        >
          <span className="mono-label mono-label--on-dark">{profile.location}</span>
          <span className="mono-label mono-label--on-dark">
            © {year} · built with React, MUI &amp; Framer Motion
          </span>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
        }
        .footer-cols {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--space-6);
        }
        .footer-email { font-size: clamp(1.6rem, 5.2vw, 3.75rem); }
        .footer-link {
          font-size: var(--text-base);
          color: var(--color-text-on-dark);
          transition: color var(--duration-normal) var(--ease-out);
        }
        .footer-link:hover { color: var(--color-accent); }

        @media (min-width: 900px) {
          .footer-grid { grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr); }
        }
        @media (max-width: 479px) {
          .footer-cols { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
