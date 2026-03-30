import { useEffect, useRef } from "react";
import bigWaterfall from "../assets/Iceland/bigWaterfall.jpg";
import castleRocks from "../assets/Iceland/castleRocks.jpg";
import mountain from "../assets/Iceland/mountain.jpg";
import mountainReflection from "../assets/Iceland/mountainReflection.jpg";
import waterfall from "../assets/Iceland/waterfall.jpg";
import waterfallRocks from "../assets/Iceland/waterfallRocks.jpg";
import canoe from "../assets/Banff/canoe.jpg";
import lakeMorraine from "../assets/Banff/lakeMorraine.jpg";
import lakeMorraineCanoes from "../assets/Banff/lakeMorraineCanoes.jpg";
import mountRobson from "../assets/Banff/mountRobson.jpg";
import peytoLake from "../assets/Banff/peytoLake.jpg";
import waterfallJasper from "../assets/Banff/waterfallJasper.jpg";
import woods from "../assets/Banff/woods.jpg";
import Footer from "./Footer";

const images = [
  { id: 1, image: bigWaterfall },
  { id: 2, image: castleRocks },
  { id: 3, image: mountain },
  { id: 4, image: mountainReflection },
  { id: 5, image: waterfall },
  { id: 6, image: waterfallRocks },
  { id: 7, image: canoe },
  { id: 8, image: lakeMorraine },
  { id: 9, image: lakeMorraineCanoes },
  { id: 10, image: mountRobson },
  { id: 11, image: peytoLake },
  { id: 12, image: waterfallJasper },
  { id: 13, image: woods },
];

export default function Travel() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll(".sr").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} id="travel" style={{ paddingTop: "64px", minHeight: "100vh" }}>
      <div className="container-main" style={{ padding: "5rem 2rem 6rem" }}>
        {/* Header */}
        <div className="sr" style={{ marginBottom: "3rem", position: "relative" }}>
          <span
            className="big-number"
            style={{ fontSize: "clamp(5rem, 10vw, 8rem)", top: "-0.25em", right: 0, opacity: 0.35 }}
          >
            03
          </span>
          <p className="eyebrow">Beyond the Screen</p>
          <h2 className="display-heading" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Travel Gallery
          </h2>
          <span className="accent-line" />
          <p
            style={{
              color: "var(--text-3)",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              maxWidth: "480px",
              marginTop: "1.25rem",
            }}
          >
            Snapshots from{" "}
            <span style={{ color: "var(--text-2)" }}>Banff National Park</span> and{" "}
            <span style={{ color: "var(--text-2)" }}>Iceland</span>.
          </p>
        </div>

        {/* Masonry grid via CSS columns */}
        <div className="sr travel-grid" style={{ transitionDelay: "0.1s" }}>
          {[...images]
            .sort((a, b) => b.id - a.id)
            .map((photo) => (
              <a
                key={photo.id}
                href={photo.image}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={photo.image} alt={`Travel ${photo.id}`} />
              </a>
            ))}
        </div>
      </div>

      <div className="divider" />
      <Footer />
    </div>
  );
}
