import React, { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface LightboxProps {
    images: string[];
    index: number | null;
    title?: string;
    onClose: () => void;
    onNavigate: (nextIndex: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, index, title, onClose, onNavigate }) => {
    const isOpen = index !== null;

    const step = useCallback(
        (delta: number) => {
            if (index === null || images.length === 0) return;
            onNavigate((index + delta + images.length) % images.length);
        },
        [index, images.length, onNavigate],
    );

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') step(1);
            if (e.key === 'ArrowLeft') step(-1);
        };

        const { overflow } = document.body.style;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = overflow;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onClose, step]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-label={title ?? 'Image viewer'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[100] flex flex-col bg-ink-950/95 backdrop-blur-md"
                >
                    <div className="flex shrink-0 items-center justify-between gap-4 border-b border-ink-800 px-5 py-4">
                        <div className="min-w-0">
                            {title && (
                                <p className="truncate font-display text-sm font-medium text-ink-50">{title}</p>
                            )}
                            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
                                {String((index ?? 0) + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            aria-label="Close viewer"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-200 transition-colors hover:border-acid-500 hover:text-acid-400"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="relative flex flex-1 items-center justify-center overflow-hidden p-4 sm:p-10">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={index}
                                src={images[index ?? 0]}
                                alt={title ? `${title} — screen ${(index ?? 0) + 1}` : `Screen ${(index ?? 0) + 1}`}
                                onClick={(e) => e.stopPropagation()}
                                initial={{ opacity: 0, scale: 0.985 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.985 }}
                                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                                className="max-h-full max-w-full rounded-lg border border-ink-700 object-contain shadow-2xl"
                            />
                        </AnimatePresence>

                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        step(-1);
                                    }}
                                    aria-label="Previous image"
                                    className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full border border-ink-700 bg-ink-900/80 text-ink-200 transition-colors hover:border-acid-500 hover:text-acid-400 sm:left-6"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        step(1);
                                    }}
                                    aria-label="Next image"
                                    className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full border border-ink-700 bg-ink-900/80 text-ink-200 transition-colors hover:border-acid-500 hover:text-acid-400 sm:right-6"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </>
                        )}
                    </div>

                    {images.length > 1 && (
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="flex shrink-0 items-center justify-center gap-2 border-t border-ink-800 px-5 py-4"
                        >
                            {images.map((src, i) => (
                                <button
                                    key={src}
                                    onClick={() => onNavigate(i)}
                                    aria-label={`Go to image ${i + 1}`}
                                    className={`h-12 w-16 overflow-hidden rounded border transition-all ${i === index
                                        ? 'border-acid-500 opacity-100'
                                        : 'border-ink-700 opacity-45 hover:opacity-80'
                                        }`}
                                >
                                    <img src={src} alt="" className="h-full w-full object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>,
        document.body,
    );
};

export default Lightbox;
