import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import Section from './Section';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the mailto link still works
    }
  };

  return (
    <Section id="contact" label="Contact">
      <p className="text-base sm:text-[17px] leading-relaxed text-ink/90 max-w-prose">
        Email is the best way to reach me. I usually reply within a day or two.
      </p>

      <p className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <a href={personalInfo.socialLinks.email} className="link font-serif text-2xl sm:text-3xl text-ink">
          {personalInfo.contact.email}
        </a>
        <button onClick={handleCopyEmail} className="font-mono text-xs text-muted hover:text-ink transition-colors">
          {copied ? 'copied' : 'copy'}
        </button>
      </p>

      <p className="mt-6 text-[15px] text-muted leading-relaxed">
        Or call {' '}
        <a href={`tel:${personalInfo.contact.phoneClean}`} className="link text-ink">
          {personalInfo.contact.phone}
        </a>
        . I'm also on{' '}
        <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="link text-ink">GitHub</a>,{' '}
        <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="link text-ink">LinkedIn</a> and{' '}
        <a href={personalInfo.socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className="link text-ink">LeetCode</a>.
      </p>
    </Section>
  );
}
