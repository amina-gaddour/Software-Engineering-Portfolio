import { motion } from "framer-motion";
import { experiences } from "../data/portfolioData";
import { useLanguage } from "../hooks/useLanguage.jsx";

function ExperienceTimeline() {
  const { t } = useLanguage();
  const localizedExperiences = experiences.map((experience) => ({
    ...experience,
    ...(t.experience.items[experience.id] ?? {}),
  }));

  return (
    <section className="section experience" id="experiences">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">{t.experience.eyebrow}</p>
          <h2>{t.experience.title}</h2>
          <p>{t.experience.intro}</p>
        </motion.div>

        <div className="timeline">
          <motion.div
            className="timeline__line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
          {localizedExperiences.map((experience, index) => (
            <motion.article
              className="timeline-item"
              key={`${experience.company}-${experience.period}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.12, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="timeline-item__date">{experience.period}</div>
              <motion.span
                className="timeline-item__dot"
                initial={{ scale: 0.7, opacity: 0.35 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ delay: index * 0.14 + 0.18, duration: 0.35 }}
              />
              <div className="timeline-item__card">
                <small>{experience.company}</small>
                <h3>{experience.role}</h3>
                <p>{experience.description}</p>
                {experience.technologies.length > 0 && (
                  <div className="tag-list">
                    {experience.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceTimeline;
