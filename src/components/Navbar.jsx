import { Link } from "react-router-dom";

export default function Navbar({ style }) {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        ...style,
      }}
    >
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/gyms" style={linkStyle}>Gyms</Link>
      <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
      <Link to="/planner" style={linkStyle}>Planner</Link>
    </nav>
  );
}

const linkStyle = {
  color: "#00ff88",
  textDecoration: "none",
  fontWeight: "500",
};