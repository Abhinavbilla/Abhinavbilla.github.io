import React from 'react';
import { educationData, achievementsData, leadershipData } from '../data/portfolioData';
import Section, { Reveal } from './Section';

export default function Education() {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <Section id="education" title="Education">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14">
          <ol className="lg:col-span-8">
            {educationData.map((edu, i) => (
              <Reveal key={edu.institution} delay={i * 100}>
                <li className="grid sm:grid-cols-[7.5rem_1fr_auto] gap-x-6 gap-y-1 py-6 border-b border-rule first:pt-0">
                  <span className="font-mono text-xs text-muted sm:pt-2">{edu.period}</span>
                  <div>
                    <h3 className="font-display text-2xl text-ink">{edu.institution}</h3>
                    <p className="mt-1 text-[15px] text-muted">{edu.degree}</p>
                  </div>
                  <span className="font-display text-xl text-ink sm:pt-1">
                    {edu.score}
                    <span className="ml-1.5 font-mono text-[11px] text-muted">{edu.scoreLabel.toLowerCase()}</span>
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={150} className="lg:col-span-4">
            <div className="rounded-2xl bg-tint p-7">
              <h3 className="font-mono text-xs text-muted mb-5">Also worth mentioning</h3>
              <ul className="space-y-5">
                {achievementsData.map((ach) => (
                  <li key={ach.exam}>
                    <div className="font-display text-3xl text-ink">
                      {ach.rank.replace('AIR ', '')}
                      <span className="ml-2 font-mono text-xs text-muted">all-India rank</span>
                    </div>
                    <div className="text-sm text-ink/80">{ach.exam}</div>
                  </li>
                ))}
                {leadershipData.map((lead) => (
                  <li key={lead.organization} className="pt-5 border-t border-rule text-sm text-ink/80 leading-relaxed">
                    <span className="text-ink font-medium">{lead.role}</span>, {lead.team.toLowerCase()} at {lead.organization}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
