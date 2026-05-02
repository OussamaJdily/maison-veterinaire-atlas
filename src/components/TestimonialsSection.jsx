import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, QuoteIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 44 : -44,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -44 : 44,
  }),
};

export function TestimonialsSection({ content }) {
  const [state, setState] = useState({ index: 0, direction: 1 });
  const itemCount = content.items.length;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setState((current) => ({
        index: (current.index + 1) % itemCount,
        direction: 1,
      }));
    }, 5800);

    return () => window.clearInterval(intervalId);
  }, [itemCount]);

  const activeItem = content.items[state.index];

  const paginate = (direction) => {
    setState((current) => ({
      index: (current.index + direction + itemCount) % itemCount,
      direction,
    }));
  };

  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="shell">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          align="center"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="section-frame overflow-hidden p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(76,175,80,0.14)] text-[var(--green-1)]">
                <QuoteIcon className="h-7 w-7" />
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => paginate(-1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line-soft)] bg-[var(--surface-2)] text-[var(--text-1)]"
                >
                  <ArrowLeftIcon />
                </button>
                <button
                  type="button"
                  onClick={() => paginate(1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line-soft)] bg-[var(--surface-2)] text-[var(--text-1)]"
                >
                  <ArrowRightIcon />
                </button>
              </div>
            </div>

            <div className="relative mt-8 min-h-[180px] overflow-hidden">
              <AnimatePresence custom={state.direction} mode="wait">
                <motion.div
                  key={activeItem.author}
                  custom={state.direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <p className="max-w-2xl text-xl leading-relaxed sm:text-2xl">
                    {activeItem.quote}
                  </p>
                  <div className="mt-8">
                    <p className="text-lg font-semibold">{activeItem.author}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.26em] text-[var(--text-2)]">
                      {activeItem.pet}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {content.items.map((item, index) => (
                <button
                  key={item.author}
                  type="button"
                  onClick={() =>
                    setState({
                      index,
                      direction: index > state.index ? 1 : -1,
                    })
                  }
                  className={`h-2.5 rounded-full transition-all ${
                    index === state.index
                      ? "w-16 bg-[var(--green-1)]"
                      : "w-8 bg-[rgba(120,174,218,0.32)]"
                  }`}
                  aria-label={item.author}
                />
              ))}
            </div>

            <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-[rgba(120,174,218,0.16)]">
              <motion.div
                key={state.index}
                className="h-full rounded-full bg-[linear-gradient(90deg,var(--green-1),var(--blue-1))]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5.8, ease: "linear" }}
              />
            </div>
          </Reveal>

          <div className="grid gap-5">
            {content.items.map((item, index) => (
              <Reveal key={item.author} delay={index * 0.08}>
                <button
                  type="button"
                  onClick={() =>
                    setState({
                      index,
                      direction: index > state.index ? 1 : -1,
                    })
                  }
                  className={`section-frame h-full p-6 text-start ${
                    index === state.index ? "border-[rgba(76,175,80,0.35)]" : ""
                  }`}
                >
                  <p className="text-sm leading-7 text-[var(--text-2)]">{item.quote}</p>
                  <div className="mt-6">
                    <p className="font-semibold">{item.author}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[var(--text-2)]">
                      {item.pet}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
