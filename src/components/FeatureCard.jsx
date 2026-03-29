import "./FeatureCard.css";

export default function FeatureCard({ title }) {
  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <h3>{title}</h3>
            <p>Hover Me</p>
          </div>
        </div>

        <div className="front">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}