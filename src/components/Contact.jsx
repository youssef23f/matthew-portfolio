import { Mail, Code2, Globe, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900/40 text-slate-100 px-6 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-2">تواصل معي</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold mb-6">جاهز للبدء في مشروعك القادم؟</h3>
        <p className="text-slate-400 max-w-xl mx-auto mb-10 text-sm md:text-base">
          سواء كان لديك مشروع جديد أو استشارة برمجية، يمكنك التواصل معي مباشرة عبر الواتساب، التليجرام، البريد، أو شبكات التواصل.
        </p>

        {/* أزرار التواصل */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          
          {/* زر الواتساب */}
          <a
            href="https://wa.me/201281256422"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all flex items-center gap-2 text-sm shadow-lg shadow-emerald-500/10"
          >
            <Phone size={18} />
            <span>واتساب (WhatsApp)</span>
          </a>

          {/* زر التليجرام */}
          <a
            href="https://t.me/Eldeeb910"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl transition-all flex items-center gap-2 text-sm shadow-lg shadow-sky-500/10"
          >
            <Send size={18} />
            <span>تليجرام (@Eldeeb910)</span>
          </a>

          {/* البريد الإلكتروني */}
          <a
            href="mailto:y35522370@gmail.com"
            className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-medium rounded-xl transition-all flex items-center gap-2 text-sm"
          >
            <Mail size={18} />
            <span>البريد الإلكتروني</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/youssef23f"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-medium rounded-xl transition-all flex items-center gap-2 text-sm"
          >
            <Code2 size={18} />
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/matthew-eldeeb-070477403"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-medium rounded-xl transition-all flex items-center gap-2 text-sm"
          >
            <Globe size={18} />
            <span>LinkedIn</span>
          </a>

        </div>

        {/* حقوق النشر */}
        <div className="pt-8 border-t border-slate-800/60 text-xs text-slate-500">
          © {new Date().getFullYear()} Matthew. All rights reserved.
        </div>
      </div>
    </section>
  );
}