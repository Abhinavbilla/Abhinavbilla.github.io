import React from 'react';
import { personalInfo, projectsData, projectFolder } from '../data/portfolioData';
import profilePhoto from '../assets/profile-photo-web.jpg';
import DotField from './DotField';
import useLocalTime from '../hooks/useLocalTime';

const socials = [
  { label: 'GitHub', href: personalInfo.socialLinks.github },
  { label: 'LinkedIn', href: personalInfo.socialLinks.linkedin },
  { label: 'LeetCode', href: personalInfo.socialLinks.leetcode }
];

const folders = ['systems', 'models'].map((name) => ({
  name,
  projects: projectsData.filter((p) => projectFolder(p) === name)
}));
const longestDir = Math.max(...projectsData.map((p) => p.dir.length));

// A terminal window listing the projects as folders
function ProjectTree({ time }) {
  return (
    <div className="rounded-xl overflow-hidden bg-[#181613] text-[#ece7dd] font-mono text-[12.5px] sm:text-[13px] leading-relaxed shadow-[0_24px_50px_-20px_rgb(0_0_0/0.5)] ring-1 ring-black/5 dark:ring-white/10">
      <div className="flex items-center gap-1.5 px-4 h-8 bg-[#26231f] text-[11px] text-white/50">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3">abhinav@iisc: ~</span>
        <span className="ml-auto">{time} IST</span>
      </div>
      <div className="px-4 sm:px-5 py-4 overflow-x-auto">
        <p>
          <span className="text-[#ef8a5a]">~</span> $ tree projects
        </p>
        <p className="text-white/60">projects/</p>
        {folders.map((folder, fi) => {
          const lastFolder = fi === folders.length - 1;
          return (
            <div key={folder.name}>
              <p className="whitespace-pre">
                <span className="text-white/35">{lastFolder ? '└── ' : '├── '}</span>
                <span className="text-[#8fb8ff]">{folder.name}/</span>
              </p>
              {folder.projects.map((project, pi) => (
                <p key={project.id} className="whitespace-pre">
                  <span className="text-white/35">
                    {lastFolder ? '    ' : '│   '}
                    {pi === folder.projects.length - 1 ? '└── ' : '├── '}
                  </span>
                  <a href={`#${project.id}`} className="hover:text-[#ef8a5a] hover:underline underline-offset-2">
                    {project.dir}
                  </a>
                  <span className="hidden sm:inline text-white/40">
                    {' '.repeat(longestDir - project.dir.length + 3)}# {project.blurb}
                  </span>
                </p>
              ))}
            </div>
          );
        })}
        <p className="mt-2">
          <span className="text-[#ef8a5a]">~</span> ${' '}
          <span aria-hidden="true" className="inline-block w-2 h-4 align-[-3px] bg-[#ece7dd] animate-pulse" />
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  const time = useLocalTime();

  return (
    <section className="relative overflow-hidden">
      <DotField className="absolute inset-0 w-full h-full" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-24 pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Name and intro */}
          <div className="lg:col-span-8">
            <p className="font-mono text-xs sm:text-sm text-muted mb-6">
              Billa Abhinav · Mathematics &amp; Computing · IISc Bangalore
            </p>

            <h1 className="font-display font-light tracking-tight text-ink leading-[0.92] text-[clamp(3.6rem,13vw,10rem)]">
              Abhinav<span className="text-accent">.</span>
            </h1>

            <p className="mt-8 max-w-2xl font-display text-2xl sm:text-3xl leading-snug text-ink/90 font-light">
              Maths student by day. The rest of the time I'm writing <em className="text-accent">servers</em>,
              training <em className="text-accent">models</em>, and putting both in the browser.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 pl-5 pr-4 py-3 rounded-full bg-ink text-paper font-medium hover:bg-accent transition-colors"
              >
                See what I've made
                <span aria-hidden="true" className="transition-transform group-hover:translate-y-0.5">↓</span>
              </a>
              {socials.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="link-draw text-ink">
                  {label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Photo, pinned like a print */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <figure className="relative w-56 sm:w-64 rotate-[3deg] hover:rotate-0 transition-transform duration-500">
              <div className="bg-white p-3 pb-12 shadow-[0_18px_40px_-12px_rgb(0_0_0/0.35)]">
                <img
                  src={profilePhoto}
                  alt={`Photo of ${personalInfo.name}`}
                  width="640"
                  height="800"
                  className="w-full aspect-[4/5] object-cover object-top"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <figcaption className="absolute bottom-2.5 left-0 right-0 text-center font-hand text-2xl text-neutral-700">
                hi, that's me
              </figcaption>
              {/* strip of tape */}
              <span aria-hidden="true" className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-6 w-20 h-6 bg-[#e8dcc0]/80 shadow-sm" />
            </figure>
          </div>
        </div>

        {/* What's in the projects folder */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <ProjectTree time={time} />
          </div>
          <p className="hidden lg:block lg:col-span-5 font-hand text-3xl text-muted -rotate-3 leading-tight pl-4">
            <span className="text-accent">←</span> five projects, two folders.
            <br />
            click one to jump to it
          </p>
        </div>
      </div>
    </section>
  );
}
