import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct } from "@/lib/products";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <>
      <section className="pt-32 pb-12 bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-ink)]/50">
            <Link href="/" className="luxe-link">Home</Link>
            <span className="mx-3">·</span>
            <Link href="/products" className="luxe-link">Atelier</Link>
            <span className="mx-3">·</span>
            <span className="text-[var(--color-ink)]/80">{product.name}</span>
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 pb-24">
          <div className="space-y-4">
            {product.images.map((src, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-ivory-2)]">
                  <Image
                    src={src}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              </Reveal>
            ))}
            {product.images.length === 1 && (
              <Reveal delay={0.1}>
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-ivory-2)]">
                  <Image
                    src={product.images[0]}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover scale-110"
                  />
                </div>
              </Reveal>
            )}
          </div>

          <div className="lg:sticky lg:top-32 self-start">
            <Reveal>
              <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-4">
                {product.category}
                {product.tag && (
                  <span className="ml-3 text-[var(--color-champagne)]">— {product.tag}</span>
                )}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display text-[clamp(2.4rem,4.5vw,4.5rem)] leading-[1.02] font-light">
                {product.name}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-[var(--color-ink)]/75 leading-relaxed max-w-lg">
                {product.shortDescription}
              </p>
            </Reveal>

            <div className="divider-rule my-10" />

            <Reveal delay={0.2}>
              <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-4">
                Colours
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    className="group flex items-center gap-2"
                    aria-label={c.name}
                  >
                    <span
                      className="block w-9 h-9 border border-[var(--color-royal-900)]/20 group-hover:border-[var(--color-royal-900)] transition-colors"
                      style={{ background: c.hex }}
                    />
                    <span className="text-xs tracking-wider">{c.name}</span>
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mt-10 mb-4">
                Size
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    className="border border-[var(--color-royal-900)]/20 hover:border-[var(--color-royal-900)] px-5 py-2.5 text-sm tracking-wider transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-12 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="group flex-1 inline-flex items-center justify-center gap-4 bg-[var(--color-royal-900)] text-[var(--color-ivory)] px-8 py-5 text-[11px] tracking-[0.32em] uppercase hover:bg-[var(--color-royal-800)] transition-colors"
                >
                  Enquire
                  <span className="block w-6 h-px bg-current transition-all duration-500 group-hover:w-12" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-4 border border-[var(--color-royal-900)] px-8 py-5 text-[11px] tracking-[0.32em] uppercase hover:bg-[var(--color-royal-900)] hover:text-[var(--color-ivory)] transition-colors"
                >
                  Concierge
                </Link>
              </div>
            </Reveal>

            <div className="divider-rule my-10" />

            <Reveal delay={0.35}>
              <details className="group border-b border-[var(--color-royal-900)]/15 py-5" open>
                <summary className="flex justify-between cursor-pointer list-none text-[11px] tracking-[0.32em] uppercase">
                  Description
                  <span className="group-open:rotate-45 transition-transform">＋</span>
                </summary>
                <p className="mt-4 text-[var(--color-ink)]/75 leading-relaxed">{product.description}</p>
              </details>
              <details className="group border-b border-[var(--color-royal-900)]/15 py-5">
                <summary className="flex justify-between cursor-pointer list-none text-[11px] tracking-[0.32em] uppercase">
                  Make
                  <span className="group-open:rotate-45 transition-transform">＋</span>
                </summary>
                <dl className="mt-4 grid grid-cols-2 gap-y-3 text-sm">
                  <dt className="text-[var(--color-ink)]/55">Fabric</dt>
                  <dd>{product.fabric}</dd>
                  <dt className="text-[var(--color-ink)]/55">Weave</dt>
                  <dd>{product.weave}</dd>
                  <dt className="text-[var(--color-ink)]/55">Origin</dt>
                  <dd>{product.origin}</dd>
                </dl>
              </details>
              <details className="group border-b border-[var(--color-royal-900)]/15 py-5">
                <summary className="flex justify-between cursor-pointer list-none text-[11px] tracking-[0.32em] uppercase">
                  Care
                  <span className="group-open:rotate-45 transition-transform">＋</span>
                </summary>
                <ul className="mt-4 space-y-2 text-sm">
                  {product.care.map((c) => (
                    <li key={c} className="flex gap-3">
                      <span className="text-[var(--color-champagne)]">·</span> {c}
                    </li>
                  ))}
                </ul>
              </details>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-[var(--color-ivory-2)]">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
            <Reveal>
              <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-3">
                More from the room
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] leading-tight font-light mb-12">
                You may also like
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-14">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.06}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
