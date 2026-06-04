"use client";

import { useEffect, useState } from "react";

type PopupKind = "newuser" | "seasonal";

const STORAGE = {
  newuser: "risaa_popup_newuser_dismissed_v1",
  seasonal: "risaa_popup_seasonal_dismissed_v1",
};

const DELAY = {
  newuser: 1500,
  seasonal: 12000,
};

export default function DiscountPopups() {
  const [active, setActive] = useState<PopupKind | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const newuserDone = localStorage.getItem(STORAGE.newuser);
    const seasonalDone = localStorage.getItem(STORAGE.seasonal);

    let t1: ReturnType<typeof setTimeout> | undefined;
    let t2: ReturnType<typeof setTimeout> | undefined;

    if (!newuserDone) {
      t1 = setTimeout(() => setActive("newuser"), DELAY.newuser);
    } else if (!seasonalDone) {
      t2 = setTimeout(() => setActive("seasonal"), DELAY.seasonal);
    }

    return () => {
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
    };
  }, []);

  function dismiss(kind: PopupKind) {
    localStorage.setItem(STORAGE[kind], "1");
    setActive(null);
    if (kind === "newuser" && !localStorage.getItem(STORAGE.seasonal)) {
      setTimeout(() => setActive("seasonal"), DELAY.seasonal);
    }
  }

  function copyCode(code: string) {
    navigator.clipboard?.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 1800);
  }

  if (!active) return null;

  const config =
    active === "newuser"
      ? {
          eyebrow: "First Welcome",
          title: "10% off your first order.",
          body: "Join the Risaa Homes house list. We'll send a one-time code to your inbox, plus early access to seasonal drops.",
          code: "WELCOME10",
          cta: "Apply at checkout",
        }
      : {
          eyebrow: "Seasonal Offer",
          title: "Winter Edit — flat 20% off.",
          body: "Our heaviest mink blankets and down-alt winter comforters are on the season's only sitewide markdown. Closes once stocks turn.",
          code: "WINTER20",
          cta: "Shop the Winter Edit",
        };

  const shopHref =
    active === "seasonal" ? "/products?cat=Winter%20Comforters" : "/products";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="risaa-popup-title"
    >
      <button
        aria-label="Close discount popup"
        onClick={() => dismiss(active)}
        className="absolute inset-0 bg-[rgba(6,10,43,0.72)] backdrop-blur-sm"
      />

      <div className="relative w-full max-w-[920px] grid md:grid-cols-2 bg-[var(--color-ivory)] shadow-2xl overflow-hidden border border-[var(--color-royal-900)]/10">
        {/* Visual */}
        <div className="hidden md:block relative bg-[var(--color-royal-950)]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{
              backgroundImage:
                active === "seasonal"
                  ? "url('https://images.unsplash.com/photo-1631049307290-bb947b114627?w=1200&q=80&auto=format&fit=crop')"
                  : "url('https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(6,10,43,0.85)] via-[rgba(6,10,43,0.45)] to-transparent" />
          <div className="relative h-full p-10 flex flex-col justify-end text-[var(--color-ivory)]">
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-champagne)]">
              Risaa Homes
            </p>
            <p className="font-display italic text-3xl mt-3 leading-tight">
              Woven in tradition,
              <br />
              finished to last forever.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-8 md:p-12">
          <button
            aria-label="Close"
            onClick={() => dismiss(active)}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-[var(--color-ink)]/60 hover:text-[var(--color-royal-900)] transition"
          >
            <span className="sr-only">Close</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="square"
              />
            </svg>
          </button>

          <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-champagne)]">
            {config.eyebrow}
          </p>
          <h2
            id="risaa-popup-title"
            className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.05] font-light mt-4 text-[var(--color-royal-900)]"
          >
            {config.title}
          </h2>
          <p className="mt-5 text-[var(--color-ink)]/75 leading-relaxed">
            {config.body}
          </p>

          {active === "newuser" ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dismiss("newuser");
              }}
              className="mt-7 flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 border border-[var(--color-royal-900)]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-royal-900)]"
              />
              <button
                type="submit"
                className="bg-[var(--color-royal-900)] text-[var(--color-ivory)] px-6 py-3 text-[11px] tracking-[0.28em] uppercase hover:bg-[var(--color-royal-950)] transition"
              >
                Claim 10% Off
              </button>
            </form>
          ) : (
            <a
              href={shopHref}
              onClick={() => dismiss("seasonal")}
              className="mt-7 inline-block bg-[var(--color-royal-900)] text-[var(--color-ivory)] px-7 py-3 text-[11px] tracking-[0.28em] uppercase hover:bg-[var(--color-royal-950)] transition"
            >
              {config.cta}
            </a>
          )}

          <div className="mt-8 flex items-center gap-3">
            <span className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-ink)]/50">
              Code
            </span>
            <button
              onClick={() => copyCode(config.code)}
              className="font-mono text-sm tracking-[0.2em] border border-dashed border-[var(--color-royal-900)]/30 px-4 py-2 text-[var(--color-royal-900)] hover:bg-[var(--color-ivory-2)] transition"
            >
              {config.code}
            </button>
            <span className="text-xs text-[var(--color-champagne)]">
              {copied === config.code ? "Copied" : ""}
            </span>
          </div>

          <button
            onClick={() => dismiss(active)}
            className="mt-6 text-[10px] tracking-[0.28em] uppercase text-[var(--color-ink)]/45 hover:text-[var(--color-royal-900)] transition"
          >
            No thanks, continue browsing
          </button>
        </div>
      </div>
    </div>
  );
}
