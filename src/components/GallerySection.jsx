import { motion } from "framer-motion";
import { DepthCard } from "./DepthCard";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import UltraImage from "./UltraImage";

export function GallerySection({ content, media }) {
  return (
    <section className="py-14 sm:py-16 lg:py-20" aria-label={content.title}>
      <div className="shell">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06} variant="scale">
              <DepthCard
                className="section-frame shine-panel relative overflow-hidden"
                contentClassName="relative h-full"
                hoverLift={7}
                maxTilt={6}
              >
                <div className="relative overflow-hidden h-56">
                  <UltraImage
                    src={media[item.imageKey].src}
                    alt={item.alt}
                    className="h-full w-full"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(6,10,8,0.2))]" />
                </div>
                <figcaption className="depth-layer-2 p-5">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-2)]">{item.text}</p>
                  <p className="mt-3 text-[11px] text-[var(--text-2)]">
                    {media[item.imageKey].credit}
                  </p>
                </figcaption>
              </DepthCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
