import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import FeatureCard from "../components/FeatureCard";

export default function Home() {
  const scrollRef = useRef();
  const [isDown, setIsDown] = useState(false);
const [startX, setStartX] = useState(0);
const [scrollLeft, setScrollLeft] = useState(0);

const handleMouseDown = (e) => {
  setIsDown(true);
  setStartX(e.pageX - scrollRef.current.offsetLeft);
  setScrollLeft(scrollRef.current.scrollLeft);
};

const handleMouseLeave = () => {
  setIsDown(false);
};

const handleMouseUp = () => {
  setIsDown(false);
};

const handleMouseMove = (e) => {
  if (!isDown) return;
  e.preventDefault();

  const x = e.pageX - scrollRef.current.offsetLeft;
  const walk = (x - startX) * 1.5; // speed

  scrollRef.current.scrollLeft = scrollLeft - walk;
};
  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.clientWidth;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div style={container}>

      {/* 🔥 FEATURES SLIDER */}
      <section style={featureSection}>
        <h2 style={sectionTitle}>Everything You Need</h2>

        <div style={sliderWrapper}>

          <button onClick={() => scroll("left")} style={arrowBtn}>
            ◀
          </button>

          <div ref={scrollRef} style={scrollContainer}>
            <FeatureCard title="Gym Finder" />
            <FeatureCard title="Progress Tracking" />
            <FeatureCard title="Planner" />
            <FeatureCard title="Diet Plan" />
            <FeatureCard title="Workout Logs" />
            <FeatureCard title="AI Coach" />
          </div>

          <button onClick={() => scroll("right")} style={arrowBtn}>
            ▶
          </button>

        </div>
      </section>

      {/* 🔥 STATS */}
      <section style={section}>
        <h2 style={sectionTitle}>Trusted by Fitness Enthusiasts</h2>

        <div style={statsGrid}>
          <Stat number="10K+" label="Users" />
          <Stat number="4.9⭐" label="Rating" />
          <Stat number="500+" label="Gyms" />
        </div>
      </section>

      {/* 🔥 CTA */}
      <section style={section}>
        <h2 style={sectionTitle}>Start Your Fitness Journey Today</h2>

        <Link to="/gyms">
          <button style={btnPrimary}>Get Started</button>
        </Link>
      </section>

      {/* 🔥 CONTACT */}
      <section style={contactWrapper}>
        <div style={contactGrid}>

          <div>
            <h2 style={{ fontSize: "26px" }}>
              Let’s Build Your Fitness Journey
            </h2>

            <p style={subText}>
              Got questions? Drop a message and we’ll get back to you.
            </p>

            <div style={{ marginTop: "15px" }}>
              <p>📧 support@fitlab.com</p>
              <p>📍 India</p>
            </div>
          </div>

          <div style={contactCard}>
            <input placeholder="Your Name" style={inputStyle} />
            <input placeholder="Your Email" style={inputStyle} />
            <textarea placeholder="Message" rows="4" style={inputStyle} />

            <button style={btnPrimary}>Send Message</button>
          </div>

        </div>
      </section>

    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div style={statCard}>
      <h3>{number}</h3>
      <p style={subText}>{label}</p>
    </div>
  );
}

/* 🎨 STYLES */

const container = {
  maxWidth: "1100px",
  margin: "auto",
  padding: "50px 20px",
};

const featureSection = {
  textAlign: "center",
  marginBottom: "70px",
  background:
    "radial-gradient(circle at 50% 0%, rgba(0,255,136,0.12), transparent 60%)",
};

const section = {
  textAlign: "center",
  marginBottom: "70px",
};

const sectionTitle = {
  fontSize: "26px",
  marginBottom: "50px",
  position: "relative",
  top: "-50px", // 🔥 moves upward
};

const subText = {
  color: "#aaa",
  marginTop: "10px",
};

const sliderWrapper = {
  display: "flex",
  alignItems: "center",
  gap: "0px",
};

const scrollContainer = {
  display: "flex",
  gap: "30px",
  overflowX: "auto",
  scrollBehavior: "smooth",
  padding: "40px 20px",
  scrollSnapType: "x mandatory",
  justifyContent: "center",   // 🔥 CENTER ALIGN
};
const arrowBtn = {
  background: "#121212",
  color: "#00ff88",
  border: "1px solid #222",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  cursor: "pointer",
};

const statsGrid = {
  display: "flex",
  justifyContent: "center",
  gap: "50px",
  marginTop: "30px",
  flexWrap: "wrap",
};

const statCard = {
  textAlign: "center",
};

const btnPrimary = {
  background: "#00ff88",
  color: "black",
  padding: "12px 24px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "20px",
};

const contactWrapper = {
  padding: "50px",
  borderRadius: "16px",
  background: "linear-gradient(135deg, #0b0b0b, #121212)",
  border: "1px solid #222",
};

const contactGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "40px",
};

const contactCard = {
  background: "#121212",
  padding: "25px",
  borderRadius: "10px",
  border: "1px solid #222",
  boxShadow: "0 0 20px rgba(0,255,136,0.1)",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: "6px",
  border: "1px solid #333",
  background: "#0b0b0b",
  color: "white",
};