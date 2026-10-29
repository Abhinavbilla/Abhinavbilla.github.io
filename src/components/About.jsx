import React from 'react';
import { aboutData } from '../data/portfolioData';
import Section, { Reveal } from './Section';

export default function About() {
  // Italicise the key word of the pull quote
  const [before, after] = aboutData.pullQuote.split('measure');

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <Section id="about" title="About">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <blockquote className="font-display text-3xl sm:text-4xl font-light leading-tight text-ink">
              <span className="text-accent">“</span>
              {before}
              <em className="text-accent">measure</em>
              {after}
              <span className="text-accent">”</span>
            </blockquote>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-ink/85">
            {aboutData.narrative.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
