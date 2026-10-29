import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import Section, { Reveal } from './Section';
import nexusShot from '../assets/work/nexus.jpg';
import algolensShot from '../assets/work/algolens.jpg';
import soundscopeShot from '../assets/work/soundscope.jpg';
import vaeStrip from '../assets/work/vae-interp.jpg';
import vaeGenerated from '../assets/work/vae-generated.jpg';

// Newest work first
const order = ['nexus-dominion', 'algolens', 'soundscope', 'drift-monitoring-api', 'variational-autoencoders'];
const projects = [...projectsData].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));

const panelColors = {
  'nexus-dominion': 'bg-nexus',
  algolens: 'bg-algolens',
  soundscope: 'bg-soundscope',
  'drift-monitoring-api': 'bg-drift',
  'variational-autoencoders': 'bg-vae'
};

const screenshots = {
  'nexus-dominion': nexusShot,
  algolens: algolensShot,
  soundscope: soundscopeShot
};

// A real screenshot in a minimal browser window
function BrowserShot({ src, url, alt }) {
  return (
    <div className="rounded-lg overflow-hidden bg-[#0f0f12] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.6)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:-rotate-1">
      <div className="flex items-center gap-1.5 px-3 h-7 bg-[#202024]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 flex-1 max-w-xs truncate rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] text-white/60">
          {url}
        </span>
      </div>
      <img src={src} alt={alt} loading="lazy" decoding="async" width="1200" height="750" className="block w-full h-auto" />
    </div>
  );
}

// Two distributions drawn from scratch: the reference data and a batch that has drifted
function DriftChart() {
  const curve = (mu, sigma) => {
    const pts = [];
    for (let i = 0; i <= 60; i++) {
      const x = i / 60;
      const y = Math.exp(-((x - mu) ** 2) / (2 * sigma ** 2));
      pts.push(`${(x * 400).toFixed(1)},${(170 - y * 140).toFixed(1)}`);
    }
    return pts.join(' ');
  };

  return (
    <div className="text-[#efe7d6]">
      <svg viewBox="0 0 400 200" className="w-full h-auto" role="img" aria-label="Sketch of a reference distribution and a shifted batch distribution">
        <line x1="0" y1="170" x2="400" y2="170" stroke="currentColor" strokeOpacity="0.35" />
        <polyline points={curve(0.38, 0.11)} fill="none" stroke="currentColor" strokeWidth="2" />
        <g className="transition-transform duration-700 ease-out group-hover:translate-x-10">
          <polygon points={`0,170 ${curve(0.5, 0.13)} 400,170`} fill="#ef8a5a" fillOpacity="0.28" />
          <polyline points={curve(0.5, 0.13)} fill="none" stroke="#ef8a5a" strokeWidth="2" strokeDasharray="5 4" />
        </g>
        <text x="8" y="192" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="currentColor" fillOpacity="0.7">
          reference
        </text>
        <text x="392" y="192" textAnchor="end" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#ef8a5a">
          incoming batch → drift flagged
        </text>
      </svg>
      <p className="mt-4 font-mono text-[11px] text-white/55">KS test for numeric columns · PSI for categorical ones</p>
    </div>
  );
}

function VaeVisual() {
  return (
    <div className="space-y-5">
      <figure className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-1">
        <img src={vaeGenerated} alt="Eight faces sampled from an InfoVAE trained on CelebA" loading="lazy" decoding="async" className="w-full h-auto rounded bg-white p-2" />
        <figcaption className="mt-2 font-mono text-[11px] text-white/60">Faces sampled from the InfoVAE after 50 epochs on CelebA</figcaption>
      </figure>
      <figure className="transition-transform duration-500 group-hover:translate-y-1">
        <img src={vaeStrip} alt="VQ-VAE latent interpolation between two faces, ten steps" loading="lazy" decoding="async" className="w-full h-auto rounded bg-white p-2" />
        <figcaption className="mt-2 font-mono text-[11px] text-white/60">Walking through VQ-VAE latent space, α = 0 → 0.9</figcaption>
      </figure>
    </div>
  );
}

function ProjectVisual({ project }) {
  if (screenshots[project.id]) {
    const url = (project.liveUrl || project.githubUrl).replace(/^https?:\/\//, '').replace(/\/$/, '');
    return <BrowserShot src={screenshots[project.id]} url={url} alt={`Screenshot of ${project.title}`} />;
  }
  if (project.id === 'drift-monitoring-api') return <DriftChart />;
  return <VaeVisual />;
}

function Project({ project, index }) {
  const [open, setOpen] = useState(false);
  const flipped = index % 2 === 1;
  const primaryUrl = project.liveUrl || project.githubUrl;

  return (
    <article id={project.id} className="scroll-mt-24 grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
      <Reveal className={`lg:col-span-7 ${flipped ? 'lg:order-2' : ''}`}>
        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
          className={`group block rounded-2xl p-6 sm:p-10 ${panelColors[project.id] || 'bg-ink'}`}
        >
          <ProjectVisual project={project} />
        </a>
      </Reveal>

      <Reveal delay={120} className="lg:col-span-5">
        <div className="flex items-baseline gap-3 font-mono text-xs text-muted">
          <span className="text-accent">{String(index + 1).padStart(2, '0')}</span>
          <span>{project.period}</span>
          <span>·</span>
          <span>{project.role}</span>
        </div>

        <h3 className="mt-3 font-display text-4xl sm:text-5xl font-normal tracking-tight text-ink">{project.title}</h3>

        <p className="mt-4 text-lg leading-relaxed text-ink/85">{project.tagline}</p>

        {project.facts && (
          <dl className="mt-6 grid grid-cols-2 gap-5">
            {project.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-display text-3xl text-ink">{fact.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted">{fact.label}</dd>
              </div>
            ))}
          </dl>
        )}

        <p className="mt-6 font-mono text-xs leading-relaxed text-muted">{project.tags.join(' / ')}</p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink text-paper font-medium hover:bg-accent transition-colors"
            >
              Try it live ↗
            </a>
          )}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-draw text-ink">
            Source code ↗
          </a>
          <button onClick={() => setOpen((v) => !v)} aria-expanded={open} className="link-draw text-muted hover:text-ink">
            {open ? 'Hide details −' : 'How it works +'}
          </button>
        </div>

        {open && (
          <div className="mt-6 pl-4 border-l-2 border-accent space-y-4 text-[15px] leading-relaxed text-ink/85">
            {project.modalDetails?.problemStatement && <p>{project.modalDetails.problemStatement}</p>}
            <ul className="space-y-2 list-disc pl-5 marker:text-accent">
              {project.keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        )}
      </Reveal>
    </article>
  );
}

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <Section id="work" title="Selected work" note={`${projects.length} projects, 2026`}>
        <div className="space-y-24 sm:space-y-32">
          {projects.map((project, i) => (
            <Project key={project.id} project={project} index={i} />
          ))}
        </div>
      </Section>
    </div>
  );
}
