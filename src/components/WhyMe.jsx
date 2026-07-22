import { Code, Zap, Layers, Lock, FileText, Smartphone } from 'lucide-react';

export default function WhyMe() {
  const reasons = [
    {
      icon: <Code size={24} className="text-emerald-400" />,
      title: "Clean Code",
      desc: "كود نظيف وممنهج يسهُل على أي فريق تطوير فهمه والتعديل عليه مستقبلاً."
    },
    {
      icon: <Zap size={24} className="text-emerald-400" />,
      title: "Fast Development",
      desc: "تسليم رزين وسريع وفق أحدث معايير الأداء دون المساومة على الجودة."
    },
    {
      icon: <Layers size={24} className="text-emerald-400" />,
      title: "Scalable Architecture",
      desc: "تصميم بنية تحتية تتحمل زيادة عدد المستخدمين والبيانات بكفاءة عالية."
    },
    {
      icon: <Lock size={24} className="text-emerald-400" />,
      title: "Secure APIs",
      desc: "تطبيق أعلى معايير الحماية والتشفير لتأمين بياناتك وحمايتها من الثغرات."
    },
    {
      icon: <FileText size={24} className="text-emerald-400" />,
      title: "Well Documented",
      desc: "توثيق شامل ومفصل للـ APIs (مثل Swagger/Postman) ليسهل الربط مع الـ Frontend."
    },
    {
      icon: <Smartphone size={24} className="text-emerald-400" />,
      title: "Responsive Thinking",
      desc: "فهم عميق لكيفية استهلاك البيانات على مختلف الشاشات والأجهزة."
    }
  ];

  return (
    <section id="whyme" className="py-24 bg-slate-900/50 text-slate-100 px-6 border-y border-slate-800/60">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-2">لماذا يختارني العميل؟</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold">قيمة حقيقية تُضاف لمشروعك</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div 
              key={index} 
              className="bg-slate-950 p-8 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-all group"
            >
              <div className="p-3 rounded-xl bg-slate-900 w-fit mb-6 border border-slate-800 group-hover:bg-emerald-500/10 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-100">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}