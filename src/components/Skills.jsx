import React from 'react';
import { skillsData } from '../data/portfolioData';
import Section, { Reveal } from './Section';

// Short keys for the dict in the code card
const keys = {
  'Programming Languages': 'languages',
  'Backend & Developer Tools': 'backend',
  'Frontend & Web': 'frontend',
  'AI / ML & Data': 'ml'
};

// The toolbox written out the way I'd actually write it
function ToolboxCode({ groups }) {
  return (
    <div className="rounded-xl overflow-hidden bg-[#181613] text-[#ece7dd] font-mono text-[13px] leading-relaxed shadow-[0_24px_50px_-20px_rgb(0_0_0/0.45)] ring-1 ring-black/5 dark:ring-white/10">
      <div className="flex items-center h-9 bg-[#26231f] text-[11px]">
        <span className="h-full px-4 flex items-center bg-[#181613] text-white/80 border-t-2 border-[#ef8a5a]">toolbox.py</span>
      </div>
      <div className="px-4 sm:px-6 py-5">
        <p>
          <span className="text-[#c792ea]">toolbox</span> = {'{'}
        </p>
        {groups.map((group) => (
          <div key={group.name} className="pl-4 sm:pl-6 py-0.5">
            <span className="text-[#c3e88d]">"{keys[group.name]}"</span>: [
            <ul className="pl-4 sm:pl-6 flex flex-wrap gap-x-2">
              {group.skills.map((skill, i) => (
                <li key={skill} className="text-[#f2c48d] hover:text-[#ef8a5a] transition-colors cursor-default">
                  "{skill}"<span className="text-[#ece7dd]">{i < group.skills.length - 1 ? ',' : ''}</span>
                </li>
              ))}
            </ul>
            ],
          </div>
        ))}
        <p>{'}'}</p>
      </div>
    </div>
  );
}

// Ruled notebook page with the courses ticked off by hand
function CourseNotebook({ courses }) {
  return (
    <div className="relative rounded-sm bg-[#fbf8f1] text-[#26231f] shadow-[0_18px_40px_-18px_rgb(0_0_0/0.35)] rotate-[1deg] bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_31px,#cfdcea_31px,#cfdcea_32px)] bg-[position:0_52px]">
      {/* red margin line */}
      <span aria-hidden="true" className="absolute top-0 bottom-0 left-10 w-px bg-[#e7a1a1]" />
      <div className="pl-14 pr-6 pt-4 pb-6">
        <h3 className="font-hand text-3xl h-12 leading-[3rem] text-[#26231f]">courses so far @ IISc</h3>
        <ul>
          {courses.map((course) => (
            <li key={course} className="flex items-baseline gap-3 h-8 leading-8 text-[15px]">
              <span aria-hidden="true" className="font-hand text-2xl text-[#c2461b] -ml-1">✓</span>
              <span className="truncate">{course.replace('Introduction to Artificial Intelligence', 'Intro to AI')}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Skills() {
  const { computerScience, mathematics } = skillsData.coursework;
  const groups = skillsData.categories.filter((c) => keys[c.name]);
  const spoken = skillsData.categories.find((c) => c.name === 'Spoken Languages');

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <Section id="skills" title="Toolbox" note={spoken ? `also speaks ${spoken.skills.join(', ')}` : undefined}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          <Reveal className="lg:col-span-7">
            <ToolboxCode groups={groups} />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <CourseNotebook courses={[...computerScience, ...mathematics]} />
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
