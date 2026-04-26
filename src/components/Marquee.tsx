type Props = { items: string[] };

export default function Marquee({ items }: Props) {
  const stream = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-[var(--color-royal-900)]/15 bg-[var(--color-ivory-2)] py-6">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {stream.map((it, idx) => (
          <span
            key={idx}
            className="flex items-center gap-10 px-10 font-display text-3xl md:text-4xl text-[var(--color-royal-900)]"
          >
            {it}
            <span className="text-[var(--color-champagne)] text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
