import Hero from "./components/Hero";
import About from "./components/About";
import ThemeToggle from "./components/ThemeToggle";
import CometManager from "./components/CometManager";

const App = () => {
  return (
    <div className="min-h-screen relative">
      <ThemeToggle />
      <CometManager />
      <Hero />
      <About />
    </div>
  );
};

export default App;