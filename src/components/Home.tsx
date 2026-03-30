import { useState, useEffect } from "react";
import About from "./About";
import Projects from "./Projects";

const words = ["interfaces.", "experiences.", "products.", "ideas."];

export default function Home() {
  const [wordIdx, setWordIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % words.length);
        setFade(true);
      }, 400);
    }, 2800);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "64px",
        }}
      >
        <div className="blob-1 bg-blob" />
        <div className="blob-2 bg-blob" />
        <div className="noise" />

        <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
          {/* Eyebrow */}
          <p className="eyebrow hero-1">
            Front-End Software Developer
          </p>

          {/* Main headline */}
          <h1
            className="hero-2"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              color: "var(--text)",
              marginBottom: "0.4rem",
            }}
          >
            Hi, I'm{" "}
            <span className="gradient-text">Ghangka</span>.
          </h1>

          {/* Animated sub-headline */}
          <h2
            className="hero-3"
            style={{
              fontSize: "clamp(1.6rem, 4.5vw, 3.2rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              color: "var(--text-2)",
              marginBottom: "2rem",
            }}
          >
            I build beautiful{" "}
            <span
              style={{
                color: "var(--gold)",
                display: "inline-block",
                transition: "opacity 0.35s ease, transform 0.35s ease",
                opacity: fade ? 1 : 0,
                transform: fade ? "translateY(0)" : "translateY(8px)",
              }}
            >
              {words[wordIdx]}
            </span>
          </h2>

          {/* Description */}
          <p
            className="hero-4"
            style={{
              maxWidth: "480px",
              color: "var(--text-3)",
              fontSize: "1rem",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            Computer Engineering grad from{" "}
            <span style={{ color: "var(--text-2)" }}>University of Waterloo</span>.
            Building fast, accessible, pixel-perfect web applications.
            Based in{" "}
            <span style={{ color: "var(--text-2)" }}>Toronto</span>.
          </p>

          {/* CTA row */}
          <div
            className="hero-5"
            style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}
          >
            <a href="#/project" style={{ textDecoration: "none" }}>
              <button className="btn btn-fill">
                View Projects
                <span style={{ fontSize: "1rem", lineHeight: 1 }}>→</span>
              </button>
            </a>
            <a href="mailto:ghangka.s@gmail.com" style={{ textDecoration: "none" }}>
              <button className="btn btn-ghost">Get in Touch</button>
            </a>
          </div>

          {/* Stats row */}
          <div
            className="hero-5"
            style={{
              display: "flex",
              gap: "2.5rem",
              marginTop: "4rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid var(--border)",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "3+", label: "Projects Shipped" },
              { value: "UW", label: "Comp. Eng. Grad" },
              { value: "TO", label: "Based in Toronto" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "var(--orange)",
                    lineHeight: 1,
                    marginBottom: "0.35rem",
                  }}
                >
                  {value}
                </p>
                <p style={{ fontSize: "0.75rem", color: "var(--text-3)", letterSpacing: "0.04em" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Side label */}
        <div
          style={{
            position: "absolute",
            right: "2rem",
            bottom: "3rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            opacity: 0.35,
            transform: "rotate(90deg)",
            transformOrigin: "right center",
          }}
        >
          <div style={{ width: "32px", height: "1px", background: "var(--text-3)" }} />
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              color: "var(--text-3)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Scroll to explore
          </span>
        </div>
      </section>

      <div className="divider" />
      <About />
      <div className="divider" />
      <Projects />
    </div>
  );
}
