import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // install with `npm i react-icons`

export default function DarkModeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    applyThemeClass(storedTheme);
  }, []);

  const applyThemeClass = (theme) => {
    const body = document.body;
    if (theme === "dark") {
      body.classList.add("bg-dark", "text-light");
      body.classList.remove("bg-light", "text-dark");
    } else {
      body.classList.add("bg-light", "text-dark");
      body.classList.remove("bg-dark", "text-light");
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyThemeClass(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-outline-secondary mx-3"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}
