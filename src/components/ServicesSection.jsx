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
import UltraImage from "./UltraImage";

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
                  className="service-card shine-panel section-frame relative h-full overflow-hidden"
                  contentClassName="relative z-10 flex h-full flex-col"
                  hoverLift={8}
                  maxTilt={7}
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <UltraImage 
                      src={item.imageSrc} 
                      alt={item.title} 
                      className="h-full w-full"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(13,17,16,0.6))] " />
                    <motion.div
                      className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/12 text-white backdrop-blur-lg border border-white/10"
                      whileHover={{ rotate: -6, scale: 1.04 }}
                      transition={{ duration: 0.22 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="depth-layer-1 text-2xl font-semibold">{item.title}</h3>
                    <p className="depth-layer-1 mt-4 text-sm leading-7 text-[var(--text-2)]">
                      {item.description}
                    </p>
                    <div className="depth-layer-1 mt-6 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.28em] text-[var(--text-2)]">
                        0{index + 1}
                      </span>
                      <span className="h-px w-12 bg-[var(--line-soft)]" />
                    </div>
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
