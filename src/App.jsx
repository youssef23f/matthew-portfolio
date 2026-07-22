import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyMe from './components/WhyMe';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <Hero />
      <WhyMe />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}