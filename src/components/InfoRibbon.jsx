import { motion, useReducedMotion } from "framer-motion";

export function InfoRibbon({ items }) {
  const prefersReducedMotion = useReducedMotion();
  const ribbonItems = [...items, ...items];

  return (
    <section className="py-6 sm:py-7" aria-label="Clinic highlights">
      <div className="shell">
        <div className="motion-ribbon overflow-hidden rounded-full border border-[var(--line-soft)] bg-[var(--surface-2)] px-4 py-3 shadow-[0_14px_42px_rgba(17,30,21,0.06)]">
          <motion.div
            className="flex min-w-max items-center gap-4"
            animate={prefersReducedMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 24, repeat: Infinity, ease: "linear" }
            }
          >
            {ribbonItems.map((item, index) => (
              <div key={`${item}-${index}`} className="flex items-center gap-4">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--green-1)] shadow-[0_0_0_6px_rgba(76,175,80,0.12)]" />
                <span className="text-sm font-medium text-[var(--text-2)]">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
