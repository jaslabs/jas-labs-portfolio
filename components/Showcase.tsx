import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const Showcase: React.FC = () => {
  // Only show the first 3 projects on the home page
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="work" className="py-32 bg-navy-800/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-slate-400 max-w-xl">
              Real problems. Technical solutions. Measurable results.
            </p>
          </div>
          <Link to="/projects" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group">
            View All Projects <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;