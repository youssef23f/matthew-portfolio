import { Download } from 'lucide-react';
import heroImg from '../assets/hero.png';

export default function About() {
  const skills = [
    "Python", "FastAPI", "JavaScript", "React", "Node.js", 
    "AI Automation", "PostgreSQL", "Docker", "REST API", "Git", "GitHub", "C#"
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 text-slate-100 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* الجانب الأيمن: النبذة والإحصائيات */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">عني</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-100">
              مبرمج مواقع، تطبيقات، ومحلول أتمتة بالذكاء الاصطناعي
            </h3>
            
            <p className="text-slate-400 leading-relaxed">
              أنا ماثيو، مبرمج متخصص في بناء المواقع والتطبيقات الذكية وتطوير أتمتة العمليات باستخدام الذكاء الاصطناعي (AI Automation). أركز دائماً على تقديم حلول برمجية سريعة ومبتكرة، بكود نظيف وبأعلى معايير الأداء لتسهيل وتطوير الأعمال.
            </p>

            {/* الإحصائيات */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 py-4">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <span className="text-3xl font-black text-emerald-400 block">+15</span>
                <span className="text-xs text-slate-400 font-medium">مشروع مكتمل</span>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <span className="text-3xl font-black text-emerald-400 block">+2</span>
                <span className="text-xs text-slate-400 font-medium">سنوات خبرة</span>
              </div>
            </div>

            {/* المهارات */}
            <div>
              <h4 className="text-slate-200 text-sm font-semibold mb-4">التقنيات والمهارات:</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 text-xs font-medium hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* الجانب الأيسر: الصورة / الكارت */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-2xl pointer-events-none" />
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center relative z-10">
                <div className="w-32 h-32 mx-auto rounded-full bg-slate-800 border-2 border-emerald-400/40 mb-6 overflow-hidden">
                  <img src={heroImg} alt="Matthew" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-bold text-slate-100">ماثيو</h4>
                <p className="text-xs text-emerald-400 mb-6">Web & Mobile Developer | AI Automation Specialist</p>

                <a 
                  href="/my-cv.pdf"
                  download="Matthew_CV.pdf" 
                  className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  <span>تحميل السيرة الذاتية CV</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}