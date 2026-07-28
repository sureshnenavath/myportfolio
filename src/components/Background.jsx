import React from 'react';

/* Sky backdrop — the reference's atmosphere layer, painted once.
   Deliberately static: a fixed, full-viewport element that animates (drifting
   clouds, scroll parallax) forces a full-page repaint on every frame wherever
   the browser has no GPU compositing — WSL, remote desktops, low-end laptops.
   That repaint is what made the cards blink and the whole page stutter.
   The clouds are baked into one background-image, so this layer costs a single
   paint for the life of the page. */

const cloud = (x, y, w, h, a) =>
  `radial-gradient(${w}px ${h}px at ${x}% ${y}%, rgba(255,255,255,${a}) 0%, rgba(255,255,255,${a * 0.45}) 42%, rgba(255,255,255,0) 72%)`;

const SKY = [
  cloud(12, 8, 260, 120, 0.85),
  cloud(24, 11, 180, 80, 0.7),
  cloud(78, 6, 300, 130, 0.75),
  cloud(88, 10, 200, 90, 0.6),
  cloud(46, 22, 340, 140, 0.55),
  cloud(8, 38, 280, 120, 0.5),
  cloud(70, 44, 240, 110, 0.45),
  cloud(30, 62, 320, 130, 0.4),
  cloud(86, 70, 260, 110, 0.38),
  cloud(52, 86, 300, 120, 0.3),
  'radial-gradient(120% 70% at 50% 35%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 62%)',
  'linear-gradient(180deg, var(--sky-top) 0%, var(--sky-mid) 46%, var(--sky-bottom) 100%)',
].join(',');

const Background = () => (
  <div
    aria-hidden="true"
    style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
      backgroundImage: SKY,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    }}
  />
);

export default Background;
