import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="tile group block relative"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-ivory-2)]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover tile-img"
        />
        {product.tag && (
          <span className="absolute top-4 left-4 bg-[var(--color-royal-900)] text-[var(--color-ivory)] text-[10px] tracking-[0.3em] uppercase px-3 py-1.5">
            {product.tag}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] bg-[var(--color-royal-950)]/90 backdrop-blur-sm text-[var(--color-ivory)] py-4 px-5 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.3em] uppercase">View piece</span>
          <span className="block w-6 h-px bg-current" />
        </div>
      </div>
      <div className="mt-5">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-royal-700)] mb-2">
          {product.category}
        </p>
        <h3 className="font-display text-2xl leading-tight text-[var(--color-ink)]">
          {product.name}
        </h3>
      </div>
    </Link>
  );
}
