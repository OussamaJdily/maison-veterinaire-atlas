import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon, ShieldIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

function scrollToSection(id) {
  const target = document.getElementById(id);

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function FaqSection({ content }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-14 sm:py-16 lg:py-20" aria-label={content.title}>
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
            />

            <Reveal className="section-frame mt-8 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[rgba(76,175,80,0.14)] text-[var(--green-1)]">
                  <ShieldIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-2)]">
                    {content.emergency.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">{content.emergency.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-2)]">
                    {content.emergency.text}
                  </p>
                  <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className="primary-button mt-6"
                  >
                    {content.emergency.button}
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="space-y-4">
            {content.items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <Reveal key={item.question} delay={index * 0.05}>
                  <div className="section-frame overflow-hidden">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-start"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-semibold sm:text-lg">
                        {item.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0 text-[var(--text-2)]"
                      >
                        <ChevronDownIcon className="h-5 w-5" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-[var(--line-soft)] px-5 pb-5 pt-4">
                            <p className="text-sm leading-7 text-[var(--text-2)]">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
