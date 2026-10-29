import React from 'react';
import { GraduationCap, Trophy, Users, Calendar } from 'lucide-react';
import { educationData, achievementsData, leadershipData } from '../data/portfolioData';
import { Reveal, SectionHeader, trackSpotlight } from './ui';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 scroll-mt-20">
      <SectionHeader
        index="04"
        eyebrow="Education & honors"
        title="The"
        highlight="journey so far."
        description="Educational milestones, competitive national rankings, and campus leadership."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Academic Timeline */}
        <div className="lg:col-span-7 relative pl-8">
          {/* Gradient timeline rail */}
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] rounded-full bg-gradient-to-b from-indigo-500 via-violet-500/60 to-transparent" />

          <div className="space-y-6">
            {educationData.map((edu, index) => {
              const isCurrent = edu.status === 'Currently Pursuing (UG)';
              return (
                <Reveal key={edu.institution} delay={index * 120} className="relative">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-8 top-6 w-6 h-6 rounded-full grid place-items-center ${isCurrent ? 'bg-gradient-to-br from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/40' : 'bg-white dark:bg-slate-900 border-2 border-indigo-400/70'}`}>
                    {isCurrent ? (
                      <GraduationCap className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    )}
                  </div>

                  <div
                    onMouseMove={trackSpotlight}
                    className="spotlight p-5 sm:p-6 rounded-2xl glass hover:translate-x-1 transition-transform duration-300"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-600 dark:text-indigo-400">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            Current
                          </span>
                        )}
                      </div>
                      <span className="font-display text-sm font-semibold px-2.5 py-0.5 rounded-full bg-slate-900/5 dark:bg-white/10 text-slate-800 dark:text-slate-100">
                        {edu.scoreLabel}: {edu.score}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-0.5">{edu.degree}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{edu.details}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Right Column: Achievements & Leadership */}
        <div className="lg:col-span-5 space-y-4">
          {achievementsData.map((ach, i) => (
            <Reveal key={ach.exam} delay={i * 120}>
              <div className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 text-white shadow-lg shadow-orange-500/20 group">
                <Trophy className="absolute -right-4 -bottom-4 w-28 h-28 text-white/15 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500" />
                <div className="text-xs uppercase tracking-wider text-white/80">{ach.exam} · National exam</div>
                <div className="font-display text-4xl font-bold mt-1">{ach.rank}</div>
                <p className="text-sm text-white/85 mt-1">{ach.description}</p>
              </div>
            </Reveal>
          ))}

          {leadershipData.map((lead) => (
            <Reveal key={lead.organization} delay={240}>
              <div
                onMouseMove={trackSpotlight}
                className="spotlight p-6 rounded-2xl glass"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white grid place-items-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Leadership</div>
                    <h3 className="font-display font-semibold text-slate-900 dark:text-white">{lead.organization}</h3>
                  </div>
                </div>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  {lead.role} · {lead.team}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-1">{lead.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
