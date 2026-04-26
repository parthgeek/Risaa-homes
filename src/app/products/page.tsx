"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { products, categories, Category } from "@/lib/products";

const CATS: ("All" | Category)[] = ["All", ...categories.map((c) => c.name)];

function ProductsInner() {
  const sp = useSearchParams();
  const router = useRouter();
  const initial = (sp.get("cat") as Category | null) ?? "All";
  const [active, setActive] = useState<"All" | Category>(initial);
  const [sort, setSort] = useState<"featured" | "low" | "high">("featured");

  const filtered = useMemo(() => {
    let list = active === "All" ? products : products.filter((p) => p.category === active);
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [active, sort]);

  function pick(c: "All" | Category) {
    setActive(c);
    const url = c === "All" ? "/products" : `/products?cat=${encodeURIComponent(c)}`;
    router.replace(url, { scroll: false });
  }

  return (
    <>
      <section className="pt-40 pb-16 bg-[var(--color-ivory)]">
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
            <p className="mt-8 max-w-xl text-lg text-[var(--color-ink)]/70 leading-relaxed">
              Filter by room. Sort by weight. Each piece is finished by hand and shipped in linen paper.
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
          <div className="ml-auto flex items-center gap-3 shrink-0">
            <span className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-ink)]/50">
              Sort
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as "featured" | "low" | "high")}
              className="bg-transparent border border-[var(--color-royal-900)]/20 px-3 py-2 text-xs tracking-wider uppercase outline-none"
            >
              <option value="featured">Featured</option>
              <option value="low">Price · Low to High</option>
              <option value="high">Price · High to Low</option>
            </select>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-20">
          {filtered.length === 0 ? (
            <p className="text-center py-32 text-[var(--color-ink)]/60">
              No pieces in this room yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
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
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 text-center">
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
