import React, { useState } from 'react';
import { Project } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Lightbox from './Lightbox';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const nextImage = (e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    const openLightbox = () => {
        setIsLightboxOpen(true);
    };

    return (
        <>
            <div
                className="group flex flex-col h-full bg-navy-800/30 rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20 cursor-pointer"
                onClick={openLightbox}
            >
                {/* Image Section with Slider */}
                <div className="relative overflow-hidden aspect-[4/3] group-hover:shadow-lg transition-shadow">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />

                    {/* Images */}
                    <div className="w-full h-full relative">
                        {project.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`${project.title} - view ${index + 1}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))}
                    </div>

                    {/* Category Label */}
                    <div className="absolute top-4 left-4 z-20 pointer-events-none">
                        <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md rounded-full text-white border border-white/10 shadow-lg">
                            {project.category}
                        </span>
                    </div>

                    {/* Slider Controls */}
                    <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/50 text-white rounded-full hover:bg-cyan-500/80 transition-colors opacity-0 group-hover:opacity-100"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/50 text-white rounded-full hover:bg-cyan-500/80 transition-colors opacity-0 group-hover:opacity-100"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Dots Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
                        {project.images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-cyan-400' : 'bg-white/30'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow relative z-20 bg-navy-900/80 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                    </h3>

                    <div className="space-y-4 flex-grow">
                        <div className="pl-4 border-l-2 border-slate-700">
                            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Problem</p>
                            <p className="text-slate-300 text-sm line-clamp-2 transition-all group-hover:line-clamp-none">{project.problem}</p>
                        </div>
                        <div className="pl-4 border-l-2 border-slate-700">
                            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Solution</p>
                            <p className="text-slate-300 text-sm line-clamp-2 transition-all group-hover:line-clamp-none">{project.solution}</p>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                            <p className="text-xs text-cyan-400 uppercase tracking-widest">Result</p>
                        </div>
                        <p className="text-white font-medium mt-1 pl-3.5">{project.result}</p>
                    </div>
                </div>
            </div>

            <Lightbox
                isOpen={isLightboxOpen}
                images={project.images}
                currentIndex={currentImageIndex}
                title={project.title}
                onClose={() => setIsLightboxOpen(false)}
                onNext={() => nextImage()}
                onPrev={() => prevImage()}
            />
        </>
    );
};

export default ProjectCard;
