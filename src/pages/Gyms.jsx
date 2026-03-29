import { Link } from "react-router-dom";

const gyms = [
  { id: 1, name: "Iron Paradise", price: 1500 },
  { id: 2, name: "Muscle Factory", price: 1200 },
  { id: 3, name: "Beast Mode Gym", price: 1800 },
  { id: 4, name: "Fit Arena", price: 1300 },
];

export default function Gyms() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Available Gyms</h1>
      

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {gyms.map((gym) => (
          <Link
            key={gym.id}
            to={`/gym/${gym.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "12px",
                padding: "20px",
                background: "#f9f9f9",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <h3>{gym.name}</h3>
              <p>₹{gym.price}/month</p>
              <button style={{ marginTop: "10px" }}>
                View Details
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}