import { useEffect, useState } from "react";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Journey from "./Journey";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";

export default function MainLayout() {
  const [activeSection, setActiveSection] = useState("HOME");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (visible.length) setActiveSection(visible[visible.length - 1].target.id);
    }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
    document.querySelectorAll("#HOME, #ABOUT, #PROJECTS, #EXPERIENCE, #SKILLS, #CONTACT").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header activeSection={activeSection} />
      <main id="main">
        <div id="HOME"><Intro /></div>
        <div id="ABOUT"><About /></div>
        <div id="PROJECTS"><Works /></div>
        <Journey />
        <div id="CONTACT"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}
