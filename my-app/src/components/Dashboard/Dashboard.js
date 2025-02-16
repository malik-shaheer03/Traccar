import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import LiveTracking from './LiveTracking';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.dashboardContent}>
        <Header />
        <LiveTracking />
      </div>
    </div>
  );
};

export default Dashboard;