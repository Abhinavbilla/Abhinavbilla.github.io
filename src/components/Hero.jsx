import React, { useEffect, useRef, useState } from 'react';
import {
  FileText,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Code2,
  Mail,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolioData';
import profilePhoto from '../assets/profile-photo.jpg';

const rotatingRoles = [
  'scalable backends.',
  'real-time multiplayer games.',
  'ML monitoring systems.',
  'on-device AI tools.',
  'deep generative models.'
];

// Types each role out, pauses, deletes it, then moves on to the next
function useTypewriter(words, { typeMs = 70, deleteMs = 35, holdMs = 1600 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout;
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? deleteMs : typeMs
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs]);

  return text;
}

// Counts up from 0 to `end` once the element is on screen
function CountUp({ end, suffix = '', decimals = 0, duration = 1400 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setValue(end);
        return;
      }
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        setValue(end * (1 - Math.pow(1 - t, 3)));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

const stats = [
  { end: 1260, prefix: 'AIR ', label: 'JEE Mains' },
  { end: 3148, prefix: 'AIR ', label: 'JEE Advanced' },
  { end: projectsData.length, suffix: '+', label: 'Shipped projects' },
  { end: 98.1, decimals: 1, suffix: '%', label: 'Class XII score' }
];

const socials = [
  { href: personalInfo.socialLinks.github, label: 'GitHub', Icon: Github },
  { href: personalInfo.socialLinks.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: personalInfo.socialLinks.leetcode, label: 'LeetCode', Icon: Code2 },
  { href: personalInfo.socialLinks.email, label: 'Email', Icon: Mail }
];

export default function Hero() {
  const typed = useTypewriter(rotatingRoles);
  const photoRef = useRef(null);

  // Gentle 3D tilt of the portrait towards the cursor
  const handleTilt = (e) => {
    const el = photoRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
  };
  const resetTilt = () => {
    if (photoRef.current) photoRef.current.style.transform = '';
  };

  return (
    <section className="relative min-h-[calc(100svh-4.5rem)] flex flex-col justify-center pt-10 pb-16 md:pt-16">
      <div className="grid md:grid-cols-[1.25fr_1fr] items-center gap-12 md:gap-8">
        {/* Left Column: Text Content & CTAs */}
        <div className="order-2 md:order-1 flex flex-col items-start animate-pop-in">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full text-xs font-medium glass mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-slate-700 dark:text-slate-200">{personalInfo.statusPill}</span>
          </div>

          {/* Candidate Name */}
          <p className="font-mono text-sm text-indigo-600 dark:text-indigo-400 mb-3">Hi there, I'm</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-slate-900 dark:text-white">
            Billa <span className="text-gradient">Abhinav</span>
          </h1>

          {/* Typewriter tagline */}
          <p className="mt-5 font-display text-xl sm:text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 min-h-[2.5em] sm:min-h-[1.4em]">
            I build{' '}
            <span className="text-slate-900 dark:text-white">{typed}</span>
            <span className="inline-block w-[3px] h-[1em] -mb-[0.12em] ml-1 bg-indigo-500 animate-blink" />
          </p>

          {/* Core Value Proposition Narrative */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            B.Tech in Mathematics &amp; Computing at{' '}
            <span className="font-semibold text-slate-800 dark:text-slate-200">IISc Bangalore</span>, bridging
            mathematical rigor with production-grade software and machine learning.
          </p>

          {/* Call to Actions (CTAs) */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-[length:200%_100%] hover:bg-[position:100%_0] shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
            >
              <span>Explore my work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-800 dark:text-slate-100 glass hover:border-indigo-400/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="w-10 h-10 grid place-items-center rounded-full glass text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <span className="ml-3 inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <MapPin className="w-3.5 h-3.5" />
              {personalInfo.contact.location}
            </span>
          </div>
        </div>

        {/* Right Column: Portrait with animated ring */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div
            className="relative animate-float"
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <div ref={photoRef} className="relative transition-transform duration-200 ease-out [transform-style:preserve-3d]">
              {/* Spinning gradient ring */}
              <div className="absolute -inset-[3px] rounded-[2.2rem] overflow-hidden">
                <div className="absolute -inset-1/2 bg-[conic-gradient(from_0deg,#6366f1,#a855f7,#06b6d4,#6366f1)] animate-spin-slow" />
              </div>
              <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/30 blur-3xl -z-10" />
              <div className="relative w-56 h-64 sm:w-64 sm:h-72 lg:w-72 lg:h-80 rounded-[2rem] overflow-hidden bg-slate-200 dark:bg-slate-900">
                <img
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Floating badges */}
              <div className="absolute -left-6 sm:-left-10 top-8 glass rounded-xl px-3 py-2 shadow-xl [transform:translateZ(40px)]">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Studying at</div>
                <div className="font-display text-sm font-semibold text-slate-900 dark:text-white">IISc Bangalore</div>
              </div>
              <div className="absolute -right-4 sm:-right-8 bottom-10 glass rounded-xl px-3 py-2 shadow-xl [transform:translateZ(60px)]">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Focus</div>
                <div className="font-display text-sm font-semibold text-gradient">SWE · AI / ML</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden glass">
        {stats.map((stat) => (
          <div key={stat.label} className="px-5 py-5 text-center bg-white/40 dark:bg-white/[0.02]">
            <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {stat.prefix}
              <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals} />
            </div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hidden md:flex mx-auto mt-10 flex-col items-center gap-1 text-xs text-slate-400 hover:text-indigo-500 transition-colors"
      >
        <span>Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
