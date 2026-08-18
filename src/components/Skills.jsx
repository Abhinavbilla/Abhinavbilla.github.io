import React from 'react';
import {
  Code2,
  Terminal,
  BrainCircuit,
  Languages,
  BookOpen,
  Binary,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Category icon mapper
const categoryIcons = {
  'Programming Languages': Code2,
  'Backend & Developer Tools': Terminal,
  'AI / ML & Data': BrainCircuit,
  'Spoken Languages': Languages
};

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-20 scroll-mt-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Skills & Coursework</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Technical Competencies & Academic Foundations
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Verified technical proficiencies and rigorous undergraduate coursework in Mathematics, Computing, and AI/ML at the Indian Institute of Science.
          </p>
        </div>

        {/* 1. Technical Skills Matrix */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>Technical Skills Matrix</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {skillsData.categories.map((category) => {
              const Icon = categoryIcons[category.name] || Code2;

              return (
                <div
                  key={category.name}
                  className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-base text-slate-900 dark:text-white">
                        {category.name}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Verified Coursework Grid */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>Verified Coursework (IISc Bangalore)</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {/* Computer Science & Theory Card */}
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/50 flex items-center justify-center">
                  <Binary className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    Computer Science & Theory
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Undergraduate Curriculum
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5">
                {skillsData.coursework.computerScience.map((course) => (
                  <li
                    key={course}
                    className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mathematics & Optimization Card */}
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50 flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    Mathematics & Optimization
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Undergraduate Curriculum
                  </p>
                </div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {skillsData.coursework.mathematics.map((course) => (
                  <li
                    key={course}
                    className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
