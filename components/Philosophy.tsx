import React from 'react';
import { Layers, Zap, PenTool } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-900">
        {/* Background decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Decorative glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                {/* Left: Narrative */}
                <div className="lg:w-1/2">
                    <div className="inline-block mb-4 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-bold tracking-widest uppercase">
                        Our DNA
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Complexity in Logic. <br />
                        <span className="text-gradient">Simplicity in Form.</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        We believe that true innovation lies at the intersection of heavy engineering and effortless design.
                        While we leverage cutting-edge "Deep Tech"—AI, blockchain, and distributed computing—our output is always refined, minimal, and user-centric.
                    </p>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        We don't just build software; we craft digital ecosystems that are as beautiful as they are powerful.
                        This is the JAS Labs standard.
                    </p>
                </div>

                {/* Right: Values Cards */}
                <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                    {/* Card 1 */}
                    <div className="glass-card p-6 rounded-xl border-l-4 border-l-cyan-500 hover:bg-white/5 transition-colors">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-cyan-900/30 rounded-lg text-cyan-400">
                                <Layers size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Deep Tech Foundation</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    We go beyond surface-level code. We specialize in algorithmic complexity, machine learning models, and high-performance computing.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="glass-card p-6 rounded-xl border-l-4 border-l-teal-500 hover:bg-white/5 transition-colors">
                         <div className="flex items-start gap-4">
                            <div className="p-3 bg-teal-900/30 rounded-lg text-teal-400">
                                <PenTool size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Aesthetic Minimalism</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    We strip away the non-essential. Every pixel and every line of code serves a distinct purpose, resulting in cleaner, faster products.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="glass-card p-6 rounded-xl border-l-4 border-l-cyan-300 hover:bg-white/5 transition-colors">
                         <div className="flex items-start gap-4">
                            <div className="p-3 bg-cyan-900/30 rounded-lg text-cyan-300">
                                <Zap size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Future-Proof Engineering</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Scalability isn't an afterthought. We architect systems designed to handle the growth of tomorrow, not just the traffic of today.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Philosophy;