import Hero from "./components/Hero";
import About from "./components/About";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-gray-900 dark:text-white">
      <ThemeToggle />

      {/* 🧠 Acest element invizibil forțează Tailwind să includă dark classes în build */}
      <div className="hidden dark:bg-white dark:text-black"></div>

      <Hero />
      <About />
    </div>
  );
};

export default App;
