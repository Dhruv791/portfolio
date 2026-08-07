import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TechLogo } from './TechLogo';
import {
  SECTION_PADDING,
  CONTAINER,
  HEADING_GRADIENT,
  ACCENT_BAR,
  BG_ORB_1,
  BG_ORB_2,
  BG_ORB_3,
} from '../designSystem';
import { staggerContainer, fadeUp } from '../motionVariants';

const ROW1_SKILLS = [
  'React',
  'Angular',
  'HTML5',
  'CSS3',
  'JavaScript (ES6)',
  'Tailwind CSS',
  'Bootstrap',
  'Vite',
  'Git',
  'GitHub',
  'Vercel',
  'Postman'
];

const ROW2_SKILLS = [
  'Node.js',
  'Express.js',
  'FastAPI',
  'Java',
  'Python',
  'MongoDB',
  'PostgreSQL',
  'SQL',
  'REST API',
  'JWT Authentication',
  'Prompt Engineering',
  'Google Gemini API',
  'OpenAI API',
  'AI Integration',
  'XGBoost'
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // Triple the list elements to ensure seamless wrap-around at all viewport widths
  const row1Doubled = [...ROW1_SKILLS, ...ROW1_SKILLS, ...ROW1_SKILLS];
  const row2Doubled = [...ROW2_SKILLS, ...ROW2_SKILLS, ...ROW2_SKILLS];

  return (
    <section
      id="skills"
      ref={ref}
      className={`section-bg ${SECTION_PADDING} relative overflow-hidden`}
    >
      {/* ── Background Decoration & Grid ── */}
      <div className={BG_ORB_1} />
      <div className={BG_ORB_2} />
      <div className={BG_ORB_3} />
      {/* Radial soft purple glow directly centered behind the marquee */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="w-full relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* ── Section Heading ── */}
          <div className={CONTAINER}>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-650 dark:text-indigo-400 mb-3">
                Skills & Technologies
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Tech <span className={HEADING_GRADIENT}>Stack</span>
              </h2>
              <div className={ACCENT_BAR} />
              <p className="mt-4 text-slate-600 dark:text-slate-400 text-base max-w-xl mx-auto">
                Hover over the technologies to pause and focus, or explore my key frameworks.
              </p>
            </motion.div>
          </div>

          {/* ── Marquee Rows Wrapper (full-width horizontal scroll layout) ── */}
          <div className="flex flex-col gap-6 w-full py-4 relative overflow-hidden select-none">
            
            {/* Row 1: Right → Left (Loops leftwards) */}
            <div className="w-full overflow-hidden relative flex py-2 hover-pause mask-marquee">
              {/* Fade masks at edges for Vercel style smoothness */}
              <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 dark:from-[#060913] to-transparent z-25 pointer-events-none" />
              <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 dark:from-[#060913] to-transparent z-25 pointer-events-none" />

              <div className="animate-marquee-left hover:[animation-play-state:paused] flex gap-4 shrink-0 px-2">
                {row1Doubled.map((skill, index) => (
                  <motion.div
                    key={`${skill}-${index}`}
                    whileHover={{ 
                      y: -4, 
                      scale: 1.05, 
                      boxShadow: "0 0 25px rgba(139, 92, 246, 0.4)" 
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex items-center gap-3 px-5 py-3 rounded-full 
                      bg-white/40 dark:bg-white/[0.04] backdrop-blur-xl 
                      border border-slate-200/80 dark:border-white/[0.08] 
                      shadow-[0_8px_32px_rgba(0,0,0,0.02)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                      text-slate-700 dark:text-slate-200 font-medium text-sm sm:text-base 
                      hover:text-indigo-650 dark:hover:text-white hover:border-indigo-500/20 dark:hover:border-indigo-500/30 
                      cursor-default transition-colors duration-200"
                  >
                    <TechLogo name={skill} />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Row 2: Left → Right (Loops rightwards) */}
            <div className="w-full overflow-hidden relative flex py-2 hover-pause mask-marquee">
              {/* Fade masks */}
              <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 dark:from-[#060913] to-transparent z-25 pointer-events-none" />
              <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 dark:from-[#060913] to-transparent z-25 pointer-events-none" />

              <div className="animate-marquee-right hover:[animation-play-state:paused] flex gap-4 shrink-0 px-2">
                {row2Doubled.map((skill, index) => (
                  <motion.div
                    key={`${skill}-${index}`}
                    whileHover={{ 
                      y: -4, 
                      scale: 1.05, 
                      boxShadow: "0 0 25px rgba(139, 92, 246, 0.4)" 
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex items-center gap-3 px-5 py-3 rounded-full 
                      bg-white/40 dark:bg-white/[0.04] backdrop-blur-xl 
                      border border-slate-200/80 dark:border-white/[0.08] 
                      shadow-[0_8px_32px_rgba(0,0,0,0.02)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                      text-slate-700 dark:text-slate-200 font-medium text-sm sm:text-base 
                      hover:text-indigo-650 dark:hover:text-white hover:border-indigo-500/20 dark:hover:border-indigo-500/30 
                      cursor-default transition-colors duration-200"
                  >
                    <TechLogo name={skill} />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
