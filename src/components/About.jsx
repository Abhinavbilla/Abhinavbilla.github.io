import React from 'react';
import { aboutData } from '../data/portfolioData';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" label="About">
      <div className="space-y-4 text-base sm:text-[17px] leading-relaxed text-ink/90 max-w-prose">
        {aboutData.narrative.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
