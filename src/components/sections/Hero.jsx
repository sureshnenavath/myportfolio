import React from 'react';
import { motion } from 'framer-motion';
import { ArrowForward, ArrowOutward, KeyboardArrowDown } from '@mui/icons-material';
import SplitText from '../SplitText';
import Magnetic from '../Magnetic';
import { profile } from '../../data/content';

/* Hero — badge, masked word-by-word headline, lede, magnetic CTAs.
   The whole block drifts up and fades as you scroll past it. */

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* No scroll-linked parallax here. Re-transforming a block of display type on
   every scroll frame is the most expensive thing this page can do without GPU
   compositing. The entrance choreography below is one-shot, so it costs
   nothing once it has played. */

const Hero = () => {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'calc(var(--nav-clearance) + var(--space-8)) var(--shell-pad) var(--space-9)',
        maxWidth: 'var(--shell-max)',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.div variants={rise} initial="hidden" animate="show" custom={0}>
          <p
            className="pill"
            style={{
              background: 'rgba(255,255,255,0.92)',
              fontSize: 'var(--text-base)',
            }}
          >
            <span className="dot" />
            3 products live in production ·{' '}
            <strong style={{ color: 'var(--color-accent)' }}>React + Django</strong>
          </p>
        </motion.div>

        <SplitText
          as="h1"
          text={`${profile.headline[0]} ${profile.headline[1]}`}
          className="display"
          animate
          delay={0.25}
          stagger={0.08}
          accentFrom={1}
          style={{
            margin: 'var(--space-7) 0 var(--space-6)',
            fontSize: 'var(--text-display)',
            color: 'var(--color-ink)',
            maxWidth: '15ch',
          }}
        />

        <motion.p
          variants={rise}
          initial="hidden"
          animate="show"
          custom={5}
          className="mono-label mono-label--accent"
          style={{ marginBottom: 'var(--space-5)' }}
        >
          NOT A TUTORIAL PORTFOLIO ✦
        </motion.p>

        <motion.p
          variants={rise}
          initial="hidden"
          animate="show"
          custom={6}
          style={{
            maxWidth: '54ch',
            fontSize: 'clamp(1.05rem, 2vw, 1.4rem)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-8)',
          }}
        >
          {profile.lede}
        </motion.p>

        <motion.div
          variants={rise}
          initial="hidden"
          animate="show"
          custom={7}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'var(--space-5)',
          }}
        >
          <Magnetic>
            <a href="#work" className="btn btn--primary">
              See the work
              <ArrowForward style={{ fontSize: 19 }} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="btn btn--ghost">
              Start a conversation
              <ArrowOutward style={{ fontSize: 19 }} />
            </a>
          </Magnetic>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: 'var(--space-8)',
          left: '50%',
          x: '-50%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 44,
          height: 44,
          borderRadius: 'var(--radius-pill)',
          background: 'rgba(255,255,255,0.9)',
          color: 'var(--color-ink)',
        }}
      >
        {/* Static: an infinite bob keeps a compositing layer alive for the
            whole session, which is not worth 5px of movement. */}
        <KeyboardArrowDown />
      </motion.a>

      {/* Corner meta — the reference's fixed annotations */}
      <div className="corner-meta corner-meta--bl">
        {profile.location}
        <br />
        {profile.role}
      </div>
      <div className="corner-meta corner-meta--br">
        {profile.availabilityLabel}
        <br />
        {profile.site}
      </div>
    </section>
  );
};

export default Hero;
