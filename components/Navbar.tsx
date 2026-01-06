import React from 'react';
import { Language } from '../App';

interface NavbarProps {
  scrolled: boolean;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, lang, setLang }) => {
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-serif text-2xl font-semibold tracking-tight">MORRIS | BAR</span>
        </div>

        <div className="flex items-center gap-3">
          {/* UK Flag (English) */}
          <button 
            onClick={() => setLang('en')}
            className={`w-10 h-10 rounded-full overflow-hidden transition-all border-2 flex items-center justify-center relative ${
              lang === 'en' 
                ? 'border-slate-900 scale-110 shadow-md ring-2 ring-white/50' 
                : 'border-slate-200 opacity-70 hover:opacity-100 hover:scale-105'
            }`}
            aria-label="English"
            title="English"
          >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-[180%] h-[180%] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
                <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
            </svg>
          </button>
          
          {/* Japan Flag (Japanese) */}
          <button 
            onClick={() => setLang('jp')}
            className={`w-10 h-10 rounded-full overflow-hidden transition-all border-2 flex items-center justify-center relative ${
              lang === 'jp' 
                ? 'border-slate-900 scale-110 shadow-md ring-2 ring-white/50' 
                : 'border-slate-200 opacity-70 hover:opacity-100 hover:scale-105'
            }`}
            aria-label="Japanese"
            title="Japanese"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-[180%] h-[180%] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
               <rect fill="#ffffff" width="900" height="600"/>
               <circle fill="#bc002d" cx="450" cy="300" r="180"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;