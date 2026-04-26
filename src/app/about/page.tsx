import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] bg-[var(--color-royal-950)] text-[var(--color-ivory)] overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <Image
            src="https://images.unsplash.com/photo-1761410201022-cae20bd6abcf?w=2400&q=85&auto=format&fit=crop"
            alt=""
            fill
            sizes="100vw"
            className="object-cover animate-kenburns"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,10,43,0.6)] to-[rgba(6,10,43,0.95)]" />
        <div className="relative h-full max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24">
          <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-champagne)] mb-6">
            The Atelier
          </p>
          <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.95] font-light max-w-5xl">
            Sixteen years <br />
            <span className="italic text-[var(--color-champagne)]">on the loom.</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section id="craft" className="bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 space-y-6 md:sticky md:top-32">
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)]">
              01 — The Story
            </p>
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-ivory-2)]">
              <Image
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=85&auto=format&fit=crop"
                alt="A blanket folded on the loom"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-champagne)]">
              Erode · Loom No. 04
            </p>
          </div>
          <div className="md:col-span-7 space-y-8">
            <Reveal>
              <h2 className="font-display text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.05] font-light">
                Risaa began with one blanket. <span className="italic text-[var(--color-royal-900)]">It still ships.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-[var(--color-ink)]/75 max-w-2xl">
                In 2009, our founder pulled apart a hundred-year-old family
                blanket to learn how it had survived four generations. Sixteen
                years later, every Risaa piece is woven on those same
                principles — long-staple cotton, slow looms, hand-finished
                edges, royal-blue thread on the inside seam.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg leading-relaxed text-[var(--color-ink)]/75 max-w-2xl">
                We don’t do drops. We do years. A piece arrives when it’s
                ready, in the colours we trust, in the weights we’ve tested
                against ten Indian winters and as many monsoons.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mills */}
      <section id="mills" className="bg-[var(--color-ivory-2)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32">
          <Reveal>
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-4">
              02 — Mills & Looms
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.05] font-light max-w-4xl">
              Four cities. <span className="italic text-[var(--color-royal-900)]">One thread.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { city: "Erode", craft: "Flannel weaving", years: "since 2010" },
              { city: "Karur", craft: "Cotton blankets", years: "since 2012" },
              { city: "Bhuj", craft: "Sateen weaving", years: "since 2015" },
              { city: "Bhadohi", craft: "Hand-knotted rugs", years: "since 2018" },
            ].map((m, i) => (
              <Reveal key={m.city} delay={i * 0.08}>
                <div className="border border-[var(--color-royal-900)]/15 p-8 hover:border-[var(--color-royal-900)] transition-colors duration-500 bg-white">
                  <p className="font-display text-4xl text-[var(--color-royal-900)]">
                    0{i + 1}
                  </p>
                  <p className="font-display text-2xl mt-6">{m.city}</p>
                  <p className="text-sm text-[var(--color-ink)]/60 mt-2">{m.craft}</p>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-champagne)] mt-6">
                    {m.years}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-[var(--color-royal-950)] text-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32 grid md:grid-cols-4 gap-12">
          {[
            { k: "2009", v: "Founded" },
            { k: "16 yrs", v: "On the loom" },
            { k: "12k+", v: "Homes furnished" },
            { k: "100%", v: "Hand-finished" },
          ].map((s, i) => (
            <Reveal key={s.k} delay={i * 0.06}>
              <div>
                <p className="font-display text-[clamp(3rem,5vw,5rem)] text-[var(--color-champagne)] font-light leading-none">
                  {s.k}
                </p>
                <p className="text-[10px] tracking-[0.32em] uppercase text-white/70 mt-4">
                  {s.v}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32 text-center">
          <Reveal>
            <h2 className="font-display text-[clamp(2.4rem,5vw,5.5rem)] leading-tight font-light">
              The atelier <span className="italic text-[var(--color-royal-900)]">is open.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/products"
              className="group inline-flex items-center gap-4 mt-12 text-[11px] tracking-[0.32em] uppercase border border-[var(--color-royal-900)] px-8 py-4 hover:bg-[var(--color-royal-900)] hover:text-[var(--color-ivory)] transition-colors duration-500"
            >
              Browse the collection
              <span className="block w-8 h-px bg-current transition-all duration-500 group-hover:w-14" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
