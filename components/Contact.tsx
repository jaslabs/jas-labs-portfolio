import React from 'react';
import Button from './Button';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info Side */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's build the <br /> impossible.</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              Ready to transform your vision into a scalable, high-performance product? Schedule a technical consultation with our lead engineers.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Email</p>
                  <p className="text-white">jaslabs43@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Phone</p>
                  <p className="text-white">+8801644199529</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">HQ</p>
                  <p className="text-white">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-card p-8 md:p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6">Request Technical Consultation</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 text-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 text-white transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Project Type</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Web', 'Mobile', 'ML/AI', 'Consulting'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className="px-4 py-2 text-sm rounded-lg border border-white/10 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:text-cyan-400 transition-all text-slate-300"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-400">Project Details</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 text-white transition-colors resize-none"
                  placeholder="Tell us about your technical challenges and goals..."
                ></textarea>
              </div>

              <Button type="button" className="w-full">Submit Request</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;