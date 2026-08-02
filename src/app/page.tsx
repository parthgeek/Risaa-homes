import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { categories, products } from "@/lib/products";

export default function Home() {
  const featured = products.slice(0, 6);

  return (
    <>
      <HeroSlider />

      <Marquee
        items={[
          "Comfort-led Bedding",
          "Trusted makers in India & abroad",
          "Every piece checked twice",
          "Blankets · Linens · Comforters · Carpets",
          "Since 2026",
          "Packed only after final checks",
        ]}
      />

      {/* Manifesto */}
      <section className="bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 md:py-16 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-ivory-2)]">
              <Image
                src="/showroom%20and%20office/office1.jpeg"
                alt="Risaa Home reception and office in Ludhiana"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:col-span-6">
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
                Risaa Home works with carefully selected manufacturers in
                India and abroad. We set the material, finish and construction
                standards for every collection, then inspect each piece twice
                before it is packed. The result is dependable comfort with a
                consistent Risaa Home finish.
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
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12">
          <div className="flex items-end justify-between mb-8 gap-8 flex-wrap">
            <div>
              <Reveal>
                <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-3">
                  02 — The Collection
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display text-[clamp(2.4rem,5vw,5rem)] leading-[1.02] font-light">
                  Across every room.
                  <span className="italic text-[var(--color-royal-900)]"> One standard.</span>
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

      {/* Carpets */}
      <section id="carpets" className="bg-[var(--color-ivory-2)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <div className="relative aspect-[16/11] overflow-hidden bg-[var(--color-ivory-3)]">
                <Image
                  src="https://images.unsplash.com/photo-1600166898405-da9535204843?w=1800&q=85&auto=format&fit=crop"
                  alt="Textured carpet anchoring a considered living space"
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover tile-img"
                />
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:pl-4">
            <Reveal delay={0.05}>
              <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)]">
                03 — Carpets
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-[clamp(2.6rem,5vw,5.5rem)] leading-[0.98] font-light text-balance">
                Ground the room in
                <span className="italic text-[var(--color-royal-900)]"> texture.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-ink)]/70">
                Our carpet collection is selected for surface character,
                dependable construction and everyday durability. Explore the
                range through our showroom and wholesale team.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href="/contact?collection=Carpets"
                className="luxe-link mt-9 inline-block text-[11px] tracking-[0.32em] uppercase"
              >
                Request the carpet catalogue
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured pieces */}
      <section className="bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12">
          <div className="flex items-end justify-between mb-8 gap-8 flex-wrap">
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

      {/* CTA */}
      <section className="bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 text-center">
          <Reveal>
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-6">
              05 — Visit
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.6rem,6vw,7rem)] leading-[1] font-light">
              Step into the <span className="italic text-[var(--color-royal-900)]">atelier.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 mt-8 text-[11px] tracking-[0.32em] uppercase border border-[var(--color-royal-900)] px-8 py-4 hover:bg-[var(--color-royal-900)] hover:text-[var(--color-ivory)] transition-colors duration-500"
            >
              Book a visit
              <span className="block w-8 h-px bg-current transition-all duration-500 group-hover:w-14" />
            </Link>
          </Reveal>
        </div>
      </section>

      <WhatsAppFloat />
    </>
  );
}
