import { motion, useReducedMotion } from "framer-motion";

function getInitialState(variant, distance) {
  if (variant === "left") {
    return { opacity: 0, x: -distance, scale: 0.98, filter: "blur(8px)" };
  }

  if (variant === "right") {
    return { opacity: 0, x: distance, scale: 0.98, filter: "blur(8px)" };
  }

  if (variant === "scale") {
    return { opacity: 0, y: distance / 2, scale: 0.94, filter: "blur(10px)" };
  }

  return { opacity: 0, y: distance, scale: 0.98, filter: "blur(8px)" };
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 26,
  variant = "up",
}) {
  const prefersReducedMotion = useReducedMotion();
  const initialState = getInitialState(variant, y);

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? { opacity: 0 } : initialState}
      whileInView={
        prefersReducedMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.78, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
