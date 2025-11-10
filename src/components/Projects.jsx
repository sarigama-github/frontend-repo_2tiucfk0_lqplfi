import React from 'react';
import { ExternalLink, Palette, Cpu, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Cartoonfolio',
    tag: '2D Characters',
    desc: 'A playful portfolio template with character stickers and motion.',
    link: '#',
    icon: Palette,
    emoji: '🧑‍🎨',
    colors: 'from-pink-500 to-yellow-400',
  },
  {
    title: 'Turbo Ride',
    tag: 'Sport Cars',
    desc: 'A gallery of stylized sports cars with smooth parallax.',
    link: '#',
    icon: Cpu,
    emoji: '🏎️',
    colors: 'from-red-500 to-orange-400',
  },
  {
    title: 'Critter Club',
    tag: 'Animals',
    desc: 'Cute animal encyclopaedia with cards and animations.',
    link: '#',
    icon: Globe,
    emoji: '🦊',
    colors: 'from-emerald-500 to-teal-400',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-white">Projects</h2>
        <p className="text-white/70">A selection of things I’ve built and had fun with.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map(({ title, tag, desc, link, icon: Icon, emoji, colors }) => (
          <a
            key={title}
            href={link}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
          >
            <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${colors} opacity-40 blur-2xl transition group-hover:opacity-60`} />
            <div className="relative z-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                <Icon className="h-4 w-4" />
                <span>{tag}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{emoji} {title}</h3>
              <p className="mt-2 text-white/80">{desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-yellow-300">
                View project
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="pointer-events-none mt-16 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-pink-500/20 p-8 text-center text-white">
        <p className="text-lg">I also tinker with whimsical planets and space scenes. Ask me about motion graphics! 🪐✨</p>
      </div>
    </section>
  );
}
