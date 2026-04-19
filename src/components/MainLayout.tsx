import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";
import RevealOnScroll from "./RevealOnScroll";
import ViewImageModal from "./ViewImageModal";

type Project = {
  projectName: string;
  imageUrl: string;
  title: string;
  type: string;
  technologies: string[];
  detailMedia: {
    type: "image" | "video";
    src: string;
  }[];
  description: string;
  backendLink: string;
  frontendLink: string;
  nativeLink?: string;
};

export default function MainLayout() {
  const [activeSection, setActiveSection] = useState("INTRO");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project>({} as Project);
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
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisible = entry.target as HTMLElement;
          }
        });

        if (mostVisible) {
          const nextId = (mostVisible as HTMLElement).id;
          setActiveSection((prev) => (prev !== nextId ? nextId : prev));
        }
      },
      {
        root: null,
        rootMargin: "-15% 0px -40% 0px",
        threshold: [0.35, 0.6, 0.8],
      }
    );

    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="site-shell min-h-screen">
      <Header activeSection={activeSection} />

      <main className="pt-18 lg:pt-22">
        <RevealOnScroll id="INTRO">
          <Intro />
        </RevealOnScroll>

        <RevealOnScroll id="ABOUT">
          <About />
        </RevealOnScroll>

        <RevealOnScroll id="WORKS">
          <Works onOpenProject={openProject} />
        </RevealOnScroll>

        <RevealOnScroll id="CONTACT">
          <Contact />
        </RevealOnScroll>
      </main>

      <Footer />

      <ViewImageModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
