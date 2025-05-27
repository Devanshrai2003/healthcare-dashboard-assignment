import "./SimpleAppointmentCard.css";
export function SimpleAppointmentCard({ title, iconSrc, time }) {
  return (
    <div className="appointment-card">
      <div className="appointment-header">
        <span className="appointment-title">{title}</span>
        <img src={iconSrc} alt={title} className="appointment-icon" />
      </div>
      <p>{time}</p>
    </div>
  );
}
