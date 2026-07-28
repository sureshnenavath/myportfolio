import React, { useState } from 'react';
import { GitHub, LinkedIn, MailOutline, Phone, Send } from '@mui/icons-material';
import Reveal from '../Reveal';
import SplitText from '../SplitText';
import { profile } from '../../data/content';

/* Contact — posts to the existing Netlify function at
   netlify/functions/sendEmail.js. States: idle, sending, sent, error. */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldStyle = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--color-border-strong)',
  background: 'var(--color-surface)',
  font: 'inherit',
  color: 'var(--color-ink)',
  transition: 'border-color var(--duration-normal) var(--ease-out)',
};

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: MailOutline },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, Icon: Phone },
  { label: 'GitHub', value: 'sureshnenavath', href: profile.github, Icon: GitHub, external: true },
  { label: 'LinkedIn', value: 'nenavath-suresh', href: profile.linkedin, Icon: LinkedIn, external: true },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errors, setErrors] = useState({});

  const change = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((x) => ({ ...x, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Tell me who you are.';
    if (!EMAIL_RE.test(form.email)) next.email = 'A reachable email, please.';
    if (form.message.trim().length < 10) next.message = 'A little more detail helps.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    if (!validate()) return;

    setStatus('sending');
    try {
      const res = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('sending email failed', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section">
      <Reveal style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
        <p className="script-accent">let&apos;s build something</p>
      </Reveal>

      <SplitText
        as="h2"
        text="Get in touch"
        className="display"
        style={{
          display: 'block',
          textAlign: 'center',
          fontSize: 'clamp(2.75rem, 8vw, 6.5rem)',
          marginBottom: 'var(--space-8)',
        }}
      />

      <div className="contact-grid">
        <Reveal className="card reveal--left">
          <p className="mono-label" style={{ marginBottom: 'var(--space-6)' }}>
            MESSAGE.FORM
          </p>

          <form onSubmit={submit} noValidate style={{ display: 'grid', gap: 'var(--space-5)' }}>
            <div>
              <label htmlFor="name" className="mono-label" style={{ display: 'block', marginBottom: 'var(--space-3)' }}>
                YOUR NAME
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={change}
                required
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                style={{
                  ...fieldStyle,
                  borderColor: errors.name ? 'var(--color-accent)' : 'var(--color-border-strong)',
                }}
              />
              {errors.name && (
                <p id="name-error" className="mono-label mono-label--accent" style={{ marginTop: 'var(--space-3)' }}>
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mono-label" style={{ display: 'block', marginBottom: 'var(--space-3)' }}>
                EMAIL
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={change}
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                style={{
                  ...fieldStyle,
                  borderColor: errors.email ? 'var(--color-accent)' : 'var(--color-border-strong)',
                }}
              />
              {errors.email && (
                <p id="email-error" className="mono-label mono-label--accent" style={{ marginTop: 'var(--space-3)' }}>
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mono-label" style={{ display: 'block', marginBottom: 'var(--space-3)' }}>
                WHAT ARE YOU BUILDING?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={change}
                required
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                style={{
                  ...fieldStyle,
                  resize: 'vertical',
                  borderColor: errors.message ? 'var(--color-accent)' : 'var(--color-border-strong)',
                }}
              />
              {errors.message && (
                <p id="message-error" className="mono-label mono-label--accent" style={{ marginTop: 'var(--space-3)' }}>
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
              <Send style={{ fontSize: 18 }} />
            </button>

            <p
              role="status"
              aria-live="polite"
              className="mono-label"
              style={{
                minHeight: '1.4em',
                color:
                  status === 'error'
                    ? 'var(--color-accent)'
                    : status === 'sent'
                      ? 'var(--color-live)'
                      : 'var(--color-text-tertiary)',
              }}
            >
              {status === 'sent' && 'MESSAGE SENT — I usually reply within a day.'}
              {status === 'error' && 'SENDING FAILED — email me directly instead.'}
            </p>
          </form>
        </Reveal>

        <Reveal delay={0.14} className="card card--dark on-dark reveal--right" style={{ alignContent: 'start' }}>
          <p className="mono-label mono-label--on-dark" style={{ marginBottom: 'var(--space-6)' }}>
            DIRECT CHANNELS
          </p>

          <div style={{ display: 'grid', gap: 'var(--space-5)' }}>
            {channels.map(({ label, value, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="channel"
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 42,
                    height: 42,
                    flexShrink: 0,
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border-on-dark)',
                  }}
                >
                  <Icon style={{ fontSize: 20 }} />
                </span>
                <span style={{ minWidth: 0 }}>
                  <span
                    className="mono-label mono-label--on-dark"
                    style={{ display: 'block' }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      display: 'block',
                      fontWeight: 600,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <p
            style={{
              marginTop: 'var(--space-7)',
              paddingTop: 'var(--space-6)',
              borderTop: '1px solid var(--color-border-on-dark)',
              color: 'var(--color-text-on-dark-muted)',
            }}
          >
            Based in {profile.location}. {profile.availabilityLabel} — full-time Software Engineer /
            Full-Stack Developer roles as well as freelance and contract engagements.
          </p>
        </Reveal>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }
        .channel {
          display: flex;
          align-items: center;
          gap: var(--space-5);
          color: var(--color-text-on-dark);
          transition: color var(--duration-normal) var(--ease-out);
        }
        .channel:hover { color: var(--color-accent); }
        @media (min-width: 900px) {
          .contact-grid { grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr); }
        }
      `}</style>
    </section>
  );
};

export default Contact;
