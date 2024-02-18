'use client';

import Sidebar from '@components/admin/Sidebar/Sidebar';
import styles from './DashboardLayout.module.scss';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.DashboardLayout}>
      <header>
        <img src="/images/logos/logo.png" alt="" />
      </header>
      <Sidebar />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
