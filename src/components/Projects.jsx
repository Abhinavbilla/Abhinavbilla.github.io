import React, { useRef, useState } from 'react';
import {
  Github,
  ArrowUpRight,
  Activity,
  Sparkles,
  Hexagon,
  ScanSearch,
  AudioWaveform,
  FolderGit2,
  Globe,
  Plus
} from 'lucide-react';
import { projectsData, projectFilterTabs, personalInfo } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { Reveal, SectionHeader } from './ui';

// Cover icon for each project card
const projectIcons = {
  'drift-monitoring-api': Activity,
  'variational-autoencoders': Sparkles,
  'nexus-dominion': Hexagon,
  algolens: ScanSearch,
  soundscope: AudioWaveform
};

function ProjectCard({ project, index, onOpen }) {
  const cardRef = useRef(null);
  const Icon = projectIcons[project.id] || FolderGit2;
  const accent = project.accent || 'from-indigo-500 to-violet-500';

  // 3D tilt + spotlight that follow the cursor
  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
    el.style.transform = `perspective(1000px) rotateX(${(0.5 - y / rect.height) * 6}deg) rotateY(${(x / rect.width - 0.5) * 6}deg) translateY(-4px)`;
  };
  const handleLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = '';
  };

  return (
    <Reveal delay={(index % 2) * 120} className="h-full">
      <article
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="spotlight group h-full flex flex-col rounded-3xl glass overflow-hidden transition-[transform,box-shadow] duration-300 ease-out hover:shadow-2xl hover:shadow-indigo-500/15"
      >
        {/* Cover */}
        <button
          type="button"
          onClick={() => onOpen(project)}
          aria-label={`Open details for ${project.title}`}
          className={`relative h-44 overflow-hidden bg-gradient-to-br ${accent} text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white`}
        >
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgb(255_255_255/0.6)_1px,transparent_1px)] [background-size:18px_18px]" />
          <Icon
            strokeWidth={1.2}
            className="absolute -right-6 -bottom-8 w-48 h-48 text-white/25 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6"
          />
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-medium text-white/90">
            <span className="px-2.5 py-1 rounded-full bg-black/20 backdrop-blur-sm">{project.secondaryCategory}</span>
            <span className="font-mono">{String(index + 1).padStart(2, '0')}</span>
          </div>
          {project.highlightStat && (
            <div className="absolute bottom-4 left-4 text-white">
              <div className="font-display text-3xl font-bold leading-none drop-shadow">{project.highlightStat.value}</div>
              <div className="mt-1 text-xs text-white/85">{project.highlightStat.label}</div>
            </div>
          )}
        </button>

        {/* Body */}
        <div className="flex-1 flex flex-col p-6">
          <div className="flex items-center gap-2 mb-3 text-xs">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">{project.role}</span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span className="text-slate-500 dark:text-slate-400">{project.period}</span>
          </div>

          <h3 className="font-display text-xl font-semibold leading-snug text-slate-900 dark:text-white mb-2">
            {project.title}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 line-clamp-3">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-slate-900/[0.04] dark:bg-white/[0.06] border border-slate-900/5 dark:border-white/10"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 5 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-slate-500">+{project.tags.length - 5}</span>
            )}
          </div>

          {/* Actions */}
          <div className="mt-auto flex flex-wrap items-center gap-2">
            <button
              onClick={() => onOpen(project)}
              className="group/btn inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
            >
              <span>Case study</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-900/10 dark:border-white/15 hover:border-indigo-400 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Code</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500/20 transition-colors"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span>Live demo</span>
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const matchesTab = (project, tabId) =>
    tabId === 'all' || project.category === tabId || project.secondaryCategory?.includes(tabId);

  const filteredProjects = projectsData.filter((project) => matchesTab(project, activeTab));

  return (
    <section id="projects" className="py-20 md:py-28 scroll-mt-20">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <SectionHeader
          index="02"
          eyebrow="Selected work"
          title="Things I've"
          highlight="built & shipped."
          description="From real-time multiplayer games to on-device AI and ML infrastructure. Open any card for the full case study."
        />

        {/* Filter Tabs */}
        <Reveal className="mb-12 self-start lg:self-auto max-w-full">
          <div role="tablist" aria-label="Filter projects" className="flex items-center gap-1 p-1 rounded-full glass overflow-x-auto max-w-full">
            {projectFilterTabs.map((tab) => {
              const count = projectsData.filter((p) => matchesTab(p, tab.id)).length;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/30'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                  <span className={`px-1.5 rounded-full text-[10px] ${isActive ? 'bg-white/20' : 'bg-slate-900/5 dark:bg-white/10'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/* Project Cards Grid */}
      <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} onOpen={setSelectedProject} />
        ))}

        {/* "More on GitHub" tile fills the grid and invites further browsing */}
        <Reveal delay={(filteredProjects.length % 2) * 120} className="h-full">
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group h-full min-h-[14rem] flex flex-col items-center justify-center gap-3 p-8 rounded-3xl border-2 border-dashed border-slate-300 dark:border-white/10 hover:border-indigo-400 dark:hover:border-indigo-400/60 text-center transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl grid place-items-center bg-slate-900/5 dark:bg-white/5 text-slate-500 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-violet-500 transition-all group-hover:rotate-90 duration-500">
              <Plus className="w-6 h-6" />
            </div>
            <div className="font-display text-lg font-semibold text-slate-900 dark:text-white">More on GitHub</div>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
              Experiments, coursework and works in progress live on my GitHub profile.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <Globe className="w-3.5 h-3.5" /> github.com/Abhinavbilla
            </span>
          </a>
        </Reveal>
      </div>

      {/* Technical Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
