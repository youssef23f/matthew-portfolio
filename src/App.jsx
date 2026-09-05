import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyMe from './components/WhyMe';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import About from './components/About';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

export default function App() {
  const [lang, setLang] = useState('ar'); // اللغة الافتراضية عربية

  return (
    <div 
      dir={lang === 'ar' ? 'rtl' : 'ltr'} 
      className="bg-slate-950 min-h-screen text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950 transition-all duration-300"
    >
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <WhyMe lang={lang} />
      <Projects lang={lang} />
      <Education lang={lang} />
      <Certificates lang={lang} />
      <About lang={lang} />
      <Contact lang={lang} />
      <Chatbot lang={lang} />
    </div>
  );
}