import React from 'react';
import { Language } from '../App';

interface MethodologyProps {
  lang: Language;
}

const Methodology: React.FC<MethodologyProps> = ({ lang }) => {
  
  const content = {
    en: {
      title: "The Morris Methodology",
      box1Title: "Linguistic Decoding",
      box1Desc: "Techniques to identify \"legal triggers\" in long-form MBE questions quickly. Bypassing the linguistic speed-trap of the exam.",
      box2Title: "Structural Editing",
      box2Desc: "Weekly line-by-line critiques of your essays using professional editorial standards. We teach the writing algorithm U.S. graders use.",
      box3Title: "Logic Bridging",
      box3Desc: "Comparing and contrasting U.S. Common Law with the Japanese Civil Code to make complex principles intuitive."
    },
    jp: {
      title: "モリス・メソッド",
      box1Title: "言語的デコーディング",
      box1Desc: "長文のMBE問題から「法的トリガー」を瞬時に特定するテクニック。試験特有の言語的な落とし穴を回避し、回答速度を劇的に向上させます。",
      box2Title: "構造的エディティング",
      box2Desc: "プロの編集基準を用いた、エッセイの一行ごとの添削指導。米国の採点官が好む、論理的かつ明確な「ライティング・アルゴリズム」を伝授します。",
      box3Title: "ロジックの架け橋",
      box3Desc: "米国のコモン・ローと日本の民法を比較・対照させるアプローチ。既存の知識と結びつけることで、複雑な法理を直感的に理解できるようにします。"
    }
  };

  const t = content[lang];

  return (
    <section id="methodology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-slate-900">{t.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Box 1 */}
          <div className="border-2 border-slate-900 p-8 flex flex-col gap-4 hover:bg-brand-light transition-colors duration-300">
            <h3 className="font-serif text-2xl text-brand-green font-bold">{t.box1Title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t.box1Desc}
            </p>
          </div>

          {/* Box 2 */}
          <div className="border-2 border-slate-900 p-8 flex flex-col gap-4 hover:bg-brand-light transition-colors duration-300">
            <h3 className="font-serif text-2xl text-brand-green font-bold">{t.box2Title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t.box2Desc}
            </p>
          </div>

          {/* Box 3 */}
          <div className="border-2 border-slate-900 p-8 flex flex-col gap-4 hover:bg-brand-light transition-colors duration-300">
            <h3 className="font-serif text-2xl text-brand-green font-bold">{t.box3Title}</h3>
            <p className="text-slate-600 leading-relaxed">
               {t.box3Desc}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Methodology;