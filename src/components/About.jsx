import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Target, Code, User } from 'lucide-react';
import CONFIG from '../data/config';
import {
  GLASS_CARD,
  GLASS_CARD_HOVER,
  SECTION_PADDING,
  CONTAINER,
  HEADING_GRADIENT,
  ACCENT_BAR,
  ICON_BADGE,
  BG_ORB_1,
  BG_ORB_2,
} from '../designSystem';
import { staggerContainer, fadeUp, cardReveal, hoverLift } from '../motionVariants';

const INFO_CARDS = [
  {
    Icon: GraduationCap,
    title: 'Education',
    content: (
      <>
        <p className="font-semibold text-slate-800 dark:text-white">{CONFIG.education.degree}</p>
        <p className="text-slate-600 dark:text-slate-400 mt-1">{CONFIG.education.university}</p>
        <p className="text-slate-500 dark:text-slate-450 text-sm mt-0.5">{CONFIG.education.year}</p>
      </>
    ),
  },
  {
    Icon: Target,
    title: 'Career Goal',
    content: (
      <p className="text-slate-650 dark:text-slate-300 leading-relaxed">{CONFIG.personal.goal}</p>
    ),
  },
  {
    Icon: Code,
    title: 'What I Do',
    content: (
      <p className="text-slate-650 dark:text-slate-300 leading-relaxed">
        Building scalable full-stack applications, solving complex problems, and creating
        intuitive web experiences.
      </p>
    ),
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={ref}
      className={`section-bg-alt ${SECTION_PADDING} relative`}
    >
      {/* Shared background decoration */}
      <div className={BG_ORB_1} />
      <div className={BG_ORB_2} />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className={`${CONTAINER} relative z-10`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* ── Section Title ──────────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400 mb-3">
              Get to know me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              About{' '}
              <span className={HEADING_GRADIENT}>Me</span>
            </h2>
            <div className={ACCENT_BAR} />
          </motion.div>

          {/* ── Two-Column Layout ──────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT — Bio */}
            <motion.div variants={fadeUp}>
              {/* Avatar + Who I Am */}
              <div className="flex items-center gap-4 mb-6">
                <div className={ICON_BADGE}>
                  <User size={22} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Who I Am</h3>
              </div>

              <p className="text-slate-650 dark:text-slate-300 text-base leading-relaxed mb-4">
                {CONFIG.personal.bio}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">
                I love exploring new technologies, building projects that make a difference,
                and continuously learning to stay ahead in the fast-evolving tech landscape.
              </p>

              {/* Divider */}
              <div className="mt-8 h-px bg-gradient-to-r from-indigo-500/30 via-violet-500/20 to-transparent" />

              {/* Quick stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: `${CONFIG.projects.length}+`, label: 'Projects' },
                  { value: `${CONFIG.certificates.length}+`, label: 'Certificates' },
                ].map(({ value, label }) => (
                  <div key={label} className={`${GLASS_CARD} p-4 text-center`}>
                    <div className={`text-2xl font-bold ${HEADING_GRADIENT}`}>{value}</div>
                    <div className="text-slate-500 dark:text-slate-450 text-xs mt-1 uppercase tracking-wider">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — Info Cards */}
            <motion.div variants={staggerContainer} className="space-y-4">
              {INFO_CARDS.map(({ Icon, title, content }, i) => (
                <motion.div
                  key={title}
                  variants={cardReveal}
                  whileHover={hoverLift}
                  className={`${GLASS_CARD} ${GLASS_CARD_HOVER} p-6 cursor-default`}
                >
                  <div className="flex items-start gap-4">
                    <div className={ICON_BADGE}>
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{title}</h4>
                      {content}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
