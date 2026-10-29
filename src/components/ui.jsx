import React, { useEffect, useRef, useState } from 'react';

/**
 * Fades and lifts its children into view the first time they scroll on screen.
 */
export function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Updates the --mx / --my CSS variables so `.spotlight` cards glow under the cursor.
 */
export function trackSpotlight(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
}

/**
 * Consistent numbered section heading: "01 — About" eyebrow, big title, optional lead text.
 */
export function SectionHeader({ index, eyebrow, title, highlight, description, align = 'left', children }) {
  const centered = align === 'center';
  return (
    <Reveal className={`mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
        <span className="font-mono text-xs text-indigo-500 dark:text-indigo-400">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-indigo-500 to-transparent" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </Reveal>
  );
}

/**
 * Fixed decorative backdrop: drifting colour blobs, a faint grid and a soft glow that follows the cursor.
 */
export function BackgroundFX() {
  const glowRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) return;
    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
          glowRef.current.style.opacity = '1';
        }
      });
    };
    window.addEventListener('pointermove', onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -top-40 -left-32 w-[36rem] h-[36rem] rounded-full bg-indigo-400/25 dark:bg-indigo-600/20 blur-[110px] animate-blob" />
      <div className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] rounded-full bg-fuchsia-300/25 dark:bg-fuchsia-600/15 blur-[110px] animate-blob [animation-delay:-7s]" />
      <div className="absolute -bottom-40 left-1/4 w-[34rem] h-[34rem] rounded-full bg-cyan-300/25 dark:bg-cyan-500/10 blur-[110px] animate-blob [animation-delay:-14s]" />
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-0 transition-opacity duration-500 bg-[radial-gradient(circle,rgb(99_102_241/0.10),transparent_60%)] dark:bg-[radial-gradient(circle,rgb(129_140_248/0.12),transparent_60%)]"
      />
    </div>
  );
}

/**
 * Thin gradient bar across the top of the viewport showing how far the page has been scrolled.
 */
export function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400"
      style={{ transform: 'scaleX(0)' }}
    />
  );
}
