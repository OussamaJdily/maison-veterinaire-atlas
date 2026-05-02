import { createContext, startTransition, useContext, useEffect, useState } from "react";

const THEME_KEY = "atlas-vet-theme";
const LOCALE_KEY = "atlas-vet-locale";

const AppSettingsContext = createContext(null);

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(THEME_KEY);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getInitialLocale() {
  if (typeof window === "undefined") {
    return "fr";
  }

  const storedLocale = window.localStorage.getItem(LOCALE_KEY);
  return storedLocale === "ar" ? "ar" : "fr";
}

export function AppSettingsProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme);
  const [locale, setLocaleState] = useState(getInitialLocale);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const direction = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("lang", locale);
    document.documentElement.setAttribute("dir", direction);
    window.localStorage.setItem(LOCALE_KEY, locale);
  }, [locale]);

  const setTheme = (nextTheme) => {
    startTransition(() => {
      setThemeState(nextTheme);
    });
  };

  const toggleTheme = () => {
    startTransition(() => {
      setThemeState((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
    });
  };

  const setLocale = (nextLocale) => {
    startTransition(() => {
      setLocaleState(nextLocale);
    });
  };

  const toggleLocale = () => {
    startTransition(() => {
      setLocaleState((currentLocale) => (currentLocale === "fr" ? "ar" : "fr"));
    });
  };

  return (
    <AppSettingsContext.Provider
      value={{
        locale,
        setLocale,
        theme,
        setTheme,
        toggleLocale,
        toggleTheme,
      }}
    >
      {children}
    </AppSettingsContext.Provider>
  );
}

export function useAppSettings() {
  const value = useContext(AppSettingsContext);

  if (!value) {
    throw new Error("useAppSettings must be used inside AppSettingsProvider.");
  }

  return value;
}
