import { useEffect, useState } from "react";

export default function Dashboard() {
  const [gym, setGym] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("selectedGym"));
    if (stored) setGym(stored);
  }, []);

  return (
    <div>
      <h1>Your Dashboard</h1>

      {gym ? (
        <div>
          <h2>Subscribed Gym:</h2>
          <p>{gym.name}</p>
          <p>₹{gym.price}/month</p>
        </div>
      ) : (
        <p>No subscription yet</p>
      )}
    </div>
  );
}