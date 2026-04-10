import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Gyms from "./pages/Gyms.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import GymDetails from "./pages/GymDetails.jsx";
import Planner from "./pages/Planner.jsx";

import Hero from "./components/Hero.jsx"; // your card component
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <BrowserRouter >

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero/>
              <Home />
              <div
  style={{
    marginTop: "80px",
    padding: "30px",
    borderTop: "1px solid #222",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
  }}
>
  {/* LEFT */}
  <div>
    <h3 style={{ marginBottom: "10px" }}>FitLab</h3>
    <p style={{ color: "#aaa" }}>
      Train smarter. Build stronger.
    </p>
  </div>

  {/* RIGHT (SOCIAL LINKS) */}
  <div style={{ display: "flex", gap: "20px" }}>
    <a onMouseEnter={(e) => (e.target.style.color = "#00ff88")}
onMouseLeave={(e) => (e.target.style.color = "#aaa")} href="#" style={linkStyle}>🐦 Twitter</a>
    <a onMouseEnter={(e) => (e.target.style.color = "#00ff88")}
onMouseLeave={(e) => (e.target.style.color = "#aaa")} href="#" style={linkStyle}>📸 Instagram</a>
    <a onMouseEnter={(e) => (e.target.style.color = "#00ff88")}
onMouseLeave={(e) => (e.target.style.color = "#aaa")} href="#" style={linkStyle}>👽 Reddit</a>
    <a onMouseEnter={(e) => (e.target.style.color = "#00ff88")}
onMouseLeave={(e) => (e.target.style.color = "#aaa")}href="mailto:support@fitlab.com" style={linkStyle}>✉️ Email</a>
  </div>
</div>
            </div>
          }
        />

        <Route path="/gyms" element={<Gyms />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/gym/:id" element={<GymDetails />} />
      </Routes>

    </BrowserRouter>
  );
}
const linkStyle = {
  textDecoration: "none",
  color: "#aaa",
  transition: "0.3s",
};

export default App;