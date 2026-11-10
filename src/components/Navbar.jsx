import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useLanguage } from "../hooks/useLanguage.jsx";

function Navbar({ theme, onToggleTheme }) {
  const { language, setLanguage, t } = useLanguage();
  const navigation = t.navigation;
  const [activeSection, setActiveSection] = useState("accueil");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [navigation]);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };
    const desktopQuery = window.matchMedia("(min-width: 1081px)");
    const onDesktopChange = (event) => {
      if (event.matches) closeMenu();
    };

    document.body.classList.toggle("menu-open", menuOpen);
    window.addEventListener("keydown", onKeyDown);
    desktopQuery.addEventListener("change", onDesktopChange);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
      desktopQuery.removeEventListener("change", onDesktopChange);
    };
  }, [menuOpen]);

  const navigateTo = (id) => {
    const delay = menuOpen ? 220 : 0;
    setMenuOpen(false);
    window.setTimeout(() => {
      const section = document.getElementById(id);
      if (!section) return;

      const navHeight = document.querySelector(".navbar")?.getBoundingClientRect().height ?? 0;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      window.scrollTo({
        top: Math.max(0, sectionTop - navHeight - 24),
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }, delay);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <button
          type="button"
          className="brand"
          onClick={() => navigateTo("accueil")}
          aria-label={t.menu.home}
        >
          Amina<span>.</span>
        </button>

        <nav className="navbar__desktop" aria-label={t.menu.navigation}>
          {navigation.map(({ label, id }) => (
            <button
              type="button"
              key={id}
              className={activeSection === id ? "nav-link active" : "nav-link"}
              onClick={() => navigateTo(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="navbar__actions">
          <div className="language-switch" aria-label={t.language.label}>
            {["fr", "en"].map((item) => (
              <button
                type="button"
                key={item}
                className={language === item ? "active" : ""}
                onClick={() => setLanguage(item)}
                aria-pressed={language === item}
              >
                {t.language[item]}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="icon-button theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === "light" ? t.theme.dark : t.theme.light}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                {theme === "light" ? <FiMoon /> : <FiSun />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            type="button"
            className="icon-button menu-toggle"
            aria-label={menuOpen ? t.menu.close : t.menu.open}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-menu"
            id="mobile-navigation"
            aria-label={t.menu.mobile}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="mobile-menu__inner">
              {navigation.map(({ label, id }, index) => (
                <motion.button
                  type="button"
                  key={id}
                  className={activeSection === id ? "active" : ""}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035 }}
                  onClick={() => navigateTo(id)}
                >
                  <span>0{index + 1}</span>
                  {label}
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
