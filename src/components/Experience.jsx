import React from 'react';
import { Briefcase, Award, Code } from 'lucide-react';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Creative Studio',
    period: '2022 — Present',
    highlights: [
      'Built playful, responsive UIs with React and Tailwind',
      'Optimized performance and accessibility',
    ],
  },
  {
    role: 'UI/UX Designer',
    company: 'Indie Games Lab',
    period: '2020 — 2022',
    highlights: [
      'Designed characterful interfaces and micro-interactions',
      'Collaborated with artists on 2D assets and motion',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-center gap-3">
        <div className="rounded-xl bg-pink-500/20 p-3 text-pink-400">
          <Briefcase className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-white">Career Experience</h2>
          <p className="text-white/70">A quick look at where I’ve been building and learning.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp) => (
          <div key={exp.role} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-white/80">{exp.company}</p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">{exp.period}</span>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80">
              {exp.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-3 rounded-xl bg-purple-500/15 p-4 text-purple-200">
          <Award className="h-5 w-5" />
          <p>Recognized for delightful UI polish and brand consistency</p>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-blue-500/15 p-4 text-blue-200">
          <Code className="h-5 w-5" />
          <p>Comfortable across the stack: React, Node, and Python</p>
        </div>
      </div>
    </section>
  );
}
