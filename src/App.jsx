import Hero from "./components/Hero";
import About from "./components/About";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="min-h-screen relative">
      <ThemeToggle />
      <Hero />
      <About />
    </div>
  );
};

export default App;