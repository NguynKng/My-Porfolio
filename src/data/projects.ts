export type Project = {
  slug: string;
  projectName: string;
  type: string;
  role: string;
  period: string;
  team?: number;
  description: string;
  previewImage: string;
  technologies: string[];
  contributions: string[];
  detailMedia: { type: "image" | "video"; src: string }[];
  links: { label: string; href: string }[];
};

const bingbongAssetBase = "/projects/bingbong";

export const projects: Project[] = [
  {
    slug: "servio",
    projectName: "Servio",
    type: "Multi-platform F&B Management & POS System",
    role: "Full-stack Developer",
    period: "Mar 2026 - Present",
    team: 2,
    description: "A complete restaurant management system across web and mobile, with POS, QR ordering, kitchen operations, invoicing, employee management, and reporting.",
    previewImage: "/logo/servio-og-image.png",
    technologies: ["NestJS", "Next.js", "React Native", "TypeScript", "PostgreSQL", "Prisma", "RabbitMQ", "SSE", "DigitalOcean Spaces", "Docker", "Cloudflare Pages", "Expo / EAS"],
    contributions: [
      "Developed a multi-platform F&B management and POS system using NestJS, Next.js, and React Native.",
      "Built multi-branch management, RBAC, branch-specific pricing, order processing, and authentication with NestJS, Prisma, and PostgreSQL.",
      "Implemented real-time kitchen and order updates using RabbitMQ and Server-Sent Events.",
      "Supported offline mobile ordering with synchronization designed to prevent duplicate orders.",
      "Integrated DigitalOcean Spaces for product images and LAN/Bluetooth thermal printing for receipts and table QR codes.",
      "Handled backend deployment, frontend publishing on Cloudflare Pages, and Android/iOS production builds with Expo EAS.",
    ],
    detailMedia: [],
    links: [],
  },
  {
    slug: "bingbong",
    projectName: "BingBong",
    type: "Social Network Web & Mobile App",
    role: "Team Lead / Full-stack Developer",
    period: "Mar 2025 - Jan 2026",
    team: 3,
    description: "A web and mobile social platform with real-time messaging, video calls, content sharing, AI-assisted moderation, and e-commerce.",
    previewImage: `${bingbongAssetBase}/og-image.ico`,
    technologies: ["React", "React Native", "WebRTC", "Socket.IO", "Node.js", "Express.js", "MongoDB", "Python", "Flask", "Gemini API"],
    contributions: [
      "Led development of the web and mobile social networking application in a team of three.",
      "Built real-time messaging and communication using Socket.IO and WebRTC.",
      "Implemented 1-to-1 video calling with real-time translation.",
      "Integrated AI-based toxic content detection using Gemini API and computer vision/NLP services.",
      "Worked across React and React Native clients and Node.js/Express.js backend services, including content sharing and e-commerce features.",
    ],
    detailMedia: [
      ...Array.from({ length: 8 }, (_, i) => ({ type: "image" as const, src: `${bingbongAssetBase}/screenshots/screenshot-${String(i + 1).padStart(2, "0")}.png` })),
      { type: "video", src: `${bingbongAssetBase}/demo.mp4` },
    ],
    links: [
      { label: "Backend", href: "https://github.com/NguynKng/BingBongApp-backend" },
      { label: "Frontend", href: "https://github.com/NguynKng/BingBongApp-frontend" },
      { label: "Mobile", href: "https://github.com/dattr09/BingBongApp" },
    ],
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
    detailMedia: [],
    links: [{ label: "Visit website", href: "https://pixedit.app" }],
  },
];
