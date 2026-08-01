import React from 'react';

interface LogoProps {
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ onClick, className = '' }) => (
  <a
    href="#"
    onClick={onClick}
    aria-label="JAS Labs — home"
    className={`group flex items-center gap-3 ${className}`}
  >
    <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 bg-ink-900 transition-colors group-hover:border-acid-500">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <path
          d="M5 6.5L9.5 12 5 17.5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-acid-500"
        />
        <path
          d="M12.5 17.5H19"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="text-ink-400 transition-colors group-hover:text-acid-500"
        />
      </svg>
    </span>
    <span className="font-display text-[17px] font-semibold tracking-tight text-ink-50">
      JAS<span className="text-acid-500">.</span>Labs
    </span>
  </a>
);

export default Logo;
