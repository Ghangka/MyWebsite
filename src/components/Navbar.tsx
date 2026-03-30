import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const active = (p: string) => location.pathname === p;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
        background: solid ? "rgba(12, 11, 9, 0.92)" : "transparent",
        backdropFilter: solid ? "blur(16px)" : "none",
        WebkitBackdropFilter: solid ? "blur(16px)" : "none",
        borderBottom: solid ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div
        className="container-main"
        style={{
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "6px",
                background: "var(--orange)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "var(--bg)",
                  lineHeight: 1,
                }}
              >
                GS
              </span>
            </div>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.78rem",
                color: "var(--text-2)",
                letterSpacing: "0.04em",
              }}
            >
              ghangka
            </span>
          </div>
        </Link>

        {/* Nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {[
            { path: "/", label: "home" },
            { path: "/project", label: "projects" },
            { path: "/travel", label: "travel" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`nav-link${active(path) ? " active" : ""}`}
            >
              {label}
            </Link>
          ))}

          <a href="mailto:ghangka.s@gmail.com" style={{ textDecoration: "none" }}>
            <button className="btn btn-fill" style={{ padding: "8px 18px", fontSize: "0.7rem" }}>
              hire me
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
}
