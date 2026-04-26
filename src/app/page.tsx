import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

export default function Home() {
  const featured = products.slice(0, 6);

  return (
    <>
      <HeroSlider />

      <Marquee
        items={[
          "Heirloom Bedding",
          "Royal Blue Atelier",
          "Woven in India",
          "Hand-finished",
          "Since 2009",
          "Quiet Luxury",
        ]}
      />

      {/* Manifesto */}
      <section className="bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32 md:py-40 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-ivory-2)]">
              <Image
                src="https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=1600&q=85&auto=format&fit=crop"
                alt="Hand-finished textile detail"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)]">
                01 — The House
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,5.5rem)] leading-[1.02] font-light">
                A house of textiles, <br />
                <span className="italic text-[var(--color-royal-900)]">
                  built for forever.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[var(--color-ink)]/75">
                Risaa Homes weaves blankets, linens, comforters and cushions on
                slow looms across Erode, Bhuj and Bhadohi. Every piece is
                finished by hand — selvages stitched, piping run, edges pressed
                — so it arrives in your home the way it left ours: quiet,
                considered, and made to be kept.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                href="/about"
                className="luxe-link mt-10 inline-block text-[11px] tracking-[0.32em] uppercase"
              >
                Read our story
              </Link>
            </Reveal>
          </div>
        </div>
        <div className="divider-rule mx-6 lg:mx-12" />
      </section>

      {/* Categories grid */}
      <section className="bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32">
          <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
            <div>
              <Reveal>
                <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-3">
                  02 — The Collection
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display text-[clamp(2.4rem,5vw,5rem)] leading-[1.02] font-light">
                  Six rooms.
                  <span className="italic text-[var(--color-royal-900)]"> One language.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link
                href="/products"
                className="luxe-link text-[11px] tracking-[0.32em] uppercase"
              >
                Browse all pieces
              </Link>
            </Reveal>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-6 px-6 md:mx-0 md:px-0 pb-4 md:pb-0 gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {categories.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.05} className="shrink-0 w-[75vw] max-w-xs snap-start md:w-auto md:shrink">
                <Link
                  href={`/products?cat=${encodeURIComponent(c.name)}`}
                  className="tile group block relative aspect-[4/5] overflow-hidden bg-[var(--color-royal-950)]"
                >
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover tile-img opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,10,43,0.85)] via-[rgba(6,10,43,0.15)] to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8 text-[var(--color-ivory)]">
                    <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-champagne)] mb-3">
                      0{i + 1}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl leading-tight mb-2">
                      {c.name}
                    </h3>
                    <p className="text-sm text-white/70 max-w-xs">{c.blurb}</p>
                    <div className="mt-6 flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase">
                      <span>Explore</span>
                      <span className="block w-8 h-px bg-current transition-all duration-500 group-hover:w-16" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Big royal moment */}
      <section className="relative bg-[var(--color-royal-950)] text-[var(--color-ivory)] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1631049307290-bb947b114627?w=2400&q=85&auto=format&fit=crop"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-70 animate-kenburns"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(6,10,43,0.95)] via-[rgba(6,10,43,0.55)] to-[rgba(6,10,43,0.15)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(6,10,43,0.4)]" />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-32 md:py-44 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-champagne)] mb-6">
                03 — The Signature
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2.6rem,6vw,6.5rem)] leading-[0.98] font-light">
                Royal blue, <br />
                <span className="italic">kept honest.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-10 max-w-xl text-lg text-white/75 leading-relaxed">
                Our house colour is mixed in small batches and dyed under
                supervision. Three saturations. One temperament. The thread
                that runs through every piece in the atelier.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex items-center gap-3">
                {[
                  { name: "Royal", hex: "#0f1a66" },
                  { name: "Indigo", hex: "#15217f" },
                  { name: "Midnight", hex: "#060a2b" },
                ].map((s) => (
                  <div key={s.name} className="flex items-center gap-3">
                    <span
                      className="block w-12 h-12 border border-white/30"
                      style={{ background: s.hex }}
                    />
                    <span className="text-xs tracking-[0.3em] uppercase">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured pieces */}
      <section className="bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32">
          <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
            <div>
              <Reveal>
                <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-3">
                  04 — Featured
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display text-[clamp(2.4rem,5vw,5rem)] leading-[1.02] font-light">
                  Pieces we’re <span className="italic text-[var(--color-royal-900)]">proud of.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link
                href="/products"
                className="luxe-link text-[11px] tracking-[0.32em] uppercase"
              >
                Shop the atelier
              </Link>
            </Reveal>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-6 px-6 md:mx-0 md:px-0 pb-4 md:pb-0 gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 md:gap-y-14">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06} className="shrink-0 w-[75vw] max-w-xs snap-start md:w-auto md:shrink">
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial split */}
      <section className="bg-[var(--color-ivory-2)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-royal-950)]">
            <Image
              src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1600&q=85&auto=format&fit=crop"
              alt="Slow loom in the atelier"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <Reveal>
              <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-6">
                05 — The Craft
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.05] font-light">
                Slow looms. <br />
                <span className="italic text-[var(--color-royal-900)]">
                  Steady hands.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg text-[var(--color-ink)]/75 leading-relaxed max-w-lg">
                A Sovereign blanket takes seven days on the loom and another
                two in finishing. We’re not in a rush. The thread isn’t either.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { k: "07", v: "days on loom" },
                  { k: "120", v: "knots / sq in" },
                  { k: "100%", v: "hand-finished" },
                ].map((s) => (
                  <div key={s.k}>
                    <p className="font-display text-4xl text-[var(--color-royal-900)]">
                      {s.k}
                    </p>
                    <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-ink)]/60 mt-2">
                      {s.v}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32 text-center">
          <Reveal>
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-6">
              06 — Visit
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.6rem,6vw,7rem)] leading-[1] font-light">
              Step into the <span className="italic text-[var(--color-royal-900)]">atelier.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-[var(--color-ink)]/70 max-w-xl mx-auto">
              Showrooms in Mumbai, Bangalore and Delhi. By appointment, always.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 mt-12 text-[11px] tracking-[0.32em] uppercase border border-[var(--color-royal-900)] px-8 py-4 hover:bg-[var(--color-royal-900)] hover:text-[var(--color-ivory)] transition-colors duration-500"
            >
              Book a visit
              <span className="block w-8 h-px bg-current transition-all duration-500 group-hover:w-14" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
