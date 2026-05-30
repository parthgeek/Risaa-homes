export type Category =
  | "Mink Blankets"
  | "Summer Sets"
  | "Summer Comforters"
  | "Winter Comforters";

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
  imageAspect?: "portrait" | "landscape";
  imageFit?: "cover" | "contain";
  imagePadding?: string;
};

export const categories: { name: Category; blurb: string; image: string }[] = [
  {
    name: "Mink Blankets",
    blurb: "Plush mink, embossed and brushed for a velvet hand.",
    image:
      "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=1600&q=80&auto=format&fit=crop",
  },
  {
    name: "Summer Sets",
    blurb: "Lightweight bedding sets for warm, breathable nights.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80&auto=format&fit=crop",
  },
  {
    name: "Summer Comforters",
    blurb: "All-cotton fills. Featherweight loft for warmer rooms.",
    image:
      "https://images.unsplash.com/photo-1606170033648-5d55a3edf314?w=1600&q=80&auto=format&fit=crop",
  },
  {
    name: "Winter Comforters",
    blurb: "Heavy down-alt loft. Quilted shells. Built for January.",
    image:
      "https://images.unsplash.com/photo-1631049307290-bb947b114627?w=1600&q=80&auto=format&fit=crop",
  },
];

const IMG = {
  set1: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=80&auto=format&fit=crop",
  comforter1: "https://images.unsplash.com/photo-1606170033648-5d55a3edf314?w=1400&q=80&auto=format&fit=crop",
  comforter2: "https://images.unsplash.com/photo-1531001389693-3a2630f196aa?w=1400&q=80&auto=format&fit=crop",
};

const ROYAL = { name: "Royal Indigo", hex: "#0f1a66" };
const IVORY = { name: "Ivory Mist", hex: "#f1ead7" };
const MIDNIGHT = { name: "Midnight", hex: "#060a2b" };
const CHAMPAGNE = { name: "Champagne", hex: "#c8a96a" };
const SLATE = { name: "Slate Blue", hex: "#3a4a78" };
const BONE = { name: "Bone", hex: "#ece5d3" };
const PEARL = { name: "Pearl", hex: "#f1ead7" };
const GRAPHITE = { name: "Graphite", hex: "#1a1d28" };
const ROSE = { name: "Heritage Rose", hex: "#9c4a5c" };
const LILAC = { name: "Lilac", hex: "#b9a3c5" };
const SKY = { name: "Sky Blue", hex: "#a9c5db" };
const OLIVE = { name: "Olive", hex: "#a8a55c" };

const SHAGUN_DIR = "/RISAA-HOME-SHAGUN-SET-1";
const shagunImg = (n: number) =>
  `${SHAGUN_DIR}/RISAA%20HOME%20SHAGUN%20SET_page-${String(n).padStart(4, "0")}.jpg`;
const ROYAL_FEATHER_IMAGES = [
  "/WhatsApp%20Image%202026-05-25%20at%2012.46.46.jpeg",
  "/WhatsApp%20Image%202026-05-25%20at%2012.46.46%20%281%29.jpeg",
];

export const products: Product[] = [
  // ============ SHAGUN SET (Risaa Home, double bed) ============
  {
    id: "p100",
    slug: "risaa-shagun-double-bed-set",
    name: "Risaa Home Shagun Set (Double Bed)",
    category: "Summer Sets",
    price: 2499,
    mrp: 3499,
    tag: "New",
    shortDescription:
      "5-piece printed double bed set — 1 bedsheet, 2 pillow covers, 2 cushion covers. 11 prints.",
    description:
      "The Shagun Set — built for gifting and for everyday. A 5-piece double bed ensemble in soft-touch printed cotton-blend: one double bedsheet, two pillow covers and two cushion covers. Eleven heritage prints across damask, scroll and botanical motifs.",
    fabric: "Soft-touch Cotton Blend",
    weave: "Plain weave, reactive print",
    origin: "Panipat, India",
    care: ["Cold machine wash", "Wash darks separately first time", "Iron warm"],
    sizes: ["Double (90 × 100 in)"],
    colors: [LILAC, SKY, OLIVE, ROSE, ROYAL, CHAMPAGNE],
    images: [
      shagunImg(1),
      shagunImg(2),
      shagunImg(3),
      shagunImg(4),
      shagunImg(5),
      shagunImg(6),
      shagunImg(7),
      shagunImg(8),
      shagunImg(9),
      shagunImg(10),
      shagunImg(11),
    ],
  },

  // ============ MINK BLANKETS (1) ============
  {
    id: "p53",
    slug: "risaa-royal-feather-single-ply-blanket",
    name: "Risaa Home 2.2 KG Double Bed Single Ply Blanket",
    category: "Mink Blankets",
    price: 2499,
    tag: "New",
    shortDescription:
      "2.2 kg double bed single-ply blanket in the final N01, N02, 332 and 959 design colourways.",
    description:
      "The final 2.2 KG double bed single-ply blanket range, finished in four approved layouts and eight colourways: N01 Chocolate and Pink, N02 Move and Peach, 332 Olive and Move, and 959 Beige and Dried Herb.",
    fabric: "Single-ply brushed flannel",
    weave: "Printed single-ply blanket",
    origin: "Panipat, India",
    care: ["Cold machine wash", "Wash darks separately first time", "Do not iron"],
    sizes: ["Double Bed (2.2 KG)"],
    colors: [
      { name: "N01 Chocolate", hex: "#6b3a2c" },
      { name: "N01 Pink", hex: "#7c2744" },
      { name: "N02 Move", hex: "#8f7896" },
      { name: "N02 Peach", hex: "#df9b89" },
      { name: "332 Olive", hex: "#68441f" },
      { name: "332 Move", hex: "#8e5c82" },
      { name: "959 Beige", hex: "#aa7c55" },
      { name: "959 Dried Herb", hex: "#5a523b" },
    ],
    images: ROYAL_FEATHER_IMAGES,
  },

  // ============ SUMMER SETS (3) ============
  {
    id: "p27",
    slug: "atelier-summer-set-4pc",
    name: "Atelier Summer Set (4-Piece)",
    category: "Summer Sets",
    price: 6990,
    tag: "Bestseller",
    shortDescription: "Fitted + flat sheet + 2 pillow covers, 280 TC percale.",
    description:
      "Four piece summer set in 280 TC cotton percale — fitted sheet, flat sheet, two pillow covers. Cool, matte and crisp.",
    fabric: "280 TC Cotton Percale",
    weave: "Percale",
    origin: "Karur, India",
    care: ["Cool wash", "Tumble dry low"],
    sizes: ["Queen", "King"],
    colors: [PEARL, ROYAL, IVORY],
    images: [IMG.set1],
  },
  {
    id: "p28",
    slug: "noble-block-print-summer-set",
    name: "Noble Block-Print Summer Set",
    category: "Summer Sets",
    price: 5990,
    shortDescription: "Hand-block printed 3-piece set, vegetable indigo.",
    description:
      "Hand-block printed in Bagru on 200 TC cotton. Soft, breathable, and the colour deepens with each wash.",
    fabric: "200 TC Pure Cotton",
    weave: "Plain weave",
    origin: "Bagru, Rajasthan",
    care: ["Cold wash separately first time"],
    sizes: ["Double", "Queen"],
    colors: [ROYAL, ROSE, BONE],
    images: [IMG.set1],
  },
  {
    id: "p30",
    slug: "dynasty-linen-summer-set",
    name: "Dynasty Linen Summer Set",
    category: "Summer Sets",
    price: 8990,
    tag: "Limited",
    shortDescription: "Pure linen 3-piece set. Lived-in feel from day one.",
    description:
      "Stone-washed pure linen. Wrinkles by design. Three pieces — one flat sheet and two pillow covers.",
    fabric: "100% Pure Linen, Stone-washed",
    weave: "Plain weave",
    origin: "Coimbatore, India",
    care: ["Cool machine wash", "Air dry"],
    sizes: ["Queen", "King"],
    colors: [BONE, SLATE, IVORY],
    images: [IMG.set1],
  },

  // ============ SUMMER COMFORTERS (3) ============
  {
    id: "p39",
    slug: "monsoon-summer-comforter",
    name: "Monsoon Summer Comforter",
    category: "Summer Comforters",
    price: 6490,
    tag: "Bestseller",
    shortDescription: "150 GSM cotton fill. Light cover for warm rooms.",
    description:
      "A summer-weight comforter with a 150 GSM cotton fill and a 200 TC voile shell. Drapes light, breathes through warm nights.",
    fabric: "200 TC Cotton Shell, Cotton Fill",
    weave: "Box-stitch quilted",
    origin: "Panipat, India",
    care: ["Cold machine wash", "Tumble dry low"],
    sizes: ["Single", "Double", "Queen", "King"],
    colors: [BONE, SLATE, IVORY],
    images: [IMG.comforter1],
  },
  {
    id: "p40",
    slug: "atelier-muslin-summer-comforter",
    name: "Atelier Muslin Summer Comforter",
    category: "Summer Comforters",
    price: 7990,
    tag: "New",
    shortDescription: "5-layer muslin comforter. Soft, airy, washable.",
    description:
      "Five layers of cotton muslin gauze stitched into a single airy comforter. Softens with each wash. Fully machine washable.",
    fabric: "100% Cotton Muslin",
    weave: "Muslin gauze",
    origin: "Karur, India",
    care: ["Machine wash cold", "Tumble dry low"],
    sizes: ["Double", "Queen"],
    colors: [PEARL, BONE, ROSE],
    images: [IMG.comforter1, IMG.comforter2],
  },
  {
    id: "p44",
    slug: "heritage-linen-summer-comforter",
    name: "Heritage Linen Summer Comforter",
    category: "Summer Comforters",
    price: 9490,
    tag: "Heirloom",
    shortDescription: "Pure linen shell, cotton fill. Heirloom drape.",
    description:
      "Pure linen shell with a fine cotton fill. Drapes heavy without heat — built for monsoon and shoulder seasons.",
    fabric: "100% Linen Shell, Cotton Fill",
    weave: "Box-stitch quilted",
    origin: "Coimbatore, India",
    care: ["Cool machine wash", "Air dry"],
    sizes: ["Queen", "King"],
    colors: [BONE, SLATE, IVORY],
    images: [IMG.comforter1],
  },
  {
    id: "p52",
    slug: "risaa-flannel-ac-blanket",
    name: "Risaa Flannel AC Blanket",
    category: "Summer Comforters",
    price: 2499,
    tag: "New",
    shortDescription: "Printed flannel quilt for AC rooms. 190–240 GSM, 230×250 cm. Available in 15 designs.",
    description:
      "Soft flannel quilt engineered for air-conditioned rooms. Medium weight, warm without being heavy. Rich printed designs on both sides — made for the AC chill without the winter bulk.",
    fabric: "100% Flannel (Polyester)",
    weave: "Printed Quilt",
    origin: "Panipat, India",
    care: ["Cold machine wash", "Tumble dry low", "Do not iron"],
    sizes: ["230 × 250 cm"],
    colors: [
      { name: "Navy Floral", hex: "#1a2a5e" },
      { name: "Slate Blue", hex: "#3a4a78" },
      { name: "Midnight", hex: "#060a2b" },
    ],
    imageAspect: "landscape",
    imageFit: "contain",
    imagePadding: "8%",
    images: [
      "/FLANNEL%20AC%20BLANKET/FLANNEL%20AC%20BLANKET_page-0001.jpg",
      "/FLANNEL%20AC%20BLANKET/FLANNEL%20AC%20BLANKET_page-0002.jpg",
      "/FLANNEL%20AC%20BLANKET/FLANNEL%20AC%20BLANKET_page-0003.jpg",
      "/FLANNEL%20AC%20BLANKET/FLANNEL%20AC%20BLANKET_page-0004.jpg",
      "/FLANNEL%20AC%20BLANKET/FLANNEL%20AC%20BLANKET_page-0006.jpg",
      "/FLANNEL%20AC%20BLANKET/FLANNEL%20AC%20BLANKET_page-0007.jpg",
      "/FLANNEL%20AC%20BLANKET/FLANNEL%20AC%20BLANKET_page-0008.jpg",
      "/FLANNEL%20AC%20BLANKET/FLANNEL%20AC%20BLANKET_page-0009.jpg",
      "/FLANNEL%20AC%20BLANKET/FLANNEL%20AC%20BLANKET_page-0010.jpg",
      "/FLANNEL%20AC%20BLANKET/FLANNEL%20AC%20BLANKET_page-0011.jpg",
      "/FLANNEL%20AC%20BLANKET/FLANNEL%20AC%20BLANKET_page-0012.jpg",
      "/FLANNEL%20AC%20BLANKET/FLANNEL%20AC%20BLANKET_page-0014.jpg",
      "/FLANNEL%20AC%20BLANKET/FLANNEL%20AC%20BLANKET_page-0015.jpg",
      "/FLANNEL%20AC%20BLANKET/FLANNEL%20AC%20BLANKET_page-0016.jpg",
      "/FLANNEL%20AC%20BLANKET/FLANNEL%20AC%20BLANKET_page-0017.jpg",
    ],
  },

  // ============ WINTER COMFORTERS (3) ============
  {
    id: "p45",
    slug: "imperial-winter-comforter",
    name: "Imperial Winter Comforter",
    category: "Winter Comforters",
    price: 14990,
    mrp: 18500,
    tag: "Bestseller",
    shortDescription: "Heavy down-alt fill, 350 GSM. Baffle-box build.",
    description:
      "A heavyweight winter comforter with a 350 GSM down-alternative fill in a baffle-box construction so loft stays where you put it.",
    fabric: "300 TC Cotton Shell, Down-Alt Fill",
    weave: "Baffle-box",
    origin: "Panipat, India",
    care: ["Cold machine wash on bulk cycle", "Tumble dry low with tennis balls"],
    sizes: ["Single", "Double", "Queen", "King"],
    colors: [IVORY, ROYAL, MIDNIGHT],
    images: [IMG.comforter2, IMG.comforter1],
  },
  {
    id: "p46",
    slug: "regalia-microfiber-winter-comforter",
    name: "Regalia Microfiber Winter Comforter",
    category: "Winter Comforters",
    price: 8990,
    tag: "New",
    shortDescription: "300 GSM microfiber fill. Quiet, lofty, washable.",
    description:
      "Microfiber fill in a quilted cotton-blend shell. Lofty, quiet, fully machine washable.",
    fabric: "Cotton-Polyester Shell, Microfiber Fill",
    weave: "Box-stitch quilted",
    origin: "Panipat, India",
    care: ["Cold machine wash", "Tumble dry low"],
    sizes: ["Single", "Double", "Queen"],
    colors: [SLATE, GRAPHITE, BONE],
    images: [IMG.comforter1],
  },
  {
    id: "p47",
    slug: "noble-velvet-winter-comforter",
    name: "Noble Velvet Winter Comforter",
    category: "Winter Comforters",
    price: 21990,
    tag: "Heirloom",
    shortDescription: "Velvet-faced winter comforter. Show piece for the bed.",
    description:
      "Cotton-velvet face panel with a heavy down-alt fill. Built as much for the look as the warmth.",
    fabric: "Cotton Velvet / Cotton Reverse, Down-Alt Fill",
    weave: "Quilted",
    origin: "Karur, India",
    care: ["Dry clean only"],
    sizes: ["Queen", "King"],
    colors: [ROYAL, MIDNIGHT, ROSE],
    images: [IMG.comforter2],
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
