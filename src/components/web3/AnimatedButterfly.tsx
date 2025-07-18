import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedButterflyProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  initialY?: number;
  hoverScale?: number;
}

export function AnimatedButterfly({
  className = "",
  size = "md",
  initialY = 0,
  hoverScale = 1.1,
}: AnimatedButterflyProps) {
  const sizeClasses = {
    sm: "w-16 h-16 sm:w-16 sm:h-16",
    md: "w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24",
    lg: "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32",
  };

  return (
    <motion.div
      className={`pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0.8, y: initialY }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: [-5, 5, -5],
        y: [initialY, initialY - 5, initialY],
      }}
      transition={{
        opacity: { duration: 0.5, delay: 0.5 },
        scale: { duration: 0.5, delay: 0.5 },
        rotate: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: hoverScale,
        rotate: [-8, 8, -8, 8, -8],
        transition: {
          duration: 0.8,
          rotate: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
      }}
    >
      <Image
        src="/img/butterfly1.png"
        alt="Decorative butterfly"
        width={120}
        height={120}
        className={`drop-shadow-xl ${sizeClasses[size]}`}
        style={{ transform: "rotate(-5deg)" }}
        priority
      />
    </motion.div>
  );
}
