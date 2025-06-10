import { useState, useEffect } from 'react';
import { Moon, Sun } from 'phosphor-react';

const ThemeToggle = () => {
  const getInitialTheme = () =>
    typeof window !== "undefined" && localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light";

  // Use lazy initialization to avoid storing the initializer function itself
  const [theme, setTheme] = useState(() => getInitialTheme());
  const [icon, setIcon] = useState(() => getInitialTheme());
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setClicked(true);
    setTimeout(() => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      setIcon(newTheme);
      setClicked(false);
    }, 300);
  };

  const getDuration = () => {
    if (clicked) return "0.3s";
    if (hovered) return "2.5s";
    return "12s";
  };

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Toggle theme"
      className={`
        fixed top-4 right-4 z-50 text-black dark:text-white text-4xl p-2
        transition-transform ease-out animate-spin
        ${hovered && !clicked ? "scale-110" : ""}
      `}
      style={{
        animationDuration: getDuration()
      }}
    >
      {icon === "light" ? <Sun size={40} weight="fill" /> : <Moon size={40} weight="fill" />}
    </button>
  );
};

export default ThemeToggle;
