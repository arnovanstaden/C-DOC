import Sidebar from '@components/admin/layout/Sidebar/Sidebar';
import styles from './DashboardLayout.module.scss';
import Container from '@components/website/layout/Container/Container';

export const revalidate = 0;


const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.DashboardLayout}>
      <header>
        <img src="/images/logos/logo.png" alt="" />
      </header>
      <Sidebar />
      <div className={styles.content}>
        <Container>
          {children}
        </Container>
      </div>
    </div>
  );
};

export default DashboardLayout;
