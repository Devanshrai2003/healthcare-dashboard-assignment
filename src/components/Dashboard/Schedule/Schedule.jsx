import {
  thursdayAppointments,
  saturdayAppointments,
} from "../../../data/appointments";
import { SimpleAppointmentCard } from "../SimpleAppointmentCard/SimpleAppointmentCard";
import "./Schedule.css";
export function Schedule() {
  return (
    <div className="schedule-card">
      <h3 className="schedule-title">The Upcoming Schedule</h3>

      <div className="schedule-section">
        <h4 className="day-title">On Thursday</h4>
        <div className="appointments-list">
          {thursdayAppointments.map((appointment, index) => (
            <SimpleAppointmentCard
              key={`thursday-${index}`}
              title={appointment.title}
              time={appointment.time}
              iconSrc={appointment.iconSrc}
            />
          ))}
        </div>
      </div>

      <div className="schedule-section">
        <h4 className="day-title">On Saturday</h4>
        <div className="appointments-list">
          {saturdayAppointments.map((appointment, index) => (
            <SimpleAppointmentCard
              key={`saturday-${index}`}
              title={appointment.title}
              time={appointment.time}
              iconSrc={appointment.iconSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
