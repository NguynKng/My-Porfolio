import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Counter } from "./motion";
import TechChip from "./TechChip";
import { coreStack } from "../data/tech";

const quickLinks = [
  { label: "GitHub", href: "https://github.com/NguynKng", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nguynkhang/", icon: Linkedin },
  { label: "Email", href: "mailto:nguynkhang2109@gmail.com", icon: Mail },
];

const stats = [
  { value: 3, label: "Platforms shipped", detail: "Web · Google Play · App Store" },
  { value: 25, suffix: "+", label: "Backend modules", detail: "NestJS API for Servio" },
  { value: 3.6, decimals: 1, label: "GPA / 4.0", detail: "Excellent classification" },
  { value: 820, label: "TOEIC L&R", detail: "Professional English" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Intro() {
  const reduced = useReducedMotion();
  const enter = (delay: number) => reduced ? {} : {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay },
  };
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="section-shell hero-layout">
        <div className="hero-copy">
          <motion.div className="availability" {...enter(0.05)}><span className="pulse-dot" />Available for Fresher / Junior roles</motion.div>
          <motion.p className="hero-name" {...enter(0.12)}>Hi, I'm <strong>Nguyen Huu Nguyen Khang</strong></motion.p>
          <motion.h1 id="hero-title" {...enter(0.2)}>
            Full-stack Developer
            <span className="hero-accent">with a backend focus.</span>
          </motion.h1>
          <motion.p className="hero-description" {...enter(0.3)}>
            I design APIs and data models, build real-time and offline-first features, and ship them to production
            on web and mobile, with TypeScript, NestJS, PostgreSQL, Next.js, and React Native.
          </motion.p>
          <motion.div className="hero-actions" {...enter(0.38)}>
            <Link to="/" state={{ scrollTo: "PROJECTS" }} className="btn btn-primary">View my work <ArrowRight size={17} /></Link>
            <a href="/cv/NguyenHuuNguyenKhang_CV_FullstackDeveloper.pdf" download className="btn btn-ghost"><Download size={17} />Download CV</a>
          </motion.div>
          <motion.div className="hero-meta" {...enter(0.46)}>
            <div className="hero-socials">
              {quickLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label} title={label}><Icon size={18} /></a>
              ))}
            </div>
            <span className="hero-location"><MapPin size={15} />Ho Chi Minh City, Vietnam</span>
          </motion.div>
          <motion.div className="hero-stack" {...enter(0.54)}>
            <span className="hero-stack-label">Core stack</span>
            <div className="hero-stack-list">
              {coreStack.map((name) => <TechChip key={name} name={name} className="stack-chip" />)}
            </div>
          </motion.div>
        </div>

        <motion.div className="hero-visual"
          initial={reduced ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.15 }}>
          <div className="portrait-card">
            <img src="/avatar-1.jpg" alt="Nguyen Huu Nguyen Khang" fetchPriority="high" />
          </div>
        </motion.div>
      </div>

      <div className="section-shell">
        <motion.dl className="hero-stats"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.55 }}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd><strong><Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} /></strong><span>{stat.detail}</span></dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
