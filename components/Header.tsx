import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navItems } from '../data/site';
import { LinkButton } from './Button';
import Logo from './Logo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const goTo = useCallback(
    (e: React.MouseEvent, href: string) => {
      e.preventDefault();
      setMenuOpen(false);

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
    },
    [location.pathname, navigate],
  );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || menuOpen
          ? 'border-b border-ink-800 bg-ink-950/85 backdrop-blur-xl'
          : 'border-b border-transparent'
          }`}
      >
        <div className="mx-auto flex h-16 max-w-container items-center justify-between px-5 sm:px-8 lg:h-[72px]">
          <Logo onClick={(e) => goTo(e, '#')} />

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => goTo(e, item.href)}
                className="rounded-full px-4 py-2 text-sm text-ink-300 transition-colors hover:bg-ink-900 hover:text-ink-50"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/projects"
              className="rounded-full px-4 py-2 text-sm text-ink-300 transition-colors hover:bg-ink-900 hover:text-ink-50"
            >
              Projects
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <LinkButton
              href="#contact"
              onClick={(e) => goTo(e, '#contact')}
              variant="ghost"
              className="hidden sm:inline-flex"
            >
              Start a project
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </LinkButton>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 text-ink-100 transition-colors hover:border-acid-500 hover:text-acid-400 lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-ink-950/98 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col px-5 pt-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => goTo(e, item.href)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                  className="flex items-baseline gap-4 border-b border-ink-800 py-5 font-display text-2xl font-medium text-ink-50"
                >
                  <span className="font-mono text-xs text-acid-500">0{i + 1}</span>
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * navItems.length, duration: 0.3 }}
              >
                <Link
                  to="/projects"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-4 border-b border-ink-800 py-5 font-display text-2xl font-medium text-ink-50"
                >
                  <span className="font-mono text-xs text-acid-500">0{navItems.length + 1}</span>
                  Projects
                </Link>
              </motion.div>

              <LinkButton
                href="#contact"
                onClick={(e) => goTo(e, '#contact')}
                size="lg"
                className="mt-8 w-full"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </LinkButton>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
