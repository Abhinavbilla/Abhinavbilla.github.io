import React from 'react';
import { personalInfo, aboutData } from '../data/portfolioData';
import profilePhoto from '../assets/profile-photo.jpg';

const links = [
  { label: 'GitHub', href: personalInfo.socialLinks.github },
  { label: 'LinkedIn', href: personalInfo.socialLinks.linkedin },
  { label: 'LeetCode', href: personalInfo.socialLinks.leetcode },
  { label: 'Résumé (PDF)', href: personalInfo.resumePath }
];

export default function Hero() {
  return (
    <section className="pt-10 pb-14 sm:pt-16 sm:pb-20">
      <div className="flex flex-col-reverse sm:flex-row sm:items-start gap-8 sm:gap-10">
        <div className="flex-1">
          <h1 className="font-serif text-4xl sm:text-5xl leading-tight text-ink">
            Hi, I'm Abhinav.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-ink/90 max-w-xl">
            {aboutData.intro}
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted max-w-xl">
            Lately: a multiplayer strategy game, an algorithm visualizer that only animates tested code,
            and a tool that finds sounds in hours of audio. They're all <a href="#work" className="link text-ink">below</a>.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="link">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href={personalInfo.socialLinks.email} className="link">
                {personalInfo.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <img
          src={profilePhoto}
          alt={`Photo of ${personalInfo.name}`}
          width="144"
          height="176"
          className="w-28 h-36 sm:w-36 sm:h-44 object-cover object-top rounded-sm shrink-0"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
}
