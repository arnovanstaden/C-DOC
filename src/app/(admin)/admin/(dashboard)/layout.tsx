import styles from './DashboardLayout.module.scss';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.DashboardLayout}>
      {children}
    </div>
  );
};

export default DashboardLayout;
