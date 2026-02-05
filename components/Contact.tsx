import React, { useRef, useState } from 'react';
import Button from './Button';
import { Mail, MapPin, Phone, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('Web');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    // Debugging: Check if keys are loaded (remove this in final production)
    console.log("EmailJS Config Status:", {
      ServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ? "Loaded" : "Missing",
      TemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ? "Loaded" : "Missing",
      PublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? "Loaded" : "Missing",
    });

    if (formRef.current) {
      // Create a hidden input for the selected type so EmailJS can grab it if needed
      // Alternatively, we can append it or rely on the form template logic

      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
        .then((result) => {
          setLoading(false);
          setSuccess(true);
          console.log('Email sent successfully:', result.text);
          if (formRef.current) formRef.current.reset();
        }, (error) => {
          setLoading(false);
          setError(true);
          console.error('Email sending failed:', error.text);
        });
    }
  };

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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-sm font-medium text-slate-400">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 text-white transition-colors"
                    placeholder="John Doe"
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-sm font-medium text-slate-400">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 text-white transition-colors"
                    placeholder="john@company.com"
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Project Type</label>
                <input type="hidden" name="project_type" value={selectedType} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Web', 'Mobile', 'ML/AI', 'Consulting'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 text-sm rounded-lg border transition-all ${selectedType === type
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400'
                        : 'border-white/10 text-slate-300 hover:bg-cyan-500/10 hover:border-cyan-400/50'
                        }`}
                      disabled={loading}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-400">Project Details</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 text-white transition-colors resize-none"
                  placeholder="Tell us about your technical challenges and goals..."
                  disabled={loading}
                ></textarea>
              </div>

              <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={loading}>
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                {loading ? 'Sending...' : 'Submit Request'}
              </Button>

              {success && (
                <p className="text-green-400 text-sm text-center mt-2">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
              {error && (
                <p className="text-red-400 text-sm text-center mt-2">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;