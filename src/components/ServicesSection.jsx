import { motion } from "framer-motion";
import {
  ConsultationIcon,
  DentalIcon,
  EmergencyIcon,
  ImagingIcon,
  SurgeryIcon,
  VaccinationIcon,
} from "./icons";
import { DepthCard } from "./DepthCard";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const serviceIcons = [
  ConsultationIcon,
  VaccinationIcon,
  SurgeryIcon,
  EmergencyIcon,
  ImagingIcon,
  DentalIcon,
];

export function ServicesSection({ content }) {
  return (
    <section id="services" className="py-14 sm:py-16 lg:py-20">
      <div className="shell">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.items.map((item, index) => {
            const Icon = serviceIcons[index];

            return (
              <Reveal key={item.title} delay={index * 0.07} variant="scale">
                <DepthCard
                  className="service-card shine-panel section-frame relative h-full overflow-hidden p-6"
                  contentClassName="relative z-10 flex h-full flex-col"
                  hoverLift={8}
                  maxTilt={7}
                >
                  <motion.div
                    className="depth-layer-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(140deg,rgba(76,175,80,0.16),rgba(120,174,218,0.12))] text-[var(--green-1)]"
                    whileHover={{ rotate: -6, scale: 1.04 }}
                    transition={{ duration: 0.22 }}
                  >
                    <Icon className="h-7 w-7" />
                  </motion.div>
                  <h3 className="depth-layer-1 mt-6 text-2xl font-semibold">{item.title}</h3>
                  <p className="depth-layer-1 mt-4 text-sm leading-7 text-[var(--text-2)]">
                    {item.description}
                  </p>
                  <div className="depth-layer-1 mt-8 pt-6 text-xs uppercase tracking-[0.28em] text-[var(--text-2)]">
                    0{index + 1}
                  </div>
                </DepthCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
