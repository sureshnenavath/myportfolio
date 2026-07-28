import React, { useEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Background from './components/Background';
import useAnchorScroll from './hooks/useAnchorScroll';
import { scrollToHash } from './utils/smoothScroll';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';

/* Scroll behaviour on route change only.
   A same-page anchor click is left entirely to the browser: it already scrolls
   smoothly and respects scroll-padding-top. Running scrollIntoView here as well
   meant two scroll animations fighting each other, which cancelled out and read
   as an instant jump. */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  const prevPath = useRef(pathname);

  useEffect(() => {
    const changedRoute = prevPath.current !== pathname;
    prevPath.current = pathname;

    if (!changedRoute) return undefined; // same page — the browser has it

    if (hash) {
      // Wait a frame so the target section exists after the route swap.
      const id = window.requestAnimationFrame(() => scrollToHash(hash));
      return () => window.cancelAnimationFrame(id);
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
    return undefined;
  }, [pathname, hash]);

  return null;
};

const pageTransition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] };

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={pageTransition}
            >
              <Projects />
            </motion.div>
          }
        />

        {/* Legacy routes now live as sections on the home scroll */}
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/experience" element={<Navigate to="/#work" replace />} />
        <Route path="/education" element={<Navigate to="/#education" replace />} />
        <Route path="/achievements" element={<Navigate to="/#education" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const AppShell = () => {
  useAnchorScroll();
  return null;
};

const App = () => (
  <Router>
    <Background />
    <ScrollManager />
    <AppShell />
    <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
