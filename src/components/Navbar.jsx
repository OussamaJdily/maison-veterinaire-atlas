import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrandMark, CloseIcon, MenuIcon } from "./icons";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

function scrollToSection(id) {
  const target = document.getElementById(id);

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Navbar({
  brand,
  navigation,
  ctaLabel,
  languageAria,
  themeAria,
  menuAria,
  closeMenuAria,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="shell pt-4">
        <motion.div
          className={`glass-panel rounded-[1.75rem] px-4 md:px-6 ${
            isCompact ? "py-2.5" : "py-3"
          }`}
          animate={{
            y: isCompact ? -2 : 0,
            scale: isCompact ? 0.992 : 1,
          }}
          transition={{ duration: 0.24, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => handleNavigate("home")}
              className="flex items-center gap-3 text-start"
            >
              <div className="rounded-[1rem] border border-[var(--line-soft)] bg-[var(--surface-2)] p-2">
                <BrandMark className="h-7 w-7 text-[var(--green-1)]" />
              </div>
              <div className="hidden sm:block">
                <p className="text-xs uppercase tracking-[0.34em] text-[var(--text-2)]">
                  Atlas
                </p>
                <p className="text-sm font-semibold">{brand}</p>
              </div>
            </button>

            <nav className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  className="nav-link text-sm font-medium text-[var(--text-2)] hover:text-[var(--text-1)]"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <LanguageSwitcher ariaLabel={languageAria} />
              <ThemeToggle ariaLabel={themeAria} />
              <button
                type="button"
                onClick={() => handleNavigate("contact")}
                className="primary-button px-5 py-3"
              >
                {ctaLabel}
              </button>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <LanguageSwitcher ariaLabel={languageAria} />
              <ThemeToggle ariaLabel={themeAria} />
              <button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                aria-label={isOpen ? closeMenuAria : menuAria}
                aria-expanded={isOpen}
                className="glass-panel flex h-11 w-11 items-center justify-center rounded-full"
              >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="shell lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24 }}
          >
            <div className="glass-panel mt-3 rounded-[1.75rem] p-4">
              <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  className="rounded-[1rem] px-4 py-3 text-start text-sm font-medium text-[var(--text-1)] hover:bg-[var(--surface-2)]"
                >
                  {item.label}
                </button>
                ))}
                <button
                  type="button"
                  onClick={() => handleNavigate("contact")}
                  className="primary-button mt-2"
                >
                  {ctaLabel}
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
