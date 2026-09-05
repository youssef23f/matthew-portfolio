import React from 'react';
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
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <Hero />
      <WhyMe />
      <Projects />
      <Education />
      <Certificates />
      <About />
      <Contact />
      <Chatbot />
    </div>
  );
}