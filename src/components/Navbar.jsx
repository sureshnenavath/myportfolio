import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, Person, Work, Code, School, EmojiEvents, Email,
  Brightness4, Brightness7, Menu as MenuIcon, Close as CloseIcon,
} from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { name: 'Home',         path: '/',             icon: Home },
  { name: 'About',        path: '/about',        icon: Person },
  { name: 'Experience',   path: '/experience',   icon: Work },
  { name: 'Projects',     path: '/projects',     icon: Code },
  { name: 'Education',    path: '/education',    icon: School },
  { name: 'Achievements', path: '/achievements', icon: EmojiEvents },
  { name: 'Contact',      path: '/contact',      icon: Email },
];

const Navbar = () => {
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close drawer on navigation
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  // Shrink bar slightly on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dark = isDarkMode;

  return (
    <>
      {/* ═══ TOP BAR ═══ */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1200,
          display: 'flex', justifyContent: 'center',
          padding: scrolled ? '8px 16px' : '14px 16px',
          transition: 'padding 0.3s',
        }}
      >
        <div style={{
          display: 'flex', alignItems: 'center', gap: 4,
          padding: '6px 10px', borderRadius: 999,
          background: dark ? 'rgba(15,23,42,0.8)' : 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        }}>

          {/* ── Desktop: full text + icon pills (≥1024px) ── */}
          <nav className="ns-desktop">
            {navItems.map(({ name, path, icon: Icon }) => {
              const active = location.pathname === path;
              return (
                <motion.div key={name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to={path} style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '7px 14px', borderRadius: 999, textDecoration: 'none',
                    fontWeight: 500, fontSize: '0.875rem', whiteSpace: 'nowrap',
                    transition: 'all 0.2s',
                    background: active ? 'linear-gradient(135deg,#6366f1,#8b5cf6)' : 'transparent',
                    color: active ? '#fff' : (dark ? 'rgba(255,255,255,0.7)' : 'rgba(30,30,50,0.75)'),
                  }}>
                    <Icon style={{ fontSize: 17 }} />
                    {name}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* ── Tablet: icon-only circles (640px–1023px) ── */}
          <nav className="ns-tablet">
            {navItems.map(({ name, path, icon: Icon }) => {
              const active = location.pathname === path;
              return (
                <motion.div key={name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} title={name}>
                  <Link to={path} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 38, height: 38, borderRadius: '50%', textDecoration: 'none',
                    transition: 'all 0.2s',
                    background: active ? 'linear-gradient(135deg,#6366f1,#8b5cf6)' : 'transparent',
                    color: active ? '#fff' : (dark ? 'rgba(255,255,255,0.65)' : 'rgba(30,30,50,0.65)'),
                  }}>
                    <Icon style={{ fontSize: 19 }} />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* ── Mobile: burger button (<640px) ── */}
          <button
            className="ns-burger"
            onClick={() => setMobileOpen(o => !o)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: dark ? 'rgba(255,255,255,0.7)' : 'rgba(30,30,50,0.7)',
              padding: '6px 8px', borderRadius: 8, lineHeight: 0,
            }}
          >
            {mobileOpen ? <CloseIcon style={{ fontSize: 22 }} /> : <MenuIcon style={{ fontSize: 22 }} />}
          </button>

          {/* divider */}
          <div style={{
            width: 1, height: 22, flexShrink: 0, margin: '0 4px',
            background: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
          }} />

          {/* Theme toggle */}
          <motion.button
            whileHover={{ scale: 1.15, rotate: 180 }} whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            title={dark ? 'Light mode' : 'Dark mode'}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 34, height: 34, flexShrink: 0, borderRadius: '50%',
              border: 'none', cursor: 'pointer', transition: 'background 0.2s',
              background: dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.05)',
              color: dark ? 'rgba(255,255,255,0.7)' : 'rgba(30,30,50,0.7)',
            }}
          >
            {dark ? <Brightness7 style={{ fontSize: 18 }} /> : <Brightness4 style={{ fontSize: 18 }} />}
          </motion.button>

        </div>
      </motion.header>

      {/* ═══ MOBILE DRAWER ═══ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 1100,
                background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)',
              }}
            />

            {/* Panel */}
            <motion.div
              key="drawer"
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                position: 'fixed', top: 0, left: 0, bottom: 0, width: 260,
                zIndex: 1300, display: 'flex', flexDirection: 'column',
                background: dark ? 'rgba(15,23,42,0.97)' : 'rgba(255,255,255,0.97)',
                backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                borderRight: `1px solid ${dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                padding: '24px 16px',
              }}
            >
              {/* Drawer header */}
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', marginBottom: 32, paddingLeft: 8,
              }}>
                <span style={{
                  fontWeight: 700, fontSize: '1.1rem',
                  background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>Navigation</span>
                <button onClick={() => setMobileOpen(false)} style={{
                  background: 'none', border: 'none', cursor: 'pointer', lineHeight: 0, padding: 4,
                  color: dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)',
                }}>
                  <CloseIcon style={{ fontSize: 20 }} />
                </button>
              </div>

              {/* Nav links */}
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {navItems.map(({ name, path, icon: Icon }, i) => {
                  const active = location.pathname === path;
                  return (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link to={path} style={{
                        display: 'flex', alignItems: 'center', gap: 14,
                        padding: '12px 16px', borderRadius: 12, textDecoration: 'none',
                        fontWeight: active ? 600 : 400, fontSize: '0.95rem', transition: 'all 0.2s',
                        background: active
                          ? 'linear-gradient(135deg,rgba(99,102,241,0.15),rgba(139,92,246,0.15))'
                          : 'transparent',
                        color: active ? '#6366f1' : (dark ? 'rgba(255,255,255,0.7)' : 'rgba(30,30,50,0.75)'),
                        borderLeft: active ? '3px solid #6366f1' : '3px solid transparent',
                      }}>
                        <Icon style={{ fontSize: 20 }} />
                        {name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Theme toggle at bottom */}
              <div style={{ marginTop: 'auto', paddingLeft: 8 }}>
                <button onClick={toggleTheme} style={{
                  display: 'flex', alignItems: 'center', gap: 10, width: '100%',
                  background: 'none', cursor: 'pointer', fontSize: '0.875rem',
                  border: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                  borderRadius: 10, padding: '10px 16px',
                  color: dark ? 'rgba(255,255,255,0.6)' : 'rgba(30,30,50,0.6)',
                }}>
                  {dark
                    ? <><Brightness7 style={{ fontSize: 18 }} /> Switch to Light</>
                    : <><Brightness4 style={{ fontSize: 18 }} /> Switch to Dark</>}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ═══ RESPONSIVE CSS ═══ */}
      <style>{`
        .ns-desktop, .ns-tablet, .ns-burger { display: none; }

        /* Mobile < 640px → burger */
        @media (max-width: 639px) {
          .ns-burger { display: flex !important; }
        }

        /* Tablet 640–1023px → icon circles */
        @media (min-width: 640px) and (max-width: 1023px) {
          .ns-tablet { display: flex !important; align-items: center; gap: 2px; }
        }

        /* Desktop ≥ 1024px → full pills */
        @media (min-width: 1024px) {
          .ns-desktop { display: flex !important; align-items: center; gap: 2px; }
        }
      `}</style>
    </>
  );
};

export default Navbar;