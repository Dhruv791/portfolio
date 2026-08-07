import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Mail, MapPin, Send, Github, Linkedin,
  CheckCircle, AlertCircle,
} from 'lucide-react';
import emailjs from 'emailjs-com';
import CONFIG from '../data/config';
import {
  GLASS_CARD,
  GLASS_CARD_HOVER,
  SECTION_PADDING,
  CONTAINER,
  HEADING_GRADIENT,
  ACCENT_BAR,
  BTN_PRIMARY,
  ICON_BADGE,
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
  hoverGlow,
} from '../motionVariants';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        CONFIG.emailjs.serviceId,
        CONFIG.emailjs.templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        CONFIG.emailjs.publicKey
      );
      setStatus({ type: 'success', message: "Message sent successfully! I'll get back to you soon." });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus({
        type: 'error',
        message: `Failed to send message. Please email me directly at ${CONFIG.social.email}`,
      });
    } finally {
      setLoading(false);
    }
  };

  // Shared glass input style
  const inputClass =
    'w-full px-4 py-3 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm ' +
    'bg-slate-100/50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] ' +
    'focus:outline-none focus:border-indigo-500/50 focus:bg-white/80 dark:focus:bg-white/[0.07] ' +
    'transition-all duration-200';

  return (
    <section
      id="contact"
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
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400 mb-3">
              Reach out
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Get In{' '}
              <span className={HEADING_GRADIENT}>Touch</span>
            </h2>
            <div className={ACCENT_BAR} />
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base max-w-xl mx-auto">
              Let's discuss opportunities or collaborations
            </p>
          </motion.div>

          {/* ── Two-Column Layout ──────────────────────────────────────────── */}
          <div className="grid md:grid-cols-[5fr_7fr] gap-10">

            {/* ── LEFT — Info ────────────────────────────────────────────── */}
            <motion.div variants={staggerContainer} className="flex flex-col gap-5">

              {/* Contact Info Cards */}
              {[
                {
                  Icon: Mail,
                  label: 'Email',
                  value: CONFIG.social.email,
                  href: `mailto:${CONFIG.social.email}`,
                },
                {
                  Icon: MapPin,
                  label: 'Location',
                  value: 'Muzaffarnagar, India',
                  href: null,
                },
              ].map(({ Icon, label, value, href }) => (
                <motion.div
                  key={label}
                  variants={cardReveal}
                  whileHover={hoverLift}
                  className={`${GLASS_CARD} ${GLASS_CARD_HOVER} p-5 flex items-center gap-4`}
                >
                  <div className={ICON_BADGE}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-slate-800 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm">
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-800 dark:text-white font-medium text-sm">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Social Links */}
              <motion.div variants={fadeUp} className="mt-2">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Connect with me</p>
                <div className="flex gap-3">
                  {[
                    { href: CONFIG.social.github, Icon: Github, label: 'GitHub' },
                    { href: CONFIG.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                  ].map(({ href, Icon, label }) => (
                    <motion.a
                      key={label}
                      whileHover={hoverGlow}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className={`${GLASS_CARD} ${GLASS_CARD_HOVER} p-3 text-slate-500 dark:text-slate-400 hover:text-indigo-650 dark:hover:text-indigo-400 transition-colors`}
                    >
                      <Icon size={22} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* ── RIGHT — Contact Form ────────────────────────────────────── */}
            <motion.div variants={cardReveal}>
              <form
                onSubmit={handleSubmit}
                className={`${GLASS_CARD} p-7 flex flex-col gap-4`}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className={inputClass}
                    id="contact-name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className={inputClass}
                    id="contact-email"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={inputClass}
                  id="contact-subject"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your Message"
                  className={`${inputClass} resize-none`}
                  id="contact-message"
                />

                {/* Status */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 p-3 rounded-xl text-sm ${
                      status.type === 'success'
                        ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                        : 'bg-red-500/10 border border-red-500/20 text-red-400'
                    }`}
                  >
                    {status.type === 'success'
                      ? <CheckCircle size={16} />
                      : <AlertCircle size={16} />
                    }
                    {status.message}
                  </motion.div>
                )}

                {/* Submit */}
                <motion.button
                  whileHover={hoverButton}
                  whileTap={tapButton}
                  type="submit"
                  disabled={loading}
                  id="contact-submit"
                  className={`${BTN_PRIMARY} w-full justify-center ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <><Send size={17} /> Send Message</>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;