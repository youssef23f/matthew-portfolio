import { useState } from 'react';
import { Menu, X, Code2, Globe } from 'lucide-react';

export default function Navbar({ lang = 'ar', setLang = () => {} }) {
  const [isOpen, setIsOpen] = useState(false);

  // نصوص الروابط بناءً على اللغة المختارة
  const navTexts = {
    ar: { about: 'عني', whyMe: 'لماذا أنا؟', education: 'التعليم', projects: 'أعمالي', contact: 'تواصل معي', hire: 'توظيف / تواصل' },
    en: { about: 'About', whyMe: 'Why Me', education: 'Education', projects: 'Projects', contact: 'Contact', hire: 'Hire Me' },
    de: { about: 'Über mich', whyMe: 'Warum ich', education: 'Ausbildung', projects: 'Projekte', contact: 'Kontakt', hire: 'Kontaktieren' }
  };

  const t = navTexts[lang] || navTexts.ar;

  const navLinks = [
    { name: t.about, href: '#about' },
    { name: t.whyMe, href: '#whyme' },
    { name: t.education, href: '#education' },
    { name: t.projects, href: '#projects' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* اللوجو */}
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-slate-100 tracking-wider">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Code2 size={22} />
          </div>
          <span>MATTHEW<span className="text-emerald-400">.dev</span></span>
        </a>

        {/* روابط الكمبيوتر */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* أزرار تبديل اللغة */}
          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-full p-1">
            <Globe size={14} className="text-emerald-400 ml-1 hidden lg:block" />
            <button 
              onClick={() => setLang('ar')} 
              className={`px-2.5 py-1 text-xs rounded-full font-medium transition-all ${lang === 'ar' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
            >
              AR
            </button>
            <button 
              onClick={() => setLang('en')} 
              className={`px-2.5 py-1 text-xs rounded-full font-medium transition-all ${lang === 'en' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('de')} 
              className={`px-2.5 py-1 text-xs rounded-full font-medium transition-all ${lang === 'de' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
            >
              DE
            </button>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-semibold transition-all shadow-lg shadow-emerald-500/10"
          >
            {t.hire}
          </a>
        </div>

        {/* أزرار الموبايل (اللغة + قائمة الموبايل) */}
        <div className="flex items-center gap-2 md:hidden">
          {/* تبديل اللغة للموبايل */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-full p-1">
            <button onClick={() => setLang('ar')} className={`px-2 py-1 text-xs rounded-full ${lang === 'ar' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400'}`}>AR</button>
            <button onClick={() => setLang('en')} className={`px-2 py-1 text-xs rounded-full ${lang === 'en' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400'}`}>EN</button>
            <button onClick={() => setLang('de')} className={`px-2 py-1 text-xs rounded-full ${lang === 'de' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400'}`}>DE</button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* قائمة الموبايل */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-emerald-400 text-base font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}