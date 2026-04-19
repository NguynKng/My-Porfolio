import { ArrowLeft, ArrowRight, ArrowUpRight, Eye, Layers3 } from "lucide-react";
import { useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Project = {
  projectName: string;
  imageUrl: string;
  title: string;
  type: string;
  technologies: string[];
  detailMedia: { type: "image" | "video"; src: string }[];
  description: string;
  backendLink: string;
  frontendLink: string;
  nativeLink?: string;
};

// ─── Data (module-level — never re-created) ───────────────────────────────────

const PROJECT_DATA: Project[] = [
  {
    projectName: "FlixZone",
    imageUrl: "/logo/netflix-clone.jpg",
    detailMedia: [
      { type: "image", src: "/personal-project/project1-1.jfif" },
      { type: "image", src: "/personal-project/project1-2.jfif" },
      { type: "image", src: "/personal-project/project1-3.jfif" },
      { type: "image", src: "/personal-project/project1-4.jfif" },
      { type: "image", src: "/personal-project/project1-5.jfif" },
      { type: "image", src: "/personal-project/project1-6.jfif" },
      { type: "video", src: "/personal-project/project1_video.mp4" },
    ],
    type: "Website",
    title: "FlixZone - Movie Discovery",
    description:
      "Modern web app for browsing movies and TV shows, with search, trailers, and summaries powered by the IMDb API.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js", "Zustand", "RESTful API", "JWT"],
    backendLink: "https://github.com/NguynKng/NetflixClone-nodejs",
    frontendLink: "https://github.com/NguynKng/NetflixClone-react",
  },
  {
    projectName: "FriendSpace",
    imageUrl: "/logo/facebook-clone.jfif",
    detailMedia: [
      { type: "image", src: "/personal-project/project2-1.jfif" },
      { type: "image", src: "/personal-project/project2-2.jfif" },
      { type: "image", src: "/personal-project/project2-3.jfif" },
      { type: "image", src: "/personal-project/project2-4.jfif" },
      { type: "video", src: "/personal-project/project2_video.mp4" },
    ],
    type: "Website / Mobile",
    title: "FriendSpace - Social Network",
    description:
      "Full-stack social network inspired by Facebook. Real-time chat, friend management, posts, and profile customization.",
    technologies: ["React", "React Native", "TypeScript", "MongoDB", "Fastify", "Socket.IO", "Drizzle ORM", "JWT", "Expo"],
    backendLink: "https://github.com/NguynKng/FacebookClone-frontend",
    frontendLink: "https://github.com/NguynKng/FacebookClone-backend",
    nativeLink: "https://github.com/NguynKng/FacebookClone-react-native",
  },
  {
    projectName: "GPTalk",
    imageUrl: "/logo/ChatGPT-clone.png",
    detailMedia: [
      { type: "image", src: "/personal-project/project3-1.jfif" },
      { type: "image", src: "/personal-project/project3-2.jfif" },
      { type: "image", src: "/personal-project/project3-3.jfif" },
      { type: "video", src: "/personal-project/project3_video.mp4" },
    ],
    type: "Website / Mobile",
    title: "GPTalk - AI Chatbot",
    description:
      "AI-powered chatbot using Gemini API. Supports multi-session chat history across web and mobile platforms.",
    technologies: ["React", "TypeScript", "MySQL", "Fastify", "Zustand", "React Native", "Drizzle ORM", "JWT", "Expo"],
    backendLink: "https://github.com/NguynKng/ChatGPTClone-backend",
    frontendLink: "https://github.com/NguynKng/ChatGPTClone-frontend",
    nativeLink: "https://github.com/NguynKng/ChatGPTClone-native",
  },
  {
    projectName: "TechZon",
    imageUrl: "/logo/e-commerce.svg",
    detailMedia: [
      { type: "image", src: "/personal-project/project4-1.jfif" },
      { type: "image", src: "/personal-project/project4-2.jfif" },
      { type: "image", src: "/personal-project/project4-3.jfif" },
      { type: "image", src: "/personal-project/project4-4.jfif" },
      { type: "video", src: "/personal-project/project4_video.mp4" },
    ],
    type: "Website",
    title: "TechZon - E-commerce",
    description:
      "Full-featured e-commerce platform with product management, cart, wishlist, and an admin analytics dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js", "Zustand", "RESTful API", "Ant Design", "JWT", "Puppeteer"],
    backendLink: "https://github.com/NguynKng/EcommerceApp-backend",
    frontendLink: "https://github.com/NguynKng/EcommerceApp-frontend",
  },
  {
    projectName: "BingBong",
    imageUrl: "/logo/BingBong.ico",
    detailMedia: [
      { type: "image", src: "/personal-project/project5-1.png" },
      { type: "image", src: "/personal-project/project5-2.png" },
      { type: "image", src: "/personal-project/project5-3.png" },
      { type: "image", src: "/personal-project/project5-4.png" },
      { type: "image", src: "/personal-project/project5-5.png" },
      { type: "image", src: "/personal-project/project5-6.png" },
      { type: "image", src: "/personal-project/project5-7.png" },
      { type: "image", src: "/personal-project/project5-8.png" },
      { type: "video", src: "/personal-project/project5-video.mp4" },
    ],
    type: "Website / Mobile",
    title: "BingBong - AI Social Network",
    description:
      "Advanced social platform with AI toxic content detection, live translation, WebRTC video calls, group chats, and shop features.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Zustand", "WebRTC", "Socket.IO", "Python", "Flask", "JWT", "YOLO", "Cloudinary"],
    backendLink: "https://github.com/NguynKng/BingBongApp-backend",
    frontendLink: "https://github.com/NguynKng/BingBongApp-frontend",
    nativeLink: "https://github.com/dattr09/BingBongApp",
  },
];

// ─── ProjectCard — OUTSIDE Works so it's never re-created on re-render ────────

function ProjectCard({
  item,
  index,
  onOpen,
}: {
  item: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const previewMedia = item.detailMedia.find((m) => m.type === "image");
  const previewSrc = previewMedia?.src || item.imageUrl;

  return (
    <button
      type="button"
      className="group relative flex w-[310px] shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-700/40 bg-[#0d1525] text-left outline-none transition-all duration-300 hover:border-amber-400/30 hover:shadow-[0_8px_40px_rgba(245,197,93,0.1)] focus-visible:ring-2 focus-visible:ring-amber-400/50 sm:w-[380px]"
      onClick={() => onOpen(item)}
    >
      {/* ── Thumbnail ── */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <img
          src={previewSrc}
          alt={item.projectName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = item.imageUrl;
          }}
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0d1525]/80 via-transparent to-transparent" />

        {/* type pill */}
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
          <Layers3 className="size-3 text-amber-400" />
          {item.type}
        </div>

        {/* hover CTA */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-xs font-bold text-black shadow-lg">
            <Eye className="size-3.5" />
            View Project
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-1 flex-col gap-4 p-7 sm:p-8">
        {/* header row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-400/60">
              PROJECT / {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-[Sora] text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-amber-400 sm:text-2xl">
              {item.projectName}
            </h3>
            <p className="mt-1 text-sm italic text-slate-500">
              {item.title.split(" - ")[1] || ""}
            </p>
          </div>
          <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-slate-500 transition-all duration-300 group-hover:border-amber-400/30 group-hover:bg-amber-400/10 group-hover:text-amber-400 group-hover:rotate-12">
            <ArrowUpRight className="size-5" />
          </div>
        </div>

        {/* description */}
        <p className="line-clamp-3 text-sm leading-relaxed text-slate-400 sm:text-base">
          {item.description}
        </p>

        {/* tech stack */}
        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {item.technologies.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-lg border border-slate-700/60 bg-slate-800/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400"
            >
              {t}
            </span>
          ))}
          {item.technologies.length > 4 && (
            <span className="rounded-lg border border-amber-400/20 bg-amber-400/5 px-3 py-1 text-[10px] font-bold text-amber-400/60">
              +{item.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

// ─── Works Section ────────────────────────────────────────────────────────────

export default function Works({ onOpenProject }: { onOpenProject: (p: Project) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
    // update active dot
    const isMobile = window.innerWidth < 640;
    const cardWidth = (isMobile ? 310 : 380) + 40; // width + gap-10
    setActiveIndex(Math.round(el.scrollLeft / cardWidth));
  };

  const slide = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>(":scope > .snap-start");
    cards[i]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  return (
    <section className="py-24 lg:py-32">
      {/* ── Section header ── */}
      <div className="section-shell mb-16 flex items-end justify-between gap-6">
        <div>
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-10 bg-amber-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-amber-400">
              Portfolio
            </span>
          </div>
          <h2 className="font-[Sora] text-5xl font-bold text-white sm:text-6xl">
            Selected{" "}
            <span className="bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-5 text-base text-slate-400">
            Click any card to explore screenshots, videos &amp; source code.
          </p>
        </div>

        {/* nav arrows */}
        <div className="mb-2 flex shrink-0 items-center gap-3">
          <button
            aria-label="Previous"
            onClick={() => slide("left")}
            disabled={!canLeft}
            className="flex size-12 items-center justify-center rounded-full border border-slate-700/60 bg-slate-800/60 text-slate-400 transition-all duration-300 hover:border-amber-400 hover:text-amber-400 disabled:cursor-not-allowed disabled:opacity-20"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            aria-label="Next"
            onClick={() => slide("right")}
            disabled={!canRight}
            className="flex size-12 items-center justify-center rounded-full border border-slate-700/60 bg-slate-800/60 text-slate-400 transition-all duration-300 hover:border-amber-400 hover:text-amber-400 disabled:cursor-not-allowed disabled:opacity-20"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>

      {/* ── Slide track (full-width bleed, left-aligned with section-shell) ── */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="hide-scrollbar flex gap-10 overflow-x-auto pb-16 pt-4"
        style={{
          scrollSnapType: "x mandatory",
          paddingLeft: "max(3.5rem, calc((100vw - 1120px) / 2 + 3.5rem))",
          paddingRight: "max(3.5rem, calc((100vw - 1120px) / 2 + 3.5rem))",
        }}
      >
        {PROJECT_DATA.map((project, index) => (
          <div key={project.projectName} className="snap-start">
            <ProjectCard item={project} index={index} onOpen={onOpenProject} />
          </div>
        ))}
        {/* Extra spacer for padding on the right */}
        <div className="w-1 shrink-0" aria-hidden="true" />
      </div>

      {/* ── Dot indicators ── */}
      <div className="section-shell mt-2 flex items-center gap-3">
        {PROJECT_DATA.map((p, i) => (
          <button
            key={p.projectName}
            aria-label={`Go to ${p.projectName}`}
            onClick={() => goTo(i)}
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              width: i === activeIndex ? "3rem" : "0.75rem",
              background: i === activeIndex ? "rgb(251 191 36)" : "rgba(255,255,255,0.1)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
