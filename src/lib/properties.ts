export type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  type: "Apartment" | "Villa" | "Penthouse" | "Studio" | "Townhouse";
  beds: number;
  baths: number;
  sqft: number;
  featured: boolean;
  tag?: string;
  description: string;
  amenities: string[];
  images: string[];
};

export const properties: Property[] = [
  {
    id: "1",
    title: "Skyline Blue Residency",
    location: "Bandra West, Mumbai",
    price: 18500000,
    type: "Apartment",
    beds: 3,
    baths: 2,
    sqft: 1450,
    featured: true,
    tag: "New Launch",
    description:
      "Luxury 3BHK apartment with panoramic sea views, modern interiors, and world-class amenities in the heart of Bandra West.",
    amenities: ["Swimming Pool", "Gym", "24/7 Security", "Parking", "Clubhouse", "Garden"],
    images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"],
  },
  {
    id: "2",
    title: "Azure Garden Villa",
    location: "Whitefield, Bangalore",
    price: 24000000,
    type: "Villa",
    beds: 4,
    baths: 4,
    sqft: 3200,
    featured: true,
    tag: "Premium",
    description:
      "Sprawling 4BHK villa with private garden, modern architecture, and smart home features in Whitefield's premier locality.",
    amenities: ["Private Garden", "Smart Home", "Modular Kitchen", "Parking x2", "Solar Panels", "Rain Harvesting"],
    images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"],
  },
  {
    id: "3",
    title: "Ocean Breeze Penthouse",
    location: "Juhu, Mumbai",
    price: 55000000,
    type: "Penthouse",
    beds: 5,
    baths: 5,
    sqft: 5800,
    featured: true,
    tag: "Exclusive",
    description:
      "Ultra-luxury penthouse with private terrace, rooftop pool, and 270-degree ocean views. The pinnacle of Mumbai living.",
    amenities: ["Rooftop Pool", "Private Terrace", "Home Theatre", "Wine Cellar", "Concierge", "Helipad Access"],
    images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"],
  },
  {
    id: "4",
    title: "Blue Horizon Studio",
    location: "Koramangala, Bangalore",
    price: 6500000,
    type: "Studio",
    beds: 1,
    baths: 1,
    sqft: 620,
    featured: false,
    description:
      "Compact and efficient studio apartment ideal for young professionals. Fully furnished with premium fittings.",
    amenities: ["Co-working Space", "Gym", "Rooftop Lounge", "High-speed WiFi", "Laundry"],
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"],
  },
  {
    id: "5",
    title: "Sapphire Heights 2BHK",
    location: "Powai, Mumbai",
    price: 12800000,
    type: "Apartment",
    beds: 2,
    baths: 2,
    sqft: 980,
    featured: false,
    description:
      "Modern 2BHK apartment in Powai's tech hub. Lake-facing balcony with stunning views and top-tier amenities.",
    amenities: ["Lake View", "Swimming Pool", "Gym", "Children's Play Area", "Covered Parking"],
    images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"],
  },
  {
    id: "6",
    title: "Cobalt Townhouse",
    location: "HSR Layout, Bangalore",
    price: 15000000,
    type: "Townhouse",
    beds: 3,
    baths: 3,
    sqft: 2100,
    featured: false,
    description:
      "Elegant townhouse with private entrance, rooftop terrace, and premium finishes in HSR Layout's serene neighborhood.",
    amenities: ["Private Entrance", "Rooftop Terrace", "Modular Kitchen", "Parking", "CCTV", "Power Backup"],
    images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"],
  },
];

export function formatPrice(price: number): string {
  if (price >= 10000000) return `₹${(price / 10000000).toFixed(1)} Cr`;
  if (price >= 100000) return `₹${(price / 100000).toFixed(0)} L`;
  return `₹${price.toLocaleString()}`;
}
