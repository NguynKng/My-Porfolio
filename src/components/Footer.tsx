import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <div className="footer-brand"><Link className="wordmark" to="/" state={{ scrollTo: "HOME" }}>Khang<span>.</span></Link><span>Full-stack Developer</span></div>
        <nav aria-label="Footer navigation">{["Home", "About", "Projects", "Experience", "Skills", "Contact"].map((label) => <Link key={label} to="/" state={{ scrollTo: label.toUpperCase() }}>{label}</Link>)}</nav>
        <div className="footer-socials"><a href="https://github.com/NguynKng" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><Github size={20} /></a><a href="https://www.linkedin.com/in/nguynkhang/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={20} /></a><a href="mailto:nguynkhang2109@gmail.com" aria-label="Email" title="Email"><Mail size={20} /></a><Link to="/" state={{ scrollTo: "HOME" }} className="back-top" aria-label="Back to top" title="Back to top"><ArrowUp size={18} /></Link></div>
      </div>
      <p className="section-shell copyright">&copy; {new Date().getFullYear()} Nguyen Huu Nguyen Khang. All rights reserved.</p>
    </footer>
  );
}
