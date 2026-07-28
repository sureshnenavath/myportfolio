import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOutline, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { navItems, profile } from '../data/content';

/* Floating pill navigation, after the reference:
   left status pill · centre nav pill with a dark Contact chip · right email pill.
   Below 1100px the centre pill collapses to a burger + slide-in drawer. */

const Navbar = () => {
  const location = useLocation();
  const onHome = location.pathname === '/';
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#top');

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close on Escape — keyboard parity with the backdrop click.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Track which section is in view so the nav reflects position.
  useEffect(() => {
    if (!onHome) return undefined;
    const ids = navItems.map((n) => n.href.slice(1));
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHash(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [onHome, location.pathname]);

  // On Home a hash link is same-page; elsewhere it has to route back first.
  const resolve = useCallback((href) => (onHome ? href : `/${href}`), [onHome]);

  const isActive = (href) => onHome && activeHash === href;

  const linkStyle = (active) => ({
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 16px',
    borderRadius: 'var(--radius-pill)',
    fontSize: 'var(--text-base)',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    color: active ? 'var(--color-accent)' : 'var(--color-ink)',
    transition: 'color var(--duration-normal) var(--ease-out)',
  });

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-5)',
          padding: 'calc(var(--space-6) + var(--ruler-h)) var(--shell-pad) var(--space-6)',
          pointerEvents: 'none',
        }}
      >
        {/* Left — availability status */}
        <a
          href={resolve('#contact')}
          className="pill nav-side"
          style={{ pointerEvents: 'auto' }}
        >
          <span className="dot" />
          {profile.availabilityLabel}
        </a>

        {/* Centre — nav pill */}
        <nav
          aria-label="Primary"
          className="nav-pill"
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            padding: 6,
            borderRadius: 'var(--radius-pill)',
            background: 'var(--color-surface)',
            boxShadow: 'var(--shadow-3)',
          }}
        >
          <div className="nav-links">
            {navItems.map((item) =>
              onHome ? (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={isActive(item.href) ? 'true' : undefined}
                  style={linkStyle(isActive(item.href))}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={resolve(item.href)}
                  style={linkStyle(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <button
            type="button"
            className="nav-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-ink)',
              padding: '8px 10px',
              lineHeight: 0,
              borderRadius: 'var(--radius-pill)',
            }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>

          <a
            href={resolve('#contact')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '11px 22px',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--color-surface-dark)',
              color: 'var(--color-text-on-dark)',
              fontWeight: 700,
              fontSize: 'var(--text-base)',
              transition: 'background var(--duration-normal) var(--ease-out)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-surface-dark)';
            }}
          >
            Contact
          </a>
        </nav>

        {/* Right — email */}
        <a
          href={`mailto:${profile.email}`}
          className="pill nav-side"
          style={{ pointerEvents: 'auto', fontFamily: 'var(--font-mono)', letterSpacing: '0.02em' }}
        >
          <MailOutline style={{ fontSize: 17 }} />
          {profile.email}
        </a>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 1250,
                background: 'rgba(20, 32, 43, 0.45)',
                backdropFilter: 'blur(4px)',
              }}
            />
            <motion.div
              key="drawer"
              className="on-dark"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1300,
                background: 'var(--color-surface-dark)',
                color: 'var(--color-text-on-dark)',
                borderRadius: '0 0 var(--radius-2xl) var(--radius-2xl)',
                padding: 'var(--space-8) var(--shell-pad) var(--space-7)',
                boxShadow: 'var(--shadow-1)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 'var(--space-7)',
                }}
              >
                <span className="mono-label mono-label--on-dark">MENU</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--color-text-on-dark)',
                    lineHeight: 0,
                  }}
                >
                  <CloseIcon />
                </button>
              </div>

              <nav style={{ display: 'flex', flexDirection: 'column' }}>
                {[...navItems, { label: 'Contact', href: '#contact' }].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <a
                      href={resolve(item.href)}
                      onClick={() => setOpen(false)}
                      className="display"
                      style={{
                        display: 'block',
                        padding: '10px 0',
                        fontSize: 'clamp(1.75rem, 8vw, 2.5rem)',
                        color: 'var(--color-text-on-dark)',
                      }}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </nav>

              <a
                href={`mailto:${profile.email}`}
                className="mono-label mono-label--on-dark"
                style={{ display: 'inline-block', marginTop: 'var(--space-7)' }}
              >
                {profile.email}
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .nav-links { display: none; align-items: center; gap: 2px; }
        .nav-burger { display: inline-flex; }

        @media (min-width: 1100px) {
          .nav-links { display: flex; }
          .nav-burger { display: none; }
        }
        @media (max-width: 1279px) {
          .nav-side { display: none; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
