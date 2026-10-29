import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import Section from './Section';

// Newest work first
const order = ['nexus-dominion', 'algolens', 'soundscope', 'drift-monitoring-api', 'variational-autoencoders'];
const projects = [...projectsData].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));

function Project({ project }) {
  const [open, setOpen] = useState(false);
  const detailsId = `${project.id}-details`;

  return (
    <li className="py-7 first:pt-0 border-b border-rule last:border-b-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-serif text-2xl text-ink">
          <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            {project.title}
          </a>
        </h3>
        <span className="font-mono text-xs text-muted">{project.period}</span>
      </div>

      <p className="mt-2 text-base leading-relaxed text-ink/90 max-w-prose">{project.tagline}</p>

      <p className="mt-3 font-mono text-xs leading-relaxed text-muted">{project.tags.join(' · ')}</p>

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link">
            Try it ↗
          </a>
        )}
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link">
          Source ↗
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={detailsId}
          className="link text-muted"
        >
          {open ? 'Less' : 'How it works'}
        </button>
      </div>

      {open && (
        <div id={detailsId} className="mt-5 pl-4 border-l-2 border-accent/60 space-y-5 max-w-prose">
          {project.modalDetails?.problemStatement && (
            <p className="text-[15px] leading-relaxed text-ink/90">{project.modalDetails.problemStatement}</p>
          )}

          <ul className="space-y-2.5 text-[15px] leading-relaxed text-ink/90 list-disc pl-5 marker:text-muted">
            {project.keyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          {project.modalDetails?.metricsAndResults && (
            <table className="w-full text-sm">
              <tbody>
                {project.modalDetails.metricsAndResults.map((metric) => (
                  <tr key={metric.label} className="border-t border-rule">
                    <td className="py-2 pr-4 text-muted align-top">{metric.label}</td>
                    <td className="py-2 text-ink">{metric.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </li>
  );
}

export default function Projects() {
  return (
    <Section id="work" label="Work">
      <ul>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
    </Section>
  );
}
