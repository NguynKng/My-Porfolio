import { ArrowDownToLine, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const tabs = ["Home", "About", "Projects", "Experience", "Skills", "Contact"];
type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
  try {
    const storedTheme = localStorage.getItem("portfolio-theme");
    if (storedTheme === "light" || storedTheme === "dark") return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } catch {
    return "light";
  }
};

export default function Header({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const dark = theme === "dark";
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0b1624" : "#071524");
    try { localStorage.setItem("portfolio-theme", theme); } catch { /* Storage may be disabled. */ }
  }, [dark, theme]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="section-shell header-inner">
        <Link className="wordmark" to="/" state={{ scrollTo: "HOME" }} onClick={() => setOpen(false)}>nguynkng</Link>
        <nav className="desktop-nav" aria-label="Main navigation">{tabs.map((tab) => <Link key={tab} to="/" state={{ scrollTo: tab.toUpperCase() }} aria-current={activeSection === tab.toUpperCase() ? "location" : undefined}>{tab}</Link>)}</nav>
        <div className="header-actions">
          <a className="download-cv" href="/cv/NguyenHuuNguyenKhang_CV.pdf" download><ArrowDownToLine size={15} /><span>Download CV</span></a>
          <button className="theme-toggle" data-theme={theme} onClick={() => setTheme(dark ? "light" : "dark")} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} aria-pressed={dark} title={dark ? "Switch to light theme" : "Switch to dark theme"}>
            <span className="theme-toggle-thumb" aria-hidden="true" />
            <span className="theme-toggle-icon theme-toggle-sun" aria-hidden="true"><Sun size={15} /></span>
            <span className="theme-toggle-icon theme-toggle-moon" aria-hidden="true"><Moon size={15} /></span>
          </button>
          <button className="header-icon menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-nav">{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
      {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{tabs.map((tab) => <Link key={tab} to="/" state={{ scrollTo: tab.toUpperCase() }} onClick={() => setOpen(false)} aria-current={activeSection === tab.toUpperCase() ? "location" : undefined}>{tab}</Link>)}</nav>}
    </header>
  );
}
