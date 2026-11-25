import { ArrowRight, Award, BriefcaseBusiness, GraduationCap, Languages } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Item, Stagger } from "./motion";
import TechChip from "./TechChip";

type TimelineEntry = {
  icon: typeof BriefcaseBusiness;
  period: string;
  title: string;
  org: string;
  badge?: string;
  points?: string[];
  facts?: string[];
  link?: { to: string; label: string };
  current?: boolean;
};

const timeline: TimelineEntry[] = [
  {
    icon: BriefcaseBusiness,
    period: "Mar 2026 - Present",
    title: "Full-stack Developer · Freelance",
    org: "Servio — F&B Management & POS System",
    current: true,
    points: [
      "Built the NestJS API (25+ modules), Next.js web apps, and React Native app for POS, QR ordering, kitchen display, inventory, invoicing, and reporting.",
      "Designed a multi-branch PostgreSQL/Prisma model (34 models) with branch pricing and permission-based RBAC.",
      "Shipped offline-first ordering with idempotent sync and real-time kitchen updates over SSE.",
      "Deployed the MVP (Docker, Nginx, Cloudflare Pages) and released Android/iOS builds with Expo EAS.",
    ],
    link: { to: "/projects/servio", label: "View Servio case study" },
  },
  {
    icon: BriefcaseBusiness,
    period: "Dec 2025 - Feb 2026",
    title: "Backend Developer Intern",
    org: "VNA Group",
    badge: "Outstanding Intern",
    points: [
      "Rebuilt Ho Chi Minh City's Occupational Safety and Health (OSH) reporting system from the ground up in a two-person team.",
      "Re-designed the PostgreSQL schema and built NestJS REST APIs for auth, enterprise and account management, and the submission → review → approval workflow.",
      "Implemented RBAC for Admin, Enterprise, and Department Authority roles with data scoping.",
    ],
  },
  {
    icon: GraduationCap,
    period: "Oct 2022 - Nov 2026",
    title: "B.Eng. in Information Technology",
    org: "Ho Chi Minh City University of Technology (HUTECH)",
    facts: ["GPA 3.6 / 4.0", "Excellent classification", "Graduation project: BingBong"],
  },
  {
    icon: Languages,
    period: "English certification",
    title: "TOEIC Listening & Reading",
    org: "820 / 990",
  },
];

const skillGroups = [
  { category: "Backend", items: ["Node.js", "NestJS", "Express.js", "REST APIs", "Swagger / OpenAPI", "JWT", "RBAC", "Flask"] },
  { category: "Databases & ORM", items: ["PostgreSQL", "Prisma", "TypeORM", "MongoDB", "Mongoose", "MySQL"] },
  { category: "Real-time", items: ["SSE", "Socket.IO", "WebSocket", "WebRTC"] },
  { category: "Frontend & Mobile", items: ["React", "Next.js", "Tailwind CSS", "React Native", "Expo / EAS"] },
  { category: "Cloud & DevOps", items: ["Docker", "Nginx", "Linux VPS", "Cloudflare", "AWS S3", "DigitalOcean Spaces", "SSL/TLS"] },
  { category: "Languages, AI & tools", items: ["TypeScript", "JavaScript", "Python", "SQL", "OpenAI API", "Gemini API", "Git", "Postman"] },
];

export default function Journey() {
  const reduced = useReducedMotion();
  const timelineRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 75%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <>
      <section id="EXPERIENCE" className="section experience" aria-labelledby="experience-title">
        <div className="section-shell experience-layout">
          <Stagger className="section-heading section-heading--sticky">
            <Item as="p" className="eyebrow">Experience &amp; education</Item>
            <Item as="h2" className="section-title"><span id="experience-title">My journey so far</span></Item>
            <Item as="p" className="section-intro">An internship that ended with an award, a product now live on three platforms, and a degree with Excellent honors.</Item>
            <Item><a className="btn btn-ghost btn-sm" href="/cv/NguyenHuuNguyenKhang_CV_FullstackDeveloper.pdf" target="_blank" rel="noopener noreferrer">Open full CV <ArrowRight size={16} /></a></Item>
          </Stagger>

          <div className="timeline-wrap">
          <div className="timeline-track" aria-hidden="true">
            <motion.div className="timeline-progress" style={reduced ? { scaleY: 1 } : { scaleY: progress }} />
          </div>
          <ol className="timeline" ref={timelineRef}>
            {timeline.map((entry) => {
              const Icon = entry.icon;
              return (
                <motion.li key={entry.title} className={`timeline-item${entry.current ? " is-current" : ""}`}
                  initial={reduced ? false : { opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                  <span className="timeline-node"><Icon size={18} /></span>
                  <div className="timeline-card">
                    <div className="timeline-head">
                      <span className="timeline-period">{entry.period}</span>
                      {entry.current && <span className="badge badge-live"><span className="pulse-dot" />Current</span>}
                      {entry.badge && <span className="badge badge-award"><Award size={13} />{entry.badge}</span>}
                    </div>
                    <h3>{entry.title}</h3>
                    <p className="timeline-org">{entry.org}</p>
                    {entry.points && <ul>{entry.points.map((point) => <li key={point}>{point}</li>)}</ul>}
                    {entry.facts && <div className="chip-row">{entry.facts.map((fact) => <span key={fact} className="chip">{fact}</span>)}</div>}
                    {entry.link && <Link to={entry.link.to} className="text-link">{entry.link.label} <ArrowRight size={16} /></Link>}
                  </div>
                </motion.li>
              );
            })}
          </ol>
          </div>
        </div>
      </section>

      <section id="SKILLS" className="section skills" aria-labelledby="skills-title">
        <div className="section-shell">
          <Stagger className="section-heading section-heading--center">
            <Item as="p" className="eyebrow">Skills</Item>
            <Item as="h2" className="section-title"><span id="skills-title">Technologies I work with</span></Item>
          </Stagger>
        </div>


        <div className="section-shell">
          <Stagger className="skill-groups" gap={0.07}>
            {skillGroups.map(({ category, items }) => (
              <Item as="article" className="skill-group" key={category}>
                <h3>{category}</h3>
                <div className="chip-row">{items.map((item) => <TechChip key={item} name={item} />)}</div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
