import { ArrowLeft, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center relative overflow-hidden px-6 pt-20">
      {/* إضاءة خلفية هادئة */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10">
        
        {/* Badge صغير */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold mb-8">
          <Terminal size={14} />
          <span>Web & Mobile Developer | AI Automation Specialist</span>
        </div>

        {/* العنوان الرئيسي */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
          أبني مواقع، تطبيقات ذكية<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
           وحوليات أتمتة بالذكاء الاصطناعي
          </span>
        </h1>

        {/* نبذة قصيرة */}
        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          أهلاً بك! أنا ماثيو، مبرمج متخصص في تطوير المواقع والتطبيقات وحلول الـ AI Automation لتحويل أفكارك المعقدة إلى أنظمة حديثة عالية الأداء.
        </p>

        {/* الأزرار */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
          >
            <span>استعرض الأعمال</span>
            <ArrowLeft size={18} />
          </a>
          
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold transition-all text-center"
          >
            تواصل معي
          </a>
        </div>
      </div>
    </section>
  );
}