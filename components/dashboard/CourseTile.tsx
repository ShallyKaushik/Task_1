"use client";

import { motion } from "framer-motion";
import { Course } from "@/types/course";
import {
  Brain,
  Bot,
  Code,
  Network,
} from "lucide-react";

interface Props {
  course: Course;
}

const iconMap = {
  Brain,
  Bot,
  Code,
  Network,
};

export default function CourseTile({
  course,
}: Props) {
  const Icon =
    iconMap[
      course.icon_name as keyof typeof iconMap
    ] || Code;

  return (
    <motion.article
      whileHover={{
        scale: 1.02,
        y: -6,
      }}
      transition={{
        type: "spring",
  stiffness: 250,
  damping: 20,
      }}
      className="
      relative
      overflow-hidden
      col-span-12
      md:col-span-6
      xl:col-span-3
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900/80
      backdrop-blur
      p-6
      "
    >
      {/* Gradient Background */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-violet-500/5
        via-transparent
        to-indigo-500/5
        pointer-events-none
        "
      />

      <div className="relative z-10">
        {/* Header */}
        <div
          className="
          mb-5
          flex
          items-center
          justify-between
          "
        >
          <div
            className="
            rounded-xl
            bg-zinc-800
            p-2
            "
          >
            <Icon size={18} />
          </div>

          <span
            className="
            text-xs
            text-zinc-500
            "
          >
            Active
          </span>
        </div>

        {/* Title */}
        <h3
          className="
          text-lg
          font-semibold
          leading-tight
          "
        >
          {course.title}
        </h3>

        {/* Progress Text */}
        <p
          className="
          mt-3
          text-sm
          text-zinc-400
          "
        >
          {course.progress}% completed
        </p>

        {/* Progress Bar */}
        <div
          className="
          mt-5
          h-2
          rounded-full
          bg-zinc-800
          overflow-hidden
          "
        >
          <motion.div
            className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-violet-500
            to-indigo-500
            "
            initial={{
              width: 0,
            }}
            animate={{
              width: `${course.progress}%`,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          />
        </div>
      </div>
    </motion.article>
  );
}