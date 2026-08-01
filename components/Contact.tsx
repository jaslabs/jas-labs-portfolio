import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Clock, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { engagements, site } from '../data/site';
import Button from './Button';
import { Eyebrow } from './SectionHeading';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const details = [
  { Icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { Icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}` },
  { Icon: MapPin, label: 'Studio', value: site.location },
  { Icon: Clock, label: 'Timezone', value: `${site.timezone} — overlap with EU & APAC` },
];

const nextSteps = [
  'We reply within one working day.',
  'A 30-minute call to understand the problem, not to pitch.',
  'A written scope and a fixed-price estimate — no obligation.',
];

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [engagement, setEngagement] = useState<string>(engagements[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID || '').trim();
    const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '').trim();
    const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '').trim();

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      () => {
        setStatus('sent');
        formRef.current?.reset();
      },
      (error) => {
        setStatus('error');
        console.error('Email sending failed:', error?.text ?? error);
      },
    );
  };

  const busy = status === 'sending';
  const fieldClass =
    'w-full rounded-lg border border-ink-700 bg-ink-950 px-4 py-3 text-[15px] text-ink-50 placeholder:text-ink-600 transition-colors focus:border-acid-500 focus:outline-none focus:ring-1 focus:ring-acid-500/40 disabled:opacity-50';
  const labelClass = 'font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400';

  return (
    <section
      id="contact"
      className="scroll-mt-24 relative overflow-hidden border-t border-ink-800 py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[620px] rounded-full bg-acid-500/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-container px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow>Start a project</Eyebrow>

            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink-50 sm:text-5xl">
              Tell us what's
              <br />
              hard about it.
            </h2>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-300">
              The messy schema, the format nothing reads, the app that has to work offline. Those
              are the briefs we want.
            </p>

            <ol className="mt-10 space-y-4 border-t border-ink-800 pt-8">
              {nextSteps.map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink-700 font-mono text-[10px] text-acid-500">
                    {i + 1}
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink-300">{step}</span>
                </li>
              ))}
            </ol>

            <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-ink-800 bg-ink-800 sm:grid-cols-2">
              {details.map(({ Icon, label, value, href }) => (
                <div key={label} className="bg-ink-950 p-5">
                  <dt className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
                    <Icon className="h-3.5 w-3.5 text-acid-500" />
                    {label}
                  </dt>
                  <dd className="mt-2 text-sm text-ink-100">
                    {href ? (
                      <a href={href} className="transition-colors hover:text-acid-400">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-ink-800 bg-ink-900/50 p-6 backdrop-blur sm:p-8"
          >
            <div className="flex items-center justify-between border-b border-ink-800 pb-5">
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink-50">
                Project enquiry
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
                ~2 min
              </span>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="user_name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    required
                    disabled={busy}
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user_email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    required
                    disabled={busy}
                    placeholder="you@company.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="space-y-2.5">
                <span className={labelClass}>What do you need?</span>
                <input type="hidden" name="project_type" value={engagement} />
                <div className="flex flex-wrap gap-2">
                  {engagements.map((type) => (
                    <button
                      key={type}
                      type="button"
                      disabled={busy}
                      onClick={() => setEngagement(type)}
                      aria-pressed={engagement === type}
                      className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${engagement === type
                        ? 'border-acid-500 bg-acid-500 text-ink-950'
                        : 'border-ink-700 text-ink-300 hover:border-ink-600 hover:text-ink-100'
                        }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className={labelClass}>
                  The problem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  disabled={busy}
                  placeholder="What are you building, what's blocking it, and when does it need to exist?"
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <Button type="submit" size="lg" disabled={busy} className="w-full">
                {busy ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    Send enquiry
                    <Send className="h-3.5 w-3.5" />
                  </>
                )}
              </Button>

              <div aria-live="polite" className="min-h-[20px]">
                {status === 'sent' && (
                  <p className="flex items-center justify-center gap-2 font-mono text-[11px] text-acid-500">
                    <CheckCircle2 className="h-4 w-4" />
                    Received. We'll reply within one working day.
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center justify-center gap-2 font-mono text-[11px] text-red-400">
                    <AlertCircle className="h-4 w-4" />
                    Something went wrong — email us directly at {site.email}.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
