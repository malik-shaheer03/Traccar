import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import LiveTracking from './LiveTracking';
import DashboardWidgets from './DashboardWidgets';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.dashboardContent}>
        <Header />
        <div className={styles.dashboardGrid}>
          <div className={styles.mainContent}>
            <LiveTracking />
          </div>
          <div className={styles.sidebarContent}>
            <DashboardWidgets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;