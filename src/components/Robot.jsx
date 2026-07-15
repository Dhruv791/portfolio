import React from 'react';
import { motion } from 'framer-motion';

const Robot = () => {
  // Visor scanning animation
  const scanTransition = {
    x: [-40, 40, -40],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Status indicator blinking
  const blinkTransition = {
    opacity: [0.3, 1, 0.3],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Antennas / details animation
  const pulseTransition = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
      {/* ── Outer Concentric Radar Circles ── */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[110%] h-[110%] rounded-full border border-indigo-500/10 border-dashed pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[125%] h-[125%] rounded-full border border-emerald-500/5 border-dashed pointer-events-none"
      />

      {/* ── Background Soft Glow ── */}
      <div className="absolute w-64 h-64 bg-gradient-to-tr from-indigo-500/20 to-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* ── Main Robot Structure ── */}
      <motion.div
        className="relative w-56 h-64 sm:w-72 sm:h-80 flex flex-col items-center justify-center z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Antennas */}
        <div className="flex justify-between w-32 mb-[-6px] relative z-0">
          {/* Left Antenna */}
          <div className="flex flex-col items-center">
            <motion.div 
              animate={pulseTransition}
              className="w-3.5 h-3.5 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]"
            />
            <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-white/10" />
          </div>
          
          {/* Right Antenna */}
          <div className="flex flex-col items-center">
            <motion.div 
              animate={pulseTransition}
              className="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
            />
            <div className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-white/10" />
          </div>
        </div>

        {/* Head Container */}
        <div className="relative w-48 h-40 sm:w-60 sm:h-48 rounded-[32px] bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.5)] p-6 flex flex-col justify-between items-center overflow-hidden">
          {/* Subtle inside gradient reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.05] pointer-events-none" />
          
          {/* Top Status Lights */}
          <div className="flex gap-2.5 z-10">
            <motion.div animate={blinkTransition} className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <motion.div animate={blinkTransition} transition={{ delay: 0.5 }} className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <motion.div animate={blinkTransition} transition={{ delay: 1 }} className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>

          {/* Visor / Eye Region */}
          <div className="relative w-full h-14 sm:h-18 rounded-2xl bg-black/60 border border-white/5 flex items-center justify-center overflow-hidden shadow-inner">
            {/* Visor grid overlay */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(18,24,38,0)_95%,#fff_95%)] bg-[length:100%_4px]" />
            
            {/* Glowing Laser Scan Tracker */}
            <motion.div 
              animate={scanTransition}
              className="relative flex items-center justify-center"
            >
              {/* Visor laser bar */}
              <div className="w-16 h-3 sm:w-20 sm:h-4 rounded-full bg-indigo-500 blur-[2px] shadow-[0_0_15px_#6366f1]" />
              {/* Hot center dot */}
              <div className="absolute w-4 h-1.5 sm:w-6 sm:h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
            </motion.div>
          </div>

          {/* Mouth / Audio Wave Pattern */}
          <div className="flex items-end justify-center gap-1.5 h-6 z-10 w-full px-4">
            {[1.2, 2.5, 1.5, 2.8, 1.8, 2.4, 1.2].map((heightScale, index) => (
              <motion.div
                key={index}
                animate={{
                  height: [6, 6 * heightScale, 6]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15
                }}
                className="w-1 rounded-full bg-gradient-to-t from-indigo-500 to-emerald-400"
              />
            ))}
          </div>
        </div>

        {/* Neck connector */}
        <div className="w-8 h-4 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border-x border-white/[0.08]" />

        {/* Neck collar */}
        <div className="w-20 h-2 rounded-full bg-white/[0.08] border border-white/[0.1]" />

        {/* Torso / Shoulders mock */}
        <div className="w-40 h-10 sm:w-48 sm:h-12 rounded-t-3xl bg-white/[0.02] backdrop-blur-lg border-t border-x border-white/[0.08] shadow-[0_-8px_20px_rgba(0,0,0,0.3)] flex justify-around px-6 pt-3 overflow-hidden">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500/20 border border-indigo-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
        </div>
      </motion.div>
      
      {/* Decorative Floating Code Particles */}
      <motion.div
        animate={{ y: [0, -12, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 left-0 text-slate-600 font-mono text-xs select-none pointer-events-none hidden sm:block"
      >
        {"{ robot: true }"}
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-8 right-0 text-slate-600 font-mono text-xs select-none pointer-events-none hidden sm:block"
      >
        {"import 'AI'"}
      </motion.div>
    </div>
  );
};

export default Robot;
