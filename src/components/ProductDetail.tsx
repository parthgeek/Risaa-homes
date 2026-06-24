"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, formatPrice } from "@/lib/products";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const [active, setActive] = useState(0);

  // Clicking a colour swaps the main image whenever there's more than one image.
  // Colour index maps to image index (clamped to the last image).
  const colourMapsToImage = product.images.length > 1;

  const frameAspect =
    product.imageAspect === "landscape"
      ? "aspect-[4/3]"
      : product.imageAspect === "square"
        ? "aspect-square"
        : "aspect-[4/5]";
  const mainSrc = product.images[active] ?? product.images[0];
  const isLocal = mainSrc.startsWith("/");
  const resolveFit = (local: boolean) =>
    product.imageFit
      ? product.imageFit === "contain"
        ? "object-contain"
        : "object-cover"
      : local
        ? "object-contain"
        : "object-cover";
  const fitClass = resolveFit(isLocal);
  const imageStyle = product.imagePadding
    ? { padding: product.imagePadding }
    : undefined;

  return (
    <>
      <section className="pt-24 pb-6 bg-[var(--color-ivory)]">
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
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 pb-12">
          {/* ── Media column ── */}
          <div className="lg:sticky lg:top-32 self-start space-y-4">
            <div
              className={`relative ${frameAspect} overflow-hidden bg-[var(--color-ivory-2)]`}
            >
              <Image
                key={mainSrc}
                src={mainSrc}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={fitClass}
                style={imageStyle}
                priority
              />
            </div>

            {product.images.length > 1 && (
              <div className="grid grid-cols-5 gap-3">
                {product.images.map((src, i) => {
                  const tFit = resolveFit(src.startsWith("/"));
                  return (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`View image ${i + 1}`}
                      className={`relative aspect-square overflow-hidden bg-[var(--color-ivory-2)] border transition-colors ${
                        i === active
                          ? "border-[var(--color-royal-900)]"
                          : "border-transparent hover:border-[var(--color-royal-900)]/40"
                      }`}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="120px"
                        className={tFit}
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── Info column ── */}
          <div>
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
            <Reveal delay={0.15}>
              <p className="mt-7 font-display text-3xl text-[var(--color-ink)]">
                {formatPrice(product.price)}
                {product.mrp && (
                  <span className="ml-3 text-xl line-through text-[var(--color-ink)]/40">
                    {formatPrice(product.mrp)}
                  </span>
                )}
              </p>
            </Reveal>

            <div className="divider-rule my-10" />

            <Reveal delay={0.2}>
              <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-4">
                Colours
                {colourMapsToImage && (
                  <span className="ml-3 normal-case tracking-normal text-[var(--color-ink)]/45">
                    {product.colors[active]?.name}
                  </span>
                )}
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {product.colors.map((c, i) => {
                  const mapped = Math.min(i, product.images.length - 1);
                  const selected = colourMapsToImage && mapped === active;
                  return (
                    <button
                      key={c.name}
                      onClick={() => colourMapsToImage && setActive(mapped)}
                      className="group flex items-center gap-2"
                      aria-label={c.name}
                      aria-pressed={selected}
                    >
                      <span
                        className={`block w-9 h-9 border transition-all ${
                          selected
                            ? "border-[var(--color-royal-900)] ring-2 ring-[var(--color-royal-900)] ring-offset-2 ring-offset-[var(--color-ivory)]"
                            : "border-[var(--color-royal-900)]/20 group-hover:border-[var(--color-royal-900)]"
                        }`}
                        style={{ background: c.hex }}
                      />
                      <span className="text-xs tracking-wider">{c.name}</span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mt-6 mb-4">
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
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
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
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-10">
            <Reveal>
              <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-3">
                More from the room
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] leading-tight font-light mb-6">
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
