import { motion, useReducedMotion } from "framer-motion";
import { DepthCard } from "./DepthCard";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { CheckIcon, StarIcon } from "./icons";

function PhotoTile({ item, className = "" }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <DepthCard
      className={`group shine-panel relative overflow-hidden rounded-[1.8rem] border border-[var(--line-soft)] bg-[var(--surface-2)] ${className}`}
      contentClassName="relative h-full"
      hoverLift={6}
      maxTilt={6}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-0"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: ["-120%", "140%"], opacity: [0, 0.45, 0] }
        }
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="depth-layer-2 absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(8,12,10,0.72))] p-5 text-white">
        <p className="text-xs uppercase tracking-[0.26em] text-white/70">{item.label}</p>
        <p className="mt-2 text-sm font-medium">{item.caption}</p>
        <p className="mt-2 text-[11px] text-white/60">{item.credit}</p>
      </div>
    </DepthCard>
  );
}

export function ClinicHighlightsSection({ content, media }) {
  const primaryImage = {
    ...media.comfortDog,
    alt: content.media.primaryAlt,
    label: content.media.primaryLabel,
    caption: content.media.primaryCaption,
  };

  const secondaryImages = [
    {
      ...media.catExam,
      alt: content.media.secondaryAltOne,
      label: content.media.secondaryLabelOne,
      caption: content.media.secondaryCaptionOne,
    },
    {
      ...media.teamMoment,
      alt: content.media.secondaryAltTwo,
      label: content.media.secondaryLabelTwo,
      caption: content.media.secondaryCaptionTwo,
    },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20" aria-label={content.title}>
      <div className="shell">
        <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionTitle
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {content.metrics.map((metric, index) => (
                <Reveal key={metric.label} delay={index * 0.06} variant="scale">
                  <motion.div className="section-frame shine-panel p-5" whileHover={{ y: -4 }}>
                    <p className="text-3xl font-semibold">{metric.value}</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-2)]">
                      {metric.label}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              {content.features.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 0.07} variant="left">
                  <motion.div className="section-frame p-5" whileHover={{ x: 3 }}>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(76,175,80,0.14)] text-[var(--green-1)]">
                        <CheckIcon />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-[var(--text-2)]">
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <Reveal className="section-frame mt-6 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[rgba(120,174,218,0.14)] text-[var(--blue-1)]">
                  <StarIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-2)]">
                    {content.signature.label}
                  </p>
                  <p className="mt-3 text-base leading-8 text-[var(--text-1)]">
                    {content.signature.text}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-[1.08fr_0.92fr]">
            <Reveal className="md:row-span-2">
              <PhotoTile item={primaryImage} className="h-[460px]" />
            </Reveal>

            {secondaryImages.map((item, index) => (
              <Reveal key={item.alt} delay={0.08 * (index + 1)}>
                <PhotoTile item={item} className="h-[218px]" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
