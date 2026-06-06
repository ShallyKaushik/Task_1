"use client";

import { motion } from "framer-motion";

export default function ActivityTile() {
  const activity = [
    0.8,0.2,0.7,0.9,0.1,0.4,0.8,
    0.7,0.6,0.8,0.2,0.3,0.4,0.1,
    0.5,0.2,0.6,0.7,0.8,0.9,0.5,
    0.6,0.8,0.2,0.3,0.7,0.9,0.8,
    0.1,0.8,0.6,0.7,0.2,0.9,0.1,
  ];

  return (
    <motion.article
      variants={{
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
      }}
      whileHover={{
        scale: 1.01,
      }}
      className="
      col-span-12
      md:col-span-6
      xl:col-span-4
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900
      p-6
      relative
      overflow-hidden
      "
    >
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-violet-500/5
        via-transparent
        to-indigo-500/5
        "
      />

      <div className="relative z-10">
        <h2 className="text-lg font-semibold">
          Learning Activity
        </h2>

        <p className="mt-2 text-zinc-400">
          27 learning sessions this month
        </p>

        <div
          className="
          mt-6
          grid
          grid-cols-7
          gap-2
          "
        >
          {activity.map((value, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: index * 0.02,
              }}
              className={`
                h-4
                w-4
                rounded-sm
                ${
                  value > 0.7
                    ? "bg-violet-500"
                    : value > 0.4
                    ? "bg-violet-500/60"
                    : "bg-zinc-700"
                }
              `}
            />
          ))}
        </div>
      </div>
    </motion.article>
  );
}