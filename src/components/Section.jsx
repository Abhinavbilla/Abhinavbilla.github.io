import React, { useEffect, useRef, useState } from 'react';

/**
 * Fades its children up the first time they scroll into view.
 */
export function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) {
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
      { rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ '--delay': `${delay}ms` }}>
      {children}
    </div>
  );
}

/**
 * Page section with a big serif heading and an optional note on the right of the heading rule.
 */
export default function Section({ id, title, note, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pb-5 mb-12 border-b border-rule">
          <h2 className="font-display text-4xl sm:text-6xl font-light tracking-tight text-ink">{title}</h2>
          {note && <span className="font-mono text-xs text-muted">{note}</span>}
        </div>
      </Reveal>
      {children}
    </section>
  );
}
