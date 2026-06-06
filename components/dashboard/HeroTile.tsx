"use client";

import { motion } from "framer-motion";

export default function HeroTile() {
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
      lg:col-span-8
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900
      p-8
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
        <h1 className="text-4xl font-bold">
          Welcome back, Shelly 👋
        </h1>

        <p className="mt-3 text-zinc-400">
          Ready for another productive day?
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <div
            className="
            rounded-full
            bg-orange-500/10
            px-4
            py-2
            text-orange-400
            "
          >
            🔥 5 Day Streak
          </div>

          <div
            className="
            rounded-full
            bg-violet-500/10
            px-4
            py-2
            text-violet-400
            "
          >
            📚 4 Active Courses
          </div>

          <div
            className="
            rounded-full
            bg-emerald-500/10
            px-4
            py-2
            text-emerald-400
            "
          >
            ⚡ 27 Sessions
          </div>
        </div>
      </div>
    </motion.article>
  );
}