import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../data/translations";

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const supportedLanguages = Object.keys(translations);

const LanguageContext = createContext(null);

function getInitialLanguage() {
  if (typeof window === "undefined") return "fr";

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return supportedLanguages.includes(savedLanguage) ? savedLanguage : "fr";
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  useEffect(() => {
    const currentTranslation = translations[language];
    document.documentElement.lang = language;
    document.title = currentTranslation.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", currentTranslation.meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", currentTranslation.meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", currentTranslation.meta.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", currentTranslation.meta.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", currentTranslation.meta.description);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (nextLanguage) => {
        if (supportedLanguages.includes(nextLanguage)) {
          setLanguageState(nextLanguage);
        }
      },
      t: translations[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
