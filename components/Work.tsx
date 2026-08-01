import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import SectionHeading from './SectionHeading';
import ProjectRow from './ProjectRow';

const Work: React.FC = () => (
  <section id="work" className="scroll-mt-24 py-24 lg:py-32">
    <div className="mx-auto max-w-container px-5 sm:px-8">
      <SectionHeading
        eyebrow="Selected work"
        title="Systems in production, and research behind them."
        lead="Seven builds across petroleum data, defence training, real estate, civic tech and NLP. Each one shipped by the same three people."
        action={
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-ink-700 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-200 transition-colors hover:border-acid-500 hover:text-acid-400"
          >
            All projects
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        }
      />

      <div className="mt-14 border-t border-ink-800">
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Work;
