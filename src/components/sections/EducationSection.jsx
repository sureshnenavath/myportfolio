import React from 'react';
import { WorkspacePremium } from '@mui/icons-material';
import Reveal from '../Reveal';
import SplitText from '../SplitText';
import { education, certifications } from '../../data/content';

/* Education timeline + certifications. Same card language as the rest,
   with the mono index/meta treatment from the reference. */

const EducationSection = () => (
  <section id="education" className="section">
    <Reveal style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
      <p className="script-accent">the paper trail</p>
    </Reveal>

    <SplitText
      as="h2"
      text="Education"
      className="display"
      style={{
        display: 'block',
        textAlign: 'center',
        fontSize: 'clamp(2.75rem, 8vw, 6.5rem)',
        marginBottom: 'var(--space-8)',
      }}
    />

    <div style={{ display: 'grid', gap: 'var(--space-6)', marginBottom: 'var(--space-9)' }}>
      {education.map((item, i) => (
        <Reveal key={item.id} delay={0.12 * i} className="card lift reveal--left" style={{ padding: 'clamp(20px, 3vw, 36px)' }}>
          <div className="edu-row">
            <img
              src={item.logo}
              alt=""
              width={64}
              height={64}
              loading="lazy"
              style={{
                width: 64,
                height: 64,
                borderRadius: 'var(--radius-md)',
                objectFit: 'contain',
                background: 'var(--color-surface-muted)',
                padding: 6,
                flexShrink: 0,
              }}
            />

            <div style={{ minWidth: 0 }}>
              <h3
                style={{
                  fontSize: 'clamp(1.15rem, 2.4vw, 1.6rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                {item.degree}
              </h3>
              <p style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{item.field}</p>
              <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-2)' }}>
                {item.institution}
              </p>
              <p className="mono-label" style={{ marginTop: 'var(--space-3)' }}>
                {item.location}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--space-3)',
                  marginTop: 'var(--space-5)',
                }}
              >
                {item.skills.map((s) => (
                  <span key={s} className="chip chip--mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <span className="mono-label edu-year">{item.year}</span>
          </div>
        </Reveal>
      ))}
    </div>

    {/* Certifications */}
    <Reveal style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
      <h3 className="display" style={{ fontSize: 'clamp(1.75rem, 5vw, 3.25rem)' }}>
        Certifications
      </h3>
    </Reveal>

    <div className="cert-grid">
      {certifications.map((cert, i) => (
        <Reveal key={cert.id} delay={0.14 * i} className="card card--dark on-dark lift reveal--far">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: 'var(--space-5)',
              marginBottom: 'var(--space-6)',
            }}
          >
            <WorkspacePremium style={{ fontSize: 34, color: 'var(--color-accent)' }} />
            <span className="mono-label mono-label--on-dark" style={{ textAlign: 'right' }}>
              {cert.meta}
            </span>
          </div>

          <h4
            style={{
              fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              marginBottom: 'var(--space-3)',
            }}
          >
            {cert.title}
          </h4>
          <p className="mono-label mono-label--on-dark" style={{ marginBottom: 'var(--space-5)' }}>
            {cert.issuer}
          </p>
          <p style={{ color: 'var(--color-text-on-dark-muted)' }}>{cert.detail}</p>
        </Reveal>
      ))}
    </div>

    <style>{`
      .edu-row {
        display: grid;
        grid-template-columns: auto minmax(0, 1fr);
        gap: var(--space-5);
        align-items: start;
      }
      .edu-year { grid-column: 2; }
      .cert-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-6);
      }
      @media (min-width: 768px) {
        .edu-row { grid-template-columns: auto minmax(0, 1fr) auto; }
        .edu-year { grid-column: auto; align-self: start; }
        .cert-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }
    `}</style>
  </section>
);

export default EducationSection;
