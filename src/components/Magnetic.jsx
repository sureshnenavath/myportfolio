import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/* Magnetic hover: the element leans toward the cursor and springs back.
   Disabled for coarse pointers and reduced-motion users. */

const Magnetic = ({ children, strength = 0.35, className, style }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  const enabled = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onMove = (e) => {
    if (!ref.current || !enabled()) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ ...style, x: sx, y: sy, display: 'inline-flex' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

Magnetic.propTypes = {
  children: PropTypes.node,
  strength: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Magnetic;
