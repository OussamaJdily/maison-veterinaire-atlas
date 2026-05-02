import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

export function DepthCard({
  children,
  className = "",
  contentClassName = "",
  hoverLift = 6,
  maxTilt = 7,
}) {
  const prefersReducedMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const smoothRotateX = useSpring(rotateX, { stiffness: 160, damping: 18, mass: 0.4 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 160, damping: 18, mass: 0.4 });
  const smoothScale = useSpring(scale, { stiffness: 160, damping: 16, mass: 0.35 });

  const glare = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(255,255,255,0.24), rgba(255,255,255,0.08) 18%, transparent 54%)`;

  const resetCard = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    mouseX.set(50);
    mouseY.set(50);
  };

  const handlePointerMove = (event) => {
    if (prefersReducedMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const localX = (event.clientX - rect.left) / rect.width;
    const localY = (event.clientY - rect.top) / rect.height;

    mouseX.set(localX * 100);
    mouseY.set(localY * 100);
    rotateY.set((localX - 0.5) * maxTilt * 2);
    rotateX.set((0.5 - localY) * maxTilt * 2);
    scale.set(1.015);
  };

  return (
    <motion.div
      className={`depth-card ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetCard}
      onPointerCancel={resetCard}
      style={
        prefersReducedMotion
          ? undefined
          : {
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
              scale: smoothScale,
              transformPerspective: 1400,
            }
      }
      whileHover={prefersReducedMotion ? undefined : { y: -hoverLift }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <motion.div
        className="depth-glare"
        style={prefersReducedMotion ? undefined : { backgroundImage: glare }}
      />
      <div className={`depth-card-content ${contentClassName}`}>{children}</div>
    </motion.div>
  );
}
