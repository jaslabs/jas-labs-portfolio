import React from 'react';
import { Code, Smartphone, Brain, Globe, Database, Cpu } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'web',
    title: 'Web Architectures',
    description: 'Scalable, high-performance web applications built with React and modern serverless infrastructure.',
    icon: 'Globe'
  },
  {
    id: 'mobile',
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile apps designed for seamless user experiences on iOS and Android.',
    icon: 'Smartphone'
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    description: 'Data-driven predictive models and AI integration to automate complex business processes.',
    icon: 'Brain'
  },
  {
    id: 'backend',
    title: 'Cloud Systems',
    description: 'Robust backend development ensuring security, reliability, and infinite scalability.',
    icon: 'Database'
  },
  {
    id: 'api',
    title: 'API Development',
    description: 'Design and implementation of RESTful and GraphQL APIs for third-party integrations.',
    icon: 'Code'
  },
  {
    id: 'iot',
    title: 'IoT Engineering',
    description: 'Connecting physical devices to the digital world through advanced embedded software.',
    icon: 'Cpu'
  }
];

const getIcon = (name: string) => {
  switch (name) {
    case 'Globe': return <Globe className="w-8 h-8 text-cyan-400" />;
    case 'Smartphone': return <Smartphone className="w-8 h-8 text-cyan-400" />;
    case 'Brain': return <Brain className="w-8 h-8 text-cyan-400" />;
    case 'Database': return <Database className="w-8 h-8 text-cyan-400" />;
    case 'Code': return <Code className="w-8 h-8 text-cyan-400" />;
    case 'Cpu': return <Cpu className="w-8 h-8 text-cyan-400" />;
    default: return <Code className="w-8 h-8 text-cyan-400" />;
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
       <div className="container mx-auto px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Engineering Excellence</h2>
          <p className="text-slate-400 text-lg">
            We don't just write code; we engineer outcomes. The <span className="text-cyan-400 font-semibold">JAS Labs Way</span> combines deep technical expertise with strategic product thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group hover:-translate-y-2 border-t-2 border-t-transparent hover:border-t-cyan-400"
            >
              <div className="mb-6 p-4 bg-cyan-950/30 rounded-xl inline-block group-hover:bg-cyan-900/40 transition-colors">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
       </div>
    </section>
  );
};

export default Services;