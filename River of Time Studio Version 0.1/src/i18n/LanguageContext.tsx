import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Language } from "./types";
import { siteMeta } from "../data/siteContent";

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (language: Language) => void;
};

const STORAGE_KEY = "river-time-language";
const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "zh";
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "en" || saved === "zh" ? saved : "zh";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = siteMeta.title[language];

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content = siteMeta.description[language];
    }
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: setLanguageState,
      toggleLanguage: () => setLanguageState((current) => (current === "zh" ? "en" : "zh")),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
