import { motion } from "framer-motion";
import { FiAward, FiGlobe } from "react-icons/fi";
import { useLanguage } from "../hooks/useLanguage.jsx";

const columnConfig = [
  {
    key: "certificates",
    icon: FiAward,
  },
  {
    key: "languages",
    icon: FiGlobe,
  }
];

function Certificates() {
  const { t } = useLanguage();
  const CertificateIcon = columnConfig[0].icon;
  const LanguageIcon = columnConfig[1].icon;

  return (
    <section className="section credentials" id="certificats">
      <div className="container">
        <motion.div
          className="section-heading section-heading--center credentials__heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">{t.credentials.eyebrow}</p>
          <h2>{t.credentials.title}</h2>
          <p>{t.credentials.intro}</p>
        </motion.div>

        <motion.div
          className="credentials__card"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="credentials__column"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.08, duration: 0.5 }}
          >
            <div className="credentials__column-title">
              <span>
                <CertificateIcon />
              </span>
              <div>
                <h3>{t.credentials.columns.certificates}</h3>
              </div>
            </div>
            <div className="credential-list">
              {t.credentials.certificates.map((certificate, index) => (
                <motion.article
                  className="credential-item"
                  key={certificate.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {certificate.image ? (
                    <a
                      className="credential-item__image"
                      href={certificate.href ?? certificate.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${certificate.viewLabel} ${certificate.title}`}
                    >
                      {certificate.image.endsWith(".pdf") ? (
                        <span className="credential-item__badge">{certificate.short}</span>
                      ) : (
                        <img src={certificate.image} alt={certificate.title} loading="lazy" />
                      )}
                    </a>
                  ) : (
                    <span className="credential-item__badge">{certificate.short}</span>
                  )}
                  <div>
                    <h4>{certificate.title}</h4>
                    <p>{certificate.issuer}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="credentials__column"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.18, duration: 0.5 }}
          >
            <div className="credentials__column-title">
              <span>
                <LanguageIcon />
              </span>
              <div>
                <h3>{t.credentials.columns.languages}</h3>
              </div>
            </div>
            <div className="language-list">
              {t.credentials.languages.map((language, index) => (
                <motion.div
                  className="language-row"
                  key={language.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div>
                    <strong>{language.name}</strong>
                    <span>{language.level}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default Certificates;
