import React from 'react';
import { Language } from '../App';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  return (
    <section className="bg-brand-light py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* The Letter Container */}
        <div className="bg-white p-8 md:p-16 lg:p-20 shadow-xl border border-gray-100 mx-auto max-w-3xl">
          
          <div className="flex flex-col gap-8">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-tight">
              {lang === 'en' 
                ? "A Message to the Japanese Legal Community"
                : "日本の法曹コミュニティへのメッセージ"
              }
            </h2>
            
            <div className="space-y-6 text-slate-700 leading-relaxed text-lg font-light">
              {lang === 'en' ? (
                <>
                  <p>
                    Navigating the U.S. Bar Exam is often described as a rite of passage for international lawyers. But for many Japanese attorneys, it feels more like a structural mismatch. After years of living in Japan and working alongside <em>Bengoshi</em>, I saw a consistent pattern: brilliant minds struggling not with the law, but with a testing format designed for the American academic rhythm.
                  </p>
                  <p>
                    Traditional U.S. bar prep companies are built for a mass audience. They offer pre-recorded videos and generic feedback that ignores the specific linguistic and logical transitions a Japanese-trained lawyer must make. <strong className="font-medium text-slate-900">I founded this program to change that.</strong>
                  </p>
                  <p>
                    As a U.S. attorney and a linguist living here in Tokyo, I realized that a critical "bridge" was missing. You don't just need more outlines; you need a partner who can explain <em>why</em> American Torts differ from the Japanese Civil Code.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    米国司法試験への挑戦は、国際弁護士にとっての「通過儀礼」とよく言われます。しかし、多くの日本人弁護士にとって、それは構造的なミスマッチのように感じられるかもしれません。長年日本に住み、日本の弁護士の皆様と共に働く中で、私はあるパターンに気づきました。それは、極めて優秀な方々が「法そのもの」ではなく、「アメリカのアカデミックなリズムに合わせて設計された試験形式」に苦戦しているという事実です。
                  </p>
                  <p>
                    従来の大手予備校は、大衆向けに作られています。録画された講義ビデオや一般的なフィードバックは、日本で訓練を受けた法律家が必要とする「言語的かつ論理的な転換」を考慮していません。<strong className="font-medium text-slate-900">私はその現状を変えるために、このプログラムを設立しました。</strong>
                  </p>
                  <p>
                    米国弁護士であり、東京に住む言語学者でもある私は、重要な「架け橋」が欠けていることに気づきました。皆様に必要なのは、単なる追加の教材ではありません。なぜアメリカの不法行為法（Torts）が日本の民法と異なるのか、その「なぜ」を体系的に説明できるパートナーが必要なのです。
                  </p>
                </>
              )}
            </div>

            <div className="pt-8 mt-4 border-t border-gray-100">
               <p className="font-serif font-bold text-lg text-slate-900">Peter Morris, Esq.</p>
               <p className="text-sm text-slate-500 uppercase tracking-wider mt-1">
                 {lang === 'en' ? "Founder, Morris Bar Strategy" : "Morris Bar Strategy 創設者 / 代表"}
               </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;