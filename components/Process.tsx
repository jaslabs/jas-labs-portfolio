import React from 'react';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Consult & Discovery',
    description: 'We dive deep into your business logic, identifying bottlenecks and architectural requirements before writing a single line of code.'
  },
  {
    number: '02',
    title: 'Agile Development',
    description: 'Our sprints are focused on deliverable milestones. We use CI/CD pipelines to ensure code quality and rapid iteration cycles.'
  },
  {
    number: '03',
    title: 'Deploy & Scale',
    description: 'We handle the DevOps complexity, deploying to robust cloud environments that can scale automatically with your user base.'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent hidden lg:block" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Labs Process</h2>
          <p className="text-slate-400">Streamlined execution from concept to code.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              <div className="mb-6 flex items-center justify-center lg:justify-start">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 flex items-center justify-center shadow-2xl relative z-10 group-hover:border-cyan-500/50 transition-colors">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                    {step.number}
                  </span>
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Decorative Blur for active feeling */}
              <div className="absolute -inset-4 bg-cyan-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;