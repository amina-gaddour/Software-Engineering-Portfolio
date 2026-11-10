import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage.jsx";

function About() {
  const { t } = useLanguage();

  return (
    <section className="section about" id="a-propos">
      <div className="container">
        <motion.div
          className="about__main"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about__illustration">
            <img
              src={`${import.meta.env.BASE_URL}images/amina.jpg`}
              alt={t.hero.portraitAlt}
              width="922"
              height="1150"
              loading="lazy"
            />
          </div>

          <div className="about__copy">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.title}</h2>
            <div className="about__text-stack">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <button
              type="button"
              className="text-link"
              onClick={() =>
                document.querySelector("#contact .contact__content")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              {t.about.cta} <span>→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
