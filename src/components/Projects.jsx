import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import { useLanguage } from "../hooks/useLanguage.jsx";
import ProjectCard from "./ProjectCard";
import ProjectDemoModal from "./ProjectDemoModal";

const filterOrder = ["all", "software", "ai"];

function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [demoProject, setDemoProject] = useState(null);
  const closeDemo = useCallback(() => setDemoProject(null), []);
  const filters = filterOrder;
  const localizedProjects = projects.map((project) => ({
    ...project,
    ...(t.projects.items[project.id] ?? {}),
  }));
  const visibleProjects =
    filter === "all"
      ? localizedProjects
      : localizedProjects.filter((project) => project.categories.includes(filter));

  return (
    <section className="section projects" id="projets">
      <div className="container">
        <motion.div
          className="section-heading section-heading--center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">{t.projects.eyebrow}</p>
          <h2>{t.projects.title}</h2>
          <p>{t.projects.intro}</p>
        </motion.div>

        <div className="project-filters" role="group" aria-label={t.projects.filtersLabel}>
          {filters.map((item) => (
            <button
              type="button"
              key={item}
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
            >
              {t.projects.filters[item] ?? item}
            </button>
          ))}
        </div>

        <motion.div className="project-grid" layout>
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                labels={{
                  technologies: t.projects.technologies,
                  github: t.projects.githubLabel,
                  demo: t.projects.demo.button,
                }}
                onDemo={setDemoProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectDemoModal project={demoProject} onClose={closeDemo} labels={t.projects.demo} />
    </section>
  );
}

export default Projects;
