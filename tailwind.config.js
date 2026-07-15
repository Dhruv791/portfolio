/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand
        primary:  '#6366f1',   // indigo-500 — main interactive color
        accent:   '#10b981',   // emerald-500 — secondary highlight
        violet:   '#8b5cf6',   // violet-500 — gradient midpoint

        // Surfaces (dark theme)
        'brand-bg':   '#060913',   // deepest background
        'brand-surface': '#0d1426', // card background
        'brand-subtle':  '#111827', // slightly lighter

        // Text
        'text-primary': '#f8fafc',
        'text-muted':   '#94a3b8',
        'text-caption': '#64748b',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #10b981 100%)',
        'gradient-card':  'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.04) 100%)',
      },
      animation: {
        'float':        'float 4s ease-in-out infinite',
        'glow-pulse':   'glowPulse 3s ease-in-out infinite',
        'spin-slow':    'spin 20s linear infinite',
        'gradient-x':   'gradientX 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99,102,241,0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(99,102,241,0.6)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glow-primary': '0 0 30px rgba(99,102,241,0.4)',
        'glow-accent':  '0 0 30px rgba(16,185,129,0.3)',
        'glass':        '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
