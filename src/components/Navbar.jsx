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
            {/* A real edge-anchored sidebar, on the light surface the rest of
                the page uses — the old version was a dark full-width sheet that
                belonged to a different design. */}
            <motion.aside
              key="drawer"
              className="nav-drawer"
              aria-label="Menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 340, damping: 36 }}
            >
              <div className="nav-drawer__head">
                <span className="mono-label">MENU</span>
                <button
                  type="button"
                  className="nav-drawer__close"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <CloseIcon style={{ fontSize: 19 }} />
                </button>
              </div>

              <nav className="nav-drawer__nav">
                {[...navItems, { label: 'Contact', href: '#contact' }].map((item, i) => {
                  const active = isActive(item.href);
                  return (
                    <motion.a
                      key={item.label}
                      href={resolve(item.href)}
                      onClick={() => setOpen(false)}
                      aria-current={active ? 'true' : undefined}
                      className={`drawer-link ${active ? 'is-active' : ''}`}
                      initial={{ opacity: 0, x: 22 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.06 + 0.04 * i,
                        duration: 0.32,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <span className="drawer-link__index">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="drawer-link__label">{item.label}</span>
                      <ArrowOutward className="drawer-link__arrow" style={{ fontSize: 15 }} />
                    </motion.a>
                  );
                })}
              </nav>

              {/* The status pill and email live in .nav-side, which is hidden
                  below 1280px — this is where they surface on small screens. */}
              <div className="nav-drawer__foot">
                <span className="nav-drawer__status">
                  <span className="dot" />
                  {profile.availabilityLabel}
                </span>
                <a
                  href={`mailto:${profile.publicEmail}`}
                  className="nav-drawer__email"
                >
                  <MailOutline style={{ fontSize: 15 }} />
                  {profile.publicEmail}
                </a>
              </div>
            </motion.aside>
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

        /* ---- Mobile sidebar ---- */
        .nav-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 1300;
          width: min(84vw, 340px);
          display: flex;
          flex-direction: column;
          background: var(--color-surface);
          border-left: 1px solid var(--color-border);
          border-radius: var(--radius-2xl) 0 0 var(--radius-2xl);
          box-shadow: var(--shadow-1);
          padding: var(--space-7) var(--space-6) var(--space-6);
        }

        .nav-drawer__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: var(--space-5);
          border-bottom: 1px solid var(--color-border);
        }

        .nav-drawer__close {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-pill);
          background: var(--color-surface-muted);
          color: var(--color-ink);
          cursor: pointer;
          transition: border-color var(--duration-normal) var(--ease-out),
                      color var(--duration-normal) var(--ease-out);
        }
        .nav-drawer__close:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        /* Scrolls on short screens rather than pushing the footer off. */
        .nav-drawer__nav {
          flex: 1;
          min-height: 0;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: var(--space-5) 0;
        }

        .drawer-link {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          padding: 13px 14px;
          border-radius: var(--radius-md);
          color: var(--color-ink);
          font-size: 1.0625rem;
          font-weight: 600;
          transition: background var(--duration-normal) var(--ease-out),
                      color var(--duration-normal) var(--ease-out);
        }
        .drawer-link__index {
          font-family: var(--font-mono);
          font-size: var(--text-sm);
          letter-spacing: 0.08em;
          color: var(--color-text-tertiary);
          transition: color var(--duration-normal) var(--ease-out);
        }
        .drawer-link__label { flex: 1; }
        .drawer-link__arrow {
          opacity: 0;
          color: var(--color-accent);
          transition: opacity var(--duration-normal) var(--ease-out);
        }

        /* Same filled-pill language the desktop tabs use, so "current section"
           reads identically on both. */
        .drawer-link.is-active {
          background: var(--color-accent-soft);
          color: var(--color-accent);
          font-weight: 700;
        }
        .drawer-link.is-active .drawer-link__index { color: var(--color-accent); }
        .drawer-link.is-active .drawer-link__arrow { opacity: 1; }

        .nav-drawer__foot {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: var(--space-4);
          padding-top: var(--space-5);
          border-top: 1px solid var(--color-border);
        }
        .nav-drawer__status {
          display: inline-flex;
          align-items: center;
          gap: var(--space-3);
          padding: 8px 14px;
          border-radius: var(--radius-pill);
          background: var(--color-surface-muted);
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--color-text-secondary);
        }
        .nav-drawer__email {
          display: inline-flex;
          align-items: center;
          gap: var(--space-3);
          font-family: var(--font-mono);
          font-size: var(--text-sm);
          letter-spacing: 0.02em;
          color: var(--color-text-tertiary);
          overflow-wrap: anywhere;
          transition: color var(--duration-normal) var(--ease-out);
        }
        .nav-drawer__email:hover { color: var(--color-accent); }

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
