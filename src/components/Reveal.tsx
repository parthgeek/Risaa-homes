"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  once = true,
}: Props) {
  const prefersReduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (prefersReduce || isMobile) {
    return (
      <div className={className} data-reveal>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
      data-reveal
    >
      {children}
    </motion.div>
  );
}
