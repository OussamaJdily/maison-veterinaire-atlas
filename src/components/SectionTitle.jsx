import { Reveal } from "./Reveal";

import { motion } from "framer-motion";

export function SectionTitle({ eyebrow, title, description, align = "start" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-start";
  const lineAlign = align === "center" ? "mx-auto" : "";

  return (
    <Reveal className={`max-w-3xl ${alignment}`} variant="scale">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <motion.span
        className={`mt-5 block h-[3px] w-20 rounded-full bg-[linear-gradient(90deg,var(--green-1),var(--blue-1))] ${lineAlign}`}
        initial={{ scaleX: 0, opacity: 0.7 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: align === "center" ? "center" : "left" }}
      />
      <p className="mt-5 text-base leading-8 text-[var(--text-2)] sm:text-lg">
        {description}
      </p>
    </Reveal>
  );
}
