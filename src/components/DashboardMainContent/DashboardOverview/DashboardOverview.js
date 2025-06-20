import React from "react";
import { Bell } from "lucide-react";
import "./DashboardOverview.css";

const DashboardOverview = () => {
  return (
    <section className="dashboard-overview">
      <div className="top-bar">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          disabled // disables the search input
        />
        <div className="notification-icon">
          <Bell size={20} color="#4a6cf7" /> {/* Blue bell color */}
        </div>
      </div>

      <h2 className="dashboard-title">Dashboard</h2>
    </section>
  );
};

export default DashboardOverview;
