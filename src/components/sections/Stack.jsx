import React from 'react';
import Reveal from '../Reveal';
import SplitText from '../SplitText';
import Marquee from '../Marquee';
import { skillGroups } from '../../data/content';

/* Technical skills, grouped. Mono category label + chip cloud per card,
   matching the reference's "DELIVERABLES" chip treatment, over a ticker
   of the whole stack. */

const marqueeItems = Array.from(new Set(skillGroups.flatMap((g) => g.items)));

const Stack = () => (
  <section id="stack" className="section">
    <Reveal style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
      <p className="script-accent" style={{ marginBottom: 'var(--space-3)' }}>
        what I build with
      </p>
    </Reveal>

    <SplitText
      as="h2"
      text="The stack"
      className="display"
      style={{
        display: 'block',
        textAlign: 'center',
        fontSize: 'clamp(2.75rem, 8vw, 6.5rem)',
        marginBottom: 'var(--space-8)',
      }}
    />

    <Reveal style={{ marginBottom: 'var(--space-8)' }}>
      <Marquee items={marqueeItems} speed={46} />
    </Reveal>

    <div className="stack-grid">
      {skillGroups.map((group, i) => (
        <Reveal
          key={group.label}
          delay={0.1 * i}
          className="card lift reveal--far"
          style={{ padding: 'clamp(20px, 2.5vw, 32px)' }}
        >
          <p className="mono-label" style={{ marginBottom: 'var(--space-5)' }}>
            {group.label}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
            {group.items.map((item) => (
              <span key={item} className="chip" style={{ padding: '7px 14px' }}>
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      ))}
    </div>

    <style>{`
      .stack-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-6);
      }
      @media (min-width: 700px) {
        .stack-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }
      @media (min-width: 1100px) {
        .stack-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      }
    `}</style>
  </section>
);

export default Stack;
