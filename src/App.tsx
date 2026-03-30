import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Travel from "./components/Travel";
import About from "./components/About";
import Projects from "./components/Projects";

function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${pct}%` }} />;
}

function App() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <HashRouter>
        <ScrollProgress />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
