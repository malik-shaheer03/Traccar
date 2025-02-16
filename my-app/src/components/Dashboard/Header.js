import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Header.module.css';
import { FiMenu, FiSearch, FiPlus, FiBell, FiLogOut } from 'react-icons/fi';

const Header = () => {
  const navigate = useNavigate();

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
        <FiMenu className={styles.icon} />
        <div className={styles.searchBar}>
          <FiSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search here..." className={styles.searchInput} />
        </div>
      </div>
      <div className={styles.rightSection}>
        <FiPlus className={styles.icon} />
        <FiBell className={styles.icon} />
        <FiLogOut className={styles.icon} onClick={handleLogout} />
      </div>
      <ToastContainer />
    </header>
  );
};

export default Header;
