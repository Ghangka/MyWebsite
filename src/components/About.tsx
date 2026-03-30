import { useEffect, useRef } from "react";

const skills = [
  "React", "TypeScript", "JavaScript", "React Native",
  "Node.js", "Express", "Python", "REST APIs",
  "HTML & CSS", "Tailwind CSS", "Vite", "Git & GitHub",
  "Figma", "Responsive Design", "Accessibility",
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".sr").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="about" style={{ padding: "7rem 0" }}>
      <div className="container-main">
        <div className="about-layout">
          {/* ── Left: text ── */}
          <div>
            <div className="sr" style={{ position: "relative", marginBottom: "2rem" }}>
              <span
                className="big-number"
                style={{ fontSize: "clamp(5rem, 10vw, 8rem)", top: "-0.3em", right: "-0.1em", opacity: 0.4 }}
              >
                01
              </span>
              <p className="eyebrow">About Me</p>
              <h2 className="display-heading" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Building things<br />
                <span className="gradient-text">people love</span> to use.
              </h2>
              <span className="accent-line" />
            </div>

            <div className="sr" style={{ transitionDelay: "0.1s" }}>
              <p style={{ color: "var(--text-2)", lineHeight: 1.85, marginBottom: "1rem", fontSize: "0.95rem" }}>
                I'm a Front-End Developer based in{" "}
                <span style={{ color: "var(--text)" }}>Toronto</span> and a recent
                Computer Engineering graduate from the{" "}
                <span style={{ color: "var(--text)" }}>University of Waterloo</span>.
              </p>
              <p style={{ color: "var(--text-2)", lineHeight: 1.85, marginBottom: "1rem", fontSize: "0.95rem" }}>
                I bridge the gap between design and engineering — writing clean code
                that translates ideas into fast, accessible, visually polished products.
              </p>
              <p style={{ color: "var(--text-2)", lineHeight: 1.85, fontSize: "0.95rem" }}>
                Outside of work I love exploring the world — browse my{" "}
                <a href="#/travel" className="link">travel gallery</a>. Feel free to
                reach out on{" "}
                <a
                  href="https://www.linkedin.com/in/ghangka/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </div>

          {/* ── Right: skills ── */}
          <div className="sr" style={{ transitionDelay: "0.18s" }}>
            <p className="eyebrow" style={{ marginBottom: "1.2rem" }}>Tech Stack</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {skills.map((s) => (
                <span key={s} className="pill">{s}</span>
              ))}
            </div>

            {/* Currently seeking callout */}
            <div
              style={{
                marginTop: "2rem",
                padding: "1.25rem 1.5rem",
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--orange)",
                borderRadius: "6px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.68rem",
                  color: "var(--orange)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "0.4rem",
                }}
              >
                Status
              </p>
              <p style={{ color: "var(--text-2)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                Currently seeking <span style={{ color: "var(--text)" }}>new grad / junior</span> frontend
                roles in Toronto or remote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
