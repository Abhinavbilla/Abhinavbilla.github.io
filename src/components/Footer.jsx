import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-rule flex flex-wrap justify-between gap-x-6 gap-y-2 font-mono text-xs text-muted">
      <span>© {new Date().getFullYear()} {personalInfo.name}, {personalInfo.contact.location}</span>
      <span>
        Built with React and Tailwind ·{' '}
        <a href="#" className="hover:text-ink transition-colors">back to top ↑</a>
      </span>
    </footer>
  );
}
