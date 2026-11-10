import { motion } from "framer-motion";
import { FiArrowRight, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { profile } from "../data/portfolioData";
import { useLanguage } from "../hooks/useLanguage.jsx";

function Contact() {
  const { t } = useLanguage();
  const contactItems = [
    {
      title: t.contact.items.email,
      value: profile.email,
      href: profile.emailLink,
      icon: FiMail,
      external: true,
    },
    {
      title: t.contact.items.phone,
      value: profile.phone,
      href: "tel:+21624634008",
      icon: FiPhone,
    },
    {
      title: t.contact.items.location,
      value: t.contact.location,
      icon: FiMapPin,
    },
    {
      title: t.contact.items.linkedin,
      value: "in/amina-gaddour-a6a633340",
      href: profile.linkedin,
      icon: FiLinkedin,
      external: true,
    },
  ];

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <motion.div
          className="contact__content"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>
          <div className="contact__divider" aria-hidden="true">
            <span />
            <i />
            <span />
          </div>

          <div className="contact__grid">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="contact-item__icon">
                    <Icon />
                  </span>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.value}</small>
                  </span>
                </>
              );

              return (
                <motion.div
                  className="contact-item"
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.45 }}
                  whileHover={{ y: -6 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div>{content}</div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.a
            className="contact__cta"
            href={profile.emailLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.contact.cta}
            <FiArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
