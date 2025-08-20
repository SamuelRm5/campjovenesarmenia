import React from "react";
import { Icon } from "@iconify/react";

export default function ThemeToggle({ theme, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur border border-gray-200 dark:border-gray-700 shadow hover:shadow-md transition text-gray-700 dark:text-gray-200"
    >
      <Icon
        icon={
          theme === "dark" ? "mdi:weather-sunny" : "mdi:moon-waning-crescent"
        }
        className="text-xl"
      />
    </button>
  );
}
