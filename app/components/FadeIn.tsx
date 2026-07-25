"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  /** Stagger delay in seconds */
  delay?: number;
  /** Slide direction on entry */
  direction?: "up" | "left" | "none";
  className?: string;
}

/**
 * Scroll-triggered fade + slide reveal.
 * Wrap any section content with this to animate it into view.
 */
export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: direction === "up" ? 32 : 0,
        x: direction === "left" ? -32 : 0,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, y: direction === "up" ? 32 : 0, x: direction === "left" ? -32 : 0 }
      }
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
