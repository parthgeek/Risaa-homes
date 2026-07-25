"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";

const SHOWROOM_MAP_URL =
  "https://maps.google.com/?q=30.879967,75.771255";
const SHOWROOM_EMBED_URL =
  "https://www.google.com/maps?q=30.879967,75.771255&z=16&output=embed";

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
                    <a
                      href={SHOWROOM_MAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="luxe-link text-sm"
                    >
                      Risaa Home Showroom
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ivory-2)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-8">
          <Reveal>
            <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-royal-700)] mb-3">
              Visit the showroom
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,3.5vw,3.6rem)] leading-tight font-light mb-7 max-w-4xl">
              Find <span className="italic text-[var(--color-royal-900)]">Risaa Home.</span>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-12 bg-white border border-[var(--color-royal-900)]/15">
            <Reveal className="lg:col-span-4">
              <div className="h-full p-7 md:p-9 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 bg-[var(--color-royal-900)] text-white flex items-center justify-center mb-6">
                    <MapPin className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <p className="font-display text-3xl text-[var(--color-royal-900)]">
                    Risaa Home Showroom
                  </p>
                  <p className="mt-4 text-sm text-[var(--color-ink)]/65 leading-relaxed">
                    Visit our showroom to explore blankets, comforters and home
                    textiles in person.
                  </p>
                  <p className="mt-5 text-[10px] tracking-[0.26em] uppercase text-[var(--color-ink)]/50">
                    30.879967 · 75.771255
                  </p>
                </div>
                <a
                  href={SHOWROOM_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex items-center justify-between gap-6 border-t border-[var(--color-royal-900)]/15 pt-5 text-[11px] tracking-[0.28em] uppercase text-[var(--color-royal-900)]"
                >
                  Open in Google Maps
                  <ExternalLink
                    className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                  />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-8">
              <div className="relative min-h-[320px] md:min-h-[380px] overflow-hidden bg-[var(--color-ivory-3)]">
                <iframe
                  title="Risaa Home showroom location"
                  src={SHOWROOM_EMBED_URL}
                  className="absolute inset-0 w-full h-full border-0 grayscale-[15%] contrast-[0.95]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />

                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full"
                  aria-hidden="true"
                >
                  <div className="relative bg-[var(--color-royal-950)] px-4 py-3 shadow-[0_18px_45px_-12px_rgba(6,10,43,0.65)] border border-white/20">
                    <Image
                      src="/logo.png"
                      alt=""
                      width={104}
                      height={38}
                      className="h-9 w-auto object-contain brightness-0 invert"
                    />
                    <span className="absolute left-1/2 top-full w-4 h-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[var(--color-royal-950)] border-r border-b border-white/20" />
                  </div>
                </div>
              </div>
            </Reveal>
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
