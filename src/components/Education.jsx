import { motion } from "framer-motion";
import { FiBookOpen, FiCode, FiCpu } from "react-icons/fi";
import { useLanguage } from "../hooks/useLanguage.jsx";

const educationIcons = [FiBookOpen, FiCode, FiCpu];

function Education() {
  const { t } = useLanguage();
  const education = t.education.items;

  return (
    <section className="section education" id="formation">
      <div className="container education__layout">
        <motion.div
          className="education__intro"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">{t.education.eyebrow}</p>
          <h2>{t.education.title}</h2>
          <p>{t.education.intro}</p>
        </motion.div>

        <div className="education__list">
          {education.map((item, index) => {
            const Icon = educationIcons[index] ?? FiBookOpen;

            return (
              <motion.article
                className="education-card"
                key={`${item.degree}-${item.period}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.36,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
              >
                <span className="education-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="education-card__content">
                  <span className="education-card__period">{item.period}</span>
                  <h3>{item.degree}</h3>
                  {item.specialty && (
                    <span className="education-card__specialty">{item.specialty}</span>
                  )}
                  <strong>{item.school}</strong>
                </div>
                <span className="education-card__icon" aria-hidden="true">
                  <Icon />
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
