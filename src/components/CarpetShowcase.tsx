import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const carpetEditions = [
  {
    name: "Banjara",
    note: "Boho patchwork",
    image: "/orbis-luxury/banjara.jpg",
    className: "md:col-span-7",
  },
  {
    name: "Botanica",
    note: "Painterly floral",
    image: "/orbis-luxury/botanica.jpg",
    className: "md:col-span-5",
  },
  {
    name: "Darbaar",
    note: "Heritage medallion",
    image: "/orbis-luxury/darbaar.jpg",
    className: "md:col-span-4",
  },
  {
    name: "Neeldhara",
    note: "Ocean marble",
    image: "/orbis-luxury/neeldhara.jpg",
    className: "md:col-span-4",
  },
  {
    name: "Emperia",
    note: "Persian heritage",
    image: "/orbis-luxury/emperia.jpg",
    className: "md:col-span-4",
  },
  {
    name: "Gulnaaz",
    note: "Paisley garden",
    image: "/orbis-luxury/gulnaaz.jpg",
    className: "md:col-span-5",
  },
  {
    name: "Ashva",
    note: "Equestrian art",
    image: "/orbis-luxury/ashva.jpg",
    className: "md:col-span-7",
  },
  {
    name: "Gajraj",
    note: "Sapphire icon",
    image: "/orbis-luxury/gajraj.jpg",
    className: "md:col-span-4",
  },
  {
    name: "Oceanic Glow",
    note: "Abstract brushwork",
    image: "/orbis-luxury/oceanic-glow.jpg",
    className: "md:col-span-4",
  },
  {
    name: "Aakashganga",
    note: "Cosmic play",
    image: "/orbis-luxury/aakashganga.jpg",
    className: "md:col-span-4",
  },
];

export default function CarpetShowcase({ heading = true }: { heading?: boolean }) {
  return (
    <div>
      {heading && (
        <div className="mb-10 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)]">
                03 — Carpets · In collaboration with Orbis Luxury
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.8rem,6vw,6.5rem)] leading-[0.92] font-light text-balance">
                Art for the floor,
                <span className="italic text-[var(--color-royal-900)]"> chosen to hold a room.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.14}>
              <p className="max-w-xl text-base leading-relaxed text-[var(--color-ink)]/68">
                Ten expressive chenille rugs—from painterly florals and oceanic marble to tribal
                geometry, heritage motifs, statement animals and playful cosmic artwork. Made for
                homes that want one strong visual anchor.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[9px] font-medium tracking-[0.22em] uppercase text-[var(--color-royal-700)]">
                <span>Machine washable</span>
                <span>Anti-skid</span>
                <span>Pet friendly</span>
                <span>Low shedding</span>
              </div>
            </Reveal>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-x-3 gap-y-7 md:grid-cols-12 md:gap-x-5 md:gap-y-8">
        {carpetEditions.map((carpet, index) => (
          <Reveal key={carpet.name} delay={index * 0.05} className={carpet.className}>
            <Link
              href={`/contact?collection=Carpets&design=${encodeURIComponent(carpet.name)}`}
              className="group block"
            >
              <figure>
                <div className="relative aspect-[5/4] overflow-hidden bg-[var(--color-ivory)]">
                  <Image
                    src={carpet.image}
                    alt={`${carpet.name} rug from the Orbis Luxury collection`}
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-contain transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.025]"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-6 border-t border-[var(--color-royal-900)]/15 pt-3">
                  <span className="font-display text-2xl text-[var(--color-ink)]">{carpet.name}</span>
                  <span className="text-[9px] tracking-[0.24em] uppercase text-[var(--color-royal-700)]">
                    {carpet.note}
                  </span>
                </figcaption>
              </figure>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-[var(--color-royal-900)]/15 pt-6">
        <p className="text-sm leading-relaxed text-[var(--color-ink)]/55">
          Collection imagery courtesy of our rug partner, Orbis Luxury.
        </p>
        <Link
          href="/contact?collection=Carpets"
          className="luxe-link text-[11px] tracking-[0.3em] uppercase text-[var(--color-royal-900)]"
        >
          Request the wholesale catalogue
        </Link>
      </div>
    </div>
  );
}
