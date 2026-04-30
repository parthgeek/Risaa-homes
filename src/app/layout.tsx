import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Allura } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Risaa Homes — Heirloom Bedding & Home Textiles",
  description:
    "Royal-grade blankets, comforters, bed linens & cushions. Crafted for homes that demand class. Risaa Homes — woven in tradition, finished for forever.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${inter.variable} ${allura.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col  bg-[var(--color-ivory)] text-[var(--color-ink)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
