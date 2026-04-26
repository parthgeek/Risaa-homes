import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

function Instagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="0" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}
function Facebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function Youtube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
  );
}

const cols = [
  {
    title: "Atelier",
    links: [
      { href: "/about", label: "Our Story" },
      { href: "/about#craft", label: "The Craft" },
      { href: "/about#mills", label: "Mills & Looms" },
      { href: "/contact", label: "Showrooms" },
    ],
  },
  {
    title: "Shop",
    links: [
      { href: "/products", label: "All Pieces" },
      { href: "/products?cat=Flannel%20Blankets", label: "Flannel" },
      { href: "/products?cat=Bed%20Linens", label: "Bed Linens" },
      { href: "/products?cat=Pillows%20%26%20Cushions", label: "Cushions" },
    ],
  },
  {
    title: "Care",
    links: [
      { href: "/contact", label: "Concierge" },
      { href: "/contact", label: "Care Guide" },
      { href: "/contact", label: "Returns" },
      { href: "/contact", label: "Trade Programme" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-royal-950)] text-[var(--color-ivory)] mt-24">
      {/* Newsletter band */}
      <div className="border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-champagne)] mb-3">
              The Linen Letter
            </p>
            <h3 className="font-display text-4xl md:text-5xl leading-tight">
              Quiet drops. <span className="italic">Once a month.</span>
            </h3>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* Main */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-20 grid grid-cols-2 md:grid-cols-5 gap-12">
        <div className="col-span-2">
          <div className="mb-6">
            <Image
              src="/logo.png"
              alt="Risaa Homes"
              width={150}
              height={52}
              className="h-13 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-sm text-white/60 leading-relaxed max-w-sm">
            Heirloom blankets, comforters, linens & cushions — woven on slow looms across India and finished by hand. Class without noise.
          </p>
          <div className="flex items-center gap-4 mt-8">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[var(--color-royal-950)] transition-colors duration-500"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-champagne)] mb-5">
              {c.title}
            </p>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="luxe-link text-sm text-white/80 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Big wordmark — infinite right-to-left scroll */}
      <div className="overflow-hidden py-4">
        <div className="flex w-max animate-marquee-slow whitespace-nowrap select-none">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="font-display text-[clamp(5rem,18vw,18rem)] leading-none text-white/5 pr-16"
            >
              RISAA HOMES <span className="text-[var(--color-champagne)]/15">✦</span>
            </span>
          ))}
        </div>
      </div>

    
    </footer>
  );
}
