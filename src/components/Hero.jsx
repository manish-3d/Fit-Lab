import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section style={heroStyle}>
      
      {/* BACKGROUND GLOW */}
      <div style={glowStyle}></div>

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <h1 style={{ fontSize: "64px", fontWeight: "bold" }}>
          FitLab
        </h1>

        <h2 style={{ color: "#00ff88", fontSize: "28px" }}>
          Train Smarter. Track Better.
        </h2>

        <p style={{ color: "#aaa", marginTop: "20px" }}>
          Discover gyms, manage workouts, and track your fitness journey.
        </p>

        <div style={{ marginTop: "30px", display: "flex", gap: "20px", justifyContent: "center" }}>
          <Link to="/gyms">
            <button style={btnPrimary}>Explore Gyms</button>
          </Link>

          <Link to="/planner">
            <button style={btnSecondary}>Start Planning</button>
          </Link>
        </div>
      </div>

    </section>
  );
}

// 🎨 styles

const heroStyle = {
  position: "relative",
  padding: "140px 20px",
  textAlign: "center",
  overflow: "hidden",
};

const glowStyle = {
  position: "absolute",
  top: "-100px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "600px",
  height: "600px",
  background: "radial-gradient(circle, rgba(0,255,136,0.25), transparent 70%)",
  filter: "blur(120px)",
};

const btnPrimary = {
  background: "#00ff88",
  color: "black",
  padding: "12px 24px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const btnSecondary = {
  background: "transparent",
  color: "white",
  padding: "12px 24px",
  border: "1px solid #00ff88",
  borderRadius: "8px",
  cursor: "pointer",
};