import React from 'react';
import { skillsData } from '../data/portfolioData';
import Section, { Reveal } from './Section';

export default function Skills() {
  const { computerScience, mathematics } = skillsData.coursework;
  const groups = [
    ...skillsData.categories.filter((c) => c.name !== 'Spoken Languages'),
    { name: 'Courses at IISc', skills: [...computerScience, ...mathematics] }
  ];
  const spoken = skillsData.categories.find((c) => c.name === 'Spoken Languages');

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <Section id="skills" title="Toolbox" note={spoken ? `Speaks ${spoken.skills.join(', ')}` : undefined}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {groups.map((group, i) => (
            <Reveal key={group.name} delay={(i % 3) * 100}>
              <h3 className="font-display italic text-2xl text-ink mb-4">{group.name}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 rounded-full border border-rule text-sm text-ink/85 hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
