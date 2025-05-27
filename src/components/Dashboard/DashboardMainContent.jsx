import { ChevronDownIcon } from "@heroicons/react/24/outline";
import "./DashboardMainContent.css";
import { AnatomySection } from "./AnatomySection/AnatomySection";
import { HealthStatusCards } from "./HealthStatusCards/HealthStatusCards";
import { ActivityFeed } from "./ActivityFeed/ActivityFeed";
import { CalendarView } from "./CalendarView/CalendarView";
import { Schedule } from "./Schedule/Schedule";
export function DashboardMainContent() {
  return (
    <div className="dashboard-content">
      <div className="dashboard-middle">
        <div className="title-top">
          <h2>Dashboard</h2>
          <p>
            This Week <ChevronDownIcon className="small-icon" />
          </p>
        </div>
        <div className="data-section">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <ActivityFeed />
      </div>
      <div className="dashboard-right">
        <CalendarView />
        <Schedule />
      </div>
    </div>
  );
}
