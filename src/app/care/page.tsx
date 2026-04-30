import Link from "next/link";
import Reveal from "@/components/Reveal";

const fabrics = [
  {
    name: "Cotton & Flannel Blankets",
    care: [
      "Machine wash cold (≤30°C) on a gentle cycle with mild liquid detergent.",
      "Avoid bleach, fabric softeners and optical brighteners.",
      "Tumble dry on low or line dry in shade. Remove promptly to retain weave.",
      "Warm iron on the reverse if needed. Do not iron over embroidery or trim.",
    ],
  },
  {
    name: "Sateen & Percale Bed Linen",
    care: [
      "First wash before use to bloom the weave.",
      "Machine wash cold on a gentle cycle, separately from rough fabrics and zippers.",
      "Tumble dry low or line dry. Iron while slightly damp for the cleanest finish.",
      "Store folded in a breathable cotton bag — never plastic.",
    ],
  },
  {
    name: "Down & Down-Alt Comforters",
    care: [
      "Spot clean for minor marks. Professional dry-clean recommended for full clean.",
      "If machine washable, use a large drum, mild detergent, and rinse twice.",
      "Tumble dry low with two clean tennis balls to redistribute fill. Allow to fully dry.",
      "Air outdoors monthly. Store flat in a breathable cover, not vacuum-sealed.",
    ],
  },
  {
    name: "Hand-Knotted & Woven Rugs",
    care: [
      "Vacuum weekly on low suction without the beater bar. Rotate quarterly.",
      "Blot spills immediately with a clean white cloth — never rub.",
      "Professional rug cleaning every 12–18 months, depending on traffic.",
      "Use a quality rug pad to protect the foundation and reduce slippage.",
    ],
  },
  {
    name: "Pillows & Cushions",
    care: [
      "Remove covers and wash separately per the fabric guide above.",
      "Plump inserts daily; air outdoors monthly to keep loft.",
      "Spot-clean inserts. Replace inserts every 2–3 years to maintain shape.",
    ],
  },
];

const dos = [
  "Wash separately for the first two cycles — colour will settle.",
  "Use mild, pH-neutral liquid detergent; powder residues dull the weave.",
  "Air pieces in shade — direct sun fades natural dyes over time.",
  "Rotate bedding sets weekly to even out wear.",
  "Store clean textiles in cotton bags with cedar or lavender sachets.",
];

const donts = [
  "Do not bleach, even on whites — it weakens long-staple fibres.",
  "Skip fabric softeners; they coat the fibre and reduce absorbency and sheen.",
  "Do not wring or twist. Press gently to remove water.",
  "Avoid hot iron on dyed or embroidered surfaces.",
  "Do not vacuum-seal or store in plastic — natural fibres need to breathe.",
];

export default function CarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-royal-950)] text-[var(--color-ivory)] pt-40 pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,10,43,0.85)] to-[rgba(6,10,43,0.95)]" />
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
          <Reveal>
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-champagne)] mb-6">
              The Care Edit
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[clamp(2.6rem,7vw,7rem)] leading-[1] font-light max-w-5xl">
              Care instructions <br />
              <span className="italic text-[var(--color-champagne)]">& guidelines.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-white/75 leading-relaxed">
              Every Risaa Homes piece is built to soften with use and last for
              years. A few quiet rituals will keep the weave, the loft and the
              colour at their best.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Fabric-wise care */}
      <section id="instructions" className="bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32">
          <Reveal>
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-4">
              01 — By Fabric
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,4vw,4rem)] leading-[1.05] font-light max-w-4xl">
              Care, woven <span className="italic text-[var(--color-royal-900)]">into the fibre.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 gap-x-10 gap-y-12">
            {fabrics.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.05}>
                <div className="border-t border-[var(--color-royal-900)]/15 pt-8">
                  <p className="font-display text-3xl text-[var(--color-royal-900)] leading-tight">
                    {f.name}
                  </p>
                  <ul className="mt-6 space-y-3 text-[var(--color-ink)]/75 leading-relaxed">
                    {f.care.map((c, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-[var(--color-champagne)] shrink-0">—</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section id="guidelines" className="bg-[var(--color-ivory-2)] scroll-mt-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32">
          <Reveal>
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-4">
              02 — Guidelines
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,4vw,4rem)] leading-[1.05] font-light max-w-4xl">
              The dos, <span className="italic text-[var(--color-royal-900)]">and the don&rsquo;ts.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 gap-10">
            <Reveal>
              <div className="bg-white border border-[var(--color-royal-900)]/15 p-10 h-full">
                <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-champagne)] mb-6">
                  Do
                </p>
                <ul className="space-y-4 text-[var(--color-ink)]/80 leading-relaxed">
                  {dos.map((d, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-display text-[var(--color-royal-900)] shrink-0">
                        0{i + 1}
                      </span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="bg-[var(--color-royal-950)] text-[var(--color-ivory)] p-10 h-full">
                <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-champagne)] mb-6">
                  Don&rsquo;t
                </p>
                <ul className="space-y-4 text-white/80 leading-relaxed">
                  {donts.map((d, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-display text-[var(--color-champagne)] shrink-0">
                        0{i + 1}
                      </span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Storage / Seasonal note */}
      <section className="bg-[var(--color-ivory)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-32 text-center space-y-10">
          <Reveal>
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)]">
              03 — Seasonal Storage
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-[clamp(1.6rem,3vw,2.6rem)] leading-snug font-light text-[var(--color-ink)]/85">
              Wash before storing. Fold along the natural grain. Slip into a
              breathable cotton bag with a cedar or lavender sachet, and rest
              flat in a cool, dry cupboard until the season turns.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ivory-2)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 text-center">
          <Reveal>
            <p className="font-display text-3xl md:text-4xl leading-snug max-w-2xl mx-auto text-[var(--color-ink)]/80">
              A spill, a snag, a question?{" "}
              <Link href="/contact" className="luxe-link italic text-[var(--color-royal-900)]">
                Speak to our concierge.
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
