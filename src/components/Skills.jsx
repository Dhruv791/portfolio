import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2, Server, Brain, Database, Wrench,
  Layout, Cpu, GitBranch, Globe, Terminal,
} from 'lucide-react';

import {
  GLASS_CARD,
  GLASS_CARD_HOVER,
  SECTION_PADDING,
  CONTAINER,
  HEADING_GRADIENT,
  ACCENT_BAR,
  TECH_PILL,
  ICON_BADGE,
  BG_ORB_1,
  BG_ORB_2,
  BG_ORB_3,
} from '../designSystem';
import { staggerContainer, staggerFast, fadeUp, cardReveal, hoverLift } from '../motionVariants';

// ─── Skill categories (exact lists as specified) ──────────────────────────────
const CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend',
    Icon: Layout,
    iconColor: 'text-sky-400',
    skills: ['React', 'Angular', 'HTML5', 'CSS3', 'JavaScript (ES6)'],
  },
  {
    id: 'backend',
    label: 'Backend',
    Icon: Server,
    iconColor: 'text-violet-400',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Java', 'Python', 'PHP'],
  },
  {
    id: 'ai',
    label: 'AI / ML',
    Icon: Brain,
    iconColor: 'text-emerald-400',
    skills: ['Prompt Engineering', 'Google Gemini API', 'OpenAI API', 'AI Integration', 'XGBoost'],
  },
  {
    id: 'database',
    label: 'Database',
    Icon: Database,
    iconColor: 'text-amber-400',
    skills: ['MongoDB', 'PostgreSQL', 'SQL', 'FAISS', 'ChromaDB'],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    Icon: Wrench,
    iconColor: 'text-rose-400',
    skills: ['Git', 'GitHub', 'Postman', 'Vercel'],
  },
  {
    id: 'concepts',
    label: 'Concepts',
    Icon: Cpu,
    iconColor: 'text-indigo-400',
    skills: ['Data Structures & Algorithms', 'REST APIs', 'JWT Authentication', 'Problem Solving'],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });



  return (
    <section
      id="skills"
      ref={ref}
      className={`section-bg ${SECTION_PADDING} relative`}
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
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-3">
              What I work with
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills &{' '}
              <span className={HEADING_GRADIENT}>Expertise</span>
            </h2>
            <div className={ACCENT_BAR} />
            <p className="mt-4 text-slate-400 text-base max-w-xl mx-auto">
              Always learning and exploring new technologies to stay ahead in the ever-evolving tech landscape.
            </p>
          </motion.div>

          {/* ── Skills Grid ────────────────────────────────────────────────── */}
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {CATEGORIES.map(({ id, label, Icon, iconColor, skills }) => (
              <motion.div
                key={id}
                variants={cardReveal}
                whileHover={hoverLift}
                className={`${GLASS_CARD} ${GLASS_CARD_HOVER} p-6`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`${ICON_BADGE} ${iconColor}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-wide">{label}</h3>
                </div>

                {/* Skill Pills */}
                <motion.div
                  variants={staggerFast}
                  className="flex flex-wrap gap-2"
                >
                  {skills.map((skill, idx) => (
                    <motion.span
                      key={`${skill}-${idx}`}
                      variants={fadeUp}
                      className={TECH_PILL}
                    >
                      {typeof skill === 'string' ? skill : skill?.name ?? ''}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Bottom CTA strip ───────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className={`mt-12 ${GLASS_CARD} p-6 text-center`}
          >
            <p className="text-slate-400 text-sm sm:text-base">
              🚀&nbsp; Always learning and exploring new technologies to stay ahead in the ever-evolving tech landscape!
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
