import { useState, useEffect } from "react";

export default function Planner() {
  const [exercise, setExercise] = useState("");
  const [plan, setPlan] = useState([]);

  // load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("plan"));
    if (saved) setPlan(saved);
  }, []);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("plan", JSON.stringify(plan));
  }, [plan]);

  const addExercise = () => {
    if (exercise.trim() === "") return;
    setPlan([...plan, exercise]);
    setExercise("");
  };

  const removeExercise = (index) => {
    const newPlan = plan.filter((_, i) => i !== index);
    setPlan(newPlan);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Workout Planner</h1>

      <input
        type="text"
        placeholder="Enter exercise"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      />

      <button onClick={addExercise}>Add</button>

      <ul>
        {plan.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeExercise(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}