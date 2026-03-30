import { useEffect, useRef } from "react";
import tictactoe from "../assets/tictactoe.png";
import phPerfect from "../assets/phPerfect.png";
import toDo from "../assets/ToDo.png";
import Footer from "./Footer";

const projects = [
  {
    id: 1,
    name: "pHPerfect",
    description: "Real-time water quality monitoring mobile app using sensor data and data visualization.",
    tech: ["TypeScript", "Python", "React Native"],
    image: phPerfect,
    github: "https://github.com/Riya-Anadkat/pHPerfect",
    num: "01",
  },
  {
    id: 2,
    name: "To Do App",
    description: "Minimal task management app with local storage, priority sorting, and clean UX.",
    tech: ["TypeScript", "HTML", "CSS"],
    image: toDo,
    github: "https://github.com/Ghangka/To-Do-App",
    num: "02",
  },
  {
    id: 3,
    name: "TicTacToe",
    description: "Classic two-player game in the browser with smooth transitions and win detection.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: tictactoe,
    github: "https://github.com/Ghangka/Javascript-Projects/tree/main/TicTacToe",
    num: "03",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".sr").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} id="project">
      <div className="container-main" style={{ padding: "7rem 2rem" }}>
        {/* Header */}
        <div className="sr" style={{ marginBottom: "3.5rem", position: "relative" }}>
          <span
            className="big-number"
            style={{ fontSize: "clamp(5rem, 10vw, 8rem)", top: "-0.25em", right: 0, opacity: 0.35 }}
          >
            02
          </span>
          <p className="eyebrow">Selected Work</p>
          <h2 className="display-heading" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Projects
          </h2>
          <span className="accent-line" />
        </div>

        {/* Grid */}
        <div className="proj-grid">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="sr project-card"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div style={{ height: "180px", overflow: "hidden", position: "relative", background: "var(--bg)" }}>
                <img
                  src={p.image}
                  alt={p.name}
                  className="card-img"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                {/* Number overlay */}
                <span
                  style={{
                    position: "absolute",
                    top: "0.75rem",
                    right: "0.85rem",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {p.num}
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: "1.35rem" }}>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: "0.45rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--text-3)",
                    lineHeight: 1.65,
                    marginBottom: "1rem",
                  }}
                >
                  {p.description}
                </p>

                {/* Tech */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.1rem" }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.65rem",
                        color: "var(--gold)",
                        background: "var(--gold-dim)",
                        padding: "3px 8px",
                        borderRadius: "3px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <button className="btn btn-ghost" style={{ padding: "8px 16px", fontSize: "0.7rem", width: "100%" }}>
                    View on GitHub →
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider" />
      <Footer />
    </div>
  );
}
