import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import useLocalTime from '../hooks/useLocalTime';

const socials = [
  { label: 'GitHub', href: personalInfo.socialLinks.github },
  { label: 'LinkedIn', href: personalInfo.socialLinks.linkedin },
  { label: 'LeetCode', href: personalInfo.socialLinks.leetcode },
  { label: 'Résumé', href: personalInfo.resumePath }
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const time = useLocalTime();

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
    <section id="contact" className="scroll-mt-16 bg-[#181613] text-[#ece7dd] dark:bg-[#ece7dd] dark:text-[#181613]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-24 sm:pt-32 pb-10">
        <p className="font-mono text-xs opacity-60">Contact</p>

        <h2 className="mt-4 font-display font-light tracking-tight leading-[0.95] text-[clamp(3rem,10vw,8rem)]">
          Say <em className="text-[#ef8a5a] dark:text-[#c2461b]">hello</em>.
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-relaxed opacity-80">
          Questions about a project, an idea you want to build, or just a good problem to talk through.
          Email is best; I usually reply within a day or two.
        </p>

        <div className="mt-10 flex flex-wrap items-baseline gap-x-5 gap-y-3">
          <a href={personalInfo.socialLinks.email} className="link-draw font-display text-2xl sm:text-4xl break-all">
            {personalInfo.contact.email}
          </a>
          <button
            onClick={handleCopyEmail}
            className="font-mono text-xs px-3 py-1.5 rounded-full border border-current opacity-70 hover:opacity-100 transition-opacity"
          >
            {copied ? 'copied ✓' : 'copy'}
          </button>
        </div>

        <p className="mt-4 text-sm opacity-70">
          or call{' '}
          <a href={`tel:${personalInfo.contact.phoneClean}`} className="link-draw">
            {personalInfo.contact.phone}
          </a>
        </p>

        <div className="mt-24 pt-6 border-t border-current/20 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 text-sm">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="link-draw">
                  {label} ↗
                </a>
              </li>
            ))}
          </ul>
          <p className="font-mono text-xs opacity-60">
            © {new Date().getFullYear()} Billa Abhinav · {time} in Bangalore ·{' '}
            <a href="#" className="hover:opacity-100 underline underline-offset-2">back to top ↑</a>
          </p>
        </div>
      </div>
    </section>
  );
}
