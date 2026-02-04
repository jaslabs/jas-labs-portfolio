import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
          <div className="p-2 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg">
            <Terminal className="w-6 h-6 text-black" />
          </div>
          <span className="text-white">JAS <span className="text-cyan-400">LABS</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
          <a 
             href="#contact"
             className="px-5 py-2 rounded-full border border-cyan-500/30 text-cyan-400 text-sm font-medium hover:bg-cyan-950/30 transition-all hover:border-cyan-400"
          >
            Start a Project
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-navy-900/95 backdrop-blur-xl border-b border-white/10 md:hidden p-6 flex flex-col gap-6">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;