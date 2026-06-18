export type Category =
  | "Mink Blankets"
  | "Flannel Blankets"
  | "Summer Sets"
  | "Summer Comforters"
  | "Bed Sheets"
  | "Pillows"
  | "Mattress Covers"
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
    image:
      "https://images.unsplash.com/photo-1580500348112-94f09498fbb3?w=1600&q=80&auto=format&fit=crop",
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
    name: "Bed Sheets",
    blurb: "180 TC pure cotton. Crisp, cool, and colour-fast.",
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
      "https://images.unsplash.com/photo-1631049307264-eb603700e7ef?w=1600&q=80&auto=format&fit=crop",
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
  flannel1:   "https://images.unsplash.com/photo-1580500348112-94f09498fbb3?w=1400&q=80&auto=format&fit=crop",
  sheet1:     "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1400&q=80&auto=format&fit=crop",
  pillow1:    "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=1400&q=80&auto=format&fit=crop",
  mattress1:  "https://images.unsplash.com/photo-1631049307264-eb603700e7ef?w=1400&q=80&auto=format&fit=crop",
};

const SHAGUN_DIR = "/SHAGUN-SET";
const shagunImg = (n: number) =>
  `${SHAGUN_DIR}/RISAA%20HOME%20SHAGUN%20SET_page-${String(n).padStart(4, "0")}.jpg`;

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
    price: 2499,
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
    price: 1799,
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
    price: 1499,
    mrp: 1899,
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
    images: ["/ROMANCE%20SINGLE%20BED-1.jpg"],
  },
  {
    id: "p55",
    slug: "risaa-royal-comfort-blanket",
    name: "Royal Comfort Blanket",
    category: "Mink Blankets",
    price: 2199,
    mrp: 2799,
    shortDescription: "Premium mink blanket. Deep, rich colours. Dry clean.",
    description:
      "The Royal Comfort — dense mink pile in deep, rich colourways. A step up in weight and coverage.",
    fabric: "Mink (brushed polyester)",
    weave: "Plain mink",
    origin: "India",
    care: ["Dry clean"],
    sizes: ["Double Bed"],
    colors: [ROYAL, MIDNIGHT, BURGUNDY, CHAMPAGNE],
    images: [IMG.blanket1],
  },
  {
    id: "p56",
    slug: "risaa-casino-royal-blanket",
    name: "Casino Royal Blanket",
    category: "Mink Blankets",
    price: 2799,
    mrp: 3499,
    tag: "Bestseller",
    shortDescription: "Heavyweight mink blanket. Bold patterns, gold-tone borders.",
    description:
      "Casino Royal — the boldest in the mink range. Heavy pile, contrast border and statement colour pairings.",
    fabric: "Mink (brushed polyester)",
    weave: "Jacquard mink",
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
    price: 1999,
    mrp: 2499,
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
    images: [IMG.flannel1],
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
    images: [IMG.flannel1],
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
    images: [IMG.flannel1],
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
    images: [IMG.flannel1],
  },

  // ── SUMMER SETS ───────────────────────────────────────────────────────────

  {
    id: "p100",
    slug: "risaa-shagun-double-bed-set",
    name: "Risaa Home Shagun Set (Double Bed)",
    category: "Summer Sets",
    price: 1999,
    tag: "New",
    shortDescription:
      "5-piece printed double bed set — 1 bedsheet, 2 pillow covers, 2 cushion covers. 11 prints.",
    description:
      "The Shagun Set — built for gifting and for everyday. A 5-piece double bed ensemble in soft-touch printed cotton-blend: one double bedsheet, two pillow covers and two cushion covers. Eleven heritage prints across damask, scroll and botanical motifs.",
    fabric: "Soft-touch Cotton Blend",
    weave: "Plain weave, reactive print",
    origin: "India",
    care: ["Cold machine wash", "Wash darks separately the first time", "Iron warm"],
    sizes: ["Double (90 × 100 in)"],
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
    id: "p61",
    slug: "risaa-summer-comforter-embroidery",
    name: "Summer Comforter – Embroidery",
    category: "Summer Comforters",
    price: 3499,
    mrp: 4499,
    tag: "New",
    shortDescription: "Embroidered cotton-shell summer comforter. Dry clean. India.",
    description:
      "Light summer comforter with an embroidered cotton shell and poly-fill. Delicate embroidery work, dry-clean care.",
    fabric: "Cotton Shell, Poly-Fill",
    weave: "Embroidered, box-stitch quilted",
    origin: "India",
    care: ["Dry clean"],
    sizes: ["Single", "Double"],
    colors: [IVORY, CHAMPAGNE, ROSE, PEARL],
    images: [IMG.comforter1],
  },
  {
    id: "p62",
    slug: "risaa-summer-comforter-printed",
    name: "Summer Comforter – Printed",
    category: "Summer Comforters",
    price: 2999,
    mrp: 3799,
    tag: "New",
    shortDescription: "Printed cotton-shell summer comforter. Dry clean. India.",
    description:
      "Summer comforter with a bold printed cotton shell and poly-fill. Lightweight, drapes clean.",
    fabric: "Cotton Shell, Poly-Fill",
    weave: "Reactive printed, box-stitch quilted",
    origin: "India",
    care: ["Dry clean"],
    sizes: ["Single", "Double"],
    colors: [TEAL, SLATE, OLIVE, MUSTARD],
    images: [IMG.comforter1, IMG.comforter2],
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
    id: "p70",
    slug: "risaa-mattress-cover-standard",
    name: "Mattress Cover – Standard",
    category: "Mattress Covers",
    price: 1499,
    mrp: 1999,
    shortDescription: "Fitted mattress cover. Machine washable. India.",
    description:
      "Breathable fitted mattress cover with elastic all around. Protects against dust and spills.",
    fabric: "Cotton-Polyester Blend",
    weave: "Fitted, elasticated",
    origin: "India",
    care: ["Machine wash cold", "Tumble dry low"],
    sizes: ["Single", "Double", "Queen", "King"],
    colors: [PEARL, BONE],
    images: [IMG.mattress1],
  },
  {
    id: "p71",
    slug: "risaa-mattress-cover-waterproof",
    name: "Mattress Cover – Waterproof",
    category: "Mattress Covers",
    price: 1999,
    mrp: 2699,
    tag: "New",
    shortDescription: "Waterproof fitted mattress cover. Machine washable. India.",
    description:
      "Waterproof mattress cover with a quiet, non-crinkle backing. Protects fully while remaining breathable on top.",
    fabric: "Cotton Top, Waterproof Backing",
    weave: "Fitted, elasticated",
    origin: "India",
    care: ["Machine wash cold", "Tumble dry low"],
    sizes: ["Single", "Double", "Queen", "King"],
    colors: [PEARL, BONE],
    images: [IMG.mattress1],
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
    shortDescription: "Heavy poly-fill winter comforter. Solid colours. Dry clean. India.",
    description:
      "Heavyweight winter comforter with a cotton shell and heavy poly-fill. Solid colourways for a clean, classic look.",
    fabric: "Cotton Shell, Heavy Poly-Fill",
    weave: "Box-stitch quilted",
    origin: "India",
    care: ["Dry clean"],
    sizes: ["Single", "Double"],
    colors: [IVORY, SLATE, MIDNIGHT],
    images: [IMG.comforter2, IMG.comforter1],
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
