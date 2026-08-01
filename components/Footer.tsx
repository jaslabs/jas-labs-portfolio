import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { capabilities, navItems, site } from '../data/site';
import Logo from './Logo';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const scrollToTarget = () => {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(scrollToTarget, 120);
    } else {
      scrollToTarget();
    }
  };

  const socials = [
    { href: site.github, Icon: Github, label: 'GitHub' },
    { href: site.linkedin, Icon: Linkedin, label: 'LinkedIn' },
    { href: site.twitter, Icon: Twitter, label: 'Twitter' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-ink-800 bg-ink-950">
      <div className="mx-auto max-w-container px-5 pt-16 sm:px-8">
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo onClick={(e) => goTo(e, '#')} />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-ink-400">
              {site.shortPitch} Geospatial platforms, cross-platform apps and applied NLP — built
              and handed over in full.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-block font-mono text-sm text-ink-200 underline decoration-ink-600 underline-offset-4 transition-colors hover:text-acid-400 hover:decoration-acid-500"
            >
              {site.email}
            </a>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">Studio</h4>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => goTo(e, item.href)}
                    className="text-[15px] text-ink-300 transition-colors hover:text-acid-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/projects"
                  className="text-[15px] text-ink-300 transition-colors hover:text-acid-400"
                >
                  All projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
              Capabilities
            </h4>
            <ul className="mt-5 space-y-3">
              {capabilities.slice(0, 5).map((capability) => (
                <li key={capability.id}>
                  <a
                    href="#capabilities"
                    onClick={(e) => goTo(e, '#capabilities')}
                    className="text-[15px] text-ink-300 transition-colors hover:text-acid-400"
                  >
                    {capability.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-[15px] text-ink-300">
              <li>{site.location}</li>
              <li>{site.timezone}</li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-acid-400">
                  {site.phone}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-800 text-ink-400 transition-colors hover:border-acid-500/50 hover:text-acid-500"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="relative select-none border-t border-ink-800 pt-10">
          <p className="bg-gradient-to-b from-ink-800 to-ink-950 bg-clip-text text-center font-display text-[19vw] font-semibold leading-[0.8] tracking-tighter text-transparent lg:text-[13rem]">
            JAS LABS
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-ink-800 py-6 sm:flex-row">
          <p className="font-mono text-[11px] text-ink-500">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-ink-600">
            Built in Dhaka · React · TypeScript · Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
