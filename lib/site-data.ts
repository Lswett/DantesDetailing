import { staticAssetPath } from "./site-settings";

export const business = {
  name: "Dante's Detailing",
  shortName: "Dante's",
  serviceArea: "Genesee County, Michigan",
  tagline: "Detailing Done Right. At Your Location.",
  phone: "(810) 555-0147",
  email: "hello@dantesdetailing.com",
};

export const services = [
  {
    slug: "exterior-wash",
    name: "Exterior Wash",
    description:
      "Thorough hand wash, wheel and tire cleaning, bug removal, drying, and a crisp finish for daily drivers, trucks, and weekend cars.",
    startingAt: 50,
    duration: "60-90 minutes",
    image: staticAssetPath("/images/exterior-wash.png"),
    includes: [
      "Hand wash",
      "Wheel and tire clean",
      "Tire dressing",
      "Spray wax protection",
    ],
  },
  {
    slug: "interior-detailing",
    name: "Interior Detailing",
    description:
      "Deep interior reset for seats, carpets, consoles, panels, vents, and high-touch surfaces with a clean, comfortable finish.",
    startingAt: 100,
    duration: "2-4 hours",
    image: staticAssetPath("/images/interior-detailing.png"),
    includes: [
      "Full interior vacuum",
      "Steam clean",
      "Interior wipe down",
      "Condition surfaces",
      "Window cleaning",
    ],
  },
  {
    slug: "headlight-restoration",
    name: "Headlight Restoration",
    description:
      "Restore clarity to cloudy, oxidized headlights to improve appearance, nighttime visibility, and safer driving.",
    startingAt: 60,
    duration: "45-75 minutes",
    image: staticAssetPath("/images/headlight-restoration.png"),
    includes: [
      "Polish and restore",
      "UV sealant protection",
      "Improved clarity",
      "Safer night driving",
    ],
  },
];

export const memberships = [
  {
    slug: "exterior-maintenance",
    name: "Exterior Maintenance",
    description: "Keep paint, wheels, and trim clean through Michigan roads and weather.",
    startingAt: 79,
    interval: "month",
    includes: [
      "2 exterior washes per month",
      "Wheel and tire cleaning",
      "Tire dressing",
      "Priority scheduling",
    ],
  },
  {
    slug: "interior-maintenance",
    name: "Interior Maintenance",
    description: "A monthly interior reset for busy daily drivers and work vehicles.",
    startingAt: 129,
    interval: "month",
    includes: [
      "1 full interior detail per month",
      "Steam clean",
      "Condition and protect surfaces",
      "Priority scheduling",
    ],
  },
];

export const testimonials = [
  {
    name: "Mike R.",
    vehicle: "Silverado 1500",
    quote:
      "Dante's attention to detail is second to none. My truck looks better than the day I bought it.",
    rating: 5,
  },
  {
    name: "Sarah T.",
    vehicle: "Family SUV",
    quote:
      "Professional, on time, and my car looks amazing. The interior finally feels new again.",
    rating: 5,
  },
  {
    name: "James L.",
    vehicle: "Classic Camaro",
    quote:
      "He treated my classic car like his own. Careful work, clean finish, and easy booking.",
    rating: 5,
  },
];

export const galleryImages = [
  {
    title: "Foam Wash Finish",
    category: "Exterior",
    beforeUrl: staticAssetPath("/images/exterior-wash.png"),
    afterUrl: staticAssetPath("/images/hero-detailing.png"),
    alt: "Glossy detailed vehicles after exterior wash",
    featured: true,
  },
  {
    title: "Interior Reset",
    category: "Interior",
    beforeUrl: staticAssetPath("/images/interior-detailing.png"),
    afterUrl: staticAssetPath("/images/interior-detailing.png"),
    alt: "Clean black leather vehicle interior after detailing",
    featured: true,
  },
  {
    title: "Headlight Clarity",
    category: "Headlights",
    beforeUrl: staticAssetPath("/images/headlight-restoration.png"),
    afterUrl: staticAssetPath("/images/headlight-restoration.png"),
    alt: "Headlight restoration before and after comparison",
    featured: true,
  },
  {
    title: "Work Truck Cleanup",
    category: "Trucks",
    beforeUrl: staticAssetPath("/images/exterior-wash.png"),
    afterUrl: staticAssetPath("/images/hero-detailing.png"),
    alt: "Detailed black pickup truck",
    featured: false,
  },
  {
    title: "Classic Car Care",
    category: "Classics",
    beforeUrl: staticAssetPath("/images/headlight-restoration.png"),
    afterUrl: staticAssetPath("/images/hero-detailing.png"),
    alt: "Classic-inspired premium detailing finish",
    featured: false,
  },
];

export const vehicleCategories = [
  "Cars",
  "Trucks",
  "SUVs",
  "Classics",
  "Everything In Between",
];
