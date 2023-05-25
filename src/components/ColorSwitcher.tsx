"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import IconMoon from "@/assets/Moon";
import IconSun from "@/assets/Sun";

export default function ColorSwitcher() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="rounded-full cursor-pointer ml-5 bg-gray-100 p-2 text-gray-900 dark:bg-gray-800 dark:text-gray-100 focus:outline-none">
        <IconSun />
      </div>
    );
  }

  return (
    <div
      className="rounded-full cursor-pointer ml-5 bg-gray-100 p-2 text-gray-900 dark:bg-gray-800 dark:text-gray-100 focus:outline-none"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {currentTheme === "dark" ? <IconSun /> : <IconMoon />}
    </div>
  );
}
