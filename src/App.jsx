import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="min-h-screen relative">
      <ThemeToggle />
      <Hero />
      <About />
      <Sidebar />
    </div>
  );
};

export default App;