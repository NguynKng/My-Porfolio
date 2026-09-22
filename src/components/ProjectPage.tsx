import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Github, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { projects, type Project } from "../data/projects";

function ProjectGallery({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const media = project.detailMedia;
  const active = media[index];
  const move = (direction: number) => setIndex((current) => (current + direction + media.length) % media.length);
  return (
    <section className="case-gallery" aria-label="Project gallery">
      <div className="case-gallery-heading">
        <h2>Inside the product</h2>
        <div className="case-gallery-controls">
          <span aria-live="polite">{String(index + 1).padStart(2, "0")} / {String(media.length).padStart(2, "0")}</span>
          <button onClick={() => move(-1)} aria-label="Previous media" title="Previous media"><ChevronLeft size={19} /></button>
          <button onClick={() => move(1)} aria-label="Next media" title="Next media"><ChevronRight size={19} /></button>
        </div>
      </div>
      <div className="case-media">
        {active.type === "image"
          ? <img key={active.src} src={active.src} alt={`${project.projectName} application screenshot ${index + 1}`} />
          : <video key={active.src} src={active.src} controls playsInline preload="metadata" aria-label={`${project.projectName} demo`} />}
      </div>
      <div className="case-thumbnails" aria-label="Choose project media">
        {media.map((item, itemIndex) => (
          <button key={item.src} onClick={() => setIndex(itemIndex)} aria-label={item.type === "video" ? "View demo video" : `View screenshot ${itemIndex + 1}`} aria-pressed={index === itemIndex}>
            {item.type === "image" ? <img src={item.src} alt="" loading="lazy" /> : <><Play size={20} /><span>Demo</span></>}
          </button>
        ))}
      </div>
    </section>
  );
}

function ProjectContent({ project }: { project: Project }) {
  const projectIndex = projects.indexOf(project);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${project.projectName} | Nguyen Khang`;
    return () => { document.title = previousTitle; };
  }, [project]);
  return (
    <div className="site-shell case-page">
      <a className="skip-link" href="#case-main">Skip to content</a>
      <Header activeSection="PROJECTS" />
      <main id="case-main" tabIndex={-1}>
        <div className="section-shell case-shell">
          <nav className="case-breadcrumb" aria-label="Breadcrumb"><Link to="/#PROJECTS"><ArrowLeft size={17} />All projects</Link><span>Selected work / {String(projectIndex + 1).padStart(2, "0")}</span></nav>
          <section className="case-intro" aria-labelledby="case-title">
            <p className="eyebrow">{project.slug === "servio" ? "Featured project" : "Selected project"}</p>
            <h1 id="case-title">{project.projectName}<span>.</span></h1>
            <p className="case-subtitle">{project.type}</p>
            <p className="case-summary">{project.description}</p>
            {project.links.length > 0 && <div className="case-links">{project.links.map(({ label, href }) => <a key={href} href={href} target="_blank" rel="noopener noreferrer">{href.includes("github.com") ? <Github size={17} /> : <ArrowUpRight size={18} />}{label}<ArrowUpRight size={14} className="case-link-arrow" /></a>)}</div>}
            <dl className="case-facts">
              <div><dt>My role</dt><dd>{project.role}</dd></div>
              <div><dt>Timeline</dt><dd>{project.period}</dd></div>
              {project.team && <div><dt>Team</dt><dd>{project.team} developers</dd></div>}
            </dl>
          </section>
          {project.detailMedia.length > 0 && <ProjectGallery project={project} />}
          <div className="case-body">
            <section className="case-contributions" aria-labelledby="contribution-title">
              <p className="eyebrow">My contribution</p>
              <h2 id="contribution-title">What I worked on</h2>
              <ol>{project.contributions.map((contribution, index) => <li key={contribution}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><p>{contribution}</p></li>)}</ol>
            </section>
            <aside className="case-stack" aria-labelledby="stack-title">
              <p className="eyebrow">Built with</p><h2 id="stack-title">Technology stack</h2>
              <ul>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
              <a href="mailto:nguynkhang2109@gmail.com" className="text-link case-contact">Let's talk about this project <ArrowUpRight size={17} /></a>
            </aside>
          </div>
        </div>
        <section className="case-next">
          <div className="section-shell case-shell">
            <Link to={`/projects/${nextProject.slug}`} className="case-next-link"><div><p>Next project</p><h2>{nextProject.projectName}</h2><span>{nextProject.type}</span></div><span className="case-next-arrow"><ArrowRight size={28} /></span></Link>
            <Link to="/#PROJECTS" className="case-back"><ArrowLeft size={16} />Back to all projects</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <Navigate to="/#PROJECTS" replace />;
  return <ProjectContent key={project.slug} project={project} />;
}
