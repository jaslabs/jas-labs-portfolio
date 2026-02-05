import React from 'react';
import { Terminal, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-navy-900 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div>
            <a href="#" className="flex items-center gap-2 text-2xl font-bold tracking-tighter mb-6">
              <div className="p-2 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg">
                <Terminal className="w-6 h-6 text-black" />
              </div>
              <span className="text-white">JAS <span className="text-cyan-400">LABS</span></span>
            </a>
            <p className="text-slate-400 max-w-xs">
              Engineering the digital future with precision, scalability, and deep technical expertise.
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Mobile Engineering</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Machine Learning</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Cloud Architecture</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} JAS Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/JAS-Labs" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://linkedin.com/JAS-Labs" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="https://twitter.com/JAS_Labs" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;