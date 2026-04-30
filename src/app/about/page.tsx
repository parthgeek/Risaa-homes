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
            About Us
          </p>
          <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.95] font-light max-w-5xl">
            Quiet luxury, <br />
            <span className="italic text-[var(--color-champagne)]">built on legacy.</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 space-y-6 md:sticky md:top-32">
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)]">
              01 — The House
            </p>
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-ivory-2)]">
              <Image
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=85&auto=format&fit=crop"
                alt="Hand-finished textile detail"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-champagne)]">
              A venture of Gursam International Pvt. Ltd.
            </p>
          </div>
          <div className="md:col-span-7 space-y-8">
            <Reveal>
              <h2 className="font-display text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.05] font-light">
                Legacy, craftsmanship, <span className="italic text-[var(--color-royal-900)]">refined design.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-[var(--color-ink)]/75 max-w-2xl">
                Risaa Homes, a distinguished venture of Gursam International
                Pvt. Ltd., brings together legacy, craftsmanship, and a refined
                design sensibility to create luxury home experiences.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg leading-relaxed text-[var(--color-ink)]/75 max-w-2xl">
                In 2026, our vision evolved into Risaa Homes — a luxury home
                textile brand crafted for those who value understated opulence
                and elevated living. Our collections include exquisitely
                designed blankets, bed linens, comforters, and rugs, curated to
                transform everyday spaces into experiences of comfort and
                sophistication.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Heritage — Gursam International */}
      <section id="heritage" className="bg-[var(--color-ivory-2)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 space-y-8 order-2 md:order-1">
            <Reveal>
              <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)]">
                02 — The Heritage
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.05] font-light">
                Twenty-five years of <span className="italic text-[var(--color-royal-900)]">precision.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-[var(--color-ink)]/75 max-w-2xl">
                With over 25 years of industry excellence, Gursam International
                has established itself as a stalwart in the global bicycle
                components sector. With a turnover of approximately INR 150
                crore and a strong international presence — including an
                overseas office in Hong Kong — the company has built enduring
                partnerships across markets.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg leading-relaxed text-[var(--color-ink)]/75 max-w-2xl">
                As trusted OEM partners to leading names such as Hero Cycles,
                Hero HMC, Avon, and Decathlon, and with exclusive dealerships
                for premium components sourced from Japan, Taiwan, and China,
                Gursam&rsquo;s foundation rests on precision, reliability, and
                global standards. The company is recognized as a{" "}
                <span className="italic text-[var(--color-royal-900)]">
                  One Star Export House
                </span>{" "}
                by the Ministry of Commerce and Industry, Government of India.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg leading-relaxed text-[var(--color-ink)]/75 max-w-2xl">
                The company also manufactures premium bicycle components under
                its in-house brand Buzzer, known for its quality engineering
                and export-grade performance, with a strong footprint in
                markets such as Brazil.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:sticky md:top-32 order-1 md:order-2">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-ivory-3)]">
              <Image
                src="https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=1600&q=85&auto=format&fit=crop"
                alt="Heritage of craft"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lineage — Gursam → Risaa → Risaa Homes */}
      <section id="lineage" className="bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32">
          <Reveal>
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-4">
              03 — The Lineage
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.05] font-light max-w-4xl">
              From engineered components <br />
              <span className="italic text-[var(--color-royal-900)]">to elevated living.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                k: "Gursam International",
                v: "The parent house. Twenty-five years in global bicycle components, with partners across India, Japan, Taiwan, China and Brazil.",
                tag: "The foundation",
              },
              {
                k: "Risaa",
                v: "A premium women’s wear label celebrated for its thoughtful design language, refined craftsmanship, and a modern yet timeless aesthetic.",
                tag: "The lifestyle",
              },
              {
                k: "Risaa Homes",
                v: "A luxury home textile brand for those who value understated opulence — blankets, bed linens, comforters and rugs, curated for elevated living.",
                tag: "The home",
              },
            ].map((m, i) => (
              <Reveal key={m.k} delay={i * 0.08}>
                <div className="border border-[var(--color-royal-900)]/15 p-8 hover:border-[var(--color-royal-900)] transition-colors duration-500 bg-white h-full">
                  <p className="font-display text-4xl text-[var(--color-royal-900)]">
                    0{i + 1}
                  </p>
                  <p className="font-display text-2xl mt-6">{m.k}</p>
                  <p className="text-sm text-[var(--color-ink)]/70 mt-3 leading-relaxed">
                    {m.v}
                  </p>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-champagne)] mt-6">
                    {m.tag}
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
            { k: "25+ yrs", v: "Group legacy" },
            { k: "₹150 Cr", v: "Annual turnover" },
            { k: "One Star", v: "Export House, Govt. of India" },
            { k: "2026", v: "Risaa Homes launch" },
          ].map((s, i) => (
            <Reveal key={s.k} delay={i * 0.06}>
              <div>
                <p className="font-display text-[clamp(2.6rem,4.5vw,4.5rem)] text-[var(--color-champagne)] font-light leading-none">
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

      {/* Ethos / Manifesto */}
      <section className="bg-[var(--color-ivory)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-32 text-center space-y-12">
          <Reveal>
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)]">
              04 — The Ethos
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-snug font-light text-[var(--color-ink)]/85">
              Rooted in the ethos of{" "}
              <span className="italic text-[var(--color-royal-900)]">
                Made in India
              </span>{" "}
              while sourcing premium-quality imports from global markets, Risaa
              Homes brings together the finest materials, superior
              craftsmanship, and contemporary design to redefine modern living.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="divider-rule max-w-xs mx-auto" />
          </Reveal>
          <Reveal delay={0.25}>
            <p className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] leading-snug italic font-light text-[var(--color-royal-900)] max-w-3xl mx-auto">
              At Risaa Homes, we don&rsquo;t just create home textiles — we
              curate a lifestyle of quiet luxury, where every detail is
              designed to be felt.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ivory-2)]">
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
