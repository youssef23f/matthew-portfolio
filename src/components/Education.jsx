import React from 'react';
import { GraduationCap, BookOpen, Award, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-emerald-400" />
            التعليم الأكاديمي
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            الأساس الأكاديمي والعلمي المتين الذي يبني خلفيتي الهندسية والبرمجية.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-emerald-500/10 transition-all"></div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-2xl border border-emerald-500/20">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Saxony University (الجامعة الألمانية)</h3>
                <p className="text-emerald-400 font-semibold text-base mt-1">تخصص الذكاء الاصطناعي (Artificial Intelligence)</p>
              </div>
            </div>
            <span className="text-xs sm:text-sm bg-slate-800 text-emerald-300 px-4 py-2 rounded-full border border-slate-700 font-medium">
              الفرقة الأولى (Freshman) 🎓
            </span>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              المهارات والمفاهيم الأكاديمية الأساسية:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "مفاهيم علوم الحاسب الأساسية",
                "أساسيات البرمجة وخوارزميات الحلول",
                "الرياضيات المتقدمة للذكاء الاصطناعي",
                "هياكل البيانات وطرق البحث",
                "مدخل إلى التعلم الآلي ونظم الذكاء",
                "التفكير النقدي وهندسة البرمجيات"
              ].map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-xs sm:text-sm bg-slate-950/60 text-slate-300 px-3.5 py-2.5 rounded-xl border border-slate-800/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}