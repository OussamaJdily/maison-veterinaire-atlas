import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { DepthCard } from "./DepthCard";
import { ArrowRightIcon } from "./icons";
import { Reveal } from "./Reveal";
import UltraImage from "./UltraImage";

function scrollToSection(id) {
  const target = document.getElementById(id);

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function HeroSection({ content, visual }) {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, 36],
  );
  const cardY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -24],
  );
  const introVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden pb-10 pt-24 sm:pb-12 md:pt-32 lg:pb-16"
      aria-label={content.title}
    >
      <div className="shell">
        <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          <motion.div
            className="max-w-3xl"
            variants={introVariants}
            initial="hidden"
            animate="show"
          >
            <motion.span variants={itemVariants} className="eyebrow">
              {content.badge}
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="mt-7 text-4xl font-semibold leading-[1.02] sm:text-5xl lg:text-7xl"
            >
              {content.title}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-2)] sm:text-lg"
            >
              {content.subtitle}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <motion.button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="primary-button"
                whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
              >
                {content.primaryCta}
                <ArrowRightIcon />
              </motion.button>
              <motion.button
                type="button"
                onClick={() => scrollToSection("services")}
                className="secondary-button"
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={{ scale: 0.985 }}
              >
                {content.secondaryCta}
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
              {content.chips.map((chip, index) => (
                <motion.span
                  key={chip}
                  className="rounded-full border border-[var(--line-soft)] bg-[var(--surface-2)] px-4 py-2 text-sm text-[var(--text-2)] shadow-[0_10px_30px_rgba(15,23,19,0.04)]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.45 }}
                  whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                >
                  {chip}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 grid gap-4 sm:grid-cols-3">
              {content.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="section-frame shine-panel p-5"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42 + index * 0.07, duration: 0.55 }}
                  whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                >
                  <p className="text-2xl font-semibold text-[var(--text-1)]">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-2)]">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <Reveal className="relative" variant="right">
            <DepthCard
              className="relative overflow-hidden rounded-[2.1rem] border border-[var(--line-soft)] bg-[linear-gradient(145deg,var(--surface-2),var(--surface-1))] p-3 shadow-soft"
              contentClassName="relative h-full"
              hoverLift={4}
              maxTilt={6}
            >
              <motion.div
                className="absolute inset-x-10 top-8 h-28 rounded-full bg-[radial-gradient(circle,var(--blue-1)_0%,transparent_65%)] opacity-15 blur-3xl"
                animate={prefersReducedMotion ? undefined : { x: [0, 14, 0], y: [0, -6, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-8 left-8 h-24 w-24 rounded-full bg-[radial-gradient(circle,var(--green-1)_0%,transparent_72%)] opacity-20 blur-3xl"
                animate={prefersReducedMotion ? undefined : { x: [0, -12, 0], y: [0, 12, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="depth-layer-1 relative h-[380px] w-full overflow-hidden rounded-[1.75rem] sm:h-[460px]"
                style={{ y: imageY }}
              >
                <UltraImage
                  src={visual.src}
                  alt={content.visualAlt}
                  priority={true}
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,7,0.06),rgba(5,8,7,0.42))]" />
              </motion.div>

              <div className="depth-layer-2 absolute left-6 top-6 rounded-full border border-white/20 bg-black/12 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white backdrop-blur-md">
                {content.sceneLabel}
              </div>

              <motion.div
                className="depth-layer-2 absolute right-5 top-20 hidden rounded-[1.4rem] border border-white/12 bg-black/18 px-4 py-3 text-white shadow-[0_24px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl md:block"
                animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/68">
                  {content.stats[0].label}
                </p>
                <p className="mt-2 text-xl font-semibold">{content.stats[0].value}</p>
              </motion.div>

              <motion.div
                className="depth-layer-2 absolute inset-x-4 bottom-4 overflow-hidden rounded-[1.6rem] border border-white/12 bg-black/20 backdrop-blur-xl sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[17rem]"
                style={{ y: cardY }}
                whileHover={prefersReducedMotion ? undefined : { y: -8 }}
              >
                <UltraImage
                  src={content.spotlight.src}
                  alt={content.spotlight.alt}
                  className="h-28 w-full"
                />
                <div className="p-4 text-white">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                    {content.spotlight.label}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-6">
                    {content.spotlight.title}
                  </p>
                  <p className="mt-2 text-xs leading-6 text-white/70">
                    {content.spotlight.text}
                  </p>
                </div>
              </motion.div>
            </DepthCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
