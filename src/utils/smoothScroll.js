/* JS-driven scroll animation.
   Chromium degrades every native smooth scroll — CSS `scroll-behavior: smooth`,
   `scrollIntoView({behavior:'smooth'})` and `scrollTo({behavior:'smooth'})` —
   to an instant jump whenever prefers-reduced-motion is `reduce`, and some
   environments report `reduce` unconditionally. A requestAnimationFrame tween
   is the only way to get a consistent glide across machines. */

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

let activeFrame = 0;

/** Pixels to keep clear at the top for the fixed pill navbar. */
export const navOffset = () => {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--nav-clearance');
  const parsed = parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : 108;
};

export const scrollToY = (targetY, duration) => {
  const startY = window.scrollY;
  const maxY = document.documentElement.scrollHeight - window.innerHeight;
  const endY = Math.max(0, Math.min(targetY, maxY));
  const distance = endY - startY;

  window.cancelAnimationFrame(activeFrame);

  if (Math.abs(distance) < 2) return;

  // Longer trips take longer, but never drag past ~1s.
  const ms = duration ?? Math.min(1000, Math.max(450, Math.abs(distance) * 0.6));
  let start = 0;

  const step = (now) => {
    if (!start) start = now;
    const t = Math.min((now - start) / ms, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(t));
    if (t < 1) activeFrame = window.requestAnimationFrame(step);
  };

  activeFrame = window.requestAnimationFrame(step);
};

export const scrollToHash = (hash) => {
  if (!hash || hash === '#') {
    scrollToY(0);
    return true;
  }

  let el = null;
  try {
    el = document.querySelector(hash);
  } catch {
    return false; // not a valid selector
  }
  if (!el) return false;

  /* Land on the section's content, not its padded box. Sections carry ~112px
     of top padding for scroll rhythm; without discounting it the heading came
     to rest a third of the way down the screen. Most of the padding is skipped
     and a small gap is left under the navbar. */
  const padTop = parseFloat(getComputedStyle(el).paddingTop) || 0;
  const top =
    el.getBoundingClientRect().top + window.scrollY + padTop - navOffset() - 20;

  scrollToY(top);
  return true;
};

/* A user scrolling by hand must win over an in-flight tween. */
export const cancelScroll = () => window.cancelAnimationFrame(activeFrame);
