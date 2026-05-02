import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { AboutSection } from "./components/AboutSection";
import { ClinicHighlightsSection } from "./components/ClinicHighlightsSection";
import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { InfoRibbon } from "./components/InfoRibbon";
import { Navbar } from "./components/Navbar";
import { ProgramsSection } from "./components/ProgramsSection";
import { ServicesSection } from "./components/ServicesSection";
import { TeamSection } from "./components/TeamSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { AppSettingsProvider, useAppSettings } from "./context/AppSettings";
import { mediaLibrary } from "./data/media";
import { translations } from "./data/translations";

function AppShell() {
  const { locale } = useAppSettings();
  const content = translations[locale];
  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.22,
  });

  const navigation = [
    { id: "home", label: content.nav.home },
    { id: "services", label: content.nav.services },
    { id: "about", label: content.nav.about },
    { id: "contact", label: content.nav.contact },
  ];

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--surface-0)] text-[var(--text-1)]">
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[linear-gradient(90deg,var(--green-1),var(--blue-1),var(--green-2))]"
        style={{ scaleX: progressScaleX }}
      />
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="ambient-orb absolute left-[-10rem] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,var(--green-1)_0%,transparent_65%)] opacity-14 blur-3xl" />
        <div className="ambient-orb ambient-orb-delayed absolute right-[-8rem] top-[8rem] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,var(--blue-1)_0%,transparent_62%)] opacity-14 blur-3xl" />
        <div className="ambient-orb ambient-orb-slow absolute bottom-[-12rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,var(--beige-1)_0%,transparent_68%)] opacity-18 blur-3xl" />
      </div>
      <div className="noise-overlay fixed inset-0 -z-10 opacity-50" />

      <Navbar
        brand={content.common.brand}
        navigation={navigation}
        ctaLabel={content.nav.cta}
        languageAria={content.common.languageSwitchAria}
        themeAria={content.common.themeSwitchAria}
        menuAria={content.common.menuAria}
        closeMenuAria={content.common.closeMenuAria}
      />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={locale}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <main>
            <HeroSection
              content={{
                ...content.hero,
                spotlight: {
                  ...content.hero.spotlight,
                  src: mediaLibrary.pomConsult.src,
                },
              }}
              visual={mediaLibrary.comfortDog}
            />

            <InfoRibbon
              items={[
                ...content.hero.chips,
                ...content.services.items.slice(0, 4).map((item) => item.title),
              ]}
            />

            <ServicesSection content={content.services} />

            <ClinicHighlightsSection
              content={content.clinic}
              media={mediaLibrary}
            />

            <ProgramsSection content={content.programs} />

            <AboutSection content={content.about} />

            <ExperienceSection
              content={content.experience}
              media={{
                primary: mediaLibrary.dogDental,
                secondary: mediaLibrary.catExam,
              }}
            />

            <TeamSection content={content.team} media={mediaLibrary} />

            <GallerySection content={content.gallery} media={mediaLibrary} />

            <FaqSection content={content.faq} />

            <TestimonialsSection content={content.testimonials} />

            <ContactSection
              content={content.contact}
              serviceOptions={content.services.items}
            />
          </main>

          <Footer
            brand={content.common.brand}
            content={content.footer}
            navigation={navigation}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <AppSettingsProvider>
      <AppShell />
    </AppSettingsProvider>
  );
}
