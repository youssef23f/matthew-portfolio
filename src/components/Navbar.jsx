import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'عني', href: '#about' },
    { name: 'لماذا أنا؟', href: '#whyme' },
    { name: 'أعمالي', href: '#projects' },
    { name: 'تواصل معي', href: '#contact' },
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
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-semibold transition-all shadow-lg shadow-emerald-500/10"
          >
            توظيف / تواصل
          </a>
        </div>

        {/* زرار الموبايل */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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