import React from 'react';
import { skillsData } from '../data/portfolioData';
import Section from './Section';

export default function Skills() {
  const { computerScience, mathematics } = skillsData.coursework;

  return (
    <Section id="skills" label="Skills">
      <dl className="space-y-4 text-[15px] leading-relaxed">
        {skillsData.categories.map((category) => (
          <div key={category.name} className="sm:grid sm:grid-cols-[11rem_1fr] sm:gap-4">
            <dt className="text-muted">{category.name}</dt>
            <dd className="text-ink">{category.skills.join(', ')}</dd>
          </div>
        ))}
        <div className="sm:grid sm:grid-cols-[11rem_1fr] sm:gap-4">
          <dt className="text-muted">Courses at IISc</dt>
          <dd className="text-ink">{[...computerScience, ...mathematics].join(', ')}</dd>
        </div>
      </dl>
    </Section>
  );
}
