import React from 'react';
import { Language } from '../App';

interface SyllabusProps {
  lang: Language;
}

const Syllabus: React.FC<SyllabusProps> = ({ lang }) => {
  
  const syllabusItems = lang === 'en' ? [
    {
      id: "01",
      title: "Foundation & Logic Bridge",
      description: "Transposing Japanese legal principles into the U.S. Common Law framework."
    },
    {
      id: "02",
      title: "MBE Strategic Sprints",
      description: "High-volume pattern recognition for Torts, Contracts, Evidence, and Property."
    },
    {
      id: "03",
      title: "The Writer's Workshop",
      description: "Intensive Essay and MPT drafting under simulated exam conditions."
    },
    {
      id: "04",
      title: "Final Performance Analysis",
      description: "Full-scale mock exams with professional diagnostic feedback."
    }
  ] : [
    {
      id: "01",
      title: "基礎構築 & ロジックの架け橋",
      description: "日本の法原理を米国のコモン・ローの枠組みに置き換え、法的思考の土台を築きます。"
    },
    {
      id: "02",
      title: "MBE戦略スプリント",
      description: "不法行為法、契約法、証拠法、財産法における徹底的なパターン認識と高速処理演習。"
    },
    {
      id: "03",
      title: "ライターズ・ワークショップ",
      description: "本番同様の制限時間・環境下での、エッセイおよびMPT（実務課題）の集中起案トレーニング。"
    },
    {
      id: "04",
      title: "最終パフォーマンス分析",
      description: "専門的な診断フィードバック付きのフルスケール模擬試験による最終調整。"
    }
  ];

  return (
    <section id="syllabus" className="py-24 bg-brand-light">
       <div className="max-w-4xl mx-auto px-6">
         <div className="mb-20">
            <h2 className="font-serif text-4xl lg:text-5xl text-slate-900">
              {lang === 'en' ? "Program Syllabus" : "プログラム・シラバス"}
            </h2>
         </div>

         <div className="flex flex-col">
            {syllabusItems.map((item, index) => (
              <div key={item.id} className="group border-t-2 border-slate-200 py-12 hover:border-brand-green transition-colors duration-300">
                 <div className="grid md:grid-cols-12 gap-6 items-start">
                   <div className="md:col-span-2">
                     <span className="text-xl md:text-2xl font-bold text-brand-green font-mono">{item.id}</span>
                   </div>
                   <div className="md:col-span-10">
                     <h3 className="font-serif text-2xl md:text-3xl text-slate-900 mb-3">{item.title}</h3>
                     <p className="text-lg text-slate-600 leading-relaxed font-light">{item.description}</p>
                   </div>
                 </div>
              </div>
            ))}
            {/* Final bottom border */}
            <div className="border-t-2 border-slate-200"></div>
         </div>
       </div>
    </section>
  );
};

export default Syllabus;