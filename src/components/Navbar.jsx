import React, { useEffect, useState } from 'react';
import { personalInfo, navigationLinks } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-sm border-b border-rule' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        <a href="#" className="font-display text-xl italic text-ink hover:text-accent transition-colors">
          abhinav<span className="text-accent not-italic">.</span>
        </a>

        <nav aria-label="Main" className="flex items-center gap-4 sm:gap-7 text-sm">
          {navigationLinks.map((link) => (
            <a key={link.name} href={link.href} className="link-draw hidden sm:inline text-ink/80 hover:text-ink">
              {link.name}
            </a>
          ))}
          <a href={personalInfo.resumePath} target="_blank" rel="noopener noreferrer" className="link-draw text-ink/80 hover:text-ink">
            Résumé
          </a>
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="w-8 h-8 grid place-items-center rounded-full border border-rule text-ink hover:border-ink transition-colors"
          >
            <span aria-hidden="true" className="text-sm leading-none">{theme === 'dark' ? '☀' : '☾'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
