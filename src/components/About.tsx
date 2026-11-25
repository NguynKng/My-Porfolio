import { ArrowRight, Brain, Database, Lightbulb, Radio, Rocket, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Item, Stagger } from "./motion";
import TechChip from "./TechChip";

const focusAreas = [
  {
    icon: Database,
    title: "APIs & data modeling",
    body: "REST APIs with NestJS and Express, relational schemas in PostgreSQL/Prisma, authentication and permission-based RBAC.",
    tags: ["NestJS", "PostgreSQL", "Prisma", "RBAC"],
  },
  {
    icon: Radio,
    title: "Real-time & offline-first",
    body: "Live kitchen and cashier screens over SSE, Socket.IO chat, WebRTC calls, and idempotent sync so offline orders never duplicate.",
    tags: ["SSE", "Socket.IO", "WebRTC"],
  },
  {
    icon: Rocket,
    title: "Shipping to production",
    body: "Docker on a Linux VPS behind Nginx, Cloudflare Pages for web apps, and Android/iOS releases with Expo EAS.",
    tags: ["Docker", "Nginx", "Cloudflare", "Expo EAS"],
  },
];

const traits = [
  { title: "Problem solver", body: "I enjoy breaking complex problems into small, testable pieces.", icon: Brain },
  { title: "Continuous learner", body: "Always exploring new tools, including AI-assisted development.", icon: Lightbulb },
  { title: "Product mindset", body: "I care about what real users need, not just what compiles.", icon: ShieldCheck },
];

export default function About() {
  return (
    <section className="section about" aria-labelledby="about-title">
      <div className="section-shell">
        <div className="about-layout">
          <Stagger className="about-copy">
            <Item as="p" className="eyebrow">About me</Item>
            <Item as="h2" className="section-title"><span id="about-title">Backend-minded,<br />product-driven.</span></Item>
            <Item as="p" className="about-lead">I'm a Full-stack Developer based in Ho Chi Minh City, and I like owning a feature from the database to the app store.</Item>
            <Item as="p">I graduated from HUTECH with a Bachelor of Engineering in Information Technology (GPA 3.6/4.0, Excellent). During my internship at VNA Group I rebuilt the city's Occupational Safety and Health reporting system and was named <strong>Outstanding Intern</strong>.</Item>
            <Item as="p">Since then I've built and shipped Servio, an F&amp;B and POS platform now live on the web, Google Play, and the App Store. I'm looking for a Fresher or Junior role where I can keep shipping real products and grow my engineering fundamentals.</Item>
            <Item><Link to="/" state={{ scrollTo: "EXPERIENCE" }} className="text-link">Explore my experience <ArrowRight size={17} /></Link></Item>
          </Stagger>

          <Stagger className="focus-list" gap={0.12} delay={0.1}>
            {focusAreas.map(({ icon: Icon, title, body, tags }) => (
              <Item as="article" className="focus-card" key={title}>
                <div className="focus-card-inner">
                  <span className="focus-icon"><Icon size={22} /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <div className="chip-row">{tags.map((tag) => <TechChip key={tag} name={tag} />)}</div>
                  </div>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>

        <Stagger className="traits" as="ul" gap={0.08}>
          {traits.map(({ title, body, icon: Icon }) => (
            <Item as="li" key={title}>
              <Icon size={20} aria-hidden="true" />
              <div><h3>{title}</h3><p>{body}</p></div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
