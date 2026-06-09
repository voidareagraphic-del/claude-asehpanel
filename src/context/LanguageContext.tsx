"use client";
// src/context/LanguageContext.tsx
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Lang, type Translations } from "@/lib/i18n";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
  isRTL: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("aseh-lang", l); } catch {}
    document.documentElement.dir = l === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = l === "fa" ? "fa" : "en";
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("aseh-lang") as Lang | null;
      if (saved === "fa" || saved === "en") {
        setLangState(saved);
        document.documentElement.dir = saved === "fa" ? "rtl" : "ltr";
        document.documentElement.lang = saved === "fa" ? "fa" : "en";
      }
    } catch {}
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], isRTL: lang === "fa" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
