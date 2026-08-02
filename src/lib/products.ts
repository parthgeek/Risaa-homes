export type Category =
  | "Mink Blankets"
  | "Flannel Blankets"
  | "Summer Sets"
  | "Summer Comforters"
  | "Bed Sheets"
  | "Pillows"
  | "Mattress Covers"
  | "Carpets"
  | "Winter Comforters";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  // When mrp is present, price is the WSP. Otherwise price is the MRP.
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
  imageAspect?: "portrait" | "landscape" | "square";
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
    name: "Flannel Blankets",
    blurb: "Soft-brushed flannel. Warm for all seasons, light enough for AC rooms.",
    image: "/FLANNEL%20AC%20BLANKET/FLANNEL%20AC%20BLANKET_page-0001.jpg",
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
    image: "/desire%20comforter%20set/Desire%20Comforter%20Risaa%20Home%20%20(1)_page-0001.jpg",
  },
  {
    name: "Bed Sheets",
    blurb: "Micro-polyester and pure-cotton base fabrics, across Indian and imported ranges.",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1600&q=80&auto=format&fit=crop",
  },
  {
    name: "Pillows",
    blurb: "Supportive fills, soft covers. Sleep right.",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=1600&q=80&auto=format&fit=crop",
  },
  {
    name: "Mattress Covers",
    blurb: "Fitted mattress protection. Washable, breathable.",
    image:
      "https://images.unsplash.com/photo-1631049307290-bb947b114627?w=1600&q=80&auto=format&fit=crop",
  },
  {
    name: "Carpets",
    blurb: "Considered floor coverings selected for texture, finish and everyday durability.",
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?w=1600&q=80&auto=format&fit=crop",
  },
  {
    name: "Winter Comforters",
    blurb: "Heavy down-alt loft. Quilted shells. Built for January.",
    image:
      "https://images.unsplash.com/photo-1631049307290-bb947b114627?w=1600&q=80&auto=format&fit=crop",
  },
];

// ── Image helpers ──────────────────────────────────────────────────────────────

const IMG = {
  comforter1: "https://images.unsplash.com/photo-1606170033648-5d55a3edf314?w=1400&q=80&auto=format&fit=crop",
  comforter2: "https://images.unsplash.com/photo-1531001389693-3a2630f196aa?w=1400&q=80&auto=format&fit=crop",
  blanket1:   "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=1400&q=80&auto=format&fit=crop",
  sheet1:     "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1400&q=80&auto=format&fit=crop",
  pillow1:    "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=1400&q=80&auto=format&fit=crop",
};

const SHAGUN_DIR = "/SHAGUN-SET";
const shagunImg = (n: number) =>
  `${SHAGUN_DIR}/RISAA%20HOME%20SHAGUN%20SET_page-${String(n).padStart(4, "0")}.jpg`;

const publicImage = (...segments: string[]) =>
  `/${segments.map((segment) => encodeURIComponent(segment)).join("/")}`;

const celebrationImg = (n: number) =>
  publicImage("celebration set", `Celebration 6 Pcs Risaa Home 1_page-${String(n).padStart(4, "0")}.jpg`);

const goldmineImg = (n: number) =>
  publicImage("GOLDMINE SET", `Goldmine 6 Pcs Risaa Home 2_page-${String(n).padStart(4, "0")}.jpg`);

const sukoonImg = (n: number) =>
  publicImage("sukoon set", `Sukoon 6 Pcs _page-${String(n).padStart(4, "0")}.jpg`);

const desireComforterImg = (n: number) =>
  publicImage("desire comforter set", `Desire Comforter Risaa Home  (1)_page-${String(n).padStart(4, "0")}.jpg`);

const temptationComforterImg = (n: number) =>
  publicImage("temptation set", `Temptation Comforter Risaa Home -1_page-${String(n).padStart(4, "0")}.jpg`);

const ROYAL_FEATHER_IMAGES = [
  "/WhatsApp%20Image%202026-05-25%20at%2012.46.46.jpeg",
  "/WhatsApp%20Image%202026-05-25%20at%2012.46.46%20%281%29.jpeg",
];

// ── Colour tokens ──────────────────────────────────────────────────────────────

const IVORY      = { name: "Ivory",        hex: "#f1ead7" };
const PEARL      = { name: "Pearl White",  hex: "#f5f2ec" };
const CHAMPAGNE  = { name: "Champagne",    hex: "#c8a96a" };
const BONE       = { name: "Bone",         hex: "#ece5d3" };
const ROYAL      = { name: "Royal Indigo", hex: "#0f1a66" };
const MIDNIGHT   = { name: "Midnight",     hex: "#060a2b" };
const SLATE      = { name: "Slate Blue",   hex: "#3a4a78" };
const GRAPHITE   = { name: "Graphite",     hex: "#1a1d28" };
const ROSE       = { name: "Heritage Rose",hex: "#9c4a5c" };
const LILAC      = { name: "Lilac",        hex: "#b9a3c5" };
const SKY        = { name: "Sky Blue",     hex: "#a9c5db" };
const OLIVE      = { name: "Olive",        hex: "#a8a55c" };
const BURGUNDY   = { name: "Burgundy",     hex: "#6e1423" };
const GOLD       = { name: "Gold",         hex: "#b5860d" };
const TEAL       = { name: "Teal",         hex: "#2e7d72" };
const PEACH      = { name: "Peach",        hex: "#e8a98c" };
const SAGE       = { name: "Sage",         hex: "#87a884" };
const MUSTARD    = { name: "Mustard",      hex: "#c8950a" };

export const products: Product[] = [

  // ── MINK BLANKETS ─────────────────────────────────────────────────────────

  {
    id: "p53",
    slug: "risaa-royal-feather-blanket",
    name: "Royal Feather Blanket",
    category: "Mink Blankets",
    price: 1115,
    mrp: 2399,
    tag: "New",
    shortDescription:
      "Double bed mink blanket with feather emboss — 8 colourways across 4 approved designs.",
    description:
      "The Royal Feather in the final 2.2 kg double bed mink. Feather-embossed surface, brushed to a velvet hand. Available in four design layouts and eight colourways: N01 Chocolate & Pink, N02 Mauve & Peach, 332 Olive & Mauve, and 959 Beige & Dried Herb.",
    fabric: "Mink (brushed polyester)",
    weave: "Feather Emboss",
    origin: "India",
    care: ["Dry clean"],
    sizes: ["Double Bed"],
    colors: [
      { name: "N01 Chocolate", hex: "#6b3a2c" },
      { name: "N01 Pink",      hex: "#7c2744" },
      { name: "N02 Mauve",     hex: "#8f7896" },
      { name: "N02 Peach",     hex: "#df9b89" },
      { name: "332 Olive",     hex: "#68441f" },
      { name: "332 Mauve",     hex: "#8e5c82" },
      { name: "959 Beige",     hex: "#aa7c55" },
      { name: "959 Dried Herb",hex: "#5a523b" },
    ],
    images: ROYAL_FEATHER_IMAGES,
  },
  {
    id: "p54",
    slug: "risaa-romance-blanket",
    name: "Romance Blanket",
    category: "Mink Blankets",
    price: 820,
    mrp: 2299,
    shortDescription: "Premium mink blanket in floral colourways. Best for gifting & weddings. Dry clean.",
    description:
      "The Romance — a plush premium mink blanket in rich floral colourways, built for gifting and weddings. Super soft, extra warm and brushed to a velvet finish.",
    fabric: "Mink (brushed polyester)",
    weave: "Plain mink",
    origin: "India",
    care: ["Dry clean"],
    sizes: ["Double Bed"],
    colors: [
      { name: "Black Floral", hex: "#1f1d22" },
      { name: "Red Floral",   hex: "#7e1f2c" },
    ],
    imageAspect: "landscape",
    imageFit: "contain",
    images: ["/romance-set.png"],
  },
  {
    id: "p72",
    slug: "risaa-romance-single-bed-blanket",
    name: "Romance Blanket – Single Bed",
    category: "Mink Blankets",
    price: 833,
    mrp: 1999,
    tag: "New",
    shortDescription: "Single bed premium mink blanket in bold geometric prints. Dry clean.",
    description:
      "The Romance in a single bed size — a plush premium mink blanket with a bold geometric print. Super soft, extra warm and brushed to a velvet finish. Available in five designs.",
    fabric: "Mink (brushed polyester)",
    weave: "Plain mink",
    origin: "India",
    care: ["Dry clean"],
    sizes: ["Single Bed"],
    colors: [{ name: "Geometric Teal & Red", hex: "#2f6f73" }],
    imageFit: "contain",
    images: [
      "/ROMANCE%20SINGLE%20BED-1.jpg",
      "/romance-box.png",
    ],
  },
  {
    id: "p55",
    slug: "risaa-royal-comfort-blanket",
    name: "Royal Comfort Blanket",
    category: "Mink Blankets",
    price: 1900,
    mrp: 5199,
    shortDescription:
      "Double-bed, double-ply mink blanket with one-side embossing in assorted designs.",
    description:
      "The Royal Comfort is a double-bed, double-ply mink blanket with one-side embossing. Its dense, soft pile offers generous warmth and coverage in assorted floral and geometric designs.",
    fabric: "Mink (brushed polyester)",
    weave: "Double-ply, one-side embossed",
    origin: "India",
    care: ["Dry clean"],
    sizes: ["Double Bed"],
    colors: [ROYAL, MIDNIGHT, BURGUNDY, CHAMPAGNE],
    imageAspect: "landscape",
    imageFit: "contain",
    images: ["/realproduct.png"],
  },
  {
    id: "p56",
    slug: "risaa-emperor-blanket",
    name: "Emperor Blanket",
    category: "Mink Blankets",
    price: 2799,
    mrp: 3499,
    shortDescription: "Double-bed triple-ply mink blanket made for deep winter warmth.",
    description:
      "The Risaa Home Emperor is a substantial double-bed blanket built with a triple-ply construction for generous warmth and coverage.",
    fabric: "Mink (triple-ply brushed polyester)",
    weave: "Triple-ply mink",
    origin: "India",
    care: ["Dry clean"],
    sizes: ["Double Bed"],
    colors: [GOLD, BURGUNDY, MIDNIGHT, ROYAL],
    images: [IMG.blanket1],
  },

  {
    id: "p73",
    slug: "risaa-royal-feather-classic-blanket",
    name: "Royal Feather Blanket – Classic",
    category: "Mink Blankets",
    price: 1115,
    mrp: 2399,
    tag: "New",
    shortDescription:
      "Feather-emboss mink blanket in 8 classic designs — floral, bouquet & lattice. Currently in production.",
    description:
      "The Royal Feather Classic — a feather-embossed mink blanket in eight heritage designs spanning floral line-art, striped bouquets and geometric lattice. Brushed to a velvet hand. This range is currently in production; actual stock arrives soon.",
    fabric: "Mink (brushed polyester)",
    weave: "Feather Emboss",
    origin: "India",
    care: ["Dry clean"],
    sizes: ["Double Bed"],
    colors: [
      { name: "Mocha Floral",     hex: "#5a2d1f" },
      { name: "Wine Floral",      hex: "#6e203a" },
      { name: "Plum Bouquet",     hex: "#6f5570" },
      { name: "Rosewood Bouquet", hex: "#9c5a4f" },
      { name: "Mauve Blossom",    hex: "#8d6f86" },
      { name: "Sepia Blossom",    hex: "#6b4a2e" },
      { name: "Espresso Lattice", hex: "#4b3a28" },
      { name: "Caramel Lattice",  hex: "#a9794f" },
    ],
    imageFit: "contain",
    images: [
      "/royal-feather-classic/01.JPG",
      "/royal-feather-classic/02.JPG",
      "/royal-feather-classic/03.JPG",
      "/royal-feather-classic/04.JPG",
      "/royal-feather-classic/05.JPG",
      "/royal-feather-classic/06.JPG",
      "/royal-feather-classic/07.JPG",
      "/royal-feather-classic/08.JPG",
    ],
  },

  // ── FLANNEL BLANKETS ───────────────────────────────────────────────────────

  {
    id: "p57",
    slug: "risaa-flannel-baby-blanket",
    name: "Flannel Blanket – Baby",
    category: "Flannel Blankets",
    price: 799,
    mrp: 999,
    shortDescription: "Soft flannel baby blanket. Machine washable. India.",
    description:
      "Gentle, soft-touch flannel for newborns and infants. Machine washable, lightweight, and easy to care for.",
    fabric: "Flannel (polyester)",
    weave: "Brushed flannel",
    origin: "India",
    care: ["Machine wash cold", "Tumble dry low"],
    sizes: ["Baby"],
    colors: [PEARL, SKY, PEACH, LILAC],
    images: [
      "https://images.pexels.com/photos/4964222/pexels-photo-4964222.jpeg?cs=srgb&dl=pexels-karola-g-4964222.jpg&fm=jpg",
    ],
  },
  {
    id: "p58",
    slug: "risaa-flannel-single-bed-blanket",
    name: "Flannel Blanket – Single Bed",
    category: "Flannel Blankets",
    price: 1299,
    mrp: 1599,
    shortDescription: "Single bed flannel blanket. Machine washable. India.",
    description:
      "Single bed flannel blanket. Warm, breathable and easy to maintain — a year-round layering piece.",
    fabric: "Flannel (polyester)",
    weave: "Brushed flannel",
    origin: "India",
    care: ["Machine wash cold", "Tumble dry low"],
    sizes: ["Single Bed"],
    colors: [SLATE, TEAL, ROSE, BONE],
    images: [
      "https://images.pexels.com/photos/9899861/pexels-photo-9899861.jpeg?cs=srgb&dl=pexels-introspectivedsgn-9899861.jpg&fm=jpg",
    ],
  },
  {
    id: "p59",
    slug: "risaa-flannel-double-bed-blanket",
    name: "Flannel Blanket – Double Bed",
    category: "Flannel Blankets",
    price: 1799,
    mrp: 2199,
    shortDescription: "Double bed flannel blanket. Machine washable. India.",
    description:
      "Double bed flannel blanket. Soft brushed finish on both sides. Drapes well and washes clean every time.",
    fabric: "Flannel (polyester)",
    weave: "Brushed flannel",
    origin: "India",
    care: ["Machine wash cold", "Tumble dry low"],
    sizes: ["Double Bed"],
    colors: [SLATE, MIDNIGHT, BURGUNDY, OLIVE],
    images: [
      "https://images.pexels.com/photos/14676726/pexels-photo-14676726.jpeg?cs=srgb&dl=pexels-camerongawn-14676726.jpg&fm=jpg",
    ],
  },
  {
    id: "p60",
    slug: "risaa-flannel-6-seater-blanket",
    name: "Flannel Blanket – 6 Seater (S/6)",
    category: "Flannel Blankets",
    price: 2499,
    mrp: 2999,
    shortDescription: "Large 6-seater sofa flannel throw. Machine washable. India.",
    description:
      "Oversized flannel throw sized for a 6-seater sofa. Large coverage, the same soft brushed flannel finish.",
    fabric: "Flannel (polyester)",
    weave: "Brushed flannel",
    origin: "India",
    care: ["Machine wash cold", "Tumble dry low"],
    sizes: ["S/6 (Sofa)"],
    colors: [IVORY, SLATE, GRAPHITE, TEAL],
    images: [
      "https://images.pexels.com/photos/30380666/pexels-photo-30380666.jpeg?cs=srgb&dl=pexels-slipcoverkas-30380666.jpg&fm=jpg",
    ],
  },

  // ── SUMMER SETS ───────────────────────────────────────────────────────────

  {
    id: "p100",
    slug: "risaa-shagun-double-bed-set",
    name: "Shagun 5 Pc Set (Double Bed)",
    category: "Summer Sets",
    price: 799,
    mrp: 1999,
    tag: "New",
    shortDescription:
      "5-piece polyester double-bed set — 1 bedsheet, 2 pillowcases and 2 filled cushion covers.",
    description:
      "The Shagun Set is a coordinated 5-piece polyester ensemble for gifting and everyday use: one double bedsheet, two pillowcases and two cushion covers supplied with fillers. Available in eleven damask, scroll and botanical prints.",
    fabric: "100% Polyester",
    weave: "Printed plain weave",
    origin: "India",
    care: ["Cold wash", "Do not bleach", "Do not iron"],
    sizes: [
      "Bedsheet: 220 × 240 cm",
      "Pillowcases (2): 46 × 69 cm",
      "Filled cushion covers (2): 40 × 40 cm",
    ],
    colors: [LILAC, SKY, OLIVE, ROSE, ROYAL, CHAMPAGNE],
    imageAspect: "square",
    imageFit: "contain",
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
  {
    id: "p101",
    slug: "risaa-celebration-6-pcs-set",
    name: "Celebration 6 Pcs Set",
    category: "Summer Sets",
    price: 7900,
    tag: "New",
    shortDescription:
      "Premium 6-piece summer set with double bedsheet, comforter, 2 pillow covers and 2 lace cushions.",
    description:
      "Celebration is a premium 6-piece cushion set for a finished summer bedroom: one double bed sheet, two pillow covers with lace, one lightweight comforter and two coordinated lace cushions. Soft, cozy and cotton-feel, with six floral colourways.",
    fabric: "Cotton-feel printed blend",
    weave: "Printed summer set with lace detailing",
    origin: "India",
    care: ["Hand or machine wash at 30°C", "Do not bleach", "Medium steam iron", "Do not dry clean", "Tumble dry low heat"],
    sizes: [
      "Bed Sheet: 230 × 250 cm",
      "Pillow Covers: 45 × 71 ± 5 cm",
      "Comforter: 220 × 240 cm",
      "Cushions: 40 × 40 ± 5 cm",
    ],
    colors: [
      { name: "Vintage Beige", hex: "#d8c3a2" },
      { name: "Aqua Floral", hex: "#8fb8bc" },
      { name: "Powder Blue", hex: "#97d3d9" },
      { name: "Blush Pink", hex: "#d9a1a6" },
      { name: "Taupe Bloom", hex: "#a28b7b" },
      { name: "Sage Floral", hex: "#b9bea0" },
    ],
    imageAspect: "landscape",
    imageFit: "contain",
    imagePadding: "4%",
    images: [
      celebrationImg(1),
      celebrationImg(2),
      celebrationImg(3),
      celebrationImg(4),
      celebrationImg(5),
      celebrationImg(6),
    ],
  },
  {
    id: "p102",
    slug: "risaa-goldmine-6-pcs-set",
    name: "Goldmine 6 Pcs Set",
    category: "Summer Sets",
    price: 7900,
    tag: "New",
    shortDescription:
      "Premium 6-piece summer set with double bedsheet, comforter, 2 pillow covers and 2 cushions.",
    description:
      "Goldmine is a premium 6-piece set with one double bed sheet, two pillow covers, one comforter and two coordinated cushions. Lightweight, soft-feel and made for complete summer styling in seven prints.",
    fabric: "Cotton-feel printed blend",
    weave: "Printed summer set",
    origin: "India",
    care: ["Hand or machine wash at 30°C", "Do not bleach", "Medium steam iron", "Do not dry clean", "Tumble dry low heat"],
    sizes: [
      "Bed Sheet: 230 × 250 cm",
      "Pillow Covers: 45 × 71 ± 5 cm",
      "Comforter: 220 × 240 cm",
      "Cushions: 40 × 40 ± 5 cm",
    ],
    colors: [
      { name: "Blush Lily", hex: "#eab8c5" },
      { name: "Cafe Floral", hex: "#b48f73" },
      { name: "Pale Pistachio", hex: "#d9d2a8" },
      { name: "Mocha Check", hex: "#6a5145" },
      { name: "Champagne Leaf", hex: "#d9caad" },
      { name: "Charcoal Stripe", hex: "#677078" },
      { name: "Cocoa Bloom", hex: "#8a6042" },
    ],
    imageAspect: "landscape",
    imageFit: "contain",
    imagePadding: "4%",
    images: [
      goldmineImg(1),
      goldmineImg(2),
      goldmineImg(3),
      goldmineImg(4),
      goldmineImg(5),
      goldmineImg(6),
      goldmineImg(7),
    ],
  },
  {
    id: "p105",
    slug: "risaa-sukoon-6-pcs-set",
    name: "Sukoon 6 Pcs Set",
    category: "Summer Sets",
    price: 8999,
    tag: "New",
    shortDescription:
      "Digital-print 6-piece set with a quilted comforter, bedsheet, 2 pillow covers and 2 filled cushions.",
    description:
      "Sukoon is a coordinated 6-piece digital-print bedding set comprising one quilted comforter, one generously sized bedsheet, two pillow covers and two cushions supplied with fillers. Available in eleven floral, botanical and framed-border designs.",
    fabric: "Digital-print textile",
    weave: "Quilted comforter set",
    origin: "India",
    care: [
      "Machine wash at 30°C",
      "Do not bleach",
      "Cool iron",
      "Do not dry clean",
      "Do not tumble dry",
    ],
    sizes: [
      "Quilted comforter: 220 × 240 cm",
      "Bedsheet: 275 × 275 cm",
      "Pillow covers (2): 48 × 73 cm",
      "Filled cushions (2): 40 × 40 ± 5 cm",
    ],
    colors: [
      { name: "Design 01", hex: "#d5c6a5" },
      { name: "Design 02", hex: "#cbbcae" },
      { name: "Design 03", hex: "#c7b396" },
      { name: "Design 04", hex: "#b9a69b" },
      { name: "Design 05", hex: "#a8aaa0" },
      { name: "Design 06", hex: "#d3cec4" },
      { name: "Design 07", hex: "#b8aaa6" },
      { name: "Design 08", hex: "#c9b7a4" },
      { name: "Design 09", hex: "#aaa59b" },
      { name: "Design 10", hex: "#c6b39e" },
      { name: "Design 11", hex: "#aa8977" },
    ],
    imageAspect: "landscape",
    imageFit: "contain",
    imagePadding: "2%",
    images: [
      sukoonImg(1),
      sukoonImg(2),
      sukoonImg(3),
      sukoonImg(4),
      sukoonImg(5),
      sukoonImg(6),
      sukoonImg(7),
      sukoonImg(8),
      sukoonImg(9),
      sukoonImg(10),
      sukoonImg(11),
    ],
  },

  // ── SUMMER COMFORTERS ─────────────────────────────────────────────────────

  {
    id: "p52",
    slug: "risaa-flannel-ac-blanket",
    name: "Risaa Flannel AC Blanket",
    category: "Flannel Blankets",
    price: 2499,
    tag: "New",
    shortDescription: "Printed flannel quilt for AC rooms. 190–240 GSM, 230×250 cm. Available in 15 designs.",
    description:
      "Soft flannel quilt engineered for air-conditioned rooms. Medium weight, warm without being heavy. Rich printed designs on both sides — made for the AC chill without the winter bulk.",
    fabric: "100% Flannel (Polyester)",
    weave: "Printed Quilt",
    origin: "India",
    care: ["Cold machine wash", "Tumble dry low", "Do not iron"],
    sizes: ["230 × 250 cm"],
    colors: [
      { name: "Navy Floral", hex: "#1a2a5e" },
      { name: "Slate Blue",  hex: "#3a4a78" },
      { name: "Midnight",    hex: "#060a2b" },
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
  {
    id: "p103",
    slug: "risaa-desire-premium-satin-comforter",
    name: "Desire Premium Satin Comforter",
    category: "Summer Comforters",
    price: 3999,
    tag: "New",
    shortDescription:
      "Premium satin quilted comforter in 7 colourways. Soft feel, quality stitch, designer collection.",
    description:
      "Desire is a premium satin summer comforter with a quilted finish, soft hand-feel and floral designer colourways. A single-piece comforter made for AC rooms and warm-weather layering.",
    fabric: "Premium Satin, Poly-Fill",
    weave: "Quilted comforter",
    origin: "India",
    care: ["Hand or machine wash at 30°C", "Do not bleach", "Medium steam iron", "Do not dry clean", "Tumble dry low heat"],
    sizes: ["Quilted Comforter: 220 × 235 cm"],
    colors: [
      { name: "Powder Blue", hex: "#b9d2e3" },
      { name: "Sage Satin", hex: "#c2c9ac" },
      { name: "Champagne Satin", hex: "#d8c8ad" },
      { name: "Ivory Blue Floral", hex: "#c5b49b" },
      { name: "Sky Blue", hex: "#aac7df" },
      { name: "Graphite Grey", hex: "#707274" },
      { name: "Deep Teal", hex: "#3d6f6f" },
    ],
    imageAspect: "landscape",
    imageFit: "contain",
    imagePadding: "4%",
    images: [
      desireComforterImg(1),
      desireComforterImg(2),
      desireComforterImg(3),
      desireComforterImg(4),
      desireComforterImg(5),
      desireComforterImg(6),
      desireComforterImg(7),
    ],
  },
  {
    id: "p104",
    slug: "risaa-temptation-luxury-comforter",
    name: "Temptation Luxury Comforter",
    category: "Summer Comforters",
    price: 3799,
    tag: "New",
    shortDescription:
      "Luxury printed comforter in 10 colourways. Lightweight, soft-feel summer comfort.",
    description:
      "Temptation is a lightweight luxury comforter with soft printed surfaces and an easy summer loft. Designed as a one-piece comforter for relaxed daily use, with ten colourways from florals to checks.",
    fabric: "Printed Microfiber, Poly-Fill",
    weave: "Printed comforter",
    origin: "India",
    care: ["Hand or machine wash at 30°C", "Do not bleach", "Medium steam iron", "Do not dry clean", "Tumble dry low heat"],
    sizes: ["Comforter: 220 × 235 cm"],
    colors: [
      { name: "Blue Botanical", hex: "#6f8aae" },
      { name: "Pink Floral", hex: "#e8b6c3" },
      { name: "Taupe Geometry", hex: "#a7876b" },
      { name: "Mauve Bloom", hex: "#836c76" },
      { name: "Silver Floral", hex: "#c5c8ca" },
      { name: "Rose Check", hex: "#c8829a" },
      { name: "Blush Garden", hex: "#e8a3ad" },
      { name: "Charcoal Floral", hex: "#77777d" },
      { name: "Powder Blue", hex: "#bcd5ea" },
      { name: "Sage Rose", hex: "#c1c4a2" },
    ],
    imageAspect: "landscape",
    imageFit: "contain",
    imagePadding: "4%",
    images: [
      temptationComforterImg(1),
      temptationComforterImg(2),
      temptationComforterImg(3),
      temptationComforterImg(4),
      temptationComforterImg(5),
      temptationComforterImg(6),
      temptationComforterImg(7),
      temptationComforterImg(8),
      temptationComforterImg(9),
      temptationComforterImg(10),
    ],
  },

  // ── BED SHEETS ────────────────────────────────────────────────────────────

  {
    id: "p63",
    slug: "risaa-bed-sheet-set-1-2",
    name: "Bed Sheet Set – 1+2",
    category: "Bed Sheets",
    price: 1299,
    mrp: 1699,
    shortDescription: "180 TC pure cotton — 1 bedsheet + 2 pillow covers. Machine wash. India.",
    description:
      "Crisp 180 TC pure cotton bedsheet set — one double bedsheet and two matching pillow covers. Colour-fast reactive print.",
    fabric: "180 TC Pure Cotton",
    weave: "Plain weave, reactive print",
    origin: "India",
    care: ["Machine wash cold", "Wash darks separately first time", "Iron warm"],
    sizes: ["Double"],
    colors: [IVORY, SKY, LILAC, ROSE, TEAL, SAGE],
    images: [IMG.sheet1],
  },
  {
    id: "p64",
    slug: "risaa-bed-sheet-set-1-2-1",
    name: "Bed Sheet Set – 1+2+1",
    category: "Bed Sheets",
    price: 1799,
    mrp: 2299,
    shortDescription: "180 TC pure cotton — 1 bedsheet + 2 pillow covers + 1 slipcover. Machine wash. India.",
    description:
      "Bedsheet set with one double bedsheet, two pillow covers and one slipcover — all in matching 180 TC cotton print.",
    fabric: "180 TC Pure Cotton",
    weave: "Plain weave, reactive print",
    origin: "India",
    care: ["Machine wash cold", "Wash darks separately first time", "Iron warm"],
    sizes: ["Double"],
    colors: [IVORY, SKY, MUSTARD, ROSE, OLIVE, CHAMPAGNE],
    images: [IMG.sheet1],
  },
  {
    id: "p65",
    slug: "risaa-bed-sheet-set-1-2-2",
    name: "Bed Sheet Set – 1+2+2",
    category: "Bed Sheets",
    price: 2199,
    mrp: 2799,
    shortDescription: "180 TC pure cotton — 1 bedsheet + 2 pillow covers + 2 slipcovers. Machine wash. India.",
    description:
      "Complete bedsheet set in 180 TC cotton — one bedsheet, two pillow covers and two slipcovers for full bed coverage.",
    fabric: "180 TC Pure Cotton",
    weave: "Plain weave, reactive print",
    origin: "India",
    care: ["Machine wash cold", "Wash darks separately first time", "Iron warm"],
    sizes: ["Double"],
    colors: [TEAL, BURGUNDY, LILAC, BONE, SAGE, SLATE],
    images: [IMG.sheet1],
  },
  {
    id: "p66",
    slug: "risaa-bed-sheet-set-1-2-3",
    name: "Bed Sheet Set – 1+2+3",
    category: "Bed Sheets",
    price: 2699,
    mrp: 3499,
    tag: "Bestseller",
    shortDescription: "180 TC pure cotton — 1 bedsheet + 2 pillow covers + 3 slipcovers. Machine wash. India.",
    description:
      "The most complete bed linen set — one bedsheet, two pillow covers and three slipcovers in matching 180 TC pure cotton.",
    fabric: "180 TC Pure Cotton",
    weave: "Plain weave, reactive print",
    origin: "India",
    care: ["Machine wash cold", "Wash darks separately first time", "Iron warm"],
    sizes: ["Double"],
    colors: [IVORY, ROYAL, MUSTARD, TEAL, ROSE, CHAMPAGNE],
    images: [IMG.sheet1],
  },

  // ── PILLOWS ───────────────────────────────────────────────────────────────

  {
    id: "p67",
    slug: "risaa-pillow-standard",
    name: "Pillow – Standard",
    category: "Pillows",
    price: 499,
    shortDescription: "Standard sleeping pillow. India.",
    description:
      "Everyday sleeping pillow with a soft cotton shell and supportive poly-fill.",
    fabric: "Cotton Shell, Poly-Fill",
    weave: "Plain weave shell",
    origin: "India",
    care: ["Machine wash cold", "Tumble dry low"],
    sizes: ["Standard (43 × 69 cm)"],
    colors: [PEARL, IVORY],
    images: [IMG.pillow1],
  },
  {
    id: "p68",
    slug: "risaa-pillow-premium",
    name: "Pillow – Premium",
    category: "Pillows",
    price: 699,
    mrp: 899,
    tag: "Bestseller",
    shortDescription: "Premium sleeping pillow, higher loft. India.",
    description:
      "Higher-loft premium pillow for back and side sleepers. Firm support, soft cotton shell.",
    fabric: "Cotton Shell, High-Loft Poly-Fill",
    weave: "Plain weave shell",
    origin: "India",
    care: ["Machine wash cold", "Tumble dry low"],
    sizes: ["Standard (43 × 69 cm)"],
    colors: [PEARL, IVORY],
    images: [IMG.pillow1],
  },
  {
    id: "p69",
    slug: "risaa-pillow-microfibre",
    name: "Pillow – Microfibre",
    category: "Pillows",
    price: 899,
    mrp: 1199,
    tag: "New",
    shortDescription: "Microfibre fill pillow. Hypoallergenic. India.",
    description:
      "Hypoallergenic microfibre fill in a breathable cotton shell — ideal for sensitive sleepers.",
    fabric: "Cotton Shell, Microfibre Fill",
    weave: "Plain weave shell",
    origin: "India",
    care: ["Machine wash cold", "Tumble dry low"],
    sizes: ["Standard (43 × 69 cm)"],
    colors: [PEARL, IVORY],
    images: [IMG.pillow1],
  },

  // ── MATTRESS COVERS ───────────────────────────────────────────────────────

  {
    id: "p71",
    slug: "risaa-waterproof-fitted-mattress-protector",
    name: "Waterproof Fitted Mattress Protector",
    category: "Mattress Covers",
    price: 2000,
    tag: "New",
    shortDescription:
      "Soft, breathable waterproof protection with a secure corner-elastic fit.",
    description:
      "A soft polyester mattress protector that keeps your mattress and bed linen protected from stains and dirt. Its breathable waterproof layer adds everyday protection, while elastic straps at every corner hold it securely in place.",
    fabric: "Soft Polyester with Waterproof Backing",
    weave: "Quilted, corner-elastic fitted",
    origin: "India",
    care: ["Machine wash up to 60°C", "Tumble dry low"],
    sizes: ['72" × 78" + 12"'],
    colors: [
      { name: "Charcoal", hex: "#37383a" },
      { name: "Navy", hex: "#171a3b" },
      { name: "Pearl Grey", hex: "#d8d7d0" },
      { name: "Rust", hex: "#8d2c20" },
      { name: "Sky Blue", hex: "#4f9ac4" },
      { name: "Burgundy", hex: "#3f1118" },
      { name: "Mustard", hex: "#b67416" },
    ],
    images: ["/image.png"],
  },

  // ── WINTER COMFORTERS ─────────────────────────────────────────────────────

  {
    id: "p45",
    slug: "risaa-heavy-winter-comforter-1",
    name: "Heavy Winter Comforter – Solid",
    category: "Winter Comforters",
    price: 3999,
    mrp: 4999,
    tag: "Bestseller",
    shortDescription:
      "Heavy 5′ × 7′ winter comforter with a deep plush finish in rich solid colours.",
    description:
      "A heavy winter comforter sized at 5′ × 7′, finished in a soft, high-pile plush surface for warm and cosy winter layering. Available in an assortment of soft neutrals, greys, pinks and lilacs.",
    fabric: "Plush Polyester",
    weave: "High-pile plush",
    origin: "India",
    care: ["Dry clean"],
    sizes: ["5′ × 7′"],
    colors: [
      { name: "Taupe", hex: "#9d8174" },
      { name: "Dusty Grey", hex: "#8d8a91" },
      { name: "Charcoal", hex: "#55535a" },
      { name: "Rose Pink", hex: "#a14f78" },
      { name: "Berry", hex: "#c63f73" },
      { name: "Lilac", hex: "#a2689c" },
      { name: "Powder Blue", hex: "#9eabb8" },
    ],
    images: ["/realcomforter.png"],
  },
  {
    id: "p46",
    slug: "risaa-heavy-winter-comforter-2",
    name: "Heavy Winter Comforter – Printed",
    category: "Winter Comforters",
    price: 4499,
    mrp: 5499,
    tag: "New",
    shortDescription: "Heavy poly-fill winter comforter. Printed shell. Dry clean. India.",
    description:
      "Heavyweight winter comforter with a bold printed cotton shell and heavy poly-fill. Stays warm, looks sharp.",
    fabric: "Cotton Shell, Heavy Poly-Fill",
    weave: "Printed, box-stitch quilted",
    origin: "India",
    care: ["Dry clean"],
    sizes: ["Single", "Double"],
    colors: [TEAL, BURGUNDY, MUSTARD],
    images: [IMG.comforter1],
  },
  {
    id: "p47",
    slug: "risaa-heavy-winter-comforter-3",
    name: "Heavy Winter Comforter – Embroidery",
    category: "Winter Comforters",
    price: 5499,
    mrp: 6999,
    tag: "Heirloom",
    shortDescription: "Heavy poly-fill winter comforter. Embroidered shell. Dry clean. India.",
    description:
      "The premium winter comforter — heavy poly-fill with a hand-embroidered cotton shell. Decorative and deeply warm.",
    fabric: "Cotton Shell, Heavy Poly-Fill",
    weave: "Embroidered, quilted",
    origin: "India",
    care: ["Dry clean"],
    sizes: ["Double", "Queen"],
    colors: [CHAMPAGNE, IVORY, ROSE],
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
