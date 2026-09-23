import { ArrowRight, Brain, Lightbulb, Rocket, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const traits = [
  { title: "Problem Solver", body: "I enjoy breaking down complex problems.", icon: Brain },
  { title: "Continuous Learner", body: "Always exploring new technologies.", icon: Lightbulb },
  { title: "Product Mindset", body: "Focused on useful, real-world products.", icon: ShieldCheck },
  { title: "Open to Opportunities", body: "Looking for Fresher / Junior roles.", icon: Rocket },
];

export default function About() {
  return (
    <section className="about-section section-padding">
      <div className="section-shell about-grid">
        <div className="about-copy">
          <p className="eyebrow">About me</p>
          <h2 className="section-title">More than<br />just code</h2>
          <p>I'm a Full-stack Developer with a backend focus, based in Ho Chi Minh City. I build practical web and mobile applications, from user interfaces and REST APIs to databases, real-time features, and deployment.</p>
          <p>My work spans React, Next.js, React Native, Node.js, NestJS, PostgreSQL, MongoDB, Prisma, and TypeORM, with hands-on experience in Docker, Nginx, Linux VPS, Cloudflare, object storage, and mobile builds.</p>
          <p>I'm looking for Fresher or Junior opportunities to contribute to real products and strengthen my software engineering fundamentals.</p>
          <Link to="/" state={{ scrollTo: "EXPERIENCE" }} className="text-link">Get to know me <ArrowRight size={16} /></Link>
        </div>
        <div className="about-visual">
          <p className="font-hand about-note">Good developers<br />build good habits.</p>
          <img src="/avatar-1.jpg" alt="nguynkng" loading="lazy" />
          <div className="about-caption"><span><Zap size={26} /></span><p>Clean code<br />Better products<br />Happier users</p></div>
        </div>
        <div className="trait-list">
          {traits.map(({ title, body, icon: Icon }) => (
            <div className="trait" key={title}><span className="trait-icon"><Icon size={25} /></span><div><h3>{title}</h3><p>{body}</p></div></div>
          ))}
        </div>
      </div>
    </section>
  );
}
