import React from 'react';
import styles from './Sidebar.module.css';
import logo from './logo.png';
import { FaTachometerAlt, FaMap, FaCog, FaChartLine, FaUserCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Traccar Logo" className={styles.logo} />
        <span className={styles.title}>Traccar</span>
      </div>
      <button className={styles.navItem}>
        <FaTachometerAlt className={styles.icon} /> Dashboard
      </button>
      <button className={styles.navItem}>
        <FaMap className={styles.icon} /> Map View
      </button>
      <button className={styles.navItem}>
        <FaCog className={styles.icon} /> Settings
      </button>
      <button className={styles.navItem}>
        <FaChartLine className={styles.icon} /> Reports
      </button>
      <ul className={styles.subMenu}>
        <li className={styles.subItem}>Combined Report</li>
        <li className={styles.subItem}>Route</li>
        <li className={styles.subItem}>Geofences</li>
        <li className={styles.subItem}>Replay</li>
      </ul>
      <button className={styles.navItem}>
        <FaUserCog className={styles.icon} /> Account Settings
      </button>
    </div>
  );
};

export default Sidebar;
