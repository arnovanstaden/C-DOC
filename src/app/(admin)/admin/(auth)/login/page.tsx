import AdminLoginForm from '@components/admin/Login';
import styles from './DashboardLoginPage.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | C-DOC',
  description: 'Login | C-DOC',
  robots: {
    index: false,
    follow: false,
  }
};

const DashboardLoginPage: React.FC = () => {
  return (
    <main className={styles.DashboardLoginPage}>
      <header>
        <img src="/images/logos/logo.png" alt="" />
      </header>
      <div className={styles.content}>
        <AdminLoginForm />
      </div>
    </main>
  );
};

export default DashboardLoginPage;
