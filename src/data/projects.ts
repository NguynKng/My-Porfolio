export type Project = {
  slug: string;
  projectName: string;
  type: string;
  role: string;
  period: string;
  team?: number;
  category?: string;
  description: string;
  previewImage: string;
  technologies: string[];
  contributions: string[];
  detailMedia: { type: "image" | "video"; src: string; label?: string; width?: number; height?: number }[];
  links: { label: string; href: string }[];
  highlights: string[];
  platforms?: string[];
  demoAccount?: { email: string; password: string };
};

const bingbongAssetBase = "/projects/bingbong";
const pixeditAssetBase = "/projects/pixedit";
const servioAssetBase = "/projects/servio";

export const projects: Project[] = [
  {
    slug: "servio",
    projectName: "Servio",
    type: "Multi-platform F&B Management & POS System",
    role: "Freelance Full-stack Developer",
    period: "Mar 2026 - Present",
    category: "Client Project",
    description: "A web and mobile F&B management and POS system, live on web, Google Play, and the App Store, with QR ordering, kitchen operations, invoicing, staff management, and reporting.",
    previewImage: "/logo/servio-og-image.png",
    technologies: ["NestJS", "Next.js", "React Native", "TypeScript", "PostgreSQL", "Prisma", "SSE", "Swagger", "OpenAI API", "DigitalOcean Spaces", "AWS S3", "Docker", "Cloudflare Pages", "Expo / EAS"],
    contributions: [
      "Built an end-to-end F&B platform (NestJS API, Next.js web apps, React Native app) covering POS, QR ordering, kitchen display, inventory with recipes, invoicing, cash shifts, staff roles, and reporting across 25+ backend modules.",
      "Designed a multi-branch PostgreSQL/Prisma data model (34 models) with branch-level pricing, table areas, and permission-based RBAC for owners, managers, and staff.",
      "Built offline-first ordering on mobile: each order carries a client-generated offlineId with a per-shop unique constraint, so retries after network loss never create duplicate orders.",
      "Built real-time updates for kitchen and cashier screens with Server-Sent Events, driven by domain events from POS, kitchen, and inventory flows.",
      "Integrated the OpenAI API to extract menu items from photos and auto-map imported spreadsheet columns, so new shops can set up menus without manual entry.",
      "Built automated unit and DB integration tests for POS, inventory, and back-office flows using AI-assisted generation, reviewing each case against business rules; documented APIs with Swagger.",
      "Deployed the MVP end to end (Dockerized backend on a Linux VPS behind Nginx, web apps on Cloudflare Pages) and shipped Android/iOS production builds with Expo EAS; added LAN/Bluetooth thermal printing for receipts and QR codes.",
    ],
    highlights: [
      "Offline-first ordering with idempotent sync",
      "Real-time kitchen & cashier screens (SSE)",
      "Multi-branch data model with RBAC",
    ],
    platforms: ["Web", "Google Play", "App Store"],
    detailMedia: [
      { type: "image", src: `${servioAssetBase}/screenshot-webapp-owner.jpg`, label: "Owner dashboard", width: 1920, height: 911 },
      { type: "image", src: `${servioAssetBase}/screenshot-mobile.jpg`, label: "Mobile app", width: 946, height: 2047 },
      { type: "image", src: `${servioAssetBase}/screenshot-qr-webapp.jpg`, label: "QR ordering", width: 378, height: 819 },
    ],
    links: [
      { label: "Visit website", href: "https://owner.servio.vn/" },
      { label: "App Store (iOS)", href: "https://apps.apple.com/us/app/servio-vn-qu%E1%BA%A3n-l%C3%BD-qu%C3%A1n/id6779979414" },
      { label: "Google Play (Android)", href: "https://play.google.com/store/apps/details?id=com.ketnoisaigon.serviovn&hl=en" },
    ],
  },
  {
    slug: "bingbong",
    projectName: "BingBong",
    type: "Social Network with E-commerce & AI",
    role: "Team Lead & Full-stack Developer",
    period: "Mar 2025 - Jan 2026",
    category: "Graduation Project",
    team: 3,
    description: "A web and mobile social platform with real-time messaging, voice/video calls, e-commerce, AI-assisted moderation, and a Gemini-powered chatbot.",
    previewImage: `${bingbongAssetBase}/og-image.jpg`,
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "WebRTC", "Python", "Flask", "Docker", "React Native", "Perspective API", "Tesseract OCR", "YOLOv8", "Gemini API"],
    contributions: [
      "Led a three-person team building a social network with built-in shops on web and a React Native mobile app; owned the backend and web frontend, and set up the initial mobile app before handing it to two teammates.",
      "Built Express.js + MongoDB REST APIs for auth (JWT, bcrypt, email verification), feeds, groups, shops, and orders; modeled posts shared across profiles, groups, and shops with Mongoose refPath.",
      "Implemented multi-shop checkout that splits one cart into per-shop orders with variant stock checks, plus seller and admin analytics built on MongoDB aggregation pipelines.",
      "Built real-time chat, notifications, and presence with Socket.IO (multi-tab/device sessions), and WebRTC voice/video calls with screen sharing, time-limited TURN credentials, and live English–Vietnamese translated captions.",
      "Developed a Flask moderation service that screens post text and images with Perspective API, Tesseract OCR, and pretrained YOLOv8; integrated a Gemini chatbot and Cloudinary media storage.",
    ],
    highlights: [
      "Graduation project · Team lead",
      "WebRTC calls with translated captions",
      "AI moderation for text and images",
    ],
    platforms: ["Web", "Mobile"],
    detailMedia: [
      ...Array.from({ length: 8 }, (_, i) => ({ type: "image" as const, src: `${bingbongAssetBase}/screenshots/screenshot-${String(i + 1).padStart(2, "0")}.png` })),
      { type: "video", src: `${bingbongAssetBase}/demo.mp4` },
    ],
    links: [
      { label: "Visit website", href: "http://178.128.85.73:3000/" },
      { label: "Backend", href: "https://github.com/NguynKng/BingBongApp-backend" },
      { label: "Frontend", href: "https://github.com/NguynKng/BingBongApp-frontend" },
      { label: "Mobile", href: "https://github.com/dattr09/BingBongApp" },
    ],
    demoAccount: { email: "khang@gmail.com", password: "khang123" },
  },
  {
    slug: "pixedit",
    projectName: "PixEdit",
    type: "AI Photo Editor",
    role: "Frontend Developer",
    period: "Mar 2026 - Sep 2026",
    description: "A responsive AI photo editor with Canvas-based editing, batch background removal, multi-format export, and internationalized SEO.",
    previewImage: "/logo/pixedit-og-image.jpg",
    technologies: ["Next.js", "Canvas API", "Cloudflare Pages", "React", "TypeScript", "Tailwind CSS", "REST APIs", "Cloudflare Pages Functions"],
    contributions: [
      "Built a responsive Canvas-based AI photo editor with six image-processing tool categories.",
      "Added PNG, JPEG, and WebP export.",
      "Integrated image-processing APIs and Cloudflare Pages Functions.",
      "Implemented batch background removal for up to 20 images with progress tracking, retries, and ZIP downloads.",
      "Implemented internationalized SEO across 20 languages using static generation, sitemap, hreflang, and structured data.",
    ],
    highlights: [
      "Canvas editor with 6 tool categories",
      "Batch background removal with retries",
      "SEO in 20 languages",
    ],
    platforms: ["Web"],
    detailMedia: Array.from({ length: 5 }, (_, i) => ({
      type: "image" as const,
      src: `${pixeditAssetBase}/screenshot-${i + 1}.jpg`,
    })),
    links: [
      { label: "Visit website", href: "https://pixedit.app" },
      { label: "App Store (iOS)", href: "https://apps.apple.com/vn/app/pixedit-ai-photos-editor/id1662352918" },
      { label: "Google Play (Android)", href: "https://play.google.com/store/apps/details?id=io.minailabs.fluxedit&hl=en" },
    ],
  },
];
