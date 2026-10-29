import React from 'react';

/**
 * Page section: small label in a left column, content on the right (stacked on phones).
 */
export default function Section({ id, label, children }) {
  return (
    <section id={id} className="scroll-mt-8 py-12 sm:py-14 border-t border-rule md:grid md:grid-cols-[9rem_1fr] md:gap-8">
      <h2 className="mb-5 md:mb-0 font-mono text-xs uppercase tracking-widest text-muted md:pt-1.5">
        {label}
      </h2>
      <div>{children}</div>
    </section>
  );
}
