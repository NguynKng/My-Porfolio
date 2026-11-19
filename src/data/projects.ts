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
    technologies: ["NestJS", "Next.js", "React Native", "TypeScript", "PostgreSQL", "Prisma", "RabbitMQ", "SSE", "DigitalOcean Spaces", "AWS S3", "Docker", "Cloudflare Pages", "Expo / EAS"],
    contributions: [
      "Developed a multi-platform F&B management and POS system using NestJS, Next.js, and React Native.",
      "Built multi-branch management, RBAC, branch-specific pricing, order processing, and authentication with NestJS, Prisma, and PostgreSQL.",
      "Implemented real-time kitchen and order updates using Server-Sent Events.",
      "Supported offline mobile ordering with synchronization designed to prevent duplicate orders.",
      "Integrated DigitalOcean Spaces for product images and LAN/Bluetooth thermal printing for receipts and table QR codes.",
      "Handled backend deployment, frontend publishing on Cloudflare Pages, and Android/iOS production builds with Expo EAS.",
    ],
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
    type: "Social Network Web & Mobile App",
    role: "Team Lead & Full-stack Developer",
    period: "Mar 2025 - Jan 2026",
    team: 3,
    description: "A web and mobile social platform with real-time messaging, voice/video calls, e-commerce, AI-assisted moderation, and a Gemini-powered chatbot.",
    previewImage: `${bingbongAssetBase}/og-image.jpg`,
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "WebRTC", "Python", "Flask", "Docker", "React Native", "Perspective API", "Tesseract OCR", "YOLOv8", "Gemini API"],
    contributions: [
      "Led a three-member team building web and mobile applications, primarily focusing on web and backend development.",
      "Developed REST APIs for authentication, social features, multi-shop checkout, order management, and analytics using Express.js and MongoDB.",
      "Implemented real-time messaging and notifications with Socket.IO, along with WebRTC voice/video calls, screen sharing, and translated captions.",
      "Developed a Flask-based content moderation service using Perspective API, Tesseract OCR, and pretrained YOLOv8.",
      "Integrated a Gemini-powered chatbot.",
    ],
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
