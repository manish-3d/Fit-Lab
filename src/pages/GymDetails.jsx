import { useParams } from "react-router-dom";

const gyms = [
  {
    id: 1,
    name: "Iron Paradise",
    price: 1500,
    features: ["AC", "Trainer", "Cardio"],
  },
  {
    id: 2,
    name: "Muscle Factory",
    price: 1200,
    features: ["Weights", "Personal Trainer"],
  },
];

export default function GymDetails() {
  const { id } = useParams();

  const gym = gyms.find((g) => g.id === Number(id));

  const buySubscription = () => {
    localStorage.setItem("selectedGym", JSON.stringify(gym));
    alert("Subscription successful!");
  };

  if (!gym) return <p>Gym not found</p>;

  return (
    <div>
      <h1>{gym.name}</h1>
      <p>Price: ₹{gym.price}/month</p>

      <h3>Features:</h3>
      <ul>
        {gym.features.map((f, index) => (
          <li key={index}>{f}</li>
        ))}
      </ul>

      <button onClick={buySubscription}>Buy Subscription</button>
    </div>
  );
}