import { Variants } from "framer-motion";

export const anim = {
  duration: {
    fast: 0.25,
    base: 0.5,
    slow: 0.8,
    slide: 1.2,
  },
  easing: {
    standard: [0.25, 0.1, 0.25, 1] as const,
    entrance: [0.16, 1, 0.3, 1] as const,
  },
};

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: anim.duration.slide, ease: anim.easing.entrance },
  },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, rotateY: 0 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateY: 180,
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 1,
      ease: anim.easing.standard,
    },
  }),
};
