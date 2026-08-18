import React from 'react';
import { Calculator, Server, BrainCircuit, User, Layers } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

// Map icons to pillar cards
const pillarIcons = {
  'math-rigor': Calculator,
  'software-engineering': Server,
  'ai-ml': BrainCircuit
};

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 scroll-mt-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Academic Rigor & Practical Systems Engineering
          </h2>

          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {aboutData.narrative.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* 3 Core Pillar Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {aboutData.pillars.map((pillar) => {
            const Icon = pillarIcons[pillar.id] || Layers;
            
            return (
              <div
                key={pillar.id}
                className="relative flex flex-col justify-between p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs hover:shadow-md transition-all group"
              >
                <div>
                  {/* Top Bar: Icon & Highlight Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {pillar.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center text-xs font-medium text-indigo-600 dark:text-indigo-400">
                  <span>Core Focus Area</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
