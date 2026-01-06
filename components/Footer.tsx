import React from 'react';
import { Language } from '../App';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  
  const content = {
    en: {
      ctaTitle: "Limited Enrollment\nfor Feb 1st.",
      ctaDesc: "Next session begins in Tokyo. Applications close January 25, 2026.",
      ctaButton: "Apply Now",
      copyright: "© 2026 MORRIS BAR STRATEGY. TOKYO, JAPAN."
    },
    jp: {
      ctaTitle: "2月1日開始コース\n限定募集中",
      ctaDesc: "次回セッションは東京で開催。2026年1月25日 締め切り。",
      ctaButton: "今すぐ申し込む",
      copyright: "© 2026 MORRIS BAR STRATEGY. TOKYO, JAPAN."
    }
  };

  const t = content[lang];

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CTA Section */}
        <div className="border-b border-white/10 pb-20 mb-16 text-center lg:text-left flex flex-col lg:flex-row justify-between items-end gap-12">
           <div>
              <h2 className="font-serif text-4xl lg:text-6xl mb-6 whitespace-pre-line">{t.ctaTitle}</h2>
              <p className="text-gray-400 text-lg">{t.ctaDesc}</p>
           </div>
           <div>
              <button className="bg-white text-brand-dark px-10 py-5 text-lg font-medium hover:bg-gray-200 transition-colors min-w-[200px]">
                {t.ctaButton}
              </button>
           </div>
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row gap-8 items-center">
             <span className="text-white font-serif text-xl tracking-tight">MORRIS | BAR</span>
          </div>

          <div className="flex gap-4">
             {/* Social links removed */}
          </div>
        </div>

        <div className="mt-12 text-center md:text-left text-xs text-gray-600 uppercase tracking-wider">
          {t.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;