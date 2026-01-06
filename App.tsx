import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Methodology from './components/Methodology';
import Practice from './components/Practice';
import Syllabus from './components/Syllabus';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export type Language = 'en' | 'jp';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`font-sans antialiased bg-brand-light text-slate-900 selection:bg-brand-green selection:text-white ${lang === 'jp' ? 'font-sans-jp' : ''}`}>
      <Navbar scrolled={scrolled} lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Methodology lang={lang} />
        <Practice lang={lang} />
        <Syllabus lang={lang} />
        <Pricing lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}