import { Product, formatPrice } from "@/lib/products";

export default function ProductPrice({
  product,
  variant = "card",
}: {
  product: Product;
  variant?: "card" | "detail";
}) {
  const displayPrice = product.mrp ?? product.price;

  if (variant === "detail") {
    return (
      <p className="mt-7 font-display text-4xl leading-none text-[var(--color-ink)] tabular-nums">
        {formatPrice(displayPrice)}
      </p>
    );
  }

  return (
    <p className="mt-3 font-display text-xl text-[var(--color-ink)] tabular-nums">
      {formatPrice(displayPrice)}
    </p>
  );
}
