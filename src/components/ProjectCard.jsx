import { motion } from "framer-motion";
import { FiCalendar, FiGithub } from "react-icons/fi";

function ProjectCard({ project, index, labels }) {
  const hasGithub = Boolean(project.github);
  const coverAlt = project.coverAlt ?? project.title;

  return (
    <motion.article
      className="project-card"
      layout
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18, scale: 0.97 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.08, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
    >
      {project.cover && (
        <div
          className={`project-card__cover${project.coverFit === "contain" ? " project-card__cover--contain" : ""}`}
        >
          <img src={project.cover} alt={coverAlt} width="1200" height="675" loading="lazy" />
        </div>
      )}

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="pill">{project.category}</span>
          <span className="project-card__year">
            <FiCalendar />
            {project.year}
          </span>
        </div>

        <div className="project-card__title-row">
          <h3>{project.title}</h3>
          {hasGithub && (
            <a
              className="project-card__github"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${labels?.github ?? "GitHub"} ${project.title}`}
            >
              <FiGithub />
            </a>
          )}
        </div>

        <p>{project.description}</p>

        <div className="project-card__stack">
          <span className="project-card__stack-title">{labels?.technologies}</span>
          <div className="tag-list">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
