import { DepthCard } from "./DepthCard";
import { CheckIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import UltraImage from "./UltraImage";

export function ExperienceSection({ content, media }) {
  return (
    <section className="py-14 sm:py-16 lg:py-20" aria-label={content.title}>
      <div className="shell">
        <div className="section-frame overflow-hidden p-5 sm:p-7 lg:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionTitle
                eyebrow={content.eyebrow}
                title={content.title}
                description={content.description}
              />

              <div className="mt-6 space-y-4">
                {content.points.map((point, index) => (
                  <Reveal key={point} delay={index * 0.08}>
                    <div className="rounded-[1.5rem] border border-[var(--line-soft)] bg-[var(--surface-2)] p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(76,175,80,0.14)] text-[var(--green-1)]">
                          <CheckIcon />
                        </div>
                        <p className="text-sm leading-7 text-[var(--text-2)]">{point}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal variant="right">
              <DepthCard
                className="relative overflow-hidden rounded-[2rem] border border-[var(--line-soft)] bg-[linear-gradient(180deg,rgba(120,174,218,0.08),rgba(76,175,80,0.03))] p-3"
                contentClassName="relative h-full"
                hoverLift={6}
                maxTilt={6}
              >
                <div className="depth-layer-1 relative h-[300px] overflow-hidden rounded-[1.6rem] sm:h-[380px]">
                  <UltraImage
                    src={media.primary.src}
                    alt={content.photoAlt}
                    className="h-full w-full"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,7,0.04),rgba(5,8,7,0.42))]" />
                </div>

                <div className="depth-layer-2 absolute left-6 top-6 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white backdrop-blur-md">
                  {content.hint}
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="depth-layer-1 overflow-hidden rounded-[1.4rem] border border-[var(--line-soft)] bg-[var(--surface-2)]">
                    <UltraImage
                      src={media.secondary.src}
                      alt={content.secondaryAlt}
                      className="h-32 w-full"
                    />
                    <div className="p-4">
                      <p className="text-sm font-semibold">{content.tileLabel}</p>
                      <p className="mt-2 text-sm leading-7 text-[var(--text-2)]">
                        {content.tileText}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {content.cards.map((item) => (
                      <div
                        key={item.title}
                        className="depth-layer-1 rounded-[1.4rem] border border-[var(--line-soft)] bg-[var(--surface-2)] p-4"
                      >
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="mt-2 text-sm leading-7 text-[var(--text-2)]">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </DepthCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
