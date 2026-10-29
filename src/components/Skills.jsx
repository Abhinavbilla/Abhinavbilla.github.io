import React from 'react';
import {
  Code2,
  Terminal,
  BrainCircuit,
  Languages,
  BookOpen,
  Binary,
  LayoutTemplate
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { Reveal, SectionHeader, trackSpotlight } from './ui';

// Category icon & accent mapper
const categoryStyles = {
  'Programming Languages': { Icon: Code2, gradient: 'from-indigo-500 to-blue-500' },
  'Backend & Developer Tools': { Icon: Terminal, gradient: 'from-emerald-500 to-teal-500' },
  'Frontend & Web': { Icon: LayoutTemplate, gradient: 'from-cyan-500 to-sky-500' },
  'AI / ML & Data': { Icon: BrainCircuit, gradient: 'from-fuchsia-500 to-violet-500' },
  'Spoken Languages': { Icon: Languages, gradient: 'from-amber-500 to-orange-500' }
};

// Every technical skill (spoken languages excluded) scrolls past in the marquee
const marqueeSkills = skillsData.categories
  .filter((c) => c.name !== 'Spoken Languages')
  .flatMap((c) => c.skills)
  .filter((s) => s.length < 24);

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 scroll-mt-20">
      <SectionHeader
        index="03"
        eyebrow="Skills & coursework"
        title="My"
        highlight="toolbox."
        description="Languages, frameworks and tools I use to ship, backed by rigorous coursework in mathematics and computer science at IISc."
      />

      {/* Infinite tech marquee */}
      <Reveal className="relative -mx-4 sm:mx-0 mb-12 overflow-hidden marquee-mask">
        <div className="flex w-max gap-3 animate-marquee hover:[animation-play-state:paused]">
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              aria-hidden={i >= marqueeSkills.length}
              className="shrink-0 px-4 py-2 rounded-full glass font-mono text-sm text-slate-700 dark:text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Technical Skills Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillsData.categories.map((category, i) => {
          const { Icon, gradient } = categoryStyles[category.name] || { Icon: Code2, gradient: 'from-indigo-500 to-violet-500' };

          return (
            <Reveal key={category.name} delay={(i % 3) * 100} className="h-full">
              <div
                onMouseMove={trackSpotlight}
                className="spotlight h-full p-6 rounded-2xl glass hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/[0.04] dark:bg-white/[0.06] text-slate-700 dark:text-slate-200 border border-slate-900/5 dark:border-white/10 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}

        {/* Coursework card spans remaining space */}
        <Reveal delay={200} className="h-full">
          <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-xl shadow-indigo-500/20">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">IISc Coursework</h3>
                <p className="text-xs text-white/70">Undergraduate curriculum</p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-white/70 mb-2">
                  <Binary className="w-3.5 h-3.5" /> Computer Science
                </div>
                <ul className="space-y-1.5">
                  {skillsData.coursework.computerScience.map((course) => (
                    <li key={course} className="flex gap-2">
                      <span className="text-white/60">▹</span>
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-white/70 mb-2">
                  <BookOpen className="w-3.5 h-3.5" /> Mathematics
                </div>
                <ul className="space-y-1.5">
                  {skillsData.coursework.mathematics.map((course) => (
                    <li key={course} className="flex gap-2">
                      <span className="text-white/60">▹</span>
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
