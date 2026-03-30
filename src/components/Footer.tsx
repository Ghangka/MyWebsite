import { Link } from "react-router-dom";
import linkedInIcon from "../assets/linkedInIcon.png";
import githubIcon from "../assets/githubIcon.png";

export default function Footer() {
  return (
    <footer style={{ padding: "2.5rem 0" }}>
      <div
        className="container-main"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* Left */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "5px",
                background: "var(--orange)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  color: "var(--bg)",
                }}
              >
                GS
              </span>
            </div>
          </Link>
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.68rem",
              color: "var(--text-3)",
              letterSpacing: "0.04em",
            }}
          >
            © {new Date().getFullYear()} Ghangka — Built with React & TypeScript
          </p>
        </div>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          <a
            href="https://www.linkedin.com/in/ghangka/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ opacity: 0.4, transition: "opacity 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.4")}
          >
            <img src={linkedInIcon} alt="LinkedIn" style={{ height: "20px", width: "20px" }} />
          </a>
          <a
            href="https://github.com/Ghangka"
            target="_blank"
            rel="noopener noreferrer"
            style={{ opacity: 0.4, transition: "opacity 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.4")}
          >
            <img src={githubIcon} alt="GitHub" style={{ height: "20px", width: "20px" }} />
          </a>
          <a
            href="mailto:ghangka.s@gmail.com"
            className="link"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.02em",
            }}
          >
            ghangka.s@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
