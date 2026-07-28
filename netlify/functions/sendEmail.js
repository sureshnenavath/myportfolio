import nodemailer from 'nodemailer';

/* Contact form mailer.
   ESM, not CommonJS: package.json sets "type": "module", so a `require()` here
   threw "require is not defined" at module load. The handler never ran, so the
   catch block never ran either — Netlify returned no response at all and the
   CDN surfaced it as a 502 rather than a useful error. */

const json = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

const REQUIRED = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'RECIPIENTS'];

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' });
  }

  const missing = REQUIRED.filter((key) => !process.env[key]);
  if (missing.length) {
    // Names only — never the values.
    console.error('sendEmail: missing env vars', missing.join(', '));
    return json(500, { error: 'Mail is not configured' });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return json(400, { error: 'Invalid JSON body' });
  }

  const name = String(payload.name || '').trim();
  const email = String(payload.email || '').trim();
  const message = String(payload.message || '').trim();

  if (!name || !email || !message) {
    return json(400, { error: 'name, email and message are all required' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: 'That email address is not valid' });
  }

  // Port must be a number, and 465 is implicit TLS. Passing the raw string with
  // secure:false meant a 465 config hung until the function timed out.
  const port = Number(process.env.SMTP_PORT) || 587;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    // Netlify kills the function at 10s; fail before that so the caller gets a
    // real error instead of a gateway timeout.
    connectionTimeout: 7000,
    greetingTimeout: 5000,
    socketTimeout: 7000,
  });

  const escapeHtml = (str) =>
    str.replace(/[&<>"']/g, (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );

  try {
    await transporter.sendMail({
      // The From address must stay on the authenticated domain or the provider
      // rejects it; the visitor's address goes in Reply-To so a reply reaches them.
      from: `"Portfolio contact" <${process.env.SMTP_USER}>`,
      replyTo: `"${name}" <${email}>`,
      to: process.env.RECIPIENTS,
      subject: `Portfolio — new message from ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
      html: `<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
             <p>From: ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>`,
    });

    return json(200, { success: true });
  } catch (err) {
    console.error('sendEmail failed:', err.message);
    return json(502, { error: 'Could not send the message' });
  }
};
