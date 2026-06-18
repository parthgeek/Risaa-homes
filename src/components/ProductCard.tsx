import Image from "next/image";
import Link from "next/link";
import { Product, formatPrice } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const frameAspect =
    product.imageAspect === "landscape"
      ? "aspect-[4/3]"
      : product.imageAspect === "square"
        ? "aspect-square"
        : "aspect-[4/5]";
  const fitClass = product.imageFit
    ? product.imageFit === "contain"
      ? "object-contain"
      : "object-cover"
    : product.images[0].startsWith("/")
      ? "object-contain"
      : "object-cover";
  const hoverClass =
    product.imageAspect === "landscape" || product.imageAspect === "square"
      ? ""
      : "tile-img";
  const imageStyle = product.imagePadding
    ? { padding: product.imagePadding }
    : undefined;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="tile group block relative"
    >
      <div className={`relative ${frameAspect} overflow-hidden bg-[var(--color-ivory-2)]`}>
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`${fitClass} ${hoverClass}`}
          style={imageStyle}
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
        <p className="mt-2 text-sm tracking-wider text-[var(--color-ink)]/75">
          {formatPrice(product.price)}
          {product.mrp && (
            <span className="ml-2 line-through text-[var(--color-ink)]/40">
              {formatPrice(product.mrp)}
            </span>
          )}
        </p>
      </div>
    </Link>
  );
}
