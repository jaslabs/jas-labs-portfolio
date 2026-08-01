import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { Discipline } from '../types';
import Button from '../components/Button';
import { Eyebrow } from '../components/SectionHeading';
import ProjectRow from '../components/ProjectRow';

const disciplines: Discipline[] = ['Geospatial', 'Mobile', 'Web', 'Backend', 'AI & NLP'];
type Filter = 'All' | Discipline;

const ProjectsPage: React.FC = () => {
    const [filter, setFilter] = useState<Filter>('All');
    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/');
        window.setTimeout(
            () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
            120,
        );
    };

    const visible = useMemo(
        () =>
            filter === 'All'
                ? projects
                : projects.filter((project) => project.disciplines.includes(filter)),
        [filter],
    );

    const counts = useMemo(() => {
        const map = new Map<Filter, number>([['All', projects.length]]);
        disciplines.forEach((discipline) =>
            map.set(
                discipline,
                projects.filter((project) => project.disciplines.includes(discipline)).length,
            ),
        );
        return map;
    }, []);

    return (
        <main className="relative overflow-hidden pt-28 lg:pt-36">
            <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-60" />
            <div className="pointer-events-none absolute -top-32 left-1/3 h-[420px] w-[700px] rounded-full bg-acid-500/[0.06] blur-[130px]" />

            <div className="relative mx-auto max-w-container px-5 sm:px-8">
                <Link
                    to="/"
                    className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400 transition-colors hover:text-acid-400"
                >
                    <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                    Back to studio
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-10"
                >
                    <Eyebrow>Project index</Eyebrow>
                    <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink-50 sm:text-5xl lg:text-6xl">
                        Every system we've built, in full.
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">
                        Spatial data platforms, cross-platform products and applied NLP research — what
                        each one does, what it was built with, and where it runs.
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="mt-12 flex flex-wrap items-center gap-2 border-b border-ink-800 pb-6">
                    {(['All', ...disciplines] as Filter[]).map((option) => (
                        <button
                            key={option}
                            onClick={() => setFilter(option)}
                            aria-pressed={filter === option}
                            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${filter === option
                                ? 'border-acid-500 bg-acid-500 text-ink-950'
                                : 'border-ink-700 text-ink-300 hover:border-ink-600 hover:text-ink-100'
                                }`}
                        >
                            {option}
                            <span className={filter === option ? 'text-ink-950/60' : 'text-ink-600'}>
                                {counts.get(option) ?? 0}
                            </span>
                        </button>
                    ))}
                </div>

                {/* List */}
                <div className="border-t border-transparent">
                    {visible.map((project, i) => (
                        <ProjectRow key={project.id} project={project} index={i} detailed />
                    ))}
                </div>

                {/* Tail CTA */}
                <div className="my-20 flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink-800 bg-ink-900/40 p-8 sm:flex-row sm:items-center sm:p-10">
                    <div>
                        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-50">
                            Have something harder than these?
                        </h2>
                        <p className="mt-2 max-w-lg text-[15px] text-ink-400">
                            Tell us the constraint that makes it difficult. That's the part we'd want to
                            talk about first.
                        </p>
                    </div>
                    <Button size="lg" onClick={goToContact} className="shrink-0">
                        Start a project
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>
                </div>
            </div>
        </main>
    );
};

export default ProjectsPage;
