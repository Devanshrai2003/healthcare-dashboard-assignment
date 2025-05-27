import { DashboardMainContent } from "./components/Dashboard/DashboardMainContent";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import "./styles/App.css";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-section">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
