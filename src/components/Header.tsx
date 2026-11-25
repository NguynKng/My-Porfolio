import { ArrowDownToLine, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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

export default function Header() {
  const location = useLocation();
  const [menuLocation, setMenuLocation] = useState<string | null>(null);
  const [homeSection, setHomeSection] = useState("HOME");
  const menuButton = useRef<HTMLButtonElement>(null);
  const open = menuLocation === location.key;
  const closeMenu = () => setMenuLocation(null);
  const activeSection = location.pathname.startsWith("/projects/") ? "PROJECTS" : homeSection;
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const dark = theme === "dark";
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setMenuLocation(null); }, [location.key]);
  useEffect(() => {
    if (location.pathname !== "/") return;
    const sections = tabs.map((tab) => document.getElementById(tab.toUpperCase())).filter((section): section is HTMLElement => section !== null);
    const updateSection = () => {
      const visible = sections.map((section) => ({ id: section.id, top: section.getBoundingClientRect().top }))
        .filter((section) => section.top <= window.innerHeight * .35);
      const nearestTop = Math.max(...visible.map((section) => section.top));
      const nearest = visible.filter((section) => Math.abs(section.top - nearestTop) < 2);
      const requestedSection = (location.state as { scrollTo?: string } | null)?.scrollTo;
      setHomeSection(nearest.find((section) => section.id === requestedSection)?.id ?? nearest[0]?.id ?? "HOME");
    };
    let observer: IntersectionObserver;
    const observeSections = () => {
      observer?.disconnect();
      observer = new IntersectionObserver(updateSection, {
        rootMargin: `${-window.innerHeight * .15}px 0px ${-window.innerHeight * .65}px 0px`,
        threshold: 0,
      });
      sections.forEach((section) => observer.observe(section));
    };
    observeSections();
    window.addEventListener("resize", observeSections);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", observeSections);
    };
  }, [location.key, location.pathname, location.state]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0b1220" : "#ffffff");
    try { localStorage.setItem("portfolio-theme", theme); } catch { /* Storage may be disabled. */ }
  }, [dark, theme]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuLocation(null);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setMenuLocation(null); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);
  const navigationLinks = tabs.map((tab) => (
    <Link key={tab} to="/" state={{ scrollTo: tab.toUpperCase() }} onClick={closeMenu} aria-current={activeSection === tab.toUpperCase() ? "location" : undefined}>{tab}</Link>
  ));
  return (
    <header className="site-header" data-scrolled={scrolled || open || location.pathname !== "/"}>
      <div className="section-shell header-inner">
        <Link className="wordmark" to="/" state={{ scrollTo: "HOME" }} onClick={closeMenu}>NguynKng</Link>
        <nav className="desktop-nav" aria-label="Main navigation">{navigationLinks}</nav>
        <div className="header-actions">
          <a className="download-cv" href="/cv/NguyenHuuNguyenKhang_CV_FullstackDeveloper.pdf" download aria-label="Download CV" title="Download CV"><ArrowDownToLine size={15} /><span>Download CV</span></a>
          <button className="theme-toggle" data-theme={theme} onClick={() => setTheme(dark ? "light" : "dark")} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} aria-pressed={dark} title={dark ? "Switch to light theme" : "Switch to dark theme"}>
            <span className="theme-toggle-thumb" aria-hidden="true" />
            <span className="theme-toggle-icon theme-toggle-sun" aria-hidden="true"><Sun size={15} /></span>
            <span className="theme-toggle-icon theme-toggle-moon" aria-hidden="true"><Moon size={15} /></span>
          </button>
          <button ref={menuButton} className="header-icon menu-toggle" onClick={() => setMenuLocation(open ? null : location.key)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-nav">
            <Menu className="menu-icon-open" size={20} aria-hidden="true" />
            <X className="menu-icon-close" size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
      <nav id="mobile-nav" className="mobile-nav" data-open={open} aria-label="Mobile navigation" aria-hidden={!open} inert={!open}>
        <div className="mobile-nav-clip"><div className="section-shell mobile-nav-inner">{navigationLinks}</div></div>
      </nav>
    </header>
  );
}
