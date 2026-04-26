"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=2400&q=85&auto=format&fit=crop",
    eyebrow: "Heirloom Bedding · Est. 2009",
    titleA: "Woven for",
    titleB: "the long night.",
  },
  {
    src: "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=2400&q=85&auto=format&fit=crop",
    eyebrow: "Imperial Flannel — New Drop",
    titleA: "A weight",
    titleB: "you remember.",
  },
  {
    src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=2400&q=85&auto=format&fit=crop",
    eyebrow: "Atelier Linen Set",
    titleA: "Quiet sheets,",
    titleB: "louder mornings.",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307290-bb947b114627?w=2400&q=85&auto=format&fit=crop",
    eyebrow: "Regalia Comforters",
    titleA: "Loft, evenly",
    titleB: "distributed.",
  },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, []);

  const cur = slides[i];

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[var(--color-royal-950)] text-[var(--color-ivory)]">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={cur.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,10,43,0.55)] via-[rgba(6,10,43,0.25)] to-[rgba(6,10,43,0.85)]" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_40%,rgba(15,26,102,0.35),transparent_70%)]" />
        </motion.div>
      </AnimatePresence>

      {/* Top frame line */}
      <div className="absolute top-24 left-6 right-6 h-px bg-white/15 z-10 hidden md:block" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={`txt-${i}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-[var(--color-champagne)] mb-6">
              <span className="block w-10 h-px bg-[var(--color-champagne)]" />
              {cur.eyebrow}
            </div>
            <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.95] font-light">
              <span className="block overflow-hidden">
                <span className="block animate-rise">{cur.titleA}</span>
              </span>
              <span className="block overflow-hidden italic text-[var(--color-champagne)]">
                <span
                  className="block animate-rise"
                  style={{ animationDelay: "0.15s" }}
                >
                  {cur.titleB}
                </span>
              </span>
            </h1>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-end justify-between mt-12 gap-6">
          <Link
            href="/products"
            className="group inline-flex items-center gap-4 text-sm tracking-[0.28em] uppercase border border-white/30 px-7 py-4 hover:bg-white hover:text-[var(--color-royal-900)] transition-colors duration-500"
          >
            <span>Explore the Collection</span>
            <span className="block w-8 h-px bg-current transition-all duration-500 group-hover:w-14" />
          </Link>

          {/* Slide indicators */}
          <div className="flex items-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="group flex flex-col items-center gap-2"
              >
                <span
                  className={`block h-px transition-all duration-700 ${
                    idx === i
                      ? "w-12 bg-[var(--color-champagne)]"
                      : "w-6 bg-white/40 group-hover:bg-white/70"
                  }`}
                />
                <span
                  className={`text-[10px] tracking-[0.3em] transition-opacity ${
                    idx === i ? "opacity-100" : "opacity-40"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Side ticker */}
      <div className="hidden lg:block absolute right-10 top-[38%] -rotate-90 origin-top-right text-[10px] tracking-[0.5em] uppercase text-white/60 z-10 whitespace-nowrap">
        Risaa Homes — Royal Bedding Atelier
      </div>

    </section>
  );
}
