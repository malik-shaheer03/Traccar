import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import logo from './logo.png';
import { 
  FaTachometerAlt, 
  FaMap, 
  FaCog, 
  FaChartLine, 
  FaUserCog,
  FaChevronDown,
  FaChevronRight,
  FaHome,
  FaRoute,
  FaShieldAlt,
  FaBell
} from 'react-icons/fa';

const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (item) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const navigationItems = [
    { id: 'dashboard', icon: FaTachometerAlt, label: 'Dashboard', active: true },
    { id: 'map', icon: FaMap, label: 'Map View' },
    { id: 'devices', icon: FaHome, label: 'Devices' },
    { id: 'routes', icon: FaRoute, label: 'Routes' },
    { 
      id: 'reports', 
      icon: FaChartLine, 
      label: 'Reports',
      subItems: [
        { label: 'Combined Report' },
        { label: 'Route Report' },
        { label: 'Geofences Report' },
        { label: 'Replay Report' }
      ]
    },
    { id: 'geofences', icon: FaShieldAlt, label: 'Geofences' },
    { id: 'notifications', icon: FaBell, label: 'Notifications' },
    { id: 'settings', icon: FaCog, label: 'Settings' },
    { id: 'account', icon: FaUserCog, label: 'Account Settings' }
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Traccar Logo" className={styles.logo} />
        <span className={styles.title}>Traccar</span>
      </div>
      
      <nav className={styles.navigation}>
        {navigationItems.map((item) => (
          <div key={item.id} className={styles.navGroup}>
            <button 
              className={`${styles.navItem} ${item.active ? styles.active : ''}`}
              onClick={() => item.subItems && toggleExpanded(item.id)}
            >
              <item.icon className={styles.icon} />
              <span className={styles.label}>{item.label}</span>
              {item.subItems && (
                expandedItems[item.id] ? 
                <FaChevronDown className={styles.chevron} /> : 
                <FaChevronRight className={styles.chevron} />
              )}
            </button>
            
            {item.subItems && expandedItems[item.id] && (
              <div className={styles.subMenu}>
                {item.subItems.map((subItem, index) => (
                  <button key={index} className={styles.subItem}>
                    {subItem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      
      <div className={styles.footer}>
        <div className={styles.statusIndicator}>
          <div className={styles.statusDot}></div>
          <span>System Online</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
