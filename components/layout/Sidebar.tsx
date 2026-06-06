"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Activity,
} from "lucide-react";

const items = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Courses",
    icon: BookOpen,
  },
  {
    label: "Activity",
    icon: Activity,
  },
];

export default function Sidebar() {
  const [active, setActive] =
    useState("Dashboard");

  return (
    <aside
      className="
      hidden
      md:flex
      w-20 
      lg:w-64
      min-h-screen
      flex-col
      border-r
      border-zinc-800
      bg-zinc-950
      px-6
      py-8
      "
    >
      <div>
        <h2
          className="
          text-2xl
          font-bold
          tracking-tight
          "
        >
          LearnX
        </h2>

        <p
          className="
          mt-1
          text-sm
          text-zinc-500
          "
        >
        <span className="hidden lg:block">
  Student Dashboard
</span>
        </p>
      </div>

      <nav className="mt-12 space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          const isActive =
            active === item.label;

          return (
            <button
              key={item.label}
              onClick={() =>
                setActive(item.label)
              }
              className="
              relative
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-left
              "
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="
                  absolute
                  inset-0
                  rounded-xl
                  border
                  border-violet-500/20
                  bg-violet-500/10
                  "
                />
              )}

              <Icon
  size={18}
  className="relative z-10 shrink-0"
/>

<span
  className={`
    relative z-10
    hidden lg:block

    ${
      isActive
        ? "text-violet-400"
        : "text-zinc-400"
    }
  `}
>
  {item.label}
</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}