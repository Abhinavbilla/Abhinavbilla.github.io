import React from 'react';
import { ArrowUp, ArrowUpRight, Github, Linkedin, Code2 } from 'lucide-react';
import { personalInfo, navigationLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-10 border-t border-slate-900/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Subtitle */}
          <div className="text-center md:text-left">
            <a href="#" className="font-display font-semibold text-lg text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              {personalInfo.name}
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {personalInfo.institution} • Mathematics &amp; Computing
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
            {navigationLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-slate-900 dark:hover:text-white transition-colors">
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

          <div className="flex items-center gap-2">
            {[
              { href: personalInfo.socialLinks.github, label: 'GitHub', Icon: Github },
              { href: personalInfo.socialLinks.linkedin, label: 'LinkedIn', Icon: Linkedin },
              { href: personalInfo.socialLinks.leetcode, label: 'LeetCode', Icon: Code2 }
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 grid place-items-center rounded-full glass text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-9 h-9 grid place-items-center rounded-full text-white bg-gradient-to-br from-indigo-500 to-violet-500 hover:-translate-y-1 shadow-md shadow-indigo-500/30 transition-transform"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500 dark:text-slate-500">
          {personalInfo.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
