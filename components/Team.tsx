import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { team } from '../data/site';
import SectionHeading from './SectionHeading';

const Team: React.FC = () => (
  <section id="team" className="scroll-mt-24 border-t border-ink-800 py-24 lg:py-32">
    <div className="mx-auto max-w-container px-5 sm:px-8">
      <SectionHeading
        eyebrow="The team"
        title="Three engineers. You'll work with all of them."
        lead="There is no bench, no account manager and nobody to hand your project down to. The people below are the people who write the code."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {team.map((member, i) => (
          <motion.article
            key={member.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/40 transition-colors duration-300 hover:border-ink-700"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-900">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink-50">
                  {member.name}
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-acid-500">
                  {member.role}
                </p>
              </div>
            </div>

            <div className="p-5">
              <p className="text-[15px] leading-relaxed text-ink-400">{member.bio}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {member.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-ink-800 bg-ink-950 px-2 py-1 font-mono text-[10px] text-ink-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-ink-800 pt-4">
                {[
                  { href: member.github, Icon: Github, label: 'GitHub' },
                  { href: member.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                  { href: member.twitter, Icon: Twitter, label: 'Twitter' },
                ]
                  .filter((link) => Boolean(link.href))
                  .map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on ${label}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-800 text-ink-400 transition-colors hover:border-acid-500/50 hover:text-acid-500"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
