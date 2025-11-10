import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-white">Get in touch</h2>
        <p className="text-white/70">Open for collaborations, freelance, and fun ideas.</p>
      </div>

      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
        <a
          href="mailto:you@example.com"
          className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur transition hover:bg-white/10"
        >
          <Mail className="h-5 w-5" />
          <span>Email</span>
        </a>
        <a
          href="https://github.com/yourhandle"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur transition hover:bg-white/10"
        >
          <Github className="h-5 w-5" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/yourhandle/"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur transition hover:bg-white/10"
        >
          <Linkedin className="h-5 w-5" />
          <span>LinkedIn</span>
        </a>
      </div>

      <p className="mx-auto mt-8 max-w-xl text-center text-white/70">
        Prefer a message? Tell me about your idea, characters, cars, animals, or planets you’d like to bring to life.
      </p>

      <footer className="mt-16 text-center text-sm text-white/60">© {new Date().getFullYear()} Your Name — Made with colors and curiosity.</footer>
    </section>
  );
}
