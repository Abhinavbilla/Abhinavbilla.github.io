import React from 'react';
import { educationData, achievementsData, leadershipData } from '../data/portfolioData';
import Section from './Section';

export default function Education() {
  return (
    <Section id="education" label="Education">
      <ul className="space-y-6">
        {educationData.map((edu) => (
          <li key={edu.institution} className="sm:grid sm:grid-cols-[8rem_1fr_auto] sm:gap-4">
            <span className="font-mono text-xs text-muted sm:pt-1">{edu.period}</span>
            <div>
              <div className="text-ink font-medium">{edu.institution}</div>
              <div className="text-[15px] text-muted">{edu.degree}</div>
            </div>
            <span className="text-sm text-ink/80 sm:pt-0.5">
              {edu.scoreLabel} {edu.score}
            </span>
          </li>
        ))}
      </ul>

      <h3 className="mt-10 mb-3 font-serif text-xl text-ink">Other things</h3>
      <ul className="space-y-2 text-[15px] leading-relaxed text-ink/90 list-disc pl-5 marker:text-muted">
        {achievementsData.map((ach) => (
          <li key={ach.exam}>
            All India Rank {ach.rank.replace('AIR ', '')} in {ach.exam}
          </li>
        ))}
        {leadershipData.map((lead) => (
          <li key={lead.organization}>
            {lead.role}, {lead.team}, {lead.organization}
          </li>
        ))}
      </ul>
    </Section>
  );
}
