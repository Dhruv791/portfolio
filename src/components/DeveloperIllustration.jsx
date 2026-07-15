import React from 'react';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

const DeveloperIllustration = () => {
  // Animation settings for floating elements
  const floatAnim = (delay = 0, yDist = 12, duration = 4) => ({
    y: [0, -yDist, 0],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }
  });

  return (
    <div className="relative w-80 h-80 sm:w-[450px] sm:h-[450px] flex items-center justify-center select-none">
      
      {/* ── Background Glow ── */}
      <div className="absolute w-72 h-72 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ── Left Code Window ── */}
      <motion.div
        animate={floatAnim(0, 14, 4.5)}
        className="absolute left-[-20px] top-[15%] z-20 w-40 sm:w-48 overflow-hidden rounded-2xl bg-[#1b2336]/90 border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
      >
        {/* Header */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#2563eb]">
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
        </div>
        {/* Content */}
        <div className="p-3.5 space-y-2.5">
          {[
            { color: 'bg-amber-400', width: 'w-3/4' },
            { color: 'bg-sky-400', width: 'w-5/6' },
            { color: 'bg-emerald-400', width: 'w-1/2' },
            { color: 'bg-amber-400', width: 'w-2/3' },
            { color: 'bg-sky-400', width: 'w-4/5' },
          ].map((line, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-500/40 shrink-0" />
              <div className={`h-1.5 rounded-full ${line.color} ${line.width}`} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Right Code Window ── */}
      <motion.div
        animate={floatAnim(1.5, 12, 4.2)}
        className="absolute right-[-10px] top-[10%] z-20 w-44 sm:w-52 overflow-hidden rounded-2xl bg-[#1b2336]/90 border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
      >
        {/* Header */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#2563eb]">
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
        </div>
        {/* Content */}
        <div className="p-4 space-y-3">
          <div className="h-1.5 rounded-full bg-amber-400 w-11/12" />
          <div className="h-1.5 rounded-full bg-emerald-400 w-3/4" />
          <div className="h-1.5 rounded-full bg-sky-400 w-5/6" />
          <div className="h-1.5 rounded-full bg-amber-400 w-2/3" />
        </div>
      </motion.div>

      {/* ── Top Yellow Tag: < / > ── */}
      <motion.div
        animate={floatAnim(0.5, 10, 3.8)}
        className="absolute left-[20%] top-[4%] z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#f59e0b] border border-[#d97706] shadow-[0_4px_12px_rgba(245,158,11,0.3)] flex items-center justify-center"
      >
        <span className="text-white font-bold text-sm sm:text-base tracking-wider">&lt;/&gt;</span>
      </motion.div>

      {/* ── Right Blue Settings Tag ── */}
      <motion.div
        animate={floatAnim(2.2, 8, 3.5)}
        className="absolute right-[12%] bottom-[25%] z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0ea5e9] border border-[#0284c7] shadow-[0_4px_12px_rgba(14,165,233,0.3)] flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Settings className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </motion.div>

      {/* ── Bottom Right Yellow Tag: { } ── */}
      <motion.div
        animate={floatAnim(1.2, 9, 4)}
        className="absolute right-[0px] bottom-[10%] z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#f59e0b] border border-[#d97706] shadow-[0_4px_12px_rgba(245,158,11,0.3)] flex items-center justify-center"
      >
        <span className="text-white font-bold text-base sm:text-lg">{"{}"}</span>
      </motion.div>

      {/* ── Central Developer SVG Coder ── */}
      <motion.div
        animate={floatAnim(0.8, 8, 4.8)}
        className="relative w-64 h-64 sm:w-80 sm:h-80 z-10 flex items-center justify-center"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]">
          <defs>
            <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffdbb5" />
              <stop offset="100%" stopColor="#fca5a5" />
            </linearGradient>
          </defs>

          {/* Coder Head */}
          <circle cx="200" cy="140" r="45" fill="url(#skinGrad)" />
          
          {/* Hair */}
          <path d="M150 140 C150 90, 250 90, 250 140 C250 120, 235 100, 200 100 C165 100, 150 120, 150 140 Z" fill="url(#hairGrad)" />
          <path d="M155 125 Q165 110, 185 110 Q195 110, 200 115 Q210 110, 225 110 Q240 110, 245 125" fill="none" stroke="url(#hairGrad)" strokeWidth="6" strokeLinecap="round" />

          {/* Glasses */}
          <circle cx="180" cy="145" r="14" fill="none" stroke="#000" strokeWidth="4.5" />
          <circle cx="220" cy="145" r="14" fill="none" stroke="#000" strokeWidth="4.5" />
          <line x1="194" y1="145" x2="206" y2="145" stroke="#000" strokeWidth="4.5" />
          <path d="M166 142 Q158 138, 155 142" fill="none" stroke="#000" strokeWidth="3" />
          <path d="M234 142 Q242 138, 245 142" fill="none" stroke="#000" strokeWidth="3" />

          {/* Smiling Lips */}
          <path d="M188 165 Q200 174, 212 165" fill="none" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />

          {/* Neck */}
          <rect x="190" y="180" width="20" height="20" rx="5" fill="url(#skinGrad)" />

          {/* Body/Shirt */}
          <path d="M140 300 L260 300 C270 240, 270 200, 245 195 L155 195 C130 200, 130 240, 140 300 Z" fill="url(#shirtGrad)" />
          {/* White inner shirt collar */}
          <path d="M180 195 Q200 215, 220 195" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />

          {/* Laptop Screen */}
          <rect x="140" y="250" width="120" height="80" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="3" />
          {/* Keyboard base */}
          <path d="M130 330 L270 330 L260 345 L140 345 Z" fill="#0f172a" />
          {/* Glow reflection on body */}
          <ellipse cx="200" cy="270" rx="35" ry="10" fill="#3b82f6" opacity="0.3" filter="blur(6px)" />

          {/* Arms/Hands */}
          {/* Left arm */}
          <path d="M145 205 Q120 250, 145 285" fill="none" stroke="url(#skinGrad)" strokeWidth="18" strokeLinecap="round" />
          <path d="M145 205 Q120 250, 145 285" fill="none" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" />
          {/* Right arm */}
          <path d="M255 205 Q280 250, 255 285" fill="none" stroke="url(#skinGrad)" strokeWidth="18" strokeLinecap="round" />
          <path d="M255 205 Q280 250, 255 285" fill="none" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" />

          {/* Crossed Legs (Pants) */}
          <path d="M100 360 C100 320, 300 320, 300 360 C300 380, 100 380, 100 360 Z" fill="#111" />
          {/* Shoes */}
          <circle cx="130" cy="365" r="14" fill="#fff" stroke="#334155" strokeWidth="2" />
          <circle cx="270" cy="365" r="14" fill="#fff" stroke="#334155" strokeWidth="2" />
          <path d="M122 365 L138 365" stroke="#111" strokeWidth="3" />
          <path d="M262 365 L278 365" stroke="#111" strokeWidth="3" />
        </svg>

        {/* Typing particles effect */}
        <div className="absolute bottom-[35%] flex gap-1 justify-center w-full">
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        </div>
      </motion.div>

    </div>
  );
};

export default DeveloperIllustration;
