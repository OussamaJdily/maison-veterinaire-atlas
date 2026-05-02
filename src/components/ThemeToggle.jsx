import { motion } from "framer-motion";
import { useAppSettings } from "../context/AppSettings";
import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggle({ ariaLabel }) {
  const { theme, toggleTheme } = useAppSettings();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={toggleTheme}
      className="glass-panel relative flex h-11 w-11 items-center justify-center rounded-full"
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: -35, scale: 0.7 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.24 }}
        className="text-[var(--text-1)]"
      >
        {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
      </motion.span>
    </button>
  );
}
