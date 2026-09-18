export type Category =
  | "Mink Blankets"
  | "Summer Sets"
  | "Summer Comforters"
  | "Bed Sheets & Sets"
  | "Mattress Covers"
  | "Carpets";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  // When mrp is present, price is the WSP. priceType handles confirmed exceptions.
  price: number;
  mrp?: number;
  priceType?: "WSP" | "MRP";
  tag?: "New" | "Heirloom" | "Limited" | "Bestseller" | "Best for Gifting" | "Hot Selling";
  shortDescription: string;
  description: string;
  fabric: string;
  weave: string;
  origin: string;
  care: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  images: string[];
  colorsLinkToImages?: boolean;
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
    name: "Bed Sheets & Sets",
    blurb: "Coordinated bedsheet, comforter and cushion sets for complete-room styling.",
    image: "/GOLDMINE%20SET/Goldmine%206%20Pcs%20Risaa%20Home%202_page-0001.jpg",
  },
  {
    name: "Mattress Covers",
    blurb: "Fitted mattress protection. Washable, breathable.",
    image:
      "https://images.unsplash.com/photo-1631049307290-bb947b114627?w=1600&q=80&auto=format&fit=crop",
  },
  {
    name: "Carpets",
    blurb: "Soft fur carpets in two practical sizes for bedrooms and living spaces.",
    image: "/carpets/fur-carpet-5x7-studio.webp",
  },
];

// ── Image helpers ──────────────────────────────────────────────────────────────

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

// ── Colour tokens ──────────────────────────────────────────────────────────────

const CHAMPAGNE  = { name: "Champagne",    hex: "#c8a96a" };
const ROYAL      = { name: "Royal Indigo", hex: "#0f1a66" };
const MIDNIGHT   = { name: "Midnight",     hex: "#060a2b" };
const ROSE       = { name: "Heritage Rose",hex: "#9c4a5c" };
const LILAC      = { name: "Lilac",        hex: "#b9a3c5" };
const SKY        = { name: "Sky Blue",     hex: "#a9c5db" };
const OLIVE      = { name: "Olive",        hex: "#a8a55c" };
const BURGUNDY   = { name: "Burgundy",     hex: "#6e1423" };

export const products: Product[] = [

  // ── MINK BLANKETS ─────────────────────────────────────────────────────────

  {
    id: "p53",
    slug: "risaa-royal-feather-blanket",
    name: "Royal Feather Blanket – Double Ply",
    category: "Mink Blankets",
    price: 1115,
    mrp: 2399,
    tag: "New",
    shortDescription:
      "Double-bed, double-ply mink blanket in four signature designs.",
    description:
      "Royal Feather is a double-bed, double-ply mink blanket with a rich velvet hand and generous winter warmth. Available in four distinctive designs: Honey Lattice, Teal Lattice, Burgundy Floral and Cream Floral.",
    fabric: "Mink (brushed polyester)",
    weave: "Double-ply brushed mink",
    origin: "India",
    care: ["Dry clean"],
    sizes: ["Double Bed"],
    colors: [
      { name: "Honey Lattice",   hex: "#a9783e" },
      { name: "Teal Lattice",    hex: "#1b5961" },
      { name: "Burgundy Floral", hex: "#781d2d" },
      { name: "Cream Floral",    hex: "#d3b276" },
    ],
    imageAspect: "portrait",
    imageFit: "cover",
    images: [
      "/royal-feather-double-ply/honey-lattice.webp",
      "/royal-feather-double-ply/teal-lattice.webp",
      "/royal-feather-double-ply/burgundy-floral.webp",
      "/royal-feather-double-ply/cream-floral.webp",
    ],
  },
  {
    id: "p54",
    slug: "risaa-romance-blanket",
    name: "Romance Blanket",
    category: "Mink Blankets",
    price: 833,
    mrp: 1999,
    shortDescription: "Premium mink blanket in floral colourways. Best for gifting & weddings. Dry clean.",
    description:
      "The Romance — a plush premium mink blanket in rich floral colourways, built for gifting and weddings. Super soft, extra warm and brushed to a velvet finish.",
    fabric: "Mink (brushed polyester)",
    weave: "Plain mink",
    origin: "India",
    care: ["Dry clean"],
    sizes: ["Double Bed"],
    colors: [
      { name: "Blue Floral",  hex: "#274f78" },
      { name: "Red Floral",   hex: "#7e1f2c" },
    ],
    imageAspect: "landscape",
    imageFit: "contain",
    images: ["/romance-box.png"],
  },
  {
    id: "p72",
    slug: "risaa-romance-single-bed-blanket",
    name: "Romance Blanket – Single Bed",
    category: "Mink Blankets",
    price: 833,
    mrp: 1999,
    tag: "New",
    shortDescription: "Single-bed premium mink blanket in five rich floral, geometric and patchwork designs. Dry clean.",
    description:
      "The Romance in a single-bed size — a plush premium mink blanket, super soft, extra warm and brushed to a velvet finish. Available in five statement designs: Brown Bouquet, Teal Geometric, Crimson Daisies, Rose Garden and Camel Branch.",
    fabric: "Mink (brushed polyester)",
    weave: "Plain mink",
    origin: "India",
    care: ["Dry clean"],
    sizes: ["Single Bed"],
    colors: [
      { name: "Brown Bouquet",     hex: "#7b3f13" },
      { name: "Teal Geometric",    hex: "#05666c" },
      { name: "Crimson Daisies",   hex: "#a10c37" },
      { name: "Rose Garden",       hex: "#b22f5b" },
      { name: "Camel Branch",      hex: "#b69260" },
    ],
    imageAspect: "portrait",
    imageFit: "cover",
    images: [
      "/romance-single-bed/brown-bouquet-studio.webp",
      "/romance-single-bed/teal-geometric-studio.webp",
      "/romance-single-bed/crimson-daisies-studio.webp",
      "/romance-single-bed/rose-garden-studio.webp",
      "/romance-single-bed/camel-branch-studio.webp",
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
      "Double-bed, double-ply mink blanket in assorted designs.",
    description:
      "The Royal Comfort is a double-bed, double-ply mink blanket. Its dense, soft pile offers generous warmth and coverage in assorted floral and geometric designs.",
    fabric: "Mink (brushed polyester)",
    weave: "Double-ply",
    origin: "India",
    care: ["Dry clean"],
    sizes: ["Double Bed"],
    colors: [ROYAL, MIDNIGHT, BURGUNDY, CHAMPAGNE],
    imageAspect: "square",
    imageFit: "contain",
    images: ["/royal-comfort-new.jpeg"],
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
      "Double-bed, single-ply mink blanket in 8 classic floral, bouquet and lattice designs.",
    description:
      "Risaa Home Royal Feather is a double-bed, single-ply mink blanket in eight distinctive designs spanning floral line-art, striped bouquets and geometric lattice. A quality starter-range blanket with a soft brushed finish, now available from production.",
    fabric: "Mink (brushed polyester)",
    weave: "Single-ply soft brushed mink",
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

  // ── SUMMER SETS ───────────────────────────────────────────────────────────

  {
    id: "p100",
    slug: "risaa-shagun-double-bed-set",
    name: "Shagun 5 Pc Set (Double Bed)",
    category: "Summer Sets",
    price: 825,
    mrp: 1999,
    tag: "Best for Gifting",
    shortDescription:
      "An economical 5-piece set for corporate gifting and personal festive gifting, with wide price appeal.",
    description:
      "The Shagun Set is an economical gifting choice that suits a wide range of budgets. Ideal for corporate gifting and personal gifting during festivals, this coordinated 5-piece polyester ensemble includes one double bedsheet, two pillowcases and two cushion covers supplied with fillers. Available in eleven damask, scroll and botanical prints.",
    fabric: "100% Polyester",
    weave: "Printed plain weave",
    origin: "India",
    care: ["Cold wash", "Do not bleach", "Do not iron"],
    sizes: [
      "Bedsheet: 225 × 250 cm",
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
    price: 1700,
    mrp: 7900,
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
    price: 1900,
    mrp: 7900,
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
    price: 2200,
    mrp: 8999,
    tag: "Hot Selling",
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

  // ── BED SHEETS & SETS ─────────────────────────────────────────────────────

  {
    id: "p106",
    slug: "risaa-majestic-5-pcs-bedding-set",
    name: "Majestic 5 Pcs Bedding Set",
    category: "Bed Sheets & Sets",
    price: 2100,
    mrp: 4999,
    tag: "New",
    shortDescription:
      "Designer quilted bedcover set with 2 pillow covers and 2 cushion covers.",
    description:
      "Majestic is a coordinated 5-piece bedding set with one quilted bedcover, two pillow covers and two cushion covers. Its clean stitched finish gives the bed a composed, tailored look.",
    fabric: "Quilted textile blend",
    weave: "Designer quilted bedcover",
    origin: "India",
    care: ["Machine wash cold", "Do not bleach", "Line dry"],
    sizes: [
      "Bedcover: 230 × 245 cm",
      "Pillow covers (2): 45 × 70 cm",
      "Cushion covers (2): 33 × 48 cm",
    ],
    colors: [{ name: "Ivory", hex: "#dedbd2" }],
    imageAspect: "landscape",
    imageFit: "contain",
    colorsLinkToImages: false,
    images: [
      "/majestic-set/majestic-5-piece-studio.webp",
      "/majestic-set/majestic-5-piece-original-package.webp",
      "/majestic-set/majestic-5-piece-original-cushions.webp",
      "/majestic-set/majestic-5-piece-original-insert.webp",
    ],
  },

  {
    id: "p107",
    slug: "risaa-velvet-touch-5-pcs-bedcover-set",
    name: "Velvet Touch 5 Pcs Bedcover Set",
    category: "Bed Sheets & Sets",
    price: 2499,
    mrp: 4999,
    tag: "New",
    shortDescription:
      "Velvet-touch 5-piece bedcover set with distinctive white dotted stitching.",
    description:
      "Velvet Touch is a coordinated 5-piece bedcover set with one plush quilted bedcover, two matching pillow covers and two ivory cushion covers. Its warm camel colourway is finished with fine rows of white dotted stitching for a distinctive tailored effect.",
    fabric: "Velvet-touch quilted textile",
    weave: "Quilted bedcover with white dotted stitching",
    origin: "India",
    care: ["Machine wash cold", "Do not bleach", "Line dry"],
    sizes: [
      "Bedcover: 225 × 245 cm",
      "Pillow covers (2): 45 × 70 cm",
      "Cushion covers (2): 33 × 48 cm",
    ],
    colors: [{ name: "Warm Camel", hex: "#b77b48" }],
    imageAspect: "landscape",
    imageFit: "contain",
    colorsLinkToImages: false,
    images: [
      "/velvet-touch-set/velvet-touch-5-piece-studio.png",
      "/velvet-touch-set/velvet-touch-5-piece-detail.png",
      "/velvet-touch-set/velvet-touch-5-piece-lifestyle.png",
    ],
  },

  // ── SUMMER COMFORTERS ─────────────────────────────────────────────────────
  {
    id: "p103",
    slug: "risaa-desire-premium-satin-comforter",
    name: "Desire Premium Satin Comforter",
    category: "Summer Comforters",
    price: 1425,
    mrp: 3999,
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
    price: 700,
    mrp: 3799,
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

  // ── MATTRESS COVERS ───────────────────────────────────────────────────────

  {
    id: "p71",
    slug: "risaa-waterproof-fitted-mattress-protector",
    name: "Waterproof Fitted Mattress Protector",
    category: "Mattress Covers",
    price: 921,
    mrp: 2000,
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

  // ── CARPETS ───────────────────────────────────────────────────────────────

  {
    id: "p45",
    slug: "risaa-solid-shaggy-carpet",
    name: "Fur Carpet – 5′ × 7′",
    category: "Carpets",
    price: 800,
    mrp: 2100,
    tag: "Bestseller",
    shortDescription:
      "Soft 5′ × 7′ fur carpet with a deep pile in seven solid colourways.",
    description:
      "A soft shaggy carpet sized at 5′ × 7′, finished with a dense high pile that adds colour and texture to bedrooms and living spaces. Available in an assortment of neutrals, greys, pinks and lilacs.",
    fabric: "Polyester pile",
    weave: "High-pile shag",
    origin: "India",
    care: ["Vacuum regularly", "Spot clean or dry clean"],
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
    imageAspect: "landscape",
    imageFit: "contain",
    colorsLinkToImages: false,
    images: [
      "/carpets/fur-carpet-5x7-studio.webp",
      "/carpets/fur-carpet-5x7-original.webp",
    ],
  },
  {
    id: "p46",
    slug: "risaa-fur-carpet-2x4",
    name: "Carpet / Bed Runner – 2′ × 4′",
    category: "Carpets",
    price: 325,
    mrp: 800,
    shortDescription:
      "Compact 2′ × 4′ patterned carpet, also called a bed runner, for bedsides, entryways and small spaces.",
    description:
      "A compact patterned carpet sized at 2′ × 4′, also called a bed runner. Its soft low pile, fringed ends and distressed Persian-inspired motifs add colour beside the bed, at an entryway or in smaller living spaces.",
    fabric: "Soft polyester pile",
    weave: "Low-pile woven carpet",
    origin: "India",
    care: ["Vacuum regularly", "Spot clean or dry clean"],
    sizes: ["2′ × 4′"],
    colors: [
      { name: "Navy", hex: "#15263f" },
      { name: "Pale Aqua", hex: "#9bb9b5" },
      { name: "Burgundy", hex: "#72202a" },
      { name: "Cream", hex: "#d7b66f" },
    ],
    imageAspect: "landscape",
    imageFit: "contain",
    colorsLinkToImages: false,
    images: [
      "/carpets/carpet-2x4-studio.webp",
      "/carpets/carpet-2x4-original-a.webp",
      "/carpets/carpet-2x4-original-b.webp",
    ],
  },
];

export const featuredBeddingProductIds = [
  "p102", // Goldmine 6 Pcs Set
  "p105", // Sukoon 6 Pcs Set
  "p106", // Majestic 5 Pcs Bedding Set
  "p107", // Velvet Touch 5 Pcs Bedcover Set
  "p103", // Desire Premium Satin Comforter
  "p104", // Temptation Luxury Comforter
  "p100", // Shagun 5 Pc Set
  "p101", // Celebration 6 Pcs Set
];

export const featuredBeddingProducts = featuredBeddingProductIds
  .map((id) => products.find((product) => product.id === id))
  .filter((product): product is Product => product !== undefined);

export function formatPrice(p: number): string {
  return `₹${p.toLocaleString("en-IN")}`;
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function byCategory(cat: Category) {
  return products.filter((p) => p.category === cat);
}
