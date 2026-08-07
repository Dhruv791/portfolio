import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navSlide, hoverButton } from '../motionVariants';

const NAV_LINKS = [
  { name: 'Home',         href: '#home' },
  { name: 'About',        href: '#about' },
  { name: 'Skills',       href: '#skills' },
  { name: 'Projects',     href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact',      href: '#contact' },
];

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('#home');

  // Detect scroll for backdrop
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight active section via IntersectionObserver
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) => document.querySelector(href)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (href) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      variants={navSlide}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#060913]/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollTo('#home')}
            className="text-xl font-black tracking-tight bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent"
            aria-label="Back to top"
          >
            DT
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1">
              {NAV_LINKS.map(({ name, href }) => {
                const isActive = active === href;
                return (
                  <motion.button
                    key={name}
                    whileHover={hoverButton}
                    onClick={() => scrollTo(href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-250 ${
                      isActive
                        ? 'text-indigo-600 dark:text-white'
                        : 'text-slate-650 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-indigo-50/60 dark:bg-white/[0.07] border border-indigo-100/50 dark:border-white/[0.1]"
                        transition={{ type: 'spring', bounce: 0.22, duration: 0.45 }}
                      />
                    )}
                    <span className="relative z-10">{name}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-yellow-400 hover:text-indigo-600 dark:hover:text-yellow-300 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </div>

          {/* Mobile Actions (Theme Toggle + Menu Button) */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-yellow-400"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-450 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t border-slate-200/50 dark:border-white/[0.06]"
            >
              <div className="py-3 flex flex-col gap-1 bg-white/95 dark:bg-[#060913]/95 backdrop-blur-xl">
                {NAV_LINKS.map(({ name, href }) => (
                  <button
                    key={name}
                    onClick={() => scrollTo(href)}
                    className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors ${
                      active === href
                        ? 'text-indigo-650 dark:text-white bg-indigo-50/60 dark:bg-white/[0.07]'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/[0.04]'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
