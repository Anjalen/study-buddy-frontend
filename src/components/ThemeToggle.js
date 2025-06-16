// ✅ File: src/components/ThemeToggle.js
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="text-sm text-gray-600 dark:text-gray-200 border px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default ThemeToggle;