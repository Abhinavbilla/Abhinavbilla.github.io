import React from 'react';
import { GraduationCap, Trophy, Users, Award, Calendar } from 'lucide-react';
import { educationData, achievementsData, leadershipData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-12 md:py-20 scroll-mt-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education & Honors</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Academic History & Distinctions
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Educational milestones, competitive national rankings, and campus leadership at the Indian Institute of Science.
          </p>
        </div>

        {/* Responsive Grid: Timeline on Left, Honors on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Academic Timeline (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Academic Timeline</span>
            </h3>

            {/* Clean Timeline */}
            <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
              {educationData.map((edu, index) => (
                <div key={edu.institution} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-white dark:bg-slate-950 border-2 border-indigo-600 dark:border-indigo-400 group-hover:scale-125 transition-transform" />

                  {/* Period Badge & Score */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                      {edu.status === 'Currently Pursuing (UG)' && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          Current Student
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
                      {edu.scoreLabel}: {edu.score}
                    </span>
                  </div>

                  {/* Institution Name */}
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {edu.institution}
                  </h4>

                  {/* Degree / Grade Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                    {edu.degree}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Leadership (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Competitive Exam Ranks Card */}
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span>Competitive Achievements</span>
              </h3>

              <div className="space-y-3">
                {achievementsData.map((ach) => (
                  <div
                    key={ach.exam}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80"
                  >
                    <div>
                      <span className="font-semibold text-sm text-slate-900 dark:text-white">
                        {ach.exam}
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400">National Exam</p>
                    </div>

                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50">
                      {ach.rank}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Responsibility Card */}
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Users className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Leadership & Activities</span>
              </h3>

              {leadershipData.map((lead) => (
                <div key={lead.organization} className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {lead.organization}
                    </h4>
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      {lead.team}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    {lead.role}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                    {lead.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
