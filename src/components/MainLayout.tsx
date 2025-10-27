import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";
import RevealOnScroll from "./RevealOnScroll";

export default function MainLayout() {
  const [activeSection, setActiveSection] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "#INTRO, #ABOUT, #WORKS, #CONTACT"
    );

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        let mostVisible: HTMLElement | null = null;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisible = entry.target as HTMLElement;
          }
        });

        if (mostVisible && mostVisible.id !== activeSection) {
          setActiveSection(mostVisible.id);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0.3, 0.6, 0.9], // Trigger khi hiển thị 30%-90%
      }
    );

    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [activeSection]);

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
