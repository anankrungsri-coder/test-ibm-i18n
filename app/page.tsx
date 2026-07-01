"use client";

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.resolvedLanguage === "en" ? "th" : "en");
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-8 py-32 px-16">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {t("welcome")}
        </h1>
        <button
          onClick={toggleLang}
          className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          {t("change_lang")}
        </button>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {i18n.resolvedLanguage === "en" ? "🇬🇧 English" : "🇹🇭 ไทย"}
        </p>
      </main>
    </div>
  );
}
