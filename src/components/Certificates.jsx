import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import CONFIG from '../data/config';
import {
  GLASS_CARD,
  GLASS_CARD_HOVER,
  SECTION_PADDING,
  CONTAINER,
  HEADING_GRADIENT,
  ACCENT_BAR,
  BTN_PRIMARY,
  BG_ORB_1,
  BG_ORB_2,
} from '../designSystem';
import { staggerContainer, fadeUp, cardReveal, hoverLift, hoverButton, tapButton } from '../motionVariants';

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="certificates"
      ref={ref}
      className={`section-bg ${SECTION_PADDING} relative`}
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
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-3">
              Credentials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Training &{' '}
              <span className={HEADING_GRADIENT}>Certificates</span>
            </h2>
            <div className={ACCENT_BAR} />
            <p className="mt-4 text-slate-400 text-base max-w-xl mx-auto">
              Professional certifications and completed training programs
            </p>
          </motion.div>

          {/* ── Certificates Grid ──────────────────────────────────────────── */}
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {(CONFIG.certificates ?? []).map((cert) => (
              <motion.div
                key={cert.id}
                variants={cardReveal}
                whileHover={hoverLift}
                className={`${GLASS_CARD} ${GLASS_CARD_HOVER} overflow-hidden flex flex-col`}
              >
                {/* Certificate Image */}
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-indigo-900/30 to-violet-900/20 group">
                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Certificate Content */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Icon + Date row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-600/30 to-violet-600/30 border border-indigo-500/20 text-indigo-400">
                        <Award size={16} />
                      </div>
                      <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                        {cert.issuer}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 border border-white/10 px-2 py-0.5 rounded-full">
                      {cert.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-white leading-snug flex-1 mb-4">
                    {cert.title}
                  </h3>

                  {/* View Certificate Button */}
                  {cert.link && (
                    <motion.a
                      whileHover={hoverButton}
                      whileTap={tapButton}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${BTN_PRIMARY} w-full justify-center`}
                    >
                      <ExternalLink size={15} />
                      View Certificate
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
