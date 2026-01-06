import React from 'react';
import { Language } from '../App';

interface PracticeProps {
  lang: Language;
}

const Practice: React.FC<PracticeProps> = ({ lang }) => {
  
  const content = {
    en: {
      tag: "Hands-on Practice",
      title: "Master the Written Exam",
      desc1: "The California and New York exams are won or lost on the Essays and MPT. We provide a structured writing algorithm rather than just model answers.",
      desc2: "Receive direct, red-line feedback on every assignment to ensure your IRAC structure meets American professional standards.",
      docHeader: "Practice Essay: Evidence",
      docMeta: "Student: K. Tanaka | Date: Oct 12, 2025",
      feedback: "\"Excellent pivot to the specific exception. You saved ~45 seconds by skipping the general Hearsay definition here. Keep this structure.\" — Peter"
    },
    jp: {
      tag: "実践演習",
      title: "記述式試験を攻略する",
      desc1: "CA州とNY州の試験の合否は、エッセイとMPT（実務課題）で決まります。当プログラムでは、単なる模範解答ではなく、合格答案を書くための構造化された「アルゴリズム」を提供します。",
      desc2: "すべての課題に対して、米国のプロフェッショナル基準を満たすIRAC構成になっているか、赤ペンによる徹底的な直接フィードバックを行います。",
      docHeader: "演習エッセイ：証拠法",
      docMeta: "受講生：K. Tanaka | 日付：2025年10月12日",
      feedback: "「特定の例外規定への転換が素晴らしい。ここで一般的な伝聞証拠の定義を省略したことで約45秒短縮できました。この構成を維持してください。」 — ピーター"
    }
  };

  const t = content[lang];

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <span className="text-brand-green text-xs font-bold tracking-widest uppercase">{t.tag}</span>
            <h2 className="font-serif text-4xl lg:text-5xl mt-4 mb-6 text-slate-900">{t.title}</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {t.desc1}
              <br/><br/>
              {t.desc2}
            </p>
          </div>

          <div className="order-1 lg:order-2 relative">
             {/* Document Container */}
             <div className="bg-white p-8 md:p-10 shadow-2xl border border-gray-200 relative transform rotate-1 transition-transform hover:rotate-0 duration-500">
                
                {/* Header of the document */}
                <div className="border-b-2 border-slate-900 pb-6 mb-6 flex justify-between items-start">
                   <div>
                      <h3 className="font-serif text-2xl font-bold text-slate-900">{t.docHeader}</h3>
                      <p className="text-sm text-slate-500 mt-1">{t.docMeta}</p>
                   </div>
                   <div className="w-16 h-16 rounded-full border-4 border-brand-green text-brand-green flex items-center justify-center font-serif text-2xl font-bold opacity-80 transform -rotate-12">
                     A-
                   </div>
                </div>

                {/* Body with redlines (Keeping body English as it represents the exam content) */}
                <div className="font-serif text-lg leading-loose text-slate-800 space-y-2">
                   <p>
                     The issue is whether the statement made by the witness constitutes hearsay. 
                     <span className="bg-red-50 text-red-800 line-through decoration-red-500 decoration-2 px-1 mx-1 rounded">Under the federal rules</span>
                     <span className="bg-green-50 text-brand-green font-semibold px-1 rounded">Under FRE 803(2)</span>, 
                     an excited utterance requires a startling event.
                   </p>
                   
                   <p>
                     Here, the declarant shouted 
                     <span className="mx-1 relative inline-block group cursor-help">
                        <span className="border-b-2 border-dotted border-red-400">immediately after the crash</span>
                        {/* Tooltip style comment */}
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-800 text-white text-xs p-3 rounded shadow-lg hidden group-hover:block font-sans z-10">
                           Good fact application. This temporal proximity is the key element.
                        </span>
                     </span>.
                   </p>

                   <p>
                     Therefore, the court <span className="text-brand-green font-bold">would likely admit</span> the testimony provided the time gap was minimal.
                   </p>
                </div>

                {/* Handwritten-style comment in margin/bottom */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                   <p className="font-handwriting text-brand-green text-xl md:text-2xl transform -rotate-1">
                     {t.feedback}
                   </p>
                </div>

             </div>

             {/* Background decoration for stack effect */}
             <div className="absolute top-0 left-0 w-full h-full bg-gray-50 border border-gray-200 -z-10 transform -rotate-2 translate-y-2 translate-x-2"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Practice;