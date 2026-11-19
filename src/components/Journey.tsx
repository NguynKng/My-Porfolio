import { ArrowDown, ArrowRight, Award, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const featuredSkills = [
  ["TypeScript", "typescript"], ["JavaScript", "javascript"], ["React", "react"],
  ["Next.js", "nextjs"], ["NestJS", "nestjs"], ["React Native", "react"],
  ["PostgreSQL", "postgresql"], ["MongoDB", "mongodb"], ["Docker", "docker"],
  ["Cloudflare", "cloudflare"], ["Python", "python"], ["Socket.IO", "socketio"],
  ["Node.js", "nodejs"], ["RabbitMQ", "rabbitmq"], ["Prisma", "prisma"],
];
const skillGroups = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML5 / CSS3"] },
  { category: "Frontend", items: ["React", "Next.js", "Material UI (MUI)", "Tailwind CSS"] },
  { category: "Mobile", items: ["React Native", "Expo", "Expo Application Services (EAS)"] },
  { category: "Backend", items: ["Node.js", "NestJS", "Express.js", "Flask", "RESTful APIs", "JWT authentication", "RBAC"] },
  { category: "Databases & ORM", items: ["PostgreSQL", "MongoDB", "MySQL", "Microsoft SQL Server", "Prisma", "TypeORM"] },
  { category: "Real-time & Messaging", items: ["SSE", "Socket.IO", "WebSocket", "WebRTC", "RabbitMQ"] },
  { category: "Cloud & Storage", items: ["AWS S3", "DigitalOcean Spaces", "Cloudflare R2", "Cloudflare Pages"] },
  { category: "DevOps & Infrastructure", items: ["Docker", "Nginx", "Linux VPS", "Cloudflare DNS", "SSL/TLS"] },
  { category: "Development Tools", items: ["Git / GitHub", "Postman", "DBeaver", "SourceTree"] },
];

export default function Journey() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="journey-section section-padding">
      <div className="section-shell journey-grid">
        <div id="EXPERIENCE">
          <p className="eyebrow">Experience & education</p>
          <h2 className="subsection-title">My Journey</h2>
          <div className="timeline">
            <article><div className="timeline-icon"><BriefcaseBusiness size={24} /></div><div>
              <p className="meta">Mar 2026 - Present</p><h3>Freelance Full-stack Developer</h3><p className="organization">Servio — F&B Management & POS System</p>
              <ul><li>Built a web and mobile F&B management and POS system with NestJS, Next.js, and React Native.</li><li>Implemented multi-branch ordering, RBAC, real-time kitchen updates, and offline mobile synchronization.</li><li>Deployed the backend and web apps, and released Android/iOS production builds with Expo EAS.</li></ul>
              <Link to="/projects/servio" className="text-link timeline-project-link">View Servio case study <ArrowRight size={16} /></Link>
            </div></article>
            <article><div className="timeline-icon"><BriefcaseBusiness size={24} /></div><div>
              <p className="meta">Dec 2025 - Feb 2026</p><h3>Backend Developer Intern</h3><p className="organization">VNA Group</p>
              <ul><li>Helped rebuild the Occupational Safety and Health (OSH) reporting system for Ho Chi Minh City in a two-person team using NestJS and PostgreSQL.</li><li>Developed REST APIs for authentication, enterprise and account management, and report submission and review.</li><li>Implemented RBAC for Admin, Enterprise, and Department Authority roles to restrict data access and actions.</li></ul>
            </div></article>
            <article><div className="timeline-icon"><GraduationCap size={25} /></div><div>
              <p className="meta">Oct 2022 - Nov 2026</p><h3>B.Eng. in Information Technology</h3><p className="organization">Ho Chi Minh City University of Technology (HUTECH)</p><p className="credential">GPA: <strong>3.6/4.0</strong></p><p className="credential">Graduation Classification: <strong>Excellent</strong></p>
            </div></article>
            <article><div className="timeline-icon"><Award size={25} /></div><div><p className="meta">English certification</p><h3>TOEIC Listening & Reading</h3><p className="credential"><strong>820/990</strong></p></div></article>
          </div>
        </div>
        <div id="SKILLS">
          <p className="eyebrow">Skills</p><h2 id="skills-title" className="subsection-title">Technologies I work with</h2>
          <div className="skill-grid">{featuredSkills.map(([name, slug]) => <div className="skill-tile" key={name}><img src={`/skills/${slug}.svg`} alt="" loading="lazy" /><span>{name}</span></div>)}</div>
          <button className="text-link skills-toggle" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded} aria-controls="all-skills">{expanded ? "Show core skills" : "View all skills"}<span className="skills-toggle-icon"><ArrowDown size={16} /></span></button>
      <div id="all-skills" className="skills-expansion" data-expanded={expanded} inert={!expanded} aria-hidden={!expanded} role="region" aria-labelledby="skills-title">
        <div className="skills-expansion-clip">
          <dl className="skill-details">
            {skillGroups.map(({ category, items }) => (
              <div className="skill-group" key={category}>
                <dt>{category}</dt>
                <dd>{items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
        </div>
        <aside className="learning-panel"><GraduationCap size={26} /><h3>Always learning,<br />always building.</h3><p>Turning ideas into real products through code.</p><Link to="/" state={{ scrollTo: "PROJECTS" }} className="circle-link" aria-label="Explore my projects" title="Explore my projects"><ArrowRight size={20} /></Link><div className="learning-lines" aria-hidden="true" /></aside>
      </div>
    </section>
  );
}
