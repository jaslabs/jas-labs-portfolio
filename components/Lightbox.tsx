import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxProps {
    isOpen: boolean;
    images: string[];
    currentIndex: number;
    title?: string;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
    isOpen,
    images,
    currentIndex,
    title,
    onClose,
    onNext,
    onPrev
}) => {
    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, onNext, onPrev]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                onClick={onClose}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
                    aria-label="Close lightbox"
                >
                    <X className="w-8 h-8" />
                </button>

                {/* Project Name */}
                {title && (
                    <div className="absolute top-6 left-6 z-50">
                        <h3 className="text-sm md:text-sm font-bold text-white tracking-tight">{title}</h3>
                    </div>
                )}

                {/* Main Content */}
                <div
                    className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
                    onClick={(e) => e.stopPropagation()}
                >
                    <motion.img
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        src={images[currentIndex]}
                        alt={`Project view ${currentIndex + 1}`}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                    />

                    {/* Navigation Buttons */}
                    <button
                        onClick={(e) => { e.stopPropagation(); onPrev(); }}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-black/50 rounded-full transition-all"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); onNext(); }}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-black/50 rounded-full transition-all"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 rounded-full text-white text-sm font-medium tracking-widest backdrop-blur-md border border-white/10">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Lightbox;
