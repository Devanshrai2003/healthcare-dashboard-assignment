import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import "./CalendarView.css";
import {
  calendarAppointmentDetails,
  calendarAppointments,
} from "../../../data/calendar";
export function CalendarView() {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const dates = ["25", "26", "27", "28", "29", "30", "31"];
  const timeRow1 = ["10:00", "8:00", "12:00", "10:00", "-", "12:00", "9:00"];
  const timeRow2 = ["11:00", "9:00", "-", "11:00", "14:00", "14:00", "10:00"];
  const timeRow3 = ["12:00", "10:00", "13:00", "-", "16:00", "15:00", "11:00"];

  return (
    <div className="calendar-card">
      <div className="calendar-header">
        <h3>October 2021</h3>
        <div className="calendar-nav-arrows">
          <ArrowLeftIcon className="calendar-icon" />
          <ArrowRightIcon className="calendar-icon" />
        </div>
      </div>
      <div className="calendar-grid">
        {days.map((day, index) => (
          <div className="calendar-cell day" key={`day-${index}`}>
            <span>{day}</span>
          </div>
        ))}
        {dates.map((date, index) => (
          <div className="calendar-cell date" key={`date-${index}`}>
            <span>{date}</span>
          </div>
        ))}
        {[timeRow1, timeRow2, timeRow3].map((row, rowIndex) =>
          row.map((time, colIndex) => (
            <div
              className="calendar-cell time"
              key={`time-${rowIndex}-${colIndex}`}
            >
              {time}
            </div>
          ))
        )}
      </div>
      <div className="calendar-appointment-cards">
        {calendarAppointmentDetails.map((appointment) => (
          <div
            key={appointment.index}
            className={`calendar-appointment-card ${
              appointment.index == 1 ? "violet" : "grey"
            }`}
          >
            <div className="appointment-card-header">
              <span className="appointment-title">{appointment.title}</span>
              <img
                src={appointment.iconSrc}
                alt="tooth-icon"
                className="appointment-icon"
              />
            </div>
            <p>{appointment.duration}</p>
            <span className="appointment-doctor-name">
              {appointment.doctorName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
