import React, { useEffect, useRef } from 'react';

const SPACING = 26;
const RADIUS = 150; // how far the cursor's pull reaches, in px
const PUSH = 26; // max displacement of a dot, in px

/**
 * Dot-grid paper that bends away from the cursor and drifts in a slow wave.
 * Near the cursor, neighbouring dots get wired together, so the grid turns into a little network.
 * Colours come from the --ink and --accent CSS variables, so it follows the theme.
 */
export default function DotField({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: -9999, y: -9999 };
    let dots = [];
    let cols = 0;
    let width = 0;
    let height = 0;
    let frame = 0;
    let running = false;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      cols = Math.ceil((width - SPACING / 2) / SPACING);
      for (let y = SPACING / 2; y < height; y += SPACING) {
        for (let x = SPACING / 2; x < width; x += SPACING) {
          dots.push({ x, y, dx: 0, dy: 0, pull: 0 });
        }
      }
    };

    const draw = (time) => {
      const styles = getComputedStyle(document.documentElement);
      const ink = styles.getPropertyValue('--ink').trim() || '#181613';
      const accent = styles.getPropertyValue('--accent').trim() || '#c2461b';
      const t = time / 1000;

      ctx.clearRect(0, 0, width, height);
      for (const dot of dots) {
        const ox = dot.x - pointer.x;
        const oy = dot.y - pointer.y;
        const dist = Math.hypot(ox, oy);
        const pull = dist < RADIUS ? Math.pow(1 - dist / RADIUS, 2) : 0;
        const wave = reduceMotion ? 0 : Math.sin(t * 0.8 + dot.x * 0.012 + dot.y * 0.008) * 1.6;
        const tx = dist > 0 ? (ox / dist) * pull * PUSH : 0;
        const ty = (dist > 0 ? (oy / dist) * pull * PUSH : 0) + wave;
        dot.dx += (tx - dot.dx) * 0.14;
        dot.dy += (ty - dot.dy) * 0.14;
        dot.pull = pull;
      }

      // Edges to the right, lower and diagonal neighbours, only where both ends are near the cursor
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1;
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        if (a.pull < 0.04) continue;
        const col = i % cols;
        const neighbours = [col < cols - 1 ? i + 1 : -1, i + cols, col < cols - 1 ? i + cols + 1 : -1];
        for (const j of neighbours) {
          const b = dots[j];
          if (!b || b.pull < 0.04) continue;
          ctx.globalAlpha = Math.min(a.pull, b.pull) * 0.9;
          ctx.beginPath();
          ctx.moveTo(a.x + a.dx, a.y + a.dy);
          ctx.lineTo(b.x + b.dx, b.y + b.dy);
          ctx.stroke();
        }
      }

      for (const dot of dots) {
        ctx.globalAlpha = 0.3 + dot.pull * 0.7;
        ctx.fillStyle = dot.pull > 0.08 ? accent : ink;
        ctx.beginPath();
        ctx.arc(dot.x + dot.dx, dot.y + dot.dy, 1.4 + dot.pull * 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const loop = (time) => {
      draw(time);
      if (running) frame = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      frame = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();
    draw(0);

    // Only animate while the hero is on screen
    const visibility = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    visibility.observe(canvas);

    const host = canvas.parentElement;
    host.addEventListener('pointermove', onPointerMove);
    host.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('resize', resize);

    // Redraw once when the theme flips, for the reduced-motion case
    const themeWatcher = new MutationObserver(() => draw(performance.now()));
    themeWatcher.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      stop();
      visibility.disconnect();
      themeWatcher.disconnect();
      host.removeEventListener('pointermove', onPointerMove);
      host.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none ${className}`} />;
}
