import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Travel from "./components/Travel";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#F5F2EC]">
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/project" element={<Projects />} />
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
