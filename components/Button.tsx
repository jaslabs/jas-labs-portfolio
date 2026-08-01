import React from 'react';

type Variant = 'primary' | 'ghost' | 'quiet';
type Size = 'md' | 'lg';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-mono text-[11px] font-medium uppercase tracking-[0.16em] transition-all duration-200 border select-none disabled:opacity-60 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950';

const variants: Record<Variant, string> = {
  primary:
    'bg-acid-500 border-acid-500 text-ink-950 hover:bg-acid-400 hover:border-acid-400 active:bg-acid-600',
  ghost:
    'bg-transparent border-ink-600 text-ink-100 hover:border-acid-500 hover:text-acid-400',
  quiet:
    'bg-ink-800 border-ink-700 text-ink-200 hover:bg-ink-700 hover:text-ink-50',
};

const sizes: Record<Size, string> = {
  md: 'h-10 px-5',
  lg: 'h-12 px-7',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => (
  <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
    {children}
  </button>
);

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => (
  <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
    {children}
  </a>
);

export default Button;
