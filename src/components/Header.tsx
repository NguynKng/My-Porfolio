import { ArrowDownToLine, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const tabs = ["Home", "About", "Projects", "Experience", "Skills", "Contact"];

export default function Header({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("portfolio-theme") === "dark"; } catch { return false; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try { localStorage.setItem("portfolio-theme", dark ? "dark" : "light"); } catch { /* Storage may be disabled. */ }
  }, [dark]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="section-shell header-inner">
        <Link className="wordmark" to="/#HOME" onClick={() => setOpen(false)}>Khang<span>.</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">{tabs.map((tab) => <Link key={tab} to={`/#${tab.toUpperCase()}`} aria-current={activeSection === tab.toUpperCase() ? "location" : undefined}>{tab}</Link>)}</nav>
        <div className="header-actions">
          <a className="download-cv" href="/cv/NguyenHuuNguyenKhang_CV.pdf" download><ArrowDownToLine size={15} /><span>Download CV</span></a>
          <button className="header-icon" onClick={() => setDark(!dark)} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} title={dark ? "Switch to light theme" : "Switch to dark theme"}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <button className="header-icon menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-nav">{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
      {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{tabs.map((tab) => <Link key={tab} to={`/#${tab.toUpperCase()}`} onClick={() => setOpen(false)} aria-current={activeSection === tab.toUpperCase() ? "location" : undefined}>{tab}</Link>)}</nav>}
    </header>
  );
}
