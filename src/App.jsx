import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="App">
      <AppContext.Provider value={{ showMobileMenu, setShowMobileMenu }}>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </AppContext.Provider>
    </div>
  );
}

export default App;
