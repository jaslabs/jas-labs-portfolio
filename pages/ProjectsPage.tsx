import React, { useEffect } from 'react';
import { projects } from '../data/projects';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-navy-900 min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-7xl">
                <div className="mb-12">
                    <Link to="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium mb-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">All Projects</h1>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        A comprehensive collection of our technical achievements, spanning Web GIS, Machine Learning, and Enterprise Solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
