import React from 'react';
import { 
  Github, Database, Globe, Brain, Sparkles, Cpu, Lock, Terminal, Wrench
} from 'lucide-react';

export const TechLogo = ({ name }) => {
  const sizeClass = "w-5 h-5 sm:w-6 sm:h-6 shrink-0";

  switch (name) {
    case 'React':
      return (
        <svg viewBox="0 0 100 100" className={`${sizeClass} text-sky-400 animate-spin-slow`} fill="none" stroke="currentColor" strokeWidth="6">
          <ellipse cx="50" cy="50" rx="15" ry="40" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="50" rx="15" ry="40" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="15" ry="40" transform="rotate(120 50 50)" />
          <circle cx="50" cy="50" r="6" fill="currentColor" />
        </svg>
      );
    case 'Angular':
      return (
        <svg viewBox="0 0 100 100" className={`${sizeClass} text-red-500`} fill="currentColor">
          <path d="M50 5 L92 20 L84 75 L50 95 L16 75 L8 20 Z" />
          <path d="M50 15 L80 70 L68 70 L50 32 L32 70 L20 70 Z" fill="#ffffff" />
          <polygon points="50,42 40,60 60,60" fill="currentColor" />
        </svg>
      );
    case 'HTML5':
      return (
        <svg viewBox="0 0 100 100" className={`${sizeClass} text-orange-500`} fill="currentColor">
          <path d="M10 10 L90 10 L82 82 L50 92 L18 82 Z" />
          <path d="M50 19 L78 19 L74 69 L50 76 Z" fill="#f16529" />
          <path d="M50 32 L33 32 L34 45 L50 45 L50 57 L35 57 L36 69 L50 72 Z" fill="#ffffff" />
          <path d="M50 32 L50 45 L67 45 L65 62 L50 67 L50 76 L71 70 L73 32 Z" fill="#ebebeb" />
        </svg>
      );
    case 'CSS3':
      return (
        <svg viewBox="0 0 100 100" className={`${sizeClass} text-blue-500`} fill="currentColor">
          <path d="M10 10 L90 10 L82 82 L50 92 L18 82 Z" />
          <path d="M50 19 L78 19 L74 69 L50 76 Z" fill="#29a9df" />
          <path d="M50 32 L33 32 L34 45 L50 45 L50 57 L35 57 L36 69 L50 72 Z" fill="#ffffff" />
          <path d="M50 32 L50 45 L67 45 L65 62 L50 67 L50 76 L71 70 L73 32 Z" fill="#ebebeb" />
        </svg>
      );
    case 'JavaScript (ES6)':
      return (
        <svg viewBox="0 0 100 100" className={`${sizeClass} text-yellow-400`} fill="currentColor">
          <rect width="100" height="100" rx="10" />
          <path d="M40 70 C40 60, 48 55, 52 62 C50 65, 46 64, 46 68 C46 72, 54 72, 54 62 C54 50, 36 50, 36 68 C36 82, 52 82, 52 74 L48 74 C48 77, 42 77, 40 70 Z" fill="#000000" />
          <path d="M68 78 L68 55 L74 55 L74 78 Z" fill="#000000" />
          <circle cx="71" cy="46" r="4" fill="#000000" />
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg viewBox="0 0 100 100" className={`${sizeClass} text-sky-400`} fill="currentColor">
          <path d="M50 45 C40 30, 20 30, 10 45 C20 60, 40 60, 50 45 Z" />
          <path d="M90 45 C80 30, 60 30, 50 45 C60 60, 80 60, 90 45 Z" />
          <path d="M30 65 C22 55, 8 55, 0 65 C8 75, 22 75, 30 65 Z" />
          <path d="M70 65 C62 55, 48 55, 40 65 C48 75, 62 75, 70 65 Z" />
        </svg>
      );
    case 'Bootstrap':
      return (
        <svg viewBox="0 0 100 100" className={`${sizeClass} text-violet-500`} fill="currentColor">
          <rect width="100" height="100" rx="20" />
          <path d="M30 25 L55 25 C68 25, 74 31, 74 40 C74 46, 68 51, 60 52 C70 54, 76 60, 76 70 C76 80, 68 85, 52 85 L30 85 Z M42 35 L42 50 L52 50 C58 50, 62 47, 62 42 C62 38, 58 35, 52 35 Z M42 60 L42 75 L55 75 C60 75, 64 72, 64 67 C64 62, 60 60, 55 60 Z" fill="#ffffff" />
        </svg>
      );
    case 'Vite':
      return (
        <svg viewBox="0 0 100 100" className={`${sizeClass}`} fill="none">
          <polygon points="50,15 90,30 50,90 10,30" fill="url(#viteGrad)" />
          <polygon points="50,15 50,90 90,30" fill="#bd34fe" opacity="0.8" />
          <polygon points="50,15 10,30 50,90" fill="#41b883" opacity="0.8" />
          <polygon points="45,30 65,30 35,65 55,65 25,85 45,55 35,55" fill="#ffd627" />
          <defs>
            <linearGradient id="viteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#41b883" />
              <stop offset="100%" stopColor="#bd34fe" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'Git':
      return (
        <svg viewBox="0 0 100 100" className={`${sizeClass} text-orange-600`} fill="currentColor">
          <path d="M90 44 L56 10 C52 6, 46 6, 42 10 L10 42 C6 46, 6 52, 10 56 L44 90 C48 94, 54 94, 58 90 L90 58 C94 54, 94 48, 90 44 Z M52 36 C56 36, 60 39, 60 44 C60 49, 56 52, 52 52 L52 60 C56 62, 60 66, 60 71 C60 76, 56 80, 52 80 C48 80, 44 76, 44 71 C44 66, 48 62, 52 60 L52 52 C48 52, 44 49, 44 44 C44 39, 48 36, 52 36 Z" />
        </svg>
      );
    case 'GitHub':
      return <Github className={`${sizeClass} text-slate-100`} />;
    case 'Vercel':
      return (
        <svg viewBox="0 0 100 100" className={`${sizeClass} text-white`} fill="currentColor">
          <polygon points="50,15 90,85 10,85" />
        </svg>
      );
    case 'Postman':
      return (
        <svg viewBox="0 0 100 100" className={`${sizeClass} text-orange-500`} fill="currentColor">
          <path d="M50 10 C65 10, 80 20, 85 35 C88 45, 85 58, 75 65 C68 70, 60 70, 50 68 L50 85 L44 85 L44 68 C35 70, 25 65, 18 58 C10 48, 10 32, 20 20 C28 12, 38 10, 50 10 Z" />
          <polygon points="50,22 65,38 35,38" fill="#ffffff" />
        </svg>
      );
    case 'Node.js':
      return (
        <svg viewBox="0 0 100 100" className={`${sizeClass} text-emerald-500`} fill="currentColor">
          <path d="M50 5 L88 27 L88 71 L50 93 L12 71 L12 27 Z" />
          <path d="M50 15 L78 31 L78 67 L50 83 L22 67 L22 31 Z" fill="#2d3748" />
          <path d="M35 40 L45 35 L55 55 L55 40 L65 35 L65 65 L55 60 L45 45 L45 65 L35 60 Z" fill="currentColor" />
        </svg>
      );
    case 'Express.js':
      return <Terminal className={`${sizeClass} text-slate-350`} />;
    case 'FastAPI':
      return (
        <svg viewBox="0 0 100 100" className={`${sizeClass} text-emerald-400`} fill="currentColor">
          <path d="M60 10 L20 55 L45 55 L35 90 L80 40 L50 40 Z" />
        </svg>
      );
    case 'Java':
      return (
        <svg viewBox="0 0 100 100" className={`${sizeClass} text-orange-500`} fill="currentColor">
          <path d="M30 65 Q45 75, 60 65 Q70 60, 50 50 Q30 40, 45 30 Q55 20, 65 30" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          <path d="M20 75 Q50 85, 80 75" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M25 83 Q50 92, 75 83" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 'Python':
      return (
        <svg viewBox="0 0 100 100" className={`${sizeClass}`} fill="currentColor">
          <path d="M48 8 C30 8, 25 15, 25 25 L25 35 L48 35 L48 40 L20 40 C10 40, 8 46, 8 58 C8 70, 15 72, 22 72 L32 72 L32 65 C32 50, 42 48, 52 48 L72 48 L72 25 C72 10, 65 8, 48 8 Z" fill="#3572a5" />
          <path d="M52 92 C70 92, 75 85, 75 75 L75 65 L52 65 L52 60 L80 60 C90 60, 92 54, 92 42 C92 30, 85 28, 78 28 L68 28 L68 35 C68 50, 58 52, 48 52 L28 52 L28 75 C28 90, 35 92, 48 92 Z" fill="#fcd20b" />
          <circle cx="36" cy="20" r="3" fill="#ffffff" />
          <circle cx="64" cy="80" r="3" fill="#000000" />
        </svg>
      );
    case 'MongoDB':
      return (
        <svg viewBox="0 0 100 100" className={`${sizeClass} text-emerald-500`} fill="currentColor">
          <path d="M50 5 C50 5, 25 35, 25 55 C25 75, 40 85, 50 92 C60 85, 75 75, 75 55 C75 35, 50 5 50 5 Z" />
          <path d="M50 15 C50 15, 63 35, 63 55 C63 68, 56 78, 50 82 Z" fill="#13aa52" />
          <path d="M50 5 L50 95" stroke="#ffffff" strokeWidth="4" />
        </svg>
      );
    case 'PostgreSQL':
      return (
        <svg viewBox="0 0 100 100" className={`${sizeClass} text-sky-500`} fill="currentColor">
          <path d="M50 10 C30 10, 15 25, 15 45 C15 65, 30 80, 50 80 C60 80, 68 75, 73 68 C76 72, 81 74, 85 72 C90 70, 90 62, 85 58 Q85 45, 78 30 C70 15, 60 10, 50 10 Z" />
          <circle cx="40" cy="35" r="4" fill="#ffffff" />
        </svg>
      );
    case 'SQL':
      return <Database className={`${sizeClass} text-indigo-400`} />;
    case 'REST API':
      return <Globe className={`${sizeClass} text-sky-400`} />;
    case 'JWT Authentication':
      return <Lock className={`${sizeClass} text-amber-500`} />;
    case 'Prompt Engineering':
      return <Brain className={`${sizeClass} text-purple-400`} />;
    case 'Google Gemini API':
      return <Sparkles className={`${sizeClass} text-emerald-400 animate-pulse`} />;
    case 'OpenAI API':
      return (
        <svg viewBox="0 0 100 100" className={`${sizeClass} text-emerald-600`} fill="currentColor">
          <path d="M50 10 A40 40 0 1 0 50 90 A40 40 0 1 0 50 10 Z M50 25 A25 25 0 1 1 50 75 A25 25 0 1 1 50 25 Z" />
          <path d="M50 35 L62 55 L38 55 Z" />
        </svg>
      );
    case 'AI Integration':
      return <Cpu className={`${sizeClass} text-violet-400`} />;
    case 'XGBoost':
      return <Terminal className={`${sizeClass} text-cyan-400`} />;
    default:
      return <Wrench className={`${sizeClass} text-slate-400`} />;
  }
};
