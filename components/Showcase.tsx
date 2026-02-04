import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'FinTech Dashboard',
    category: 'Web Application',
    image: 'https://picsum.photos/seed/fintech/800/600',
    problem: 'Legacy system latency causing 40% user churn.',
    solution: 'Re-engineered with React & Go for real-time socket connections.',
    result: '+200% Speed Improvement'
  },
  {
    id: '2',
    title: 'HealthAI Diagnostics',
    category: 'Machine Learning',
    image: 'https://picsum.photos/seed/medical/800/600',
    problem: 'Manual diagnostics were slow and prone to error.',
    solution: 'Deployed Computer Vision model with 99.8% accuracy.',
    result: 'Reduced diagnosis time by 90%'
  },
  {
    id: '3',
    title: 'EcoTrack Mobile',
    category: 'Mobile App',
    image: 'https://picsum.photos/seed/eco/800/600',
    problem: 'Disconnect between field sensors and user reporting.',
    solution: 'Offline-first React Native architecture with IoT sync.',
    result: '50k+ Active Daily Users'
  }
];

const Showcase: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-navy-800/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-slate-400 max-w-xl">
              Real problems. Technical solutions. Measurable results.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group">
            View All Projects <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase bg-black/50 backdrop-blur-md rounded-full text-white border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors flex items-center gap-3">
                {project.title}
              </h3>

              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-slate-700">
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Problem</p>
                  <p className="text-slate-300 text-sm">{project.problem}</p>
                </div>
                <div className="pl-4 border-l-2 border-slate-700">
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Solution</p>
                  <p className="text-slate-300 text-sm">{project.solution}</p>
                </div>
                <div className="pl-4 border-l-2 border-cyan-500">
                  <p className="text-xs text-cyan-400 uppercase tracking-widest mb-1">Result</p>
                  <p className="text-white font-medium">{project.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;