import { ArrowLeft, ArrowRight, Utensils, UsersRound, WandSparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const icons = [Utensils, UsersRound, WandSparkles];

export default function Works() {
  const track = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: true });
  const updateEdges = () => {
    const el = track.current;
    if (el) setEdges({ start: el.scrollLeft < 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  };
  useEffect(() => {
    const observer = new ResizeObserver(updateEdges);
    if (track.current) observer.observe(track.current);
    return () => observer.disconnect();
  }, []);
  const slide = (direction: number) => {
    const el = track.current;
    if (el) el.scrollBy({ left: direction * (el.firstElementChild?.clientWidth || 320), behavior: "smooth" });
  };
  return (
    <section className="projects-field section-padding">
      <div className="section-shell">
        <div className="projects-heading">
          <div><p className="eyebrow">Featured projects</p><h2 className="section-title">Things I've built</h2></div>
          <p>A selection of projects from business applications<br className="hidden lg:block" /> to social platforms and AI-powered tools.</p>
          <div className="project-controls"><button onClick={() => slide(-1)} disabled={edges.start} aria-label="Previous projects" title="Previous projects"><ArrowLeft size={18} /></button><button onClick={() => slide(1)} disabled={edges.end} aria-label="Next projects" title="Next projects"><ArrowRight size={18} /></button></div>
        </div>
        <div className="project-track hide-scrollbar" ref={track} onScroll={updateEdges}>
          {projects.map((project, index) => {
            const Icon = icons[index];
            return <article className="project-card" key={project.projectName}>
              <Link className="project-open" to={`/projects/${project.slug}`} aria-label={`View ${project.projectName} details`}>
                <div className={`project-preview preview-${index}`}>
                  <img src={project.previewImage} alt={`${project.projectName} preview`} loading="lazy" />
                  {index === 0 && <span className="featured-label">Featured</span>}
                  <span className="project-arrow"><ArrowRight size={19} /></span>
                </div>
                <div className="project-content">
                  <div className="project-identity"><span className={`project-icon icon-${index}`}><Icon size={24} /></span><div><h3>{project.projectName}</h3><p>{project.type}</p></div></div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta"><span>{project.role}</span><span>{project.period}{project.team ? ` · Team of ${project.team}` : ""}</span></div>
                  <div className="tech-tags">{project.technologies.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}<span>+{project.technologies.length - 3}</span></div>
                  <span className="project-detail-link">Explore project <ArrowRight size={15} /></span>
                </div>
              </Link>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
}
