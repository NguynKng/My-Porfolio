import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Github, Globe, LoaderCircle, Play, Smartphone } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import { projects, type Project } from "../data/projects";

type Media = Project["detailMedia"][number];

function GallerySlide({ item, label, priority }: { item: Media; label: string; priority: boolean }) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  return <>
    {status !== "ready" && <div className="case-media-status" role="status">
      {status === "loading" ? <><LoaderCircle size={22} /><span>Loading preview</span></> : <span>Preview unavailable. Open the original below.</span>}
    </div>}
    {item.type === "image"
      ? <img src={item.src} width={item.width} height={item.height} alt={label} fetchPriority={priority ? "high" : "auto"} className={status === "ready" ? "is-ready" : ""} onLoad={() => setStatus("ready")} onError={() => setStatus("error")} />
      : <video src={item.src} controls playsInline preload="metadata" aria-label={label} className={status === "ready" ? "is-ready" : ""} onLoadedMetadata={() => setStatus("ready")} onError={() => setStatus("error")} />}
  </>;
}

function ProjectGallery({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const thumbnails = useRef<HTMLDivElement>(null);
  const media: Media[] = project.detailMedia.length ? project.detailMedia : [{ type: "image", src: project.previewImage, label: "Project preview" }];
  const active = media[index];
  const label = active.label ?? (active.type === "video" ? "Product demo" : `Screenshot ${index + 1}`);
  const isPortrait = !!(active.width && active.height && active.height > active.width);
  const move = (direction: number) => setIndex((current) => (current + direction + media.length) % media.length);

  useEffect(() => {
    const track = thumbnails.current;
    const selected = track?.children[index] as HTMLElement | undefined;
    if (track && selected) track.scrollTo({ left: selected.offsetLeft - track.offsetLeft - (track.clientWidth - selected.clientWidth) / 2, behavior: reducedMotion ? "instant" : "smooth" });
  }, [index, reducedMotion]);

  return (
    <section className="case-gallery" aria-label={`${project.projectName} product gallery`} onKeyDown={(event) => {
      if ((event.target as HTMLElement).tagName === "VIDEO") return;
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        move(event.key === "ArrowLeft" ? -1 : 1);
      }
    }}>
      <div className={`case-media${isPortrait ? " case-media--portrait" : ""}`}>
        <AnimatePresence initial={false}>
          <motion.div key={active.src} className={`case-slide${isPortrait ? " case-slide--portrait" : ""}`}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.25, ease: "easeOut" }}>
            <GallerySlide item={active} label={`${project.projectName}: ${label}`} priority={index === 0} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="case-gallery-toolbar">
        <div className="case-media-caption"><p aria-live="polite" aria-atomic="true">{label}</p><a href={active.src} target="_blank" rel="noopener noreferrer">Open {active.type === "video" ? "video" : "full size"}<ArrowUpRight size={14} /></a></div>
        {media.length > 1 && <div className="case-gallery-controls">
          <span>{String(index + 1).padStart(2, "0")} / {String(media.length).padStart(2, "0")}</span>
          <button onClick={() => move(-1)} aria-label="Previous media" title="Previous media"><ChevronLeft size={18} /></button>
          <button onClick={() => move(1)} aria-label="Next media" title="Next media"><ChevronRight size={18} /></button>
        </div>}
      </div>
      {media.length > 1 && <div className="case-thumbnails" ref={thumbnails} aria-label="Choose project media">
        {media.map((item, itemIndex) => (
          <button key={item.src} onClick={() => setIndex(itemIndex)} aria-label={item.label ? `View ${item.label}` : item.type === "video" ? "View demo video" : `View screenshot ${itemIndex + 1}`} title={item.label} aria-pressed={index === itemIndex}>
            {item.type === "image" ? <img src={item.src} alt="" loading="lazy" className={item.width && item.height && item.height > item.width ? "case-thumbnail--portrait" : undefined} /> : <><Play size={18} /><span>Demo</span></>}
          </button>
        ))}
      </div>}
    </section>
  );
}

function ProjectContent({ project }: { project: Project }) {
  const projectIndex = projects.indexOf(project);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${project.projectName} | Nguyên Khang`;
    return () => { document.title = previousTitle; };
  }, [project]);
  return (
    <div className="site-shell case-page">
      <a className="skip-link" href="#case-main">Skip to content</a>
      <main id="case-main" tabIndex={-1}>
        <div className="section-shell case-shell">
          <nav className="case-breadcrumb" aria-label="Breadcrumb"><Link to="/" state={{ scrollTo: "PROJECTS" }}><ArrowLeft size={16} />All projects</Link>{project.category && <span>{project.category}</span>}</nav>
          <section className="case-intro" aria-labelledby="case-title">
            <div className="case-title-group"><h1 id="case-title">{project.projectName}<span>.</span></h1><p className="case-subtitle">{project.type}</p></div>
            <ProjectGallery project={project} />
            {project.links.length > 0 && <div className="case-links">{project.links.map(({ label, href }) => {
              const Icon = href.includes("github.com") ? Github : href.includes("apps.apple.com") || href.includes("play.google.com") ? Smartphone : Globe;
              return <a key={href} href={href} target="_blank" rel="noopener noreferrer"><Icon size={17} />{label}<ArrowUpRight size={14} className="case-link-arrow" /></a>;
            })}</div>}
          </section>
          {project.demoAccount && <aside className="case-demo-account" aria-label="Test account">
            <strong>Test account</strong>
            <dl>
              <div><dt>Email</dt><dd><code>{project.demoAccount.email}</code></dd></div>
              <div><dt>Password</dt><dd><code>{project.demoAccount.password}</code></dd></div>
            </dl>
          </aside>}
          <dl className="case-facts">
            <div><dt>My role</dt><dd>{project.role}</dd></div>
            <div><dt>Timeline</dt><dd>{project.period}</dd></div>
            {project.category && <div><dt>Project</dt><dd>{project.category}</dd></div>}
            {project.team && <div><dt>Team</dt><dd>{project.team} developers</dd></div>}
          </dl>
          <div className="case-body">
            <div className="case-story">
              <section className="case-overview" aria-labelledby="overview-title"><h2 id="overview-title">About the project</h2><p className="case-summary">{project.description}</p></section>
              <section className="case-contributions" aria-labelledby="contribution-title">
                <h2 id="contribution-title">What I worked on</h2>
                <ul>{project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>
              </section>
            </div>
            <aside className="case-stack" aria-labelledby="stack-title">
              <h2 id="stack-title">Built with</h2>
              <ul>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
              <a href="mailto:nguynkhang2109@gmail.com" className="text-link case-contact">Let's talk about this project <ArrowUpRight size={17} /></a>
            </aside>
          </div>
          <section className="case-next" aria-label="More projects">
            <Link to={`/projects/${nextProject.slug}`} className="case-next-link">
              <img src={nextProject.previewImage} alt="" loading="lazy" />
              <div><p>Next project</p><h2>{nextProject.projectName}</h2><span>{nextProject.type}</span></div>
              <span className="case-next-arrow"><ArrowRight size={24} /></span>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <Navigate to="/" state={{ scrollTo: "PROJECTS" }} replace />;
  return <ProjectContent key={project.slug} project={project} />;
}
