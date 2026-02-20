import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        ml-4 w-10 h-10 rounded-full
        flex items-center justify-center
        bg-white/20 dark:bg-black/30
        hover:scale-110 transition-all duration-300
      "
      title="Toggle Theme"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
