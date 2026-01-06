import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Language } from '../App';

interface PricingProps {
  lang: Language;
}

const Pricing: React.FC<PricingProps> = ({ lang }) => {
  
  const content = {
    en: {
      title: "Tuition & Enrollment",
      p1Title: "Full Enrollment",
      p1Desc: "Best for firm-sponsored candidates.",
      p1Item1: "Save ¥60,000 by paying in full",
      p1Cta: "Apply Now",
      p2Title: "Installment Plan",
      p2Desc: "Split your tuition across 3 months.",
      p2Item1: "Total Tuition: ¥660,000",
      p2Cta: "Apply Now",
      commonItem1: "Weekly Live Coaching Calls",
      commonItem2: "Unlimited Essay & MPT Grading",
      commonItem3: "Private Skool Community Access",
      commonItem4: "Pass-or-Persist Guarantee",
      guaranteeTitle: "The Pass-or-Persist Guarantee",
      guaranteeDesc: "We stand firmly behind our methodology. If you complete the Morris Bar Strategy program—submitting 80% of assignments and attending coaching calls—and do not pass the bar exam, you will retain full access to the program materials, community, and monthly strategy calls for the next exam cycle at no additional cost. We are committed to your success until you pass."
    },
    jp: {
      title: "受講料 & お申し込み",
      p1Title: "フルコース（一括払い）",
      p1Desc: "事務所派遣の候補者に最適です。",
      p1Item1: "一括払いで¥60,000お得になります",
      p1Cta: "今すぐ申し込む",
      p2Title: "分割払いプラン",
      p2Desc: "授業料を3回に分割してお支払いいただけます。",
      p2Item1: "総額: ¥660,000",
      p2Cta: "今すぐ申し込む",
      commonItem1: "毎週のライブコーチング",
      commonItem2: "エッセイ・MPT添削（無制限）",
      commonItem3: "Skoolコミュニティへのアクセス権",
      commonItem4: "合格保証（不合格時の延長サポート）",
      guaranteeTitle: "完全合格保証（Pass-or-Persist）",
      guaranteeDesc: "私たちはモリス・メソッドに絶対の自信を持っています。課題の80%を提出し、コーチングセッションに参加したにもかかわらず不合格となった場合、追加費用なしで次回の試験まで教材、コミュニティ、および月次戦略コールへのアクセスを継続できます。合格するまで、私たちはあなたをサポートし続けます。"
    }
  };

  const t = content[lang];

  return (
    <section id="pricing" className="py-24 bg-brand-light/50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-slate-900">{t.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Plan 1: Full Enrollment */}
          <div className="bg-white border border-slate-200 p-10 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative group">
             <div className="absolute top-0 left-0 w-full h-1 bg-brand-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
             
             <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.p1Title}</h3>
             <p className="text-slate-500 mb-8">{t.p1Desc}</p>
             
             <div className="mb-8">
               <span className="text-5xl font-serif text-slate-900 tracking-tight">¥600,000</span>
             </div>

             <ul className="space-y-5 mb-12 flex-1">
               <li className="flex items-center gap-3 text-slate-700 font-medium">
                 <ArrowRight className="w-4 h-4 text-brand-green" />
                 {t.p1Item1}
               </li>
               <li className="flex items-center gap-3 text-slate-700">
                 <ArrowRight className="w-4 h-4 text-brand-green" />
                 {t.commonItem1}
               </li>
               <li className="flex items-center gap-3 text-slate-700">
                 <ArrowRight className="w-4 h-4 text-brand-green" />
                 {t.commonItem2}
               </li>
               <li className="flex items-center gap-3 text-slate-700">
                 <ArrowRight className="w-4 h-4 text-brand-green" />
                 {t.commonItem3}
               </li>
               <li className="flex items-center gap-3 text-slate-900 font-bold">
                 <ArrowRight className="w-4 h-4 text-brand-green" />
                 {t.commonItem4}
               </li>
             </ul>
             
             <button className="w-full bg-brand-green text-white py-5 text-lg font-medium hover:bg-brand-dark transition-colors">
               {t.p1Cta}
             </button>
          </div>

          {/* Plan 2: Installment */}
          <div className="bg-white border border-slate-200 p-10 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative group">
             <div className="absolute top-0 left-0 w-full h-1 bg-slate-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

             <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.p2Title}</h3>
             <p className="text-slate-500 mb-8">{t.p2Desc}</p>
             
             <div className="mb-8 flex items-baseline">
               <span className="text-5xl font-serif text-slate-900 tracking-tight">¥220,000</span>
               <span className="text-xl text-slate-500 ml-2">/mo</span>
             </div>

             <ul className="space-y-5 mb-12 flex-1">
               <li className="flex items-center gap-3 text-slate-700 font-medium">
                 <ArrowRight className="w-4 h-4 text-slate-900" />
                 {t.p2Item1}
               </li>
               <li className="flex items-center gap-3 text-slate-700">
                 <ArrowRight className="w-4 h-4 text-slate-900" />
                 {t.commonItem1}
               </li>
               <li className="flex items-center gap-3 text-slate-700">
                 <ArrowRight className="w-4 h-4 text-slate-900" />
                 {t.commonItem2}
               </li>
               <li className="flex items-center gap-3 text-slate-700">
                 <ArrowRight className="w-4 h-4 text-slate-900" />
                 {t.commonItem3}
               </li>
               <li className="flex items-center gap-3 text-slate-900 font-bold">
                 <ArrowRight className="w-4 h-4 text-slate-900" />
                 {t.commonItem4}
               </li>
             </ul>
             
             <button className="w-full border-2 border-slate-900 text-slate-900 py-5 text-lg font-medium hover:bg-slate-50 transition-colors">
               {t.p2Cta}
             </button>
          </div>

        </div>

        {/* Guarantee Section */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 p-8 md:p-12 text-center shadow-sm">
           <div className="inline-block p-4 bg-brand-light rounded-full mb-6">
              <ShieldCheck className="w-8 h-8 text-brand-green" />
           </div>
           <h3 className="font-serif text-2xl md:text-3xl text-slate-900 mb-4">{t.guaranteeTitle}</h3>
           <p className="text-slate-600 leading-relaxed text-lg max-w-2xl mx-auto">
             {t.guaranteeDesc}
           </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;