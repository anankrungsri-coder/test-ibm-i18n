"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Next.js!",
      change_lang: "Change Language",
    },
  },
  th: {
    translation: {
      welcome: "ยินดีต้อนรับสู่ Next.js!",
      change_lang: "เปลี่ยนภาษา",
    },
  },
};

declare global {
  interface Window {
    currentLang?: string;
  }
}

i18n
  .use(initReactI18next) 
  .init({
    resources,
    // window is only available on the client; fall back to `th` during SSR.
    lng: typeof window !== "undefined" ? window.currentLang : undefined, // Default language
    fallbackLng: 'th',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
