import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { Item, Stagger } from "./motion";
import TechChip from "./TechChip";

export default function Works() {
  return (
    <section className="section works" aria-labelledby="works-title">
      <div className="section-shell">
        <Stagger className="section-heading">
          <Item as="p" className="eyebrow">Featured projects</Item>
          <Item as="h2" className="section-title"><span id="works-title">Things I've built</span></Item>
          <Item as="p" className="section-intro">From a live F&amp;B platform used in real shops to a social network and an AI photo editor.</Item>
        </Stagger>

        <Stagger className="project-grid" gap={0.12}>
          {projects.map((project, index) => {
            const featured = index === 0;
            return (
              <Item as="article" key={project.slug} className={`project-card${featured ? " project-card--featured" : ""}`}>
                <Link to={`/projects/${project.slug}`} className="project-link" aria-label={`View ${project.projectName} case study`}>
                  <div className="project-media">
                    <img src={project.previewImage} alt="" loading="lazy" />
                    <div className="project-badges">
                      {featured && <span className="badge badge-live"><span className="pulse-dot" />Live product</span>}
                      {project.category && <span className="badge">{project.category}</span>}
                    </div>
                  </div>
                  <div className="project-body">
                    <div className="project-top">
                      <div>
                        <h3>{project.projectName}</h3>
                        <p className="project-type">{project.type}</p>
                      </div>
                      <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={20} /></span>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <ul className="project-highlights">
                      {project.highlights.map((highlight) => <li key={highlight}><Check size={15} />{highlight}</li>)}
                    </ul>
                    <div className="project-footer">
                      <span className="project-role">{project.role} · {project.period}{project.team ? ` · Team of ${project.team}` : ""}</span>
                      <div className="chip-row">
                        {project.technologies.slice(0, featured ? 6 : 4).map((tech) => <TechChip key={tech} name={tech} />)}
                        <span className="chip chip-muted">+{project.technologies.length - (featured ? 6 : 4)}</span>
                      </div>
                      {project.platforms && <div className="platform-row">{project.platforms.map((platform) => <span key={platform}>{platform}</span>)}</div>}
                    </div>
                  </div>
                </Link>
              </Item>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
