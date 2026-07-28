import React from 'react';
import { FormatQuote } from '@mui/icons-material';
import Reveal from '../Reveal';
import SplitText from '../SplitText';
import CountUp from '../CountUp';
import { profile, metrics, capabilities } from '../../data/content';

/* Bento statement block — white statement card, dark metrics slab,
   capability chip cloud. Follows the reference's "WHAT'S UP" section. */

const About = () => (
  <section id="about" className="section">
    <SplitText
      as="h2"
      text="Who's this"
      className="display"
      style={{
        display: 'block',
        textAlign: 'center',
        fontSize: 'clamp(2.75rem, 8vw, 6.5rem)',
        marginBottom: 'var(--space-8)',
      }}
    />

    <div className="about-grid">
      {/* Statement */}
      <Reveal className="card reveal--left" style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 'var(--space-5)',
          }}
        >
          <FormatQuote
            style={{ fontSize: 56, color: 'var(--color-accent)', transform: 'scaleX(-1)' }}
          />
          <span className="mono-label">STATEMENT.TXT</span>
        </div>

        <h3
          style={{
            fontSize: 'clamp(1.5rem, 3.2vw, 2.4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.12,
            margin: 'var(--space-5) 0 var(--space-6)',
          }}
        >
          I build software that goes live and stays live,{' '}
          <span style={{ color: 'var(--color-accent)' }}>not demos.</span>
        </h3>

        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-lg)' }}>
          {profile.summary}
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-5)',
            marginTop: 'auto',
            paddingTop: 'var(--space-7)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-4)',
              borderTop: '1px solid var(--color-border)',
              paddingTop: 'var(--space-6)',
              width: '100%',
            }}
          >
            <img
              src={profile.avatar}
              alt=""
              width={48}
              height={48}
              loading="lazy"
              style={{
                width: 48,
                height: 48,
                borderRadius: 'var(--radius-pill)',
                objectFit: 'cover',
                flexShrink: 0,
              }}
            />
            <div style={{ minWidth: 0 }}>
              <p style={{ fontWeight: 700, lineHeight: 1.2 }}>{profile.name}</p>
              <p className="mono-label" style={{ fontSize: 'var(--text-xs)' }}>
                {profile.role} · {profile.location}
              </p>
            </div>
            <span
              className="mono-label"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                marginLeft: 'auto',
                color: 'var(--color-live)',
                whiteSpace: 'nowrap',
              }}
            >
              <span className="dot" />
              AVAILABLE
            </span>
          </div>
        </div>
      </Reveal>

      {/* Right column */}
      <div style={{ display: 'grid', gap: 'var(--space-6)', alignContent: 'start' }}>
        <Reveal delay={0.12} className="card card--dark on-dark reveal--right">
          <p
            className="mono-label mono-label--on-dark"
            style={{ textAlign: 'right', marginBottom: 'var(--space-6)' }}
          >
            METRICS
          </p>
          {metrics.map((m, i) => (
            <div
              key={m.label}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: 'var(--space-5)',
                padding: 'var(--space-5) 0',
                borderTop: i === 0 ? 'none' : '1px solid var(--color-border-on-dark)',
              }}
            >
              <span style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
                <CountUp value={m.value} />
                <span style={{ color: 'var(--color-accent)' }}>{m.suffix}</span>
              </span>
              <span
                className="mono-label mono-label--on-dark"
                style={{ textAlign: 'right', maxWidth: '16ch' }}
              >
                {m.label}
              </span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.26} className="card reveal--right">
          <p
            className="mono-label"
            style={{ textAlign: 'right', marginBottom: 'var(--space-6)' }}
          >
            CORE STACK
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
            {capabilities.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </div>

    <style>{`
      .about-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-6);
      }
      @media (min-width: 960px) {
        .about-grid { grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr); }
      }
    `}</style>
  </section>
);

export default About;
