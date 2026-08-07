// src/designSystem.js
// Single source of truth for the portfolio design system.
// Every section component must import from here — do NOT redefine these values inline.

// ─── COLOR TOKENS ─────────────────────────────────────────────────────────────
// These map to the Tailwind custom colors in tailwind.config.js
export const COLORS = {
  // Backgrounds
  bgBase:      'bg-[#060913]',          // deepest dark — page base
  bgSurface:   'bg-[#0d1426]',          // cards / surfaces
  bgSubtle:    'bg-[#111827]',          // slightly lighter surface

  // Brand
  primary:     '#6366f1',               // indigo-500
  accent:      '#10b981',               // emerald-500

  // Text
  textPrimary: 'text-white',
  textMuted:   'text-slate-400',
  textCaption: 'text-slate-500',
};

// ─── GLASSMORPHISM CARD ────────────────────────────────────────────────────────
// Use this Tailwind class string on every card across every section.
// blur / border / opacity values defined ONCE here.
export const GLASS_CARD =
  'bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]';

// Hover-state addition (append to GLASS_CARD for interactive cards)
export const GLASS_CARD_HOVER =
  'hover:bg-white/[0.07] hover:border-indigo-500/30 hover:shadow-[0_8px_40px_rgba(99,102,241,0.15)] transition-all duration-300';

// ─── SECTION LAYOUT ───────────────────────────────────────────────────────────
// One shared container width + vertical padding so every section aligns.
export const SECTION_PADDING = 'py-24 md:py-32';
export const CONTAINER      = 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8';

// ─── SECTION HEADING ──────────────────────────────────────────────────────────
// Consistent heading + accent underbar — import and spread in JSX
export const HEADING_GRADIENT =
  'bg-gradient-to-r from-indigo-600 via-violet-600 to-emerald-600 dark:from-indigo-400 dark:via-violet-400 dark:to-emerald-400 bg-clip-text text-transparent';

export const ACCENT_BAR =
  'w-16 h-[3px] bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto mt-3 mb-6 rounded-full';

// ─── BUTTONS ─────────────────────────────────────────────────────────────────
// Primary gradient button — used in Hero CTAs, Project links, etc.
export const BTN_PRIMARY =
  'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold ' +
  'bg-gradient-to-r from-indigo-600 to-violet-600 !text-white ' +
  'shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] ' +
  'hover:scale-[1.03] active:scale-[0.97] transition-all duration-200';

// Outline / glass button — secondary CTA
export const BTN_OUTLINE =
  'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold ' +
  'border border-slate-200 dark:border-white/20 text-slate-800 dark:text-white ' +
  'bg-white/40 dark:bg-white/[0.04] backdrop-blur-sm ' +
  'hover:border-indigo-500/40 dark:hover:border-indigo-400/60 ' +
  'hover:bg-indigo-50/20 dark:hover:bg-white/[0.08] ' +
  'hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] dark:hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] ' +
  'hover:scale-[1.03] active:scale-[0.97] transition-all duration-200';

// ─── TECH / SKILL PILL ────────────────────────────────────────────────────────
export const TECH_PILL =
  'px-3 py-1 text-xs font-medium rounded-full ' +
  'bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/10 dark:border-indigo-500/20 ' +
  'text-indigo-600 dark:text-indigo-300 ' +
  'hover:bg-indigo-500/10 dark:hover:bg-indigo-500/20 transition-colors duration-150';

// ─── ICON BADGE (for section category icons) ──────────────────────────────────
export const ICON_BADGE =
  'w-12 h-12 rounded-xl flex items-center justify-center ' +
  'bg-gradient-to-br from-indigo-600/10 to-violet-600/10 dark:from-indigo-600/30 dark:to-violet-600/30 ' +
  'border border-indigo-500/10 dark:border-indigo-500/20 ' +
  'text-indigo-600 dark:text-indigo-400';

// ─── BACKGROUND DECORATION ───────────────────────────────────────────────────
// Floating blur circles — reuse across ALL sections for visual continuity.
// Use as absolutely-positioned children inside each section's wrapper.
export const BG_ORB_1 =
  'absolute top-1/4 -left-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none';
export const BG_ORB_2 =
  'absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-600/8 rounded-full blur-3xl pointer-events-none';
export const BG_ORB_3 =
  'absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none';
