import React from 'react';
import {
  FileText,
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Code2,
  Mail,
  Phone,
  GraduationCap
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profilePhoto from '../assets/profile-photo.jpg';

export default function Hero() {
  return (
    <section className="relative pt-6 pb-12 md:pt-12 md:pb-18 overflow-hidden">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Main Hero Container: Content on Left, Photo on Right */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 md:gap-10 lg:gap-12">
        {/* Left Column: Text Content & CTAs */}
        <div className="flex-1 flex flex-col items-start text-left">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 mb-5 shadow-xs backdrop-blur-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.statusPill}</span>
          </div>

          {/* Candidate Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">{personalInfo.name}</span>
          </h1>

          {/* Primary Academic Badge / Subheading */}
          <div className="flex flex-wrap items-center gap-2 text-slate-700 dark:text-slate-300 text-base sm:text-lg font-medium mb-4">
            <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold">
              <GraduationCap className="w-5 h-5" />
              {personalInfo.title}
            </span>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <span>{personalInfo.institution}</span>
            <span className="text-xs px-2.5 py-0.5 rounded-md font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60">
              {personalInfo.period}
            </span>
          </div>

          {/* Core Value Proposition Narrative */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-6">
            {personalInfo.taglines.secondary}
          </p>

          {/* Call to Actions (CTAs) */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Primary CTA: View Projects */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            {/* Secondary CTA: View / Download Resume */}
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 transition-colors shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>View Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Right Column: Circular Profile Photo */}
        <div className="shrink-0 flex items-center justify-center my-4 md:my-0">
          <div className="relative">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden border-2 border-slate-300 dark:border-slate-700 shadow-xl ring-4 ring-indigo-500/10 dark:ring-indigo-400/15 bg-slate-200 dark:bg-slate-800">
              <img
                src={profilePhoto}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top block"
                loading="eager"
                decoding="sync"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Quick Social & Contact Links */}
      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 w-full flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1">
            Connect
          </span>

          {/* GitHub */}
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700/70 transition-colors border border-slate-200 dark:border-slate-800"
            aria-label="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700/70 transition-colors border border-slate-200 dark:border-slate-800"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span>LinkedIn</span>
          </a>

          {/* LeetCode */}
          <a
            href={personalInfo.socialLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700/70 transition-colors border border-slate-200 dark:border-slate-800"
            aria-label="LeetCode Profile"
          >
            <Code2 className="w-3.5 h-3.5 text-amber-500" />
            <span>LeetCode</span>
          </a>
        </div>

        {/* Quick Direct Email & Phone badge */}
        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
          <a
            href={personalInfo.socialLinks.email}
            className="inline-flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{personalInfo.contact.email}</span>
          </a>
          <span>•</span>
          <a
            href={`tel:${personalInfo.contact.phoneClean}`}
            className="inline-flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{personalInfo.contact.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
