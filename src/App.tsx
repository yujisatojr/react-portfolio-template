import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import AmbientBackground from "./components/AmbientBackground";
import Reveal from "./components/Reveal";
import "./index.scss";

function App() {
  const [mode, setMode] = useState<string>(() => {
    try {
      const saved = window.localStorage.getItem("portfolio-theme");
      if (saved === "dark" || saved === "light") return saved;
    } catch (error) {
      // Storage can be unavailable in private contexts.
    }
    return "dark";
  });

  const handleModeChange = () => {
    setMode((current) => (current === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.classList.toggle("theme-light", mode === "light");

    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
      themeMeta.setAttribute("content", mode === "dark" ? "#070a0f" : "#edf1f5");
    }

    document.documentElement.style.colorScheme =
      mode === "dark" ? "dark" : "light";
    document.documentElement.style.background =
      mode === "dark" ? "#070a0f" : "#edf1f5";

    try {
      window.localStorage.setItem("portfolio-theme", mode);
    } catch (error) {
      // Ignore storage failures.
    }
  }, [mode]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      <AmbientBackground />
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <div className="page-content">
        <main>
          <Reveal>
            <Main />
          </Reveal>
          <Reveal delay={40}>
            <Expertise />
          </Reveal>
          <Reveal delay={40}>
            <Timeline />
          </Reveal>
          <Reveal delay={40}>
            <Project />
          </Reveal>
          <Reveal delay={40}>
            <Contact />
          </Reveal>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
