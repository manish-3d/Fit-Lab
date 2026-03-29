import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
        
      <Link to="/">Home</Link>
      <Link to="/gyms">Gyms</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/planner">Planner</Link>
    </nav>
  );
}