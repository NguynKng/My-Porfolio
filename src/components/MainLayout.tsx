import { useEffect, useState } from "react";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";
import RevealOnScroll from "./RevealOnScroll";

export default function MainLayout() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["INTRO", "ABOUT", "WORKS", "CONTACT"];
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  console.log("Active Section:", activeSection);

  return (
    <div className="bg-[#181a1c]">
      <Header activeSection={activeSection} />

      <RevealOnScroll id="INTRO">
        <Intro />
      </RevealOnScroll>

      <RevealOnScroll id="ABOUT">
        <About />
      </RevealOnScroll>

      <RevealOnScroll id="WORKS">
        <Works />
      </RevealOnScroll>

      <RevealOnScroll id="CONTACT">
        <Contact />
      </RevealOnScroll>

      <Footer />
    </div>
  );
}
