"use client";

import { Mail } from "lucide-react";
import { useState } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);
  return (
    <form
      className="flex items-center border-b border-white/30 focus-within:border-[var(--color-champagne)] transition-colors"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <Mail className="w-4 h-4 opacity-70" strokeWidth={1.5} />
      <input
        type="email"
        required
        placeholder="your@email.com"
        className="flex-1 bg-transparent outline-none px-4 py-4 text-sm tracking-wide placeholder-white/40 text-white"
      />
      <button
        type="submit"
        className="text-[10px] tracking-[0.32em] uppercase px-6 py-4 hover:text-[var(--color-champagne)] transition-colors"
      >
        {done ? "Thank you" : "Subscribe"}
      </button>
    </form>
  );
}
