import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolioData";
import { useLanguage } from "../hooks/useLanguage.jsx";

function Footer() {
  const { t } = useLanguage();
  const goTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <button type="button" className="brand" onClick={() => goTo("accueil")}>
          Amina<span>.</span>
        </button>
        <p className="footer__copyright">{t.footer.copyright}</p>
        <div className="footer__socials">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile.emailLink} target="_blank" rel="noopener noreferrer" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
