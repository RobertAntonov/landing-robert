import Hero from "./components/Hero";
import About from "./components/About";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <>
      <ThemeToggle />
      <Hero />
      <About />
    </>
  );
};

export default App;
