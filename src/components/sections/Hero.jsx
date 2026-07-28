import React from 'react';
import { motion } from 'framer-motion';
import { ArrowForward, ArrowOutward } from '@mui/icons-material';
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
          <p className="pill hero-badge">
            <span className="dot" />
            <span>
              3 products live in production ·{' '}
              <strong style={{ color: 'var(--color-accent)' }}>React + Django</strong>
            </span>
          </p>
        </motion.div>

        {/* Scale and density, no fill trickery. Sizing lives in .hero-headline. */}
        <SplitText
          as="h1"
          text={`${profile.headline[0]} ${profile.headline[1]}`}
          className="display hero-headline"
          animate
          delay={0.25}
          stagger={0.08}
          suffix="."
          suffixClass="hero-stop"
          style={{ margin: 'var(--space-7) 0 var(--space-6)' }}
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
          className="hero-lede"
        >
          {profile.lede}
        </motion.p>

        <motion.div
          variants={rise}
          initial="hidden"
          animate="show"
          custom={7}
          className="hero-actions"
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
