import React from 'react';
import { personalInfo, navigationLinks } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pt-8 pb-6 text-sm">
      <a href="#" className="font-serif text-lg text-ink hover:text-accent transition-colors">
        {personalInfo.name}
      </a>

      <nav aria-label="Main" className="flex flex-wrap items-baseline gap-x-5 gap-y-1 text-muted">
        {navigationLinks.map((link) => (
          <a key={link.name} href={link.href} className="hover:text-ink transition-colors">
            {link.name.toLowerCase()}
          </a>
        ))}
        <a href={personalInfo.resumePath} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
          résumé
        </a>
        <button
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          className="font-mono text-xs text-muted hover:text-ink transition-colors"
        >
          {theme === 'dark' ? '☀ light' : '☾ dark'}
        </button>
      </nav>
    </header>
  );
}
