import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Linkedin, Twitter, Github } from 'lucide-react';
import jahidImg from '../images/jahid.jpeg';
import saifurImg from '../images/saifur.jpeg';
import armanImg from '../images/arman.jpeg';

const team = [
    {
        name: 'Jahidul Islam',
        role: 'CEO & Mobile Architect',
        expertise: 'Flutter, Mobile Development, Strategic Leadership',
        image: jahidImg,
        icon: <Smartphone className="w-5 h-5" />,
        color: 'from-blue-500 to-indigo-500',
        description: 'Expert in crafting high-performance cross-platform mobile experiences with Flutter.',
        github: 'https://github.com/Jahidul007',
        linkedin: 'https://www.linkedin.com/in/jahidul007/',
        twitter: 'https://twitter.com/Jahidul-Islam'
    },
    {
        name: 'Arman Abdullah',
        role: 'Full Stack Developer',
        expertise: 'Web, .NET, Modern Frontend',
        image: armanImg,
        icon: <Globe className="w-5 h-5" />,
        color: 'from-orange-500 to-red-500',
        description: 'Building robust and scalable web applications with .NET and modern frameworks.',
        github: 'https://github.com/mdabdullahfaruque',
        linkedin: 'https://www.linkedin.com/in/mdabdullahfaruque/',
        twitter: 'https://twitter.com/ArmanAbdullah'
    },
    {
        name: 'Saifur Rahman',
        role: 'Backend & AI Engineer',
        expertise: 'Python, Machine Learning, Data Science',
        image: saifurImg,
        icon: <Code className="w-5 h-5" />,
        color: 'from-emerald-500 to-teal-500',
        description: 'Specializing in intelligent algorithms and data-driven solutions using Python.',
        github: 'https://github.com/Saifur43',
        linkedin: 'https://www.linkedin.com/in/saifur43',
        twitter: 'https://twitter.com/Saifur43'
    }
];

const Team: React.FC = () => {
    return (
        <section id="team" className="py-32 bg-navy-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyan-500/10 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl opacity-30" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-2 block">Our Experts</span>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-4">
                        Meet the Minds
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        The elite group of engineers driving innovation at JAS Labs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="glass-card rounded-2xl p-6 text-center group hover:border-cyan-500/30 transition-all duration-300 relative"
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl`} />

                            <div className="relative w-32 h-32 mx-auto mb-6">
                                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.color} blur-lg opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 group-hover:border-cyan-400/50 transition-colors">
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
                                            <span className="text-4xl">👨‍💻</span>
                                        </div>
                                    )}
                                </div>
                                <div className="absolute -bottom-2 -right-2 p-2 glass rounded-full text-white border border-white/10 shadow-lg">
                                    {member.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{member.name}</h3>
                            <p className={`text-sm font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-3`}>
                                {member.role}
                            </p>

                            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                {member.description}
                            </p>

                            <div className="flex items-center justify-center gap-4 border-t border-white/5 pt-4">
                                <a href={member.github} className="text-slate-500 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
                                <a href={member.linkedin} className="text-slate-500 hover:text-blue-400 transition-colors"><Linkedin className="w-4 h-4" /></a>
                                <a href={member.twitter} className="text-slate-500 hover:text-sky-400 transition-colors"><Twitter className="w-4 h-4" /></a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
