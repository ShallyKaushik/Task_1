"use client";

import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function AnimatedItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="contents"
    >
      {children}
    </motion.div>
  );
}