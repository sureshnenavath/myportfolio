import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';

// Note: InertiaPlugin is a premium GSAP plugin and may not be available in
// all projects. To keep this component compatible with a standard gsap
// installation, the code below avoids relying on InertiaPlugin and uses
// regular gsap tweens as a fallback for the interactive pushes/shocks.

const throttle = (func, limit) => {
  let lastCall = 0;
  return function (...args) {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};

function hexToRgb(hex) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16)
  };
}

const DotGrid = ({
  // tuned defaults to match screenshot: small, dense, subtle
  dotSize = 5,
  gap = 18,
  baseColor = '#0b0710', // very dark base so dots remain subtle
  activeColor = '#6b47ff',
  proximity = 120,
  speedTrigger = 120,
  shockRadius = 160,
  shockStrength = 4,
  maxSpeed = 5000,
  resistance = 750,
  returnDuration = 1.2,
  opacity = 0.14,
  // ambient highlight (affects dot color even without pointer): 0..1 across width/height
  highlightX = 0.47,
  highlightY = 0.5,
  highlightRadius = 160,
  highlightStrength = 1,
  zIndex = 0,
  className = '',
  style
}) => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0
  });

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  const circlePath = useMemo(() => {
    if (typeof window === 'undefined' || !window.Path2D) return null;

    const p = new Path2D();
    p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
    return p;
  }, [dotSize]);

  // smoothing factor for returning dots to origin (0..1) - higher is snappier
  // lower value => smoother, slower return
  const smoothFactor = 0.06;

  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.scale(dpr, dpr);

    const cols = Math.floor((width + gap) / (dotSize + gap));
    const rows = Math.floor((height + gap) / (dotSize + gap));
    const cell = dotSize + gap;

    const gridW = cell * cols - gap;
    const gridH = cell * rows - gap;

    const extraX = width - gridW;
    const extraY = height - gridH;

    const startX = extraX / 2 + dotSize / 2;
    const startY = extraY / 2 + dotSize / 2;

    const dots = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cx = startX + x * cell;
        const cy = startY + y * cell;
        dots.push({ cx, cy, xOffset: 0, yOffset: 0, _inertiaApplied: false });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  useEffect(() => {
    if (!circlePath) return;

    let rafId;
    const proxSq = proximity * proximity;

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      // get current size in CSS pixels for calculations
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Apply global opacity for the grid so it doesn't overwhelm page text
      ctx.globalAlpha = opacity;

      const { x: px, y: py } = pointerRef.current;

      // compute ambient highlight center in canvas space
      const hx = width * highlightX;
      const hy = height * highlightY;
      for (const dot of dotsRef.current) {
        // apply a small lerp towards 0 on offsets so movement is smooth
        dot.xOffset += (0 - dot.xOffset) * smoothFactor;
        dot.yOffset += (0 - dot.yOffset) * smoothFactor;
        const ox = dot.cx + dot.xOffset;
        const oy = dot.cy + dot.yOffset;
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy;

        // ambient highlight mixing based on distance to highlight center
        const hd = Math.hypot(dot.cx - hx, dot.cy - hy);
        let highlightT = 0;
        if (hd <= highlightRadius) {
          highlightT = (1 - hd / highlightRadius) * highlightStrength;
        }

        // pointer proximity mixing (if cursor nearby)
        let pointerT = 0;
        if (dsq <= proxSq) {
          const dist = Math.sqrt(dsq);
          pointerT = 1 - dist / proximity;
        }

        const tFinal = Math.max(pointerT, highlightT);
        let style = baseColor;
        if (tFinal > 0) {
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * tFinal);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * tFinal);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * tFinal);
          style = `rgb(${r},${g},${b})`;
        }

        ctx.save();
        ctx.translate(ox, oy);
        // very subtle shadow to give depth without halo
        ctx.fillStyle = style;
        ctx.shadowColor = 'rgba(0,0,0,0.06)';
        ctx.shadowBlur = 1;
        ctx.fill(circlePath);
        ctx.restore();
      }

    // draw a soft radial highlight on the left to mimic the sample
    // gentler left-side radial highlight
    const gx = Math.max(0, Math.min(1, 0.18));
    const gy = Math.max(0, Math.min(1, 0.48));
    const rad = Math.max(width, height) * 0.55;
    const grad = ctx.createRadialGradient(width * gx, height * gy, 6, width * gx, height * gy, rad);
    grad.addColorStop(0, 'rgba(107,71,255,0.045)');
    grad.addColorStop(0.5, 'rgba(107,71,255,0.02)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.globalCompositeOperation = 'lighter';
    ctx.globalAlpha = opacity * 0.75;
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;

      rafId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafId);
  }, [proximity, baseColor, activeRgb, baseRgb, circlePath]);

  useEffect(() => {
    buildGrid();
    let ro = null;
    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(buildGrid);
      wrapperRef.current && ro.observe(wrapperRef.current);
    } else {
      window.addEventListener('resize', buildGrid);
    }
    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener('resize', buildGrid);
    };
  }, [buildGrid]);

  useEffect(() => {
    const onMove = e => {
      const now = performance.now();
      const pr = pointerRef.current;
      const dt = pr.lastTime ? now - pr.lastTime : 16;
      const dx = e.clientX - pr.lastX;
      const dy = e.clientY - pr.lastY;
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
      let speed = Math.hypot(vx, vy);
      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }
      pr.lastTime = now;
      pr.lastX = e.clientX;
      pr.lastY = e.clientY;
      pr.vx = vx;
      pr.vy = vy;
      pr.speed = speed;

      const rect = canvasRef.current.getBoundingClientRect();
      pr.x = e.clientX - rect.left;
      pr.y = e.clientY - rect.top;

      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
        if (speed > speedTrigger && dist < proximity && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const pushX = dot.cx - pr.x + vx * 0.005;
          const pushY = dot.cy - pr.y + vy * 0.005;
          // Fallback tween (works without InertiaPlugin): animate to a pushed
          // offset then spring back. Duration and easing approximate inertia.
          gsap.to(dot, {
            xOffset: pushX,
            yOffset: pushY,
            duration: Math.min(0.6, Math.max(0.15, speed / 4000)),
            ease: 'power3.out',
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: 'elastic.out(1,0.75)'
              });
              dot._inertiaApplied = false;
            }
          });
        }
      }
    };

    const onClick = e => {
      const rect = canvasRef.current.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
        if (dist < shockRadius && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const falloff = Math.max(0, 1 - dist / shockRadius);
          const pushX = (dot.cx - cx) * shockStrength * falloff;
          const pushY = (dot.cy - cy) * shockStrength * falloff;
          gsap.to(dot, {
            xOffset: pushX,
            yOffset: pushY,
            duration: Math.min(0.8, Math.max(0.2, shockStrength / 10)),
            ease: 'power3.out',
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: 'elastic.out(1,0.75)'
              });
              dot._inertiaApplied = false;
            }
          });
        }
      }
    };

    const throttledMove = throttle(onMove, 50);
    window.addEventListener('mousemove', throttledMove, { passive: true });
    window.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('mousemove', throttledMove);
      window.removeEventListener('click', onClick);
    };
  }, [maxSpeed, speedTrigger, proximity, resistance, returnDuration, shockRadius, shockStrength]);

  // ensure canvas is absolutely positioned and behind other content
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.position = 'absolute';
      canvas.style.inset = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = String(zIndex);
      // ensure the wrapper doesn't intercept pointer events
      if (wrapperRef.current) wrapperRef.current.style.pointerEvents = 'none';
    }
  }, [zIndex]);

  return (
    <section
      style={{ position: 'absolute', inset: 0, zIndex, width: '100%', height: '100%', ...style }}
      className={className}
      aria-hidden="true"
    >
      <div ref={wrapperRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
        <canvas ref={canvasRef} />
      </div>
    </section>
  );
};

export default DotGrid;
