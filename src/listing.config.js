import {
  BedDouble,
  Bath,
  Maximize,
  Trees,
  CalendarDays,
  Car,
  Waves,
  Dumbbell,
  Sparkles,
  Flame,
  Utensils,
} from "lucide-react";

/**
 * LIRIO 11 — LISTING CONFIG
 * ------------------------------------------------------------------
 * Las Ceibas · Lake Chapala, Jalisco, México
 * Brokerage: Interlago Realty Group
 * Agent: Gabriela Hernandez
 * Tier 1 — Digital Open House
 * ------------------------------------------------------------------
 * ⚠️  NOTE: Gallery photos must be publicly shared in Google Drive
 *     for images to load. Right-click each photo → Share → Anyone
 *     with the link → Viewer.
 * ------------------------------------------------------------------
 */

export const listing = {
  // ── Branding ──
  name: "LIRIO 11",
  nameAccent: "",
  tagline: "",
  location: "Las Ceibas · Lake Chapala",
  price: "MXN $7,250,000",

  // ── SEO ──
  seo: {
    title: "LIRIO 11 — Las Ceibas · MXN $7,250,000",
    description:
      "A unique detached residence in Las Ceibas with open-concept design, two-car garage, and access to community amenities. 3 bed · 3 bath · 219 m². Built 2025. By appointment only.",
  },

  // ── Hero ──
  heroUrl: "https://lh3.googleusercontent.com/d/1d4nxIAmOiiBE1JYg1VIoQChkFHQ9PIi3",
  heroAlt: "LIRIO 11 — terrace at Las Ceibas",

  // ── Specs ──
  specs: [
    { icon: BedDouble, label: "Bedrooms", value: "3" },
    { icon: Bath, label: "Bathrooms", value: "3" },
    { icon: Maximize, label: "Interior", value: "219 m²" },
    { icon: Trees, label: "Land", value: "304 m²" },
    { icon: Car, label: "Garage", value: "2 Cars" },
    { icon: CalendarDays, label: "Built", value: "2025" },
  ],

  // ── Story ──
  story: {
    eyebrow: "The Property",
    headline: "A unique detached residence",
    headlineAccent: "where design meets the outdoors.",
    paragraphs: [
      "Presenting Lirio 11, a unique detached residence in the sought-after community of Las Ceibas. This home is defined by its thoughtful, open-concept design — interior spaces flow seamlessly to the outdoors.",
      "The property sits on a 304 m² lot with 219 m² of constructed space, featuring three bedrooms, three bathrooms, and a two-car garage. Built in 2025, every detail reflects contemporary design and quality construction.",
      "Las Ceibas offers residents access to exceptional community amenities including a gym, jacuzzi, swimming pool, BBQ area, and event hall — all within a secure, well-maintained enclave near Lake Chapala.",
      "A private viewing is recommended to fully experience this residence.",
    ],
  },

  // ── Features ──
  features: [
    { icon: Waves, label: "Swimming Pool" },
    { icon: Dumbbell, label: "Gym" },
    { icon: Flame, label: "BBQ Area" },
    { icon: Sparkles, label: "Jacuzzi" },
  ],

  appliances: ["Garbage Disposal", "Microwave", "Dishwasher", "Stove"],

  // ── Gallery ──
  gallery: [
    { src: "https://lh3.googleusercontent.com/d/17vzSq0CnyNMxwStMU6QbqMA5m0XS5-fR", alt: "LIRIO 11 — entrance" },
    { src: "https://lh3.googleusercontent.com/d/1fuL78WKhCj6e1Dpjbb2bqn9fZk31nGSa", alt: "Entrance — exterior view" },
    { src: "https://lh3.googleusercontent.com/d/1SWJxSIFm8Wo3Ny9X5hl3WwnIl22bI_kK", alt: "Terrace — garden view" },
    { src: "https://lh3.googleusercontent.com/d/1wo1ptxSMtQgZfA4cJl3q2rwE97EfCCb9", alt: "Living room" },
    { src: "https://lh3.googleusercontent.com/d/1OqkJp11Z_dVdpFPNpLZQ3MvFiq1_nVvd", alt: "Kitchen" },
    { src: "https://lh3.googleusercontent.com/d/1aBUyUvVstk8ZIJkydzN0I6D-yKRF4zRQ", alt: "Primary bedroom" },
    { src: "https://lh3.googleusercontent.com/d/1k-oiVk7YnBSwlr8fmyEL751Gwgd5Um4I", alt: "Bedroom" },
    { src: "https://lh3.googleusercontent.com/d/1ejUlz9clRF_-EhmbVJXlq0nmdMHtlrWK", alt: "Bathroom" },
    { src: "https://lh3.googleusercontent.com/d/1d1wMfK44WAOiv85E5pOhMMBbycD6sJfz", alt: "Terrace — outdoor living" },
  ],

  // ── Location ──
  location_section: {
    eyebrow: "The Neighborhood",
    headline: "Las Ceibas — Lake Chapala.",
    description:
      "An exclusive gated community nestled near the shores of Lake Chapala, Mexico's largest freshwater lake. Residents enjoy a tranquil setting with easy access to the cultural village of Ajijic and the amenities of Chapala town.",
    nearby: [
      { label: "Ajijic village center", detail: "10 min drive" },
      { label: "Lake Chapala waterfront", detail: "5 min drive" },
      { label: "Chapala town center", detail: "12 min drive" },
      { label: "Guadalajara Int'l Airport", detail: "55 min drive" },
    ],
    mapBbox: "-103.33,20.26,-103.21,20.34",
  },

  // ── Agent ──
  agent: {
    name: "Gabriela Hernandez",
    brokerage: "Interlago Realty Group",
    email: "info@interlagorealty.com",
    phone: "+52 33 3570 2034",
    whatsapp: "https://wa.me/5213335702034",
    calendlyUrl: "",
    assetsUrl: "https://drive.google.com/drive/folders/1FFizWh-2RZDoUT-CuZtZOcbEK4R5IdYj",
  },

  // ── Contact ──
  contact: {
    eyebrow: "Contact",
    headline: "Enquire about",
    blurb:
      "A private viewing is recommended to fully appreciate the residence. Submit your details and a representative will respond within 24 hours.",
    agencyName: "Interlago Realty",
    agencyDetail: "By appointment only · Las Ceibas, Lake Chapala",
  },

  footer: {
    representedBy: "Represented by Interlago Realty · By Appointment Only",
  },
};
