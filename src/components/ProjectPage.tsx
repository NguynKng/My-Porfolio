import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Github, Globe, LoaderCircle, Play, Smartphone } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import { projects, type Project } from "../data/projects";

type Media = Project["detailMedia"][number];

type GallerySelection = {
  index: number;
  displayedIndex: number | null;
  status: "loading" | "ready" | "error";
  requestId: number;
};

function selectGalleryMedia(current: GallerySelection, index: number): GallerySelection {
  if (current.index === index) return current;
  return {
    ...current,
    index,
    status: current.displayedIndex === index ? "ready" : "loading",
    requestId: current.requestId + 1,
  };
}

function GallerySlide({ item, label, priority, selected, onReady, onError }: {
  item: Media;
  label: string;
  priority: boolean;
  selected: boolean;
  onReady: () => void;
  onError: () => void;
}) {
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const element = video.current;
    if (!selected) element?.pause();
    return () => element?.pause();
  }, [selected]);

  return item.type === "image"
    ? <img src={item.src} width={item.width} height={item.height} alt={label} fetchPriority={priority ? "high" : "auto"} decoding="async" onLoad={async (event) => {
      const image = event.currentTarget;
      try {
        await image.decode();
      } catch {
        if (!image.complete || !image.naturalWidth) {
          onError();
          return;
        }
      }
      onReady();
    }} onError={onError} />
    : <video ref={video} src={item.src} controls playsInline preload="auto" aria-label={label} onLoadedData={onReady} onError={onError} />;
}

function ProjectGallery({ project }: { project: Project }) {
  const [selection, setSelection] = useState<GallerySelection>({ index: 0, displayedIndex: null, status: "loading", requestId: 0 });
  const { index, displayedIndex, status, requestId } = selection;
  const reducedMotion = useReducedMotion();
  const thumbnails = useRef<HTMLDivElement>(null);
  const media: Media[] = project.detailMedia.length ? project.detailMedia : [{ type: "image", src: project.previewImage, label: "Project preview" }];
  const active = media[index];
  const label = active.label ?? (active.type === "video" ? "Product demo" : `Screenshot ${index + 1}`);
  const hasPortraitMedia = media.some((item) => item.width && item.height && item.height > item.width);
  const slideIndices = displayedIndex !== null && displayedIndex !== index ? [displayedIndex, index] : [index];
  const move = (direction: number) => setSelection((current) => selectGalleryMedia(current, (current.index + direction + media.length) % media.length));
  const updateStatus = (mediaIndex: number, nextStatus: "ready" | "error") => setSelection((current) => {
    // A late load/decode from an earlier selection must not replace the latest request.
    if (current.index !== mediaIndex || current.requestId !== requestId) return current;
    return { ...current, status: nextStatus, displayedIndex: nextStatus === "ready" ? mediaIndex : current.displayedIndex };
  });

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
      <div className={`case-media${hasPortraitMedia ? " case-media--portrait" : ""}`} aria-busy={status === "loading"}>
        {/* Keep the current slide painted until the replacement is decoded and ready. */}
        {slideIndices.map((mediaIndex) => {
          const item = media[mediaIndex];
          const itemLabel = item.label ?? (item.type === "video" ? "Product demo" : `Screenshot ${mediaIndex + 1}`);
          const isPortrait = !!(item.width && item.height && item.height > item.width);
          const visible = displayedIndex === mediaIndex;
          return <div key={item.src} className={`case-slide${isPortrait ? " case-slide--portrait" : ""}${visible ? " is-visible" : ""}`} aria-hidden={!visible} inert={!visible || index !== mediaIndex}>
            <GallerySlide item={item} label={`${project.projectName}: ${itemLabel}`} priority={index === mediaIndex} selected={index === mediaIndex} onReady={() => updateStatus(mediaIndex, "ready")} onError={() => updateStatus(mediaIndex, "error")} />
          </div>;
        })}
        {status !== "ready" && <div className={`case-media-status${displayedIndex !== null ? " case-media-status--overlay" : ""}`} role="status">
          {status === "loading" ? <><LoaderCircle size={22} /><span>Loading preview</span></> : <span>Preview unavailable. Open the original below.</span>}
        </div>}
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
          <button key={item.src} onClick={() => setSelection((current) => selectGalleryMedia(current, itemIndex))} aria-label={item.label ? `View ${item.label}` : item.type === "video" ? "View demo video" : `View screenshot ${itemIndex + 1}`} title={item.label} aria-pressed={index === itemIndex}>
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
