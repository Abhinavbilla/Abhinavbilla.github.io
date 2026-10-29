import React from 'react';
import { Calculator, Server, BrainCircuit, Layers } from 'lucide-react';
import { aboutData } from '../data/portfolioData';
import { Reveal, SectionHeader, trackSpotlight } from './ui';

// Map icons and colour accents to pillar cards
const pillarStyles = {
  'math-rigor': { Icon: Calculator, gradient: 'from-amber-400 to-orange-500' },
  'software-engineering': { Icon: Server, gradient: 'from-indigo-500 to-cyan-400' },
  'ai-ml': { Icon: BrainCircuit, gradient: 'from-fuchsia-500 to-violet-500' }
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 scroll-mt-20">
      <SectionHeader
        index="01"
        eyebrow="About me"
        title="Where mathematical rigor meets"
        highlight="real-world engineering."
      />

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start">
        {/* Narrative */}
        <Reveal className="space-y-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {aboutData.narrative.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p>
            Outside coursework I enjoy shipping complete products end to end: multiplayer games, developer
            tools and on-device AI apps that real people can open in a browser.
          </p>
        </Reveal>

        {/* 3 Core Pillar Highlight Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {aboutData.pillars.map((pillar, i) => {
            const { Icon, gradient } = pillarStyles[pillar.id] || { Icon: Layers, gradient: 'from-indigo-500 to-violet-500' };

            return (
              <Reveal
                key={pillar.id}
                delay={i * 120}
                className={i === 0 ? 'sm:col-span-2' : ''}
              >
                <div
                  onMouseMove={trackSpotlight}
                  className="spotlight h-full p-6 rounded-2xl glass hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900/5 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-900/5 dark:border-white/10">
                      {pillar.highlight}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
