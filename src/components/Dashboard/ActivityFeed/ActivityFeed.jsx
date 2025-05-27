import { activityData, totalAppointments } from "../../../data/activityData";
import "./ActivityFeed.css";
export function ActivityFeed() {
  return (
    <div className="activity-card">
      <div className="activity-header">
        <h3 className="activity-title">Activity</h3>
        <p>{totalAppointments} Appointments this week</p>
      </div>
      <div className="activity-graph">
        {activityData.map((day) => (
          <div key={day.label} className="chart-column">
            <div
              className="chart-bar"
              style={{
                height: `${day.appointments * 20}px`,
                backgroundColor: day.appointments > 0 ? "#605bff" : "#e2e8f0",
              }}
            />
            <p className="day-label">{day.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
