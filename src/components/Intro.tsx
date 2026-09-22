import { ArrowDown, ArrowRight, ChartNoAxesColumnIncreasing, Github, Linkedin, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "GitHub", href: "https://github.com/NguynKng", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nguynkhang/", icon: Linkedin },
  { label: "Email", href: "mailto:nguynkhang2109@gmail.com", icon: Mail },
];

export default function Intro() {
  return (
    <section className="hero-field">
      <div className="section-shell hero-grid">
        <div className="hero-copy">
          <div className="availability"><span />Available for opportunities</div>
          <p className="hero-name">Nguyen Huu Nguyen Khang</p>
          <h1>Full-stack<br />Developer<br /><span className="hero-last-line">with a <strong>Backend Focus</strong></span></h1>
          <p className="hero-description">I build web and mobile applications with TypeScript, React/Next.js, Node.js/NestJS, and PostgreSQL, with a focus on APIs, real-time features, and practical product delivery.</p>
          <div className="hero-actions"><a href="#PROJECTS" className="button-primary">View My Work <ArrowRight size={17} /></a><a href="#CONTACT" className="button-outline">Contact Me</a></div>
          <div className="hero-socials">{quickLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}><Icon size={19} />{label}</a>)}</div>
          <p className="hero-location"><MapPin size={16} />Ho Chi Minh City, Vietnam</p>
        </div>
        <div className="hero-visual">
          <p className="font-hand hero-note">Build<br />Learn<br />Improve<br />Repeat<ArrowDown size={28} /></p>
          <div className="portrait-frame"><img src="/avatar-1.jpg" alt="Nguyen Huu Nguyen Khang" fetchPriority="high" /></div>
          <div className="code-caption"><code><span>const</span> developer = {"{"}<br />&nbsp; name: <em>"Nguyen Huu Nguyen Khang"</em>,<br />&nbsp; role: <em>"Full-stack Developer"</em>,<br />&nbsp; focus: <em>"Backend"</em>,<br />&nbsp; location: <em>"Ho Chi Minh City"</em>,<br />&nbsp; mindset: <em>"Keep learning"</em><br />{"}"}</code></div>
          <div className="project-count"><strong>3</strong><span>Featured<br />Projects</span><ChartNoAxesColumnIncreasing size={30} /></div>
        </div>
      </div>
      <a className="hero-scroll" href="#ABOUT" aria-label="Scroll to About">Scroll<span /><ArrowDown size={13} /></a>
    </section>
  );
}
