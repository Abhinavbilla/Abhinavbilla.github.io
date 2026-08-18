import React, { useEffect } from 'react';
import { X, Github, ArrowUpRight, CheckCircle2, Layers, BarChart3, HelpCircle } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    // Handle Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Lock background scrolling
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="pr-4 space-y-1.5">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-0.5 rounded-md border border-indigo-200 dark:border-indigo-800/50">
                {project.role}
              </span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="text-slate-500 dark:text-slate-400">{project.period}</span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="text-slate-600 dark:text-slate-300 font-medium">{project.secondaryCategory || project.category}</span>
            </div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project details modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm">
          {/* Problem Statement */}
          {project.modalDetails?.problemStatement && (
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                <HelpCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Overview & Problem Statement</span>
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950/50 p-3.5 rounded-lg border border-slate-200/80 dark:border-slate-800/80">
                {project.modalDetails.problemStatement}
              </p>
            </div>
          )}

          {/* Key Engineering Highlights (from resume) */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Key Highlights & Contributions</span>
            </h4>
            <ul className="space-y-2.5">
              {project.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Architecture Highlights */}
          {project.modalDetails?.architectureHighlights && (
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Technical Architecture</span>
              </h4>
              <ul className="space-y-2">
                {project.modalDetails.architectureHighlights.map((item, idx) => (
                  <li key={idx} className="text-slate-600 dark:text-slate-300 leading-relaxed pl-3 border-l-2 border-indigo-500/40 dark:border-indigo-500/40">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Metrics & Benchmark Results */}
          {project.modalDetails?.metricsAndResults && (
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <BarChart3 className="w-4 h-4 text-amber-500" />
                <span>Metrics & Empirical Results</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.modalDetails.metricsAndResults.map((metric, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">{metric.label}</div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2.5">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            Close
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-xs"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
