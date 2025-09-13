import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaRoute, 
  FaClock, 
  FaTachometerAlt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaTimesCircle
} from 'react-icons/fa';
import styles from './DashboardWidgets.module.css';

const DashboardWidgets = () => {
  // Mock data - replace with real data from your API
  const stats = {
    totalDevices: 23,
    activeDevices: 17,
    offlineDevices: 6,
    totalDistance: 1250.5,
    avgSpeed: 45.2,
    alerts: 3
  };

  const recentAlerts = [
    { id: 1, type: 'Geofence Exit', device: 'Vehicle-001', time: '2 min ago', status: 'warning' },
    { id: 2, type: 'Speed Alert', device: 'Vehicle-003', time: '5 min ago', status: 'danger' },
    { id: 3, type: 'Maintenance Due', device: 'Vehicle-007', time: '10 min ago', status: 'info' }
  ];

  const quickActions = [
    { icon: FaMapMarkerAlt, label: 'Add Geofence', color: '#00FFFF' },
    { icon: FaRoute, label: 'Create Route', color: '#39FFF5' },
    { icon: FaClock, label: 'Schedule Report', color: '#00EFD1' }
  ];

  return (
    <div className={styles.widgetsContainer}>
      {/* Statistics Cards */}
      <div className={styles.statsSection}>
        <h3 className={styles.sectionTitle}>Overview</h3>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <FaTachometerAlt />
            </div>
            <div className={styles.statContent}>
              <div className={styles.statValue}>{stats.totalDevices}</div>
              <div className={styles.statLabel}>Total Devices</div>
            </div>
          </div>
          
          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.active}`}>
              <FaCheckCircle />
            </div>
            <div className={styles.statContent}>
              <div className={styles.statValue}>{stats.activeDevices}</div>
              <div className={styles.statLabel}>Active</div>
            </div>
          </div>
          
          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.offline}`}>
              <FaTimesCircle />
            </div>
            <div className={styles.statContent}>
              <div className={styles.statValue}>{stats.offlineDevices}</div>
              <div className={styles.statLabel}>Offline</div>
            </div>
          </div>
          
          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.warning}`}>
              <FaExclamationTriangle />
            </div>
            <div className={styles.statContent}>
              <div className={styles.statValue}>{stats.alerts}</div>
              <div className={styles.statLabel}>Alerts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className={styles.alertsSection}>
        <h3 className={styles.sectionTitle}>Recent Alerts</h3>
        <div className={styles.alertsList}>
          {recentAlerts.map(alert => (
            <div key={alert.id} className={`${styles.alertItem} ${styles[alert.status]}`}>
              <div className={styles.alertIcon}>
                <FaExclamationTriangle />
              </div>
              <div className={styles.alertContent}>
                <div className={styles.alertType}>{alert.type}</div>
                <div className={styles.alertDevice}>{alert.device}</div>
                <div className={styles.alertTime}>{alert.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className={styles.actionsSection}>
        <h3 className={styles.sectionTitle}>Quick Actions</h3>
        <div className={styles.actionsGrid}>
          {quickActions.map((action, index) => (
            <button key={index} className={styles.actionButton}>
              <action.icon style={{ color: action.color }} />
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className={styles.metricsSection}>
        <h3 className={styles.sectionTitle}>Performance</h3>
        <div className={styles.metricsList}>
          <div className={styles.metricItem}>
            <div className={styles.metricLabel}>Total Distance</div>
            <div className={styles.metricValue}>{stats.totalDistance} km</div>
          </div>
          <div className={styles.metricItem}>
            <div className={styles.metricLabel}>Avg Speed</div>
            <div className={styles.metricValue}>{stats.avgSpeed} km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWidgets;
