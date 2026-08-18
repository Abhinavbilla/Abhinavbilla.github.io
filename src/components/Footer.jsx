import React from 'react';
import { ArrowUp, FileText, ArrowUpRight } from 'lucide-react';
import { personalInfo, navigationLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-950/60 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/60">
          {/* Brand & Subtitle */}
          <div className="text-center sm:text-left space-y-1">
            <a href="#" className="font-bold text-base text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              {personalInfo.name}
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {personalInfo.institution} • Mathematics & Computing
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </nav>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 shadow-xs transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p>{personalInfo.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
