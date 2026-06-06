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

export default function MobileBottomNav() {
  const [active, setActive] =
    useState("Dashboard");

  return (
    <nav
      className="
      fixed
      bottom-0
      left-0
      right-0
      z-50
      flex
      md:hidden
      items-center
      justify-around
      border-t
      border-zinc-800
      bg-zinc-950/95
      backdrop-blur
      py-3
      "
    >
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
            flex-col
            items-center
            gap-1
            px-4
            py-2
            "
          >
            {isActive && (
              <motion.div
                layoutId="mobile-tab"
                className="
                absolute
                inset-0
                rounded-xl
                bg-violet-500/10
                "
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              />
            )}

            <Icon
              size={18}
              className="relative z-10"
            />

            <span
              className={`
                relative z-10 text-xs

                ${
                  isActive
                    ? "text-violet-400"
                    : "text-zinc-500"
                }
              `}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}