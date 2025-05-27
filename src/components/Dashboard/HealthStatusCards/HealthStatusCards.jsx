import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { healthStatusCards } from "../../../data/healthStatus";
import "./HealthStatusCards.css";
export function HealthStatusCards() {
  const statusColors = {
    Healthy: "#7fd3c4",
    inDanger: "#b44e4e",
    Stable: "#ff7d5e",
  };
  return (
    <div className="status-cards">
      {healthStatusCards.map((card) => {
        const barColor = statusColors[card.status];
        return (
          <div key={card.index} className="card">
            <div className="heading">
              <img src={card.iconSrc} className="status-icon" />
              <span>{card.title}</span>
            </div>
            <p>Date: {card.date}</p>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${card.progress}%`,
                  backgroundColor: barColor,
                }}
              ></div>
            </div>
          </div>
        );
      })}
      <p>
        Details <ArrowRightIcon className="small-icon" />
      </p>
    </div>
  );
}
