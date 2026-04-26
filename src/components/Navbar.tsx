"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, Menu, ShoppingBag } from "lucide-react";
import { categories } from "@/lib/products";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products", mega: true },
  { href: "/about", label: "Atelier" },
  { href: "/contact", label: "Contact" },
];

const placeholders = [
  "royal flannel throw",
  "Egyptian sateen sheets",
  "king-size comforter",
  "down-alt cushions",
  "heritage wool runner",
];

// Typewriter: types each word char-by-char, holds, then deletes, advances.
// Pauses entirely when `paused` is true (e.g. input focused / has value).
function useTypewriter(words: string[], paused: boolean) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    if (paused) return;
    const word = words[wordIdx];
    let delay = 55;

    if (phase === "typing") {
      if (text.length < word.length) {
        delay = 55 + Math.random() * 25;
      } else {
        delay = 1500;
        const t = setTimeout(() => setPhase("deleting"), delay);
        return () => clearTimeout(t);
      }
      const t = setTimeout(
        () => setText(word.slice(0, text.length + 1)),
        delay
      );
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        delay = 28;
        const t = setTimeout(
          () => setText(word.slice(0, text.length - 1)),
          delay
        );
        return () => clearTimeout(t);
      }
      // hop to next word
      const t = setTimeout(() => {
        setWordIdx((i) => (i + 1) % words.length);
        setPhase("typing");
      }, 320);
      return () => clearTimeout(t);
    }
  }, [text, phase, wordIdx, words, paused]);

  return text;
}

export default function Navbar() {
  // Only the landing page ("/") gets the transparent-over-hero treatment.
  // Every other page renders the navbar solid from first paint so the dark
  // text is legible against the white surface.
  const pathname = usePathname();
  const isLanding = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isLanding || scrolled || openMega;

  // Typewriter pauses whenever the user is interacting with the input.
  const typewriter = useTypewriter(placeholders, searchFocused || query.length > 0);

  // Cmd/Ctrl+K shortcut to focus the search.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      onMouseLeave={() => setOpenMega(false)}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-[var(--color-ivory)]/95 backdrop-blur-md text-[var(--color-ink)]"
          : "bg-transparent text-[var(--color-ivory)]"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Risaa Homes"
          >
            <span className="relative w-9 h-9 flex items-center justify-center border border-current">
              <span className="font-display text-lg leading-none">R</span>
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[var(--color-champagne)]" />
            </span>
            <span className="font-display text-2xl tracking-tight">
              Risaa <span className="italic text-[var(--color-champagne)]">Homes</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <div
                key={l.href}
                onMouseEnter={() => setOpenMega(!!l.mega)}
                className="relative"
              >
                <Link
                  href={l.href}
                  className="luxe-link text-[11px] tracking-[0.32em] uppercase font-medium"
                >
                  {l.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Search */}
            <div
              onClick={() => inputRef.current?.focus()}
              className={`relative hidden md:flex items-center cursor-text transition-[width] duration-700 ease-[cubic-bezier(.2,.8,.2,1)] ${
                searchFocused ? "w-[22rem]" : "w-60"
              }`}
            >
              <Search
                className={`w-4 h-4 shrink-0 transition-all duration-500 ${
                  searchFocused
                    ? "opacity-100 scale-110 text-[var(--color-champagne)]"
                    : "opacity-70 animate-search-pulse"
                }`}
                strokeWidth={1.5}
              />

              <div className="relative ml-3 h-10 flex-1 overflow-hidden">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="absolute inset-0 bg-transparent outline-none text-sm tracking-wide placeholder-transparent z-10"
                  aria-label="Search the atelier"
                />

                {/* Typewriter placeholder + caret (only when idle) */}
                {!query && !searchFocused && (
                  <div className="absolute inset-0 flex items-center pointer-events-none text-sm tracking-wide select-none">
                    <span className="italic opacity-90 text-[var(--color-champagne)]">
                      {typewriter}
                    </span>
                    <span className="ml-[2px] inline-block w-[1px] h-[1.05em] bg-current animate-caret align-[-2px]" />
                  </div>
                )}

                {/* Focused empty hint */}
                {!query && searchFocused && (
                  <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 0.5, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                    className="absolute inset-0 flex items-center text-sm tracking-wide pointer-events-none"
                  >
                    Search the atelier…
                  </motion.span>
                )}
              </div>

              {/* Clear button — appears only when there's a query */}
              <div className="ml-2 flex items-center shrink-0">
                <AnimatePresence initial={false}>
                  {query && (
                    <motion.button
                      key="clear"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuery("");
                        inputRef.current?.focus();
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.7, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.25 }}
                      className="p-1 hover:opacity-100"
                      aria-label="Clear search"
                    >
                      <X className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              {/* Two-layer underline: faint base + champagne draw on focus */}
              <span className="absolute left-0 right-0 bottom-0 h-px bg-current opacity-20" />
              <span
                className={`absolute left-0 bottom-0 h-px bg-[var(--color-champagne)] origin-left transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] ${
                  searchFocused ? "scale-x-100" : "scale-x-0"
                }`}
                style={{ width: "100%" }}
              />
            </div>

            <button
              aria-label="Bag"
              className="relative p-2 hover:opacity-70 transition-opacity"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[var(--color-champagne)] text-[var(--color-royal-950)] text-[10px] flex items-center justify-center font-semibold">
                0
              </span>
            </button>

            <button
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Mega menu */}
      <AnimatePresence>
        {openMega && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute top-full left-0 right-0 bg-[var(--color-ivory)] text-[var(--color-ink)]"
          >
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 grid grid-cols-12 gap-8">
              <div className="col-span-3">
                <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-4">
                  The Atelier
                </p>
                <h4 className="font-display text-3xl leading-snug mb-4">
                  Heirloom textiles, finished by hand.
                </h4>
                <Link
                  href="/products"
                  className="luxe-link text-[11px] tracking-[0.32em] uppercase"
                >
                  Browse all
                </Link>
              </div>
              <div className="col-span-9 grid grid-cols-3 gap-x-8 gap-y-6">
                {categories.map((c) => (
                  <Link
                    key={c.name}
                    href={`/products?cat=${encodeURIComponent(c.name)}`}
                    className="group flex items-start gap-4 hover:bg-[var(--color-ivory-2)] p-3 -m-3 transition-colors"
                  >
                    <div className="w-16 h-20 relative overflow-hidden shrink-0 bg-[var(--color-ivory-2)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={c.image}
                        alt={c.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <p className="font-display text-xl leading-tight">
                        {c.name}
                      </p>
                      <p className="text-xs text-[var(--color-ink)]/60 mt-1 leading-snug">
                        {c.blurb}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed inset-0 z-[60] bg-[var(--color-royal-950)] text-[var(--color-ivory)] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
              <span className="font-display text-2xl">
                Risaa <span className="italic text-[var(--color-champagne)]">Homes</span>
              </span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col px-6 py-10 gap-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-4xl"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="px-6 pb-10 border-t border-white/10 pt-6">
              <p className="text-[10px] tracking-[0.32em] uppercase text-white/60">
                Risaa Homes · The Royal Bedding Atelier
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
