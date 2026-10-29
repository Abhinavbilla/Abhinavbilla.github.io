import React, { useEffect, useRef } from 'react';
import { X, Github, ArrowUpRight, CheckCircle2, Layers, BarChart3, HelpCircle, Globe } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Handle Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Lock background scrolling and move focus into the dialog
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const accent = project.accent || 'from-indigo-500 to-violet-500';

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0d0d1a] rounded-t-3xl sm:rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden animate-pop-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with project gradient */}
        <div className={`relative p-6 sm:p-8 bg-gradient-to-br ${accent} text-white`}>
          <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgb(255_255_255/0.6)_1px,transparent_1px)] [background-size:18px_18px]" />
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close project details"
            className="absolute top-4 right-4 w-9 h-9 grid place-items-center rounded-full bg-black/20 hover:bg-black/35 backdrop-blur-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative pr-10">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-white/90 mb-3">
              <span className="px-2.5 py-1 rounded-full bg-black/20 backdrop-blur-sm">{project.role}</span>
              <span>{project.period}</span>
              <span className="opacity-60">•</span>
              <span>{project.secondaryCategory || project.category}</span>
            </div>
            <h3 id="modal-title" className="font-display text-2xl sm:text-3xl font-bold leading-tight drop-shadow-sm">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm">
          {/* Metrics & Benchmark Results */}
          {project.modalDetails?.metricsAndResults && (
            <div className="grid grid-cols-2 gap-3">
              {project.modalDetails.metricsAndResults.map((metric) => (
                <div key={metric.label} className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10">
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">{metric.label}</div>
                  <div className="font-display text-base font-semibold text-slate-900 dark:text-white">{metric.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Problem Statement */}
          {project.modalDetails?.problemStatement && (
            <div>
              <h4 className="font-display text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <HelpCircle className="w-4 h-4 text-indigo-500" />
                <span>The problem</span>
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                {project.modalDetails.problemStatement}
              </p>
            </div>
          )}

          {/* Key Engineering Highlights */}
          <div>
            <h4 className="font-display text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>What I built</span>
            </h4>
            <ul className="space-y-3">
              {project.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span className={`mt-1 shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${accent} text-white text-[10px] font-bold grid place-items-center`}>
                    {idx + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Architecture Highlights */}
          {project.modalDetails?.architectureHighlights && (
            <div>
              <h4 className="font-display text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-violet-500" />
                <span>Architecture</span>
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.modalDetails.architectureHighlights.map((item) => {
                  const [heading, ...rest] = item.split(': ');
                  return (
                    <div key={item} className="p-4 rounded-2xl border border-slate-200 dark:border-white/10">
                      {rest.length > 0 ? (
                        <>
                          <div className="font-semibold text-slate-900 dark:text-white mb-1">{heading}</div>
                          <div className="text-slate-600 dark:text-slate-400 leading-relaxed">{rest.join(': ')}</div>
                        </>
                      ) : (
                        <div className="text-slate-600 dark:text-slate-400 leading-relaxed">{item}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="font-display text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <BarChart3 className="w-4 h-4 text-amber-500" />
              <span>Tech stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-end gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500/20 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Try it live</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:shadow-lg transition-shadow"
          >
            <Github className="w-3.5 h-3.5" />
            <span>View source</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
