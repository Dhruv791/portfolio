import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import CONFIG from '../data/config';
import DeveloperIllustration from './DeveloperIllustration';
import {
  BTN_PRIMARY,
  BTN_OUTLINE,
  BG_ORB_1,
  BG_ORB_2,
  BG_ORB_3,
  CONTAINER,
} from '../designSystem';
import {
  heroLeft,
  heroRight,
  heroStagger,
  heroItem,
  floatAnimation,
  professionEnter,
  hoverButton,
  tapButton,
  hoverGlow,
} from '../motionVariants';

// Rotating profession words
const PROFESSIONS = ['FULL STACK', 'FRONTEND', 'REACT', 'AI / ML', 'PYTHON'];

const Hero = () => {
  const [profIndex, setProfIndex] = useState(0);

  // Rotate profession word every 2.2s
  useEffect(() => {
    const id = setInterval(() => {
      setProfIndex((i) => (i + 1) % PROFESSIONS.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="section-bg min-h-screen flex flex-col items-center justify-center relative"
    >
      {/* ── Shared Background Decoration ─────────────────────────────────── */}
      <div className={BG_ORB_1} />
      <div className={BG_ORB_2} />
      <div className={BG_ORB_3} />
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* ── Main Content ──────────────────────────────────────────────────── */}
      <div className={`${CONTAINER} relative z-10 w-full`}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[85vh] py-24">

          {/* ── LEFT — Text Content ────────────────────────────────────────── */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Greeting */}
            <motion.div variants={heroItem} className="mb-2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={heroItem}
              className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight"
            >
              <span className="text-white">Hi,&nbsp;</span>
              <span className="text-slate-400">I'm</span>
              <br />
              <span className="text-gradient">{CONFIG.personal.name}</span>
            </motion.h1>

            {/* Animated profession text */}
            <motion.div
              variants={heroItem}
              className="mt-5 flex items-center gap-3 h-12"
            >
              <div className="w-[3px] h-10 rounded-full bg-gradient-to-b from-indigo-500 to-emerald-500 shrink-0" />
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={profIndex}
                    variants={professionEnter}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="block text-xl sm:text-2xl font-semibold tracking-widest text-gradient"
                  >
                    {PROFESSIONS[profIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={heroItem}
              className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg"
            >
              {CONFIG.personal.homeBio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={heroItem}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={hoverButton}
                whileTap={tapButton}
                onClick={scrollToProjects}
                className={BTN_PRIMARY}
              >
                View Projects <ArrowRight size={18} />
              </motion.button>

              <motion.a
                whileHover={hoverButton}
                whileTap={tapButton}
                href={CONFIG.personal.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className={BTN_OUTLINE}
              >
                <Download size={18} /> Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={heroItem}
              className="mt-8 flex items-center gap-3"
            >
              <span className="text-slate-500 text-sm">Find me on</span>
              <div className="flex gap-3">
                {[
                  { href: CONFIG.social.github, Icon: Github, label: 'GitHub' },
                  { href: CONFIG.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                  { href: `mailto:${CONFIG.social.email}`, Icon: Mail, label: 'Email' },
                ].map(({ href, Icon, label }) => (
                  <motion.a
                    key={label}
                    whileHover={hoverGlow}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Developer Illustration ───────────────────────────────── */}
          <motion.div
            variants={heroRight}
            initial="hidden"
            animate="visible"
            className="flex justify-center items-center"
          >
            <DeveloperIllustration />
          </motion.div>

        </div>
      </div>

      {/* ── Scroll Indicator ─────────────────────────────────────────────── */}
      <motion.button
        onClick={scrollToAbout}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 hover:text-indigo-400 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  );
};

export default Hero;
