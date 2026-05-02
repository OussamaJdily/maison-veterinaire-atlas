import { motion } from "framer-motion";
import { useAppSettings } from "../context/AppSettings";

export function LanguageSwitcher({ ariaLabel }) {
  const { locale, setLocale } = useAppSettings();

  return (
    <div
      className="glass-panel relative flex items-center gap-1 rounded-full p-1"
      role="group"
      aria-label={ariaLabel}
    >
      {["fr", "ar"].map((item) => {
        const isActive = locale === item;

        return (
          <button
            key={item}
            type="button"
            onClick={() => setLocale(item)}
            className="relative rounded-full px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--text-2)]"
          >
            {isActive ? (
              <motion.span
                layoutId="language-pill"
                className="absolute inset-0 rounded-full bg-[var(--surface-2)] shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                transition={{ type: "spring", stiffness: 340, damping: 30 }}
              />
            ) : null}
            <span className={`relative z-10 ${isActive ? "text-[var(--text-1)]" : ""}`}>
              {item}
            </span>
          </button>
        );
      })}
    </div>
  );
}
