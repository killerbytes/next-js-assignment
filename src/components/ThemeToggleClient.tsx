"use client";
import { Moon, Sun } from "lucide-react";
import React from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState("dark");
  React.useEffect(() => {
    const stored = localStorage.getItem("theme") || theme;
    document.documentElement.setAttribute("data-theme", stored);
    setTheme(stored);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button className="btn">
      {theme === "light" ? (
        <Moon onClick={toggleTheme} />
      ) : (
        <Sun onClick={toggleTheme} />
      )}
    </button>
  );
}
