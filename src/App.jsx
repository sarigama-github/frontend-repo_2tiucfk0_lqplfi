import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b13] text-white">
      {/* Hero with Spline full-width cover */}
      <Hero />

      {/* Top: Career experience */}
      <Experience />

      {/* Middle: Projects */}
      <Projects />

      {/* Bottom: Contact */}
      <Contact />
    </div>
  );
}
