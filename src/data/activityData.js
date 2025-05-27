export const activityData = [
  { label: "Mon", appointments: 1 },
  { label: "Tue", appointments: 2 },
  { label: "Wed", appointments: 0 },
  { label: "Thu", appointments: 1 },
  { label: "Fri", appointments: 3 },
  { label: "Sat", appointments: 0 },
  { label: "Sun", appointments: 1 },
];

export const totalAppointments = activityData.reduce(
  (sum, day) => sum + day.appointments,
  0
);
