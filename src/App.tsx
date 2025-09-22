import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Travel from "./components/Travel";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
