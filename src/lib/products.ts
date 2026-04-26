export type Category =
  | "Flannel Blankets"
  | "Single Bed Blankets"
  | "Double Bed Blankets"
  | "Bed Linens"
  | "Comforters & Rugs"
  | "Pillows & Cushions";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number;
  mrp?: number;
  tag?: "New" | "Heirloom" | "Limited" | "Bestseller";
  shortDescription: string;
  description: string;
  fabric: string;
  weave: string;
  origin: string;
  care: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  images: string[];
};

export const categories: { name: Category; blurb: string; image: string }[] = [
  {
    name: "Flannel Blankets",
    blurb: "Brushed double-warp flannel. Featherweight warmth.",
    image:
      "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=1600&q=80&auto=format&fit=crop",
  },
  {
    name: "Single Bed Blankets",
    blurb: "Solo silhouettes, woven for stillness.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80&auto=format&fit=crop",
  },
  {
    name: "Double Bed Blankets",
    blurb: "Generous drape. Built for long, slow nights.",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1600&q=80&auto=format&fit=crop",
  },
  {
    name: "Bed Linens",
    blurb: "300+ TC long-staple cotton. Press, sleep, repeat.",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1600&q=80&auto=format&fit=crop",
  },
  {
    name: "Comforters & Rugs",
    blurb: "Loftier weights. Quieter rooms.",
    image:
      "https://images.unsplash.com/photo-1631049307290-bb947b114627?w=1600&q=80&auto=format&fit=crop",
  },
  {
    name: "Pillows & Cushions",
    blurb: "Down-alternative cores. Hand-finished casings.",
    image:
      "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?w=1600&q=80&auto=format&fit=crop",
  },
];

export const products: Product[] = [
  {
    id: "p1",
    slug: "imperial-flannel-throw",
    name: "Imperial Flannel Throw",
    category: "Flannel Blankets",
    price: 4990,
    mrp: 6500,
    tag: "Bestseller",
    shortDescription:
      "Double-brushed cotton flannel with a hand-stitched royal selvage.",
    description:
      "A weight you remember. The Imperial is woven on slow looms in long-staple cotton, brushed twice for that sleep-in softness, and finished with a discreet royal-blue selvage stitched by hand. Built to outlive trends.",
    fabric: "100% Long-staple Cotton Flannel",
    weave: "Double-warp twill, 220 GSM",
    origin: "Loomed in Erode, India",
    care: ["Cool machine wash", "Tumble dry low", "Iron on reverse"],
    sizes: ["152 × 203 cm", "229 × 254 cm"],
    colors: [
      { name: "Royal Indigo", hex: "#0f1a66" },
      { name: "Ivory Mist", hex: "#f1ead7" },
      { name: "Slate Blue", hex: "#3a4a78" },
    ],
    images: [
      "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1400&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: "p2",
    slug: "monsoon-single-blanket",
    name: "Monsoon Single Blanket",
    category: "Single Bed Blankets",
    price: 5490,
    tag: "New",
    shortDescription: "Cloud-soft single, milled in cool indigo tones.",
    description:
      "A modern single — drawn long and clean. Milled from a Pima/cotton blend with a relaxed weave that breathes through warm nights and holds heat through cold ones.",
    fabric: "Pima-Cotton Blend",
    weave: "Honeycomb, 240 GSM",
    origin: "Karur, India",
    care: ["Gentle machine wash", "Air dry preferred"],
    sizes: ["152 × 220 cm"],
    colors: [
      { name: "Storm Indigo", hex: "#15217f" },
      { name: "Bone", hex: "#ece5d3" },
    ],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: "p3",
    slug: "sovereign-double-blanket",
    name: "Sovereign Double Blanket",
    category: "Double Bed Blankets",
    price: 8990,
    mrp: 11500,
    tag: "Heirloom",
    shortDescription:
      "Heavyweight double, milled in royal blue with champagne piping.",
    description:
      "A blanket designed to be passed down. The Sovereign is woven thick — 360 GSM — with a hand-applied champagne piping along all four edges. The drape is decisive; the silhouette stays put through the night.",
    fabric: "Egyptian-Cotton Sateen",
    weave: "Sateen, 360 GSM",
    origin: "Bhuj, India",
    care: ["Dry clean recommended", "Cool wash if needed"],
    sizes: ["229 × 254 cm", "274 × 274 cm"],
    colors: [
      { name: "Royal", hex: "#0f1a66" },
      { name: "Midnight", hex: "#060a2b" },
      { name: "Champagne", hex: "#c8a96a" },
    ],
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606170033648-5d55a3edf314?w=1400&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: "p4",
    slug: "atelier-linen-set",
    name: "Atelier Linen Set",
    category: "Bed Linens",
    price: 12990,
    tag: "Limited",
    shortDescription:
      "400 TC sateen sheet set. Cool to the touch, quiet on the bed.",
    description:
      "Four pieces. One mood. The Atelier set arrives folded in linen paper and tied with a single thread — fitted sheet, flat sheet, and two pillowcases in 400 thread-count long-staple cotton sateen.",
    fabric: "400 TC Long-staple Cotton Sateen",
    weave: "Sateen",
    origin: "Coimbatore, India",
    care: ["Cool machine wash", "Tumble dry low", "Iron warm"],
    sizes: ["Queen", "King"],
    colors: [
      { name: "Pearl", hex: "#f1ead7" },
      { name: "Royal", hex: "#0f1a66" },
      { name: "Graphite", hex: "#1a1d28" },
    ],
    images: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612320583049-eabe3c21bd94?w=1400&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: "p5",
    slug: "regalia-comforter",
    name: "Regalia Down-Alt Comforter",
    category: "Comforters & Rugs",
    price: 14490,
    tag: "Bestseller",
    shortDescription:
      "All-season comforter with baffle-box construction.",
    description:
      "Loft, evenly distributed. The Regalia uses a baffle-box construction so fill stays where you put it, season after season. The shell is a whisper-quiet 300 TC cotton.",
    fabric: "300 TC Cotton Shell, Down-Alt Fill",
    weave: "Baffle-box",
    origin: "Panipat, India",
    care: ["Cool machine wash on bulk cycle", "Tumble dry low with tennis balls"],
    sizes: ["Queen", "King"],
    colors: [
      { name: "Ivory", hex: "#f1ead7" },
      { name: "Royal", hex: "#0f1a66" },
    ],
    images: [
      "https://images.unsplash.com/photo-1531001389693-3a2630f196aa?w=1400&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: "p6",
    slug: "dynasty-cushion-pair",
    name: "Dynasty Cushion (Pair)",
    category: "Pillows & Cushions",
    price: 3490,
    tag: "New",
    shortDescription:
      "Hand-finished casings, down-alternative core, royal piping.",
    description:
      "Sold as a pair. The Dynasty is a 45 cm cushion with a hand-finished cotton casing and a down-alternative core that holds shape without flattening. Royal-blue piping along the edge.",
    fabric: "Cotton Twill Casing",
    weave: "Twill",
    origin: "Karur, India",
    care: ["Spot clean casing", "Casing removable & washable"],
    sizes: ["45 × 45 cm"],
    colors: [
      { name: "Royal", hex: "#0f1a66" },
      { name: "Pearl", hex: "#f1ead7" },
      { name: "Champagne", hex: "#c8a96a" },
    ],
    images: [
      "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?w=1400&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: "p7",
    slug: "heritage-rug-runner",
    name: "Heritage Rug Runner",
    category: "Comforters & Rugs",
    price: 18990,
    tag: "Heirloom",
    shortDescription:
      "Hand-knotted wool runner with a tonal royal field.",
    description:
      "A 2.5 metre runner, hand-knotted in pure wool with a deep royal field and a single ivory border. Built for hallways, foot-of-bed, and rooms that don't speak loudly.",
    fabric: "100% New Zealand Wool",
    weave: "Hand-knotted, ~120 KPSI",
    origin: "Bhadohi, India",
    care: ["Professional wool clean only"],
    sizes: ["80 × 250 cm"],
    colors: [
      { name: "Royal", hex: "#0f1a66" },
      { name: "Indigo", hex: "#15217f" },
    ],
    images: [
      "https://images.unsplash.com/photo-1600166898405-da9535204843?w=1400&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: "p8",
    slug: "noble-pillow-pair",
    name: "Noble Pillow (Pair)",
    category: "Pillows & Cushions",
    price: 4290,
    shortDescription: "Medium-loft sleeping pillow, gusset edge.",
    description:
      "A medium-loft pillow that holds its shape. Cotton sateen casing, down-alternative microfiber core, gusset edge for side sleepers.",
    fabric: "Cotton Sateen Casing",
    weave: "Sateen",
    origin: "Coimbatore, India",
    care: ["Cool machine wash", "Tumble dry low"],
    sizes: ["50 × 75 cm"],
    colors: [{ name: "Pearl", hex: "#f1ead7" }],
    images: [
      "https://images.unsplash.com/photo-1620751852890-a89137ec78b9?w=1400&q=80&auto=format&fit=crop",
    ],
  },
];

export function formatPrice(p: number): string {
  return `₹${p.toLocaleString("en-IN")}`;
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function byCategory(cat: Category) {
  return products.filter((p) => p.category === cat);
}
