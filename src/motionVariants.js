// src/motionVariants.js
// Single source of truth for ALL Framer Motion variants.
// Import and reuse in every section — do NOT redefine per component.

// ─── SCROLL-REVEAL ────────────────────────────────────────────────────────────
// Standard fade-up for any element revealed on scroll
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── STAGGER CONTAINER ────────────────────────────────────────────────────────
// Wraps a list of children; each child should use fadeUp or cardReveal
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

// Faster stagger for dense grids (skills pills, etc.)
export const staggerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

// ─── CARD REVEAL ──────────────────────────────────────────────────────────────
// Used for cards that appear on scroll — slight scale + fade
export const cardReveal = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── HOVER EFFECTS ────────────────────────────────────────────────────────────
// Lift a card on hover — spread into whileHover prop
export const hoverLift = {
  y: -6,
  scale: 1.02,
  transition: { duration: 0.25, ease: 'easeOut' },
};

// Glow pulse on hover — for icon badges / social buttons
export const hoverGlow = {
  scale: 1.12,
  transition: { duration: 0.2, ease: 'easeOut' },
};

// Subtle scale for buttons
export const hoverButton = {
  scale: 1.05,
  transition: { duration: 0.18, ease: 'easeOut' },
};

export const tapButton = {
  scale: 0.96,
};

// ─── HERO SECTION ENTRANCE ───────────────────────────────────────────────────
// Used only in Hero — staged entrance from left + from right
export const heroLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const heroRight = {
  hidden: { opacity: 0, x: 40, scale: 0.92 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

export const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

export const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── FLOATING ANIMATION ───────────────────────────────────────────────────────
// For floating profile image, decorative elements, etc.
export const floatAnimation = {
  y: [0, -14, 0],
  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
};

// ─── PROFESSION TEXT SWAP ─────────────────────────────────────────────────────
// AnimatePresence variants for rotating profession words in Hero
export const professionEnter = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: 'blur(4px)',
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

// ─── NAV SLIDE DOWN ───────────────────────────────────────────────────────────
export const navSlide = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
