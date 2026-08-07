import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import CONFIG from '../data/config';
import {
  GLASS_CARD,
  GLASS_CARD_HOVER,
  SECTION_PADDING,
  CONTAINER,
  HEADING_GRADIENT,
  ACCENT_BAR,
  TECH_PILL,
  BTN_PRIMARY,
  BTN_OUTLINE,
  BG_ORB_1,
  BG_ORB_2,
  BG_ORB_3,
} from '../designSystem';
import {
  staggerContainer,
  fadeUp,
  cardReveal,
  hoverLift,
  hoverButton,
  tapButton,
  floatAnimation,
} from '../motionVariants';

// Project image mockup with browser-chrome frame
const BrowserMockup = ({ src, alt, flip }) => (
  <motion.div
    animate={floatAnimation}
    className={`relative w-full max-w-[520px] ${flip ? 'md:order-first' : ''}`}
  >
    {/* Glow behind mockup */}
    <div className="absolute inset-0 -m-4 bg-gradient-to-br from-indigo-600/20 to-violet-600/10 rounded-3xl blur-2xl" />

    {/* Browser chrome */}
    <div className={`relative ${GLASS_CARD} overflow-hidden`}>
      {/* Browser top bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-200/50 dark:border-white/[0.06] bg-slate-100/50 dark:bg-white/[0.03]">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-amber-500/70" />
        <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
        <div className="ml-3 flex-1 px-3 py-1 rounded bg-slate-200/50 dark:bg-white/[0.06] text-slate-600 dark:text-slate-500 text-xs font-mono truncate">
          localhost:5173
        </div>
      </div>

      {/* Screenshot */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <motion.img
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Subtle inner shadow */}
        <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.3)] pointer-events-none" />
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      ref={ref}
      className={`section-bg-alt ${SECTION_PADDING} relative`}
    >
      {/* Shared background decoration */}
      <div className={BG_ORB_1} />
      <div className={BG_ORB_2} />
      <div className={BG_ORB_3} />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className={`${CONTAINER} relative z-10`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* ── Section Title ──────────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="text-center mb-20">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400 mb-3">
              Selected work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured{' '}
              <span className={HEADING_GRADIENT}>Projects</span>
            </h2>
            <div className={ACCENT_BAR} />
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base max-w-xl mx-auto">
              Here are some of my recent works
            </p>
          </motion.div>

          {/* ── Case Study List ────────────────────────────────────────────── */}
          <div className="space-y-28">
            {CONFIG.projects.map((project, index) => {
              const isEven = index % 2 === 0; // even = details left, image right
              return (
                <motion.div
                  key={project.id}
                  variants={cardReveal}
                  className={`grid md:grid-cols-[5fr_6fr] gap-10 lg:gap-16 items-center ${
                    !isEven ? 'md:[&>*:first-child]:order-last' : ''
                  }`}
                >
                  {/* ── LEFT — Project details ─────────────────────────────── */}
                  <motion.div variants={staggerContainer} className="flex flex-col gap-5">
                    {/* Project number */}
                    <motion.span
                      variants={fadeUp}
                      className="text-7xl font-black text-slate-950/[0.04] dark:text-white/[0.04] leading-none select-none"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.span>

                    {/* Title */}
                    <motion.div variants={fadeUp} className="-mt-8">
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white leading-tight">
                        {project.title}
                      </h3>
                    </motion.div>

                    {/* Description */}
                    <motion.p variants={fadeUp} className="text-slate-650 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </motion.p>

                    {/* Tech Pills */}
                    <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className={TECH_PILL}>{tag}</span>
                      ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
                      <motion.a
                        whileHover={hoverButton}
                        whileTap={tapButton}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={BTN_PRIMARY}
                      >
                        <Github size={18} /> View Code
                      </motion.a>

                      {project.demo && (
                        <motion.a
                          whileHover={hoverButton}
                          whileTap={tapButton}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={BTN_OUTLINE}
                        >
                          <ExternalLink size={18} /> Live Demo
                        </motion.a>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* ── RIGHT — Browser Mockup ─────────────────────────────── */}
                  <BrowserMockup
                    src={project.image}
                    alt={project.title}
                    flip={!isEven}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* ── View More CTA ──────────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="text-center mt-20">
            <motion.a
              whileHover={hoverButton}
              whileTap={tapButton}
              href={CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={BTN_PRIMARY}
            >
              <Github size={18} /> View More on GitHub <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
