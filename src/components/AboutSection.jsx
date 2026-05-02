import { motion } from "framer-motion";
import { BrandMark } from "./icons";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function AboutSection({ content }) {
  return (
    <section id="about" className="py-14 sm:py-16 lg:py-20">
      <div className="shell">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="section-frame relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,174,218,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(76,175,80,0.18),transparent_34%)]" />
              <motion.div
                className="absolute left-[-2rem] top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(120,174,218,0.26),transparent_66%)] blur-xl"
                animate={{ y: [0, 18, 0], x: [0, 14, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(76,175,80,0.22),transparent_70%)] blur-2xl"
                animate={{ y: [0, -16, 0], x: [0, -12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative min-h-[380px] rounded-[1.75rem] border border-[var(--line-soft)] bg-[linear-gradient(160deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="eyebrow">{content.panelBadge}</span>
                  <div className="rounded-full border border-[var(--line-soft)] bg-[var(--surface-2)] px-4 py-2 text-sm text-[var(--text-2)]">
                    {content.panelLabel}
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-[-2rem] rounded-full bg-[radial-gradient(circle,rgba(76,175,80,0.18),transparent_70%)] blur-2xl" />
                    <div className="relative rounded-[2rem] border border-[var(--line-soft)] bg-[var(--surface-2)] p-7 shadow-soft">
                      <BrandMark className="h-28 w-28 text-[var(--green-1)]" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[1.5rem] border border-[var(--line-soft)] bg-[var(--surface-2)] p-5">
                    <p className="text-xs uppercase tracking-[0.32em] text-[var(--text-2)]">
                      {content.panelTitle}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--text-2)]">
                      {content.body}
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-[var(--line-soft)] bg-[linear-gradient(150deg,rgba(76,175,80,0.14),rgba(120,174,218,0.08))] p-5">
                    <p className="text-4xl font-semibold">{content.panelStat}</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-2)]">
                      {content.panelStatLabel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionTitle
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.body}
            />

            <div className="mt-8 grid gap-4">
              {content.values.map((value, index) => (
                <Reveal key={value.title} delay={index * 0.07}>
                  <div className="section-frame p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 h-3 w-3 rounded-full bg-[var(--green-1)] shadow-[0_0_0_8px_rgba(76,175,80,0.12)]" />
                      <div>
                        <h3 className="text-xl font-semibold">{value.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-[var(--text-2)]">
                          {value.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
