import { useEffect, useState } from "react";
import type { Language, Localized, SiteContent } from "../types/site";

const STORAGE_KEY = "ew-lang";

function detectInitialLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "zh") return stored;
  } catch {
    // Ignore storage failures in locked-down browsers.
  }

  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

export function useLanguage(content: Localized<SiteContent>) {
  const [lang, setLangState] = useState<Language>(detectInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = content[lang].documentTitle;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // The site still works if localStorage is unavailable.
    }
  }, [content, lang]);

  return {
    lang,
    setLang: setLangState
  };
}
