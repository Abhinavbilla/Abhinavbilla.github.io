import React from 'react';
import { personalInfo } from '../data/portfolioData';
import profilePhoto from '../assets/profile-photo-web.jpg';
import DotField from './DotField';
import useLocalTime from '../hooks/useLocalTime';

const socials = [
  { label: 'GitHub', href: personalInfo.socialLinks.github },
  { label: 'LinkedIn', href: personalInfo.socialLinks.linkedin },
  { label: 'LeetCode', href: personalInfo.socialLinks.leetcode }
];

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
              I study maths and build things for the <em className="text-accent">browser</em>:
              strategy games, learning tools, and models that run on your own laptop.
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

        {/* Right now */}
        <dl className="mt-16 sm:mt-20 grid sm:grid-cols-3 gap-6 sm:gap-8 pt-6 border-t border-rule text-sm">
          <div>
            <dt className="font-mono text-xs text-muted mb-1">Studying</dt>
            <dd className="text-ink">B.Tech, Mathematics &amp; Computing at IISc, since 2024</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-muted mb-1">Recently shipped</dt>
            <dd className="text-ink">
              <a href="#algolens" className="link">AlgoLens</a>, a DSA visualizer that only animates tested code
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-muted mb-1">Local time</dt>
            <dd className="text-ink">
              {time} in Bangalore{' '}
              <span className="relative inline-flex w-2 h-2 ml-1 align-middle">
                <span className="absolute inset-0 rounded-full bg-accent/50 animate-ping" />
                <span className="relative w-2 h-2 rounded-full bg-accent" />
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
