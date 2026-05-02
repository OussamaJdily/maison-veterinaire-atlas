import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { CheckIcon, HeartPulseIcon, ShieldIcon } from "./icons";

const accents = [HeartPulseIcon, ShieldIcon, CheckIcon];

export function ProgramsSection({ content }) {
  return (
    <section className="py-14 sm:py-16 lg:py-20" aria-label={content.title}>
      <div className="shell">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          align="center"
        />

        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {content.items.map((item, index) => {
            const Icon = accents[index] || CheckIcon;

            return (
              <Reveal key={item.title} delay={index * 0.08} variant="scale">
                <motion.article
                  className="section-frame shine-panel flex h-full flex-col overflow-hidden p-6"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.24 }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <motion.div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(140deg,rgba(76,175,80,0.16),rgba(120,174,218,0.12))] text-[var(--green-1)]"
                      whileHover={{ rotate: -5, scale: 1.04 }}
                    >
                      <Icon className="h-7 w-7" />
                    </motion.div>
                    <span className="rounded-full border border-[var(--line-soft)] bg-[var(--surface-2)] px-3 py-2 text-[0.7rem] uppercase tracking-[0.24em] text-[var(--text-2)]">
                      {item.label}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-2)]">
                    {item.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(76,175,80,0.12)] text-[var(--green-1)]">
                          <CheckIcon className="h-3.5 w-3.5" />
                        </div>
                        <p className="text-sm leading-7 text-[var(--text-2)]">{point}</p>
                      </div>
                    ))}
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
