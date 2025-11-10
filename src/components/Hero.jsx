import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-purple-600 via-fuchsia-500 to-pink-500">
      {/* Spline full-bleed background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <Star className="h-4 w-4 text-yellow-300" />
          <span className="text-sm font-medium tracking-wide">Playful • Colorful • Cartoonish</span>
        </div>
        <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
          Hi, I’m <span className="text-yellow-300">Your Name</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
          I craft delightful web experiences with a love for characterful visuals — think 2D characters, sporty cars, curious animals, and whimsical planets.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-yellow-300 px-6 py-3 font-semibold text-black shadow-lg transition hover:translate-y-[-2px] hover:shadow-xl"
          >
            View Projects
            <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/25"
          >
            Contact Me
          </a>
        </div>

        {/* Cute sticker row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-2xl sm:text-3xl">
          <span role="img" aria-label="character" className="select-none">🧑‍🎨</span>
          <span role="img" aria-label="car" className="select-none">🏎️</span>
          <span role="img" aria-label="animal" className="select-none">🦊</span>
          <span role="img" aria-label="planet" className="select-none">🪐</span>
          <span role="img" aria-label="sparkles" className="select-none">✨</span>
        </div>
      </div>
    </section>
  );
}
