import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Header.module.css';
import { FiPlus, FiBell, FiLogOut, FiUser, FiSettings } from 'react-icons/fi';

const Header = () => {
  const navigate = useNavigate();
  const notifications = 3;

  const handleLogout = () => {
    toast.success('Logged Out Successfully!', {
      position: 'top-center',
      autoClose: 3000,
      style: { backgroundColor: '#00FFFF', color: '#001f29', fontWeight: 'bold' },
    });
    setTimeout(() => navigate('/login'), 3000);
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <button className={styles.actionButton}>
          <FiPlus className={styles.icon} />
          <span className={styles.buttonText}>Add Device</span>
        </button>
      </div>
      
      <div className={styles.rightSection}>
        
        <div className={styles.notificationButton}>
          <FiBell className={styles.icon} />
          {notifications > 0 && (
            <span className={styles.notificationBadge}>{notifications}</span>
          )}
        </div>
        
        <button className={styles.actionButton}>
          <FiUser className={styles.icon} />
        </button>
        
        <button className={styles.actionButton}>
          <FiSettings className={styles.icon} />
        </button>
        
        <button className={styles.logoutButton} onClick={handleLogout}>
          <FiLogOut className={styles.icon} />
        </button>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Header;
