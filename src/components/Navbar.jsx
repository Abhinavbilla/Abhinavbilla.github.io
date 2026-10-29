import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { personalInfo, navigationLinks } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

// Highlights the nav link for whichever section currently sits under the navbar
function useActiveSection(ids) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids]);

  return active;
}

const sectionIds = navigationLinks.map((link) => link.href.slice(1));

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const themeButton = (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className="relative w-9 h-9 grid place-items-center rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-900/5 dark:hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      <Sun className={`w-4 h-4 text-amber-400 absolute transition-all duration-500 ${theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
      <Moon className={`w-4 h-4 absolute transition-all duration-500 ${theme === 'dark' ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
    </button>
  );

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-6 pt-3">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'glass shadow-lg shadow-indigo-500/5'
            : 'bg-transparent border border-transparent'
        }`}
      >
        <div className="flex items-center justify-between h-14 px-3 sm:px-4">
          {/* Brand / Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 flex items-center justify-center text-white font-display font-bold text-sm tracking-wider shadow-md shadow-indigo-500/30 group-hover:rotate-6 group-hover:scale-105 transition-transform">
              {personalInfo.initials}
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-display font-semibold text-[15px] tracking-tight text-slate-900 dark:text-white">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                IISc Bangalore
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-900/[0.04] dark:bg-white/[0.05] border border-slate-900/5 dark:border-white/5" aria-label="Main Navigation">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: Theme Switcher & Resume Button */}
          <div className="hidden md:flex items-center gap-2">
            {themeButton}
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 pl-3.5 pr-3 py-1.5 text-sm font-semibold rounded-full text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:shadow-lg hover:shadow-indigo-500/25 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle & Theme Button */}
          <div className="flex md:hidden items-center gap-1">
            {themeButton}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              className="w-9 h-9 grid place-items-center text-slate-700 dark:text-slate-200 rounded-full hover:bg-slate-900/5 dark:hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mx-2 mb-2 p-2 rounded-xl glass shadow-xl animate-pop-in">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2.5 text-base font-medium rounded-lg transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/10'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-900/5 dark:hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold rounded-lg text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume (PDF)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
