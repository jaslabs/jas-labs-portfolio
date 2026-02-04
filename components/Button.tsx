import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', icon = false, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden";
  
  const variants = {
    primary: "bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]",
    secondary: "glass text-white hover:bg-white/10 border border-white/10",
    outline: "border border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/30"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
      </span>
      {variant === 'primary' && (
         <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-cyan-400/20" />
      )}
    </button>
  );
};

export default Button;