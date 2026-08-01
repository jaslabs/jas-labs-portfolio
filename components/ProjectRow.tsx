import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import Lightbox from './Lightbox';

const statusStyles: Record<Project['status'], string> = {
    Live: 'border-acid-500/40 bg-acid-500/10 text-acid-400',
    Delivered: 'border-ink-700 bg-ink-900 text-ink-300',
    Research: 'border-ink-700 bg-ink-900 text-ink-300 hatch',
};

interface ProjectRowProps {
    project: Project;
    index: number;
    /** Show the full description and tech stack (used on the projects index) */
    detailed?: boolean;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project, index, detailed = false }) => {
    const [openAt, setOpenAt] = useState<number | null>(null);
    const images = project.images ?? [];
    const showGallery = detailed && images.length > 0;
    const Wrapper = project.liveUrl ? 'a' : 'div';
    const wrapperProps = project.liveUrl
        ? { href: project.liveUrl, target: '_blank', rel: 'noopener noreferrer' }
        : {};

    return (
        <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: Math.min(index, 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group relative border-b border-ink-800"
        >
            {/* hover rail + wash */}
            <span className="absolute inset-y-0 left-0 w-px scale-y-0 bg-acid-500 transition-transform duration-300 group-hover:scale-y-100" />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-acid-500/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <Wrapper
                {...(wrapperProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                className="relative block px-4 py-8 sm:px-6"
            >
                <div className="grid gap-x-8 gap-y-5 lg:grid-cols-12 lg:items-start">
                    <div className="hidden lg:col-span-1 lg:block">
                        <span className="font-mono text-xs text-ink-600 transition-colors group-hover:text-acid-500">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="flex items-start gap-3">
                            <span className="font-mono text-xs text-ink-600 lg:hidden">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-ink-50 transition-colors group-hover:text-acid-400 sm:text-2xl">
                                {project.title}
                            </h3>
                        </div>
                        <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-ink-400">
                            {detailed ? project.description : project.summary}
                        </p>

                        {detailed && (
                            <div className="mt-5 flex flex-wrap gap-1.5">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-md border border-ink-800 bg-ink-900 px-2 py-1 font-mono text-[10px] text-ink-400"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="lg:col-span-3">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-600">
                            Discipline
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                            {project.disciplines.map((discipline) => (
                                <span
                                    key={discipline}
                                    className="rounded-full border border-ink-700 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-300"
                                >
                                    {discipline}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-600">Domain</p>
                        <p className="mt-2 text-sm text-ink-300">{project.domain}</p>
                    </div>

                    <div className="flex items-center gap-3 lg:col-span-1 lg:justify-end">
                        <span
                            className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${statusStyles[project.status]}`}
                        >
                            {project.status}
                        </span>
                        {project.liveUrl && (
                            <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-acid-500" />
                        )}
                    </div>
                </div>
            </Wrapper>

            {showGallery && (
                <div className="relative px-4 pb-8 sm:px-6 lg:pl-[calc(8.333%_+_2rem)]">
                    <div className="flex gap-3 overflow-x-auto pb-1">
                        {images.map((image, i) => (
                            <button
                                key={image}
                                onClick={() => setOpenAt(i)}
                                aria-label={`View ${project.title} screen ${i + 1}`}
                                className="relative h-24 w-40 shrink-0 overflow-hidden rounded-lg border border-ink-800 transition-colors hover:border-acid-500/60 sm:h-28 sm:w-48"
                            >
                                <img src={image} alt="" loading="lazy" className="h-full w-full object-cover" />
                            </button>
                        ))}
                    </div>

                    <Lightbox
                        images={images}
                        index={openAt}
                        title={project.title}
                        onClose={() => setOpenAt(null)}
                        onNavigate={setOpenAt}
                    />
                </div>
            )}
        </motion.article>
    );
};

export default ProjectRow;
