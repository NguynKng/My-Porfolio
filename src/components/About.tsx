import { ArrowRight, Brain, Lightbulb, Rocket, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const traits = [
  { title: "Problem Solver", body: "I enjoy breaking down complex problems.", icon: Brain },
  { title: "Continuous Learner", body: "Always exploring new technologies.", icon: Lightbulb },
  { title: "Product Mindset", body: "Focused on useful, real-world products.", icon: ShieldCheck },
  { title: "Open to Opportunities", body: "Looking for Fresher / Junior roles.", icon: Rocket },
];

export default function About() {
  const reducedMotion = useReducedMotion();
  return (
    <section className="about-section section-padding" aria-labelledby="about-title">
      <motion.div className="section-shell about-shell"
        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: .12 }}
        transition={{ duration: reducedMotion ? 0 : .55, ease: [.22, 1, .36, 1] }}>
        <div className="about-layout">
          <figure className="about-portrait">
            <img src="/cv/anh3x4.jpg" alt="Portrait of NguynKng" width={709} height={945} loading="lazy" />
            <figcaption><strong>NguynKng</strong><span>Full-stack Developer</span></figcaption>
          </figure>
          <div className="about-copy">
            <p className="about-label">About me</p>
            <h2 id="about-title">More than just code</h2>
            <p className="about-lead">I'm a Full-stack Developer with a backend focus, based in Ho Chi Minh City.</p>
            <p>I build practical web and mobile applications, from user interfaces and REST APIs to databases, real-time features, and deployment.</p>
            <p>My work spans React, Next.js, React Native, Node.js, NestJS, PostgreSQL, MongoDB, Prisma, and TypeORM, with hands-on experience in Docker, Nginx, Linux VPS, Cloudflare, object storage, and mobile builds.</p>
            <p>I'm looking for Fresher or Junior opportunities to contribute to real products and strengthen my software engineering fundamentals.</p>
            <Link to="/" state={{ scrollTo: "EXPERIENCE" }} className="text-link about-experience">Explore my experience <ArrowRight size={17} /></Link>
          </div>
        </div>
        <ul className="about-principles" aria-label="How I work">
          {traits.map(({ title, body, icon: Icon }) => (
            <li key={title}><div className="about-principle-heading"><Icon size={20} aria-hidden="true" /><h3>{title}</h3></div><p>{body}</p></li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
