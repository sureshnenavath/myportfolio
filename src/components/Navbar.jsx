import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MailOutline,
  Menu as MenuIcon,
  Close as CloseIcon,
  ArrowOutward,
} from '@mui/icons-material';
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
    // 'contact' is not a tab, but it must be observed — otherwise the last
    // observed section (Education) stayed highlighted once you scrolled past it.
    const ids = [...navItems.map((n) => n.href.slice(1)), 'contact'];
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

  /* The active item gets a filled pill, not just orange text — the dark
     "Contact" chip beside it is a CTA that is always dark, and colour alone
     made that chip read as the selected tab. */
  const linkStyle = (active) => ({
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 16px',
    borderRadius: 'var(--radius-pill)',
    fontSize: 'var(--text-base)',
    fontWeight: active ? 700 : 500,
    whiteSpace: 'nowrap',
    color: active ? 'var(--color-accent)' : 'var(--color-ink)',
    background: active ? 'var(--color-accent-soft)' : 'transparent',
    transition:
      'color var(--duration-normal) var(--ease-out), background var(--duration-normal) var(--ease-out)',
  });

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="nav-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-5)',
          padding: 'var(--space-6) var(--shell-pad)',
          pointerEvents: 'none',
        }}
      >
        {/* Left — availability status */}
        <a
          href={resolve('#contact')}
          className="pill glass nav-side"
          style={{ pointerEvents: 'auto', boxShadow: 'none' }}
        >
          <span className="dot" />
          {profile.availabilityLabel}
        </a>

        {/* Centre — nav pill */}
        <nav
          aria-label="Primary"
          className="nav-pill glass"
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            padding: 6,
            borderRadius: 'var(--radius-pill)',
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

          {/* Divider — makes it plain that Contact is an action, not a tab */}
          <span
            aria-hidden="true"
            className="nav-divider"
            style={{
              width: 1,
              height: 22,
              margin: '0 6px',
              flexShrink: 0,
              background: 'var(--color-border)',
            }}
          />

          {/* Outlined, never filled: the filled pill is reserved for the
              active section, so a solid Contact chip read as "selected". */}
          <a
            href={resolve('#contact')}
            className={`nav-cta ${isActive('#contact') ? 'is-active' : ''}`}
            aria-current={isActive('#contact') ? 'true' : undefined}
          >
            Contact
            <ArrowOutward style={{ fontSize: 16 }} />
          </a>
        </nav>

        {/* Right — email */}
        <a
          href={`mailto:${profile.publicEmail}`}
          className="pill glass nav-side"
          style={{
            pointerEvents: 'auto',
            boxShadow: 'none',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.02em',
          }}
        >
          <MailOutline style={{ fontSize: 17 }} />
          {profile.publicEmail}
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
                href={`mailto:${profile.publicEmail}`}
                className="mono-label mono-label--on-dark"
                style={{ display: 'inline-block', marginTop: 'var(--space-7)' }}
              >
                {profile.publicEmail}
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .nav-links { display: none; align-items: center; gap: 2px; }
        .nav-burger { display: inline-flex; }
        .nav-divider { display: none; }

        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 20px;
          border: 1px solid var(--color-border-strong);
          border-radius: var(--radius-pill);
          font-size: var(--text-base);
          font-weight: 700;
          white-space: nowrap;
          color: var(--color-ink);
          transition: border-color var(--duration-normal) var(--ease-out),
                      color var(--duration-normal) var(--ease-out);
        }
        .nav-cta:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }
        /* Same treatment the tabs get, so Contact reads as current too */
        .nav-cta.is-active {
          background: var(--color-accent-soft);
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        /* Side pills only exist on wide screens; without them the bar must
           centre its single pill instead of pushing it to the left edge. */
        .nav-header { justify-content: center; }

        @media (min-width: 1100px) {
          .nav-links { display: flex; }
          .nav-burger { display: none; }
          .nav-divider { display: block; }
        }
        @media (max-width: 1279px) {
          .nav-side { display: none; }
        }
        @media (min-width: 1280px) {
          .nav-header { justify-content: space-between; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
