import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import CONFIG from '../data/config';
import { HEADING_GRADIENT, CONTAINER } from '../designSystem';
import { fadeUp } from '../motionVariants';

const FOOTER_LINKS = ['Home', 'About', 'Projects', 'Skills', 'Certificates', 'Contact'];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-100 dark:bg-[#030710] border-t border-slate-200 dark:border-white/[0.06] transition-colors duration-300">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className={`${CONTAINER} py-10`}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo + copyright */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className={`text-xl font-black tracking-tight ${HEADING_GRADIENT} mb-1`}>DT</p>
            <p className="text-slate-500 text-sm">
              © {currentYear}{' '}
              <span className="text-slate-700 dark:text-slate-400 font-medium">{CONFIG.personal.name}</span>
              . All rights reserved.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-3"
          >
            {[
              { href: CONFIG.social.github, Icon: Github, label: 'GitHub' },
              { href: CONFIG.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${CONFIG.social.email}`, Icon: Mail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                whileHover={{ scale: 1.12, y: -2 }}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl bg-white/40 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/20 dark:hover:border-indigo-500/30 transition-all duration-200"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
