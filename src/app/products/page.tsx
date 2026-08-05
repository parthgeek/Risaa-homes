"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import CarpetShowcase from "@/components/CarpetShowcase";
import Reveal from "@/components/Reveal";
import {
  products,
  categories,
  featuredBeddingProductIds,
  featuredBeddingProducts,
  Category,
} from "@/lib/products";

const CATS: ("All" | Category)[] = ["All", ...categories.map((c) => c.name)];
const featuredBeddingIds = new Set(featuredBeddingProductIds);
const prioritizedProducts = [
  ...featuredBeddingProducts,
  ...products.filter((product) => !featuredBeddingIds.has(product.id)),
];

function ProductsInner() {
  const sp = useSearchParams();
  const router = useRouter();
  const requestedCategory = sp.get("cat");
  const active: "All" | Category = categories.some(
    (category) => category.name === requestedCategory,
  )
    ? (requestedCategory as Category)
    : "All";

  const filtered = useMemo(() => {
    if (active === "All") return prioritizedProducts;
    if (active === "Bed Sheets") return featuredBeddingProducts;
    return products.filter((p) => p.category === active);
  }, [active]);

  function pick(c: "All" | Category) {
    const url = c === "All" ? "/products" : `/products?cat=${encodeURIComponent(c)}`;
    router.replace(url, { scroll: false });
  }

  return (
    <>
      <section className="pt-28 pb-8 bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <Reveal>
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-6">
              The Atelier · Collection
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[1] font-light">
              Every piece, <span className="italic text-[var(--color-royal-900)]">in the house.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-xl text-lg text-[var(--color-ink)]/70 leading-relaxed">
              Explore collections produced with trusted manufacturing partners
              in India and abroad. Every piece is inspected twice before it is
              packed.
            </p>
            <p className="mt-5 text-[10px] font-medium tracking-[0.25em] uppercase text-[var(--color-royal-700)]">
              WSP shown first · MRP shown where available
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-ivory)] sticky top-20 z-30 border-b border-[var(--color-royal-900)]/10 backdrop-blur-md bg-white/85">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center gap-2 overflow-x-auto py-4">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => pick(c)}
              className={`whitespace-nowrap text-[11px] tracking-[0.28em] uppercase px-5 py-2 border transition-colors duration-300 ${
                active === c
                  ? "bg-[var(--color-royal-900)] text-white border-[var(--color-royal-900)]"
                  : "border-[var(--color-royal-900)]/20 text-[var(--color-ink)]/80 hover:border-[var(--color-royal-900)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-10">
          {active === "Carpets" ? (
            <CarpetShowcase />
          ) : filtered.length === 0 ? (
            <div className="py-28 text-center">
              <p className="font-display text-3xl md:text-4xl text-[var(--color-ink)]/80">
                No pieces in this room yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
              {filtered.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.04}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-[var(--color-ivory-2)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-10 text-center">
          <p className="font-display text-3xl md:text-4xl leading-snug max-w-2xl mx-auto text-[var(--color-ink)]/80">
            Looking for something not on the floor?{" "}
            <Link href="/contact" className="luxe-link italic text-[var(--color-royal-900)]">
              Speak to our concierge.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="pt-40 px-6">Loading…</div>}>
      <ProductsInner />
    </Suspense>
  );
}
