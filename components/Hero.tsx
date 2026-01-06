import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../App';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  
  const content = {
    en: {
      tag: "For Japanese Attorneys & LLMs",
      titleStart: "Pass the",
      titleEnd: "Bar Exam.",
      desc: "Direct mentorship for Japanese legal professionals from Peter Morris, Esq. — Dual-licensed Attorney, Linguist, and Editor based in Tokyo.",
      ctaPrimary: "Join Next Cohort",
      metric1: "20 WEEKS",
      metric2: "LIVE COACHING",
      metric3: "PASS GUARANTEE",
      statTitle: "Foreign-Educated\nPass Rate"
    },
    jp: {
      tag: "日本人弁護士・LLM留学生対象",
      titleStart: "カリフォルニア・NY州",
      titleEnd: "司法試験合格へ。",
      desc: "米国弁護士・言語学者・編集者であるピーター・モリス（東京在住）による、日本人法務プロフェッショナルのための直接指導プログラム。",
      ctaPrimary: "次回コースに参加",
      metric1: "20週間の集中講座",
      metric2: "ライブコーチング",
      metric3: "完全合格保証",
      statTitle: "外国人弁護士\n合格率"
    }
  };

  const t = content[lang];

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Content */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-200/50 w-fit rounded-full text-xs font-semibold tracking-widest uppercase text-slate-600">
              {t.tag}
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-slate-900">
              {lang === 'en' ? (
                <>
                  Pass the <br/>
                  <span className="italic font-light">CA</span> or <span className="italic font-light">NY</span> <br/>
                  Bar Exam.
                </>
              ) : (
                <>
                  <span className="italic font-light">CA</span>・<span className="italic font-light">NY</span>州 <br/>
                  司法試験合格へ。
                </>
              )}
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              {t.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#pricing" className="bg-brand-green text-white px-8 py-4 text-center font-medium hover:bg-brand-dark transition-colors duration-300 flex items-center justify-center gap-2">
                {t.ctaPrimary} <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-8 flex flex-wrap gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                {t.metric1}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                {t.metric2}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                {t.metric3}
              </div>
            </div>
          </div>

          {/* Right Imagery */}
          <div className="lg:col-span-7 relative mt-8 lg:mt-0">
            <div className="grid grid-cols-12 gap-4">
               {/* Main large image */}
               <div className="col-span-8 h-[500px] overflow-hidden">
                 <img 
                   src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop" 
                   alt="Legal Professional Meeting" 
                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                 />
               </div>
               
               {/* Side column images */}
               <div className="col-span-4 flex flex-col gap-4 h-[500px]">
                 <div className="h-1/2 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop" 
                      alt="Study Notes" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                    />
                 </div>
                 <div className="h-1/2 bg-brand-green p-6 flex flex-col justify-between text-white">
                    <div className="text-3xl font-serif">46%</div>
                    <div className="text-xs uppercase tracking-widest opacity-80 whitespace-pre-line">{t.statTitle}</div>
                 </div>
               </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-slate-200 -z-10 hidden lg:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;