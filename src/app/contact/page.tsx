"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";

const showrooms = [
  {
    city: "Mumbai",
    address: "12 Linking Road, Bandra West, 400050",
    hours: "Tue – Sat · 11 to 8",
  },
  {
    city: "Bangalore",
    address: "47 Lavelle Road, 560001",
    hours: "Tue – Sat · 11 to 8",
  },
  {
    city: "New Delhi",
    address: "Block A, Khan Market, 110003",
    hours: "Tue – Sat · 11 to 8",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="pt-40 pb-16 bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <Reveal>
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-6">
              The Concierge
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[1] font-light max-w-5xl">
              Let’s have <span className="italic text-[var(--color-royal-900)]">a conversation.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-lg text-[var(--color-ink)]/70 leading-relaxed">
              Trade enquiries, custom commissions, or just a question about a
              piece — we read every note that arrives.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <Reveal>
              <form
                className="space-y-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <Field label="Name" name="name" />
                  <Field label="Email" name="email" type="email" />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <Field label="Phone" name="phone" type="tel" />
                  <Field label="Subject" name="subject" />
                </div>
                <div className="border-b border-[var(--color-royal-900)]/20 focus-within:border-[var(--color-royal-900)] transition-colors">
                  <label className="block text-[10px] tracking-[0.32em] uppercase text-[var(--color-ink)]/60 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent outline-none py-2 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-4 mt-4 bg-[var(--color-royal-900)] text-[var(--color-ivory)] px-8 py-4 text-[11px] tracking-[0.32em] uppercase hover:bg-[var(--color-royal-800)] transition-colors"
                >
                  {submitted ? "Sent · Thank you" : "Send Note"}
                  <span className="block w-8 h-px bg-current transition-all duration-500 group-hover:w-14" />
                </button>
              </form>
            </Reveal>
          </div>

          <div className="md:col-span-5 space-y-8">
            <Reveal>
              <div className="bg-[var(--color-ivory-2)] p-10">
                <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-6">
                  Reach the House
                </p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <Phone className="w-4 h-4 mt-1 text-[var(--color-royal-900)]" strokeWidth={1.5} />
                    <span className="text-sm">+91 98765 43210</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail className="w-4 h-4 mt-1 text-[var(--color-royal-900)]" strokeWidth={1.5} />
                    <span className="text-sm">concierge@risaahomes.com</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin className="w-4 h-4 mt-1 text-[var(--color-royal-900)]" strokeWidth={1.5} />
                    <span className="text-sm">12 Linking Road, Bandra West, Mumbai 400050</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ivory-2)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
          <Reveal>
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-3">
              Showrooms
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4.5rem)] leading-tight font-light mb-12 max-w-4xl">
              Three rooms, <span className="italic text-[var(--color-royal-900)]">by appointment.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {showrooms.map((s, i) => (
              <Reveal key={s.city} delay={i * 0.08}>
                <div className="border border-[var(--color-royal-900)]/15 p-10 bg-white hover:border-[var(--color-royal-900)] transition-colors">
                  <p className="font-display text-4xl text-[var(--color-royal-900)]">{s.city}</p>
                  <p className="mt-6 text-sm text-[var(--color-ink)]/75 leading-relaxed">
                    {s.address}
                  </p>
                  <p className="mt-4 text-[10px] tracking-[0.3em] uppercase text-[var(--color-champagne)]">
                    {s.hours}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div className="border-b border-[var(--color-royal-900)]/20 focus-within:border-[var(--color-royal-900)] transition-colors">
      <label
        htmlFor={name}
        className="block text-[10px] tracking-[0.32em] uppercase text-[var(--color-ink)]/60 mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full bg-transparent outline-none py-2"
      />
    </div>
  );
}
