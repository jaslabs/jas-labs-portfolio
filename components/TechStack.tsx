import React from 'react';

const techs = [
  "Flutter", "React", "TypeScript", "Node.js", "Python", "LLM Integration", "TensorFlow", "AWS", "Docker", "Kubernetes", "GraphQL", "PostgreSQL", "MongoDB", "Geoserver", "Rust", "Go"
];

const TechStack: React.FC = () => {
  return (
    <section className="py-10 border-y border-white/5 bg-black/20 overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        <div className="py-4 animate-marquee whitespace-nowrap flex gap-16 items-center">
          {/* Double the list for seamless loop */}
          {[...techs, ...techs, ...techs].map((tech, i) => (
            <span key={i} className="text-2xl font-bold text-slate-600 uppercase tracking-widest hover:text-cyan-400 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
        <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex gap-16 items-center">
          {[...techs, ...techs, ...techs].map((tech, i) => (
            <span key={`dup-${i}`} className="text-2xl font-bold text-slate-600 uppercase tracking-widest hover:text-cyan-400 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Add custom CSS for marquee in a style block if strictly needed or rely on tailwind config if we could add it there. 
          For this single-file output constraint, inline style block within the component is safest for keyframes 
          that might not be in the global index.html config 
      */}
      <style>{`
        .animate-marquee {
          animation: marquee 80s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 80s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
};

export default TechStack;