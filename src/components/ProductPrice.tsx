import { Product, formatPrice } from "@/lib/products";

export default function ProductPrice({
  product,
  variant = "card",
}: {
  product: Product;
  variant?: "card" | "detail";
}) {
  const hasWholesalePrice = product.mrp !== undefined;
  const primaryLabel = hasWholesalePrice ? "WSP" : "MRP";

  if (variant === "detail") {
    return (
      <div className="mt-7 flex flex-wrap items-end gap-x-6 gap-y-3 tabular-nums">
        <div>
          <p className="mb-1 text-[10px] font-medium tracking-[0.28em] text-[var(--color-royal-700)] uppercase">
            {primaryLabel}
          </p>
          <p className="font-display text-4xl leading-none text-[var(--color-ink)]">
            {formatPrice(product.price)}
          </p>
        </div>
        {product.mrp !== undefined && (
          <div className="border-l border-[var(--color-royal-900)]/15 pl-6">
            <p className="mb-1 text-[10px] font-medium tracking-[0.28em] text-[var(--color-ink)]/45 uppercase">
              MRP
            </p>
            <p className="font-display text-2xl leading-none text-[var(--color-ink)]/55">
              {formatPrice(product.mrp)}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1 tabular-nums">
      <span className="inline-flex items-baseline gap-2">
        <span className="text-[9px] font-medium tracking-[0.24em] text-[var(--color-royal-700)] uppercase">
          {primaryLabel}
        </span>
        <span className="font-display text-xl text-[var(--color-ink)]">
          {formatPrice(product.price)}
        </span>
      </span>
      {product.mrp !== undefined && (
        <span className="inline-flex items-baseline gap-2 text-[var(--color-ink)]/45">
          <span className="text-[9px] font-medium tracking-[0.24em] uppercase">MRP</span>
          <span className="text-xs tracking-wider">{formatPrice(product.mrp)}</span>
        </span>
      )}
    </div>
  );
}
