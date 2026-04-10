import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

import bgImage from "../assets/ok_remo_e_202604031403.png";
import bgphone from "../assets/and_for_mobile_202604031427.png";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const heroStyle = {
    position: "relative",
    padding: isMobile ? "100px 20px" : "140px 20px",
    textAlign: "center",
    overflow: "hidden",

    backgroundImage: `url(${isMobile ? bgphone : bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: isMobile ? "center top" : "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section style={heroStyle}>
      
      {/* ✅ NAVBAR (FIXED) */}
      <Navbar
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          padding: "20px 30px",
          zIndex: 10, // 🔥 FIX CLICK ISSUE
        }}
      />

      {/* 🔥 OVERLAY (CLICK SAFE) */}
      <div style={overlayStyle}></div>

      {/* ✨ GLOW */}
      <div style={glowStyle}></div>

      {/* 📦 CONTENT */}
      <div style={contentStyle}>
        <h1 style={titleStyle}>FitLab</h1>

        <h2 style={subtitleStyle}>
          Train Smarter. Track Better.
        </h2>

        <p style={descStyle}>
          Discover gyms, manage workouts, and track your fitness journey.
        </p>

        <div style={btnContainer}>
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

//
// 🎨 STYLES
//

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.6)",
  zIndex: 0,
  pointerEvents: "none", // 🔥 IMPORTANT FIX
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
  zIndex: 0,
};

const contentStyle = {
  position: "relative",
  zIndex: 1,
  textAlign: "center",
};

const titleStyle = {
  fontSize: "64px",
  fontWeight: "bold",
  color: "white",
};

const subtitleStyle = {
  color: "#00ff88",
  fontSize: "28px",
};

const descStyle = {
  color: "#aaa",
  marginTop: "20px",
};

const btnContainer = {
  marginTop: "30px",
  display: "flex",
  gap: "20px",
  justifyContent: "center",
};

const btnPrimary = {
  background: "#00ff88",
  color: "black",
  padding: "12px 24px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
};

const btnSecondary = {
  background: "transparent",
  color: "white",
  padding: "12px 24px",
  border: "1px solid #00ff88",
  borderRadius: "8px",
  cursor: "pointer",
};