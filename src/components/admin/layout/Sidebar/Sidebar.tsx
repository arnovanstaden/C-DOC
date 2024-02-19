import Button from '@components/system/Button/Button';
import styles from './Sidebar.module.scss';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.Sidebar}>
      <Button
        outlined={pathname !== '/admin/products'}
        href="/admin/products"
        className={styles.button}
      >
        Products
      </Button>
      <Button
        outlined={pathname !== '/admin/orders'}
        href="/admin/orders"
        className={styles.button}
      >
        Orders
      </Button>

      <Button
        outlined={pathname !== '/admin/courses'}
        href="/admin/courses"
        className={styles.button}
      >
        Courses
      </Button>
      <Button
        outlined={pathname !== '/admin/bookings'}
        href="/admin/bookings"
        className={styles.button}
      >
        Bookings
      </Button>


      <Button
        outlined={pathname !== '/admin/articles'}
        href="/admin/articles"
        className={styles.button}
      >
        Articles
      </Button>
      <Button
        outlined={pathname !== '/admin/coupons'}
        href="/admin/coupons"
        className={styles.button}
      >
        Coupons
      </Button>
      <Button
        outlined={pathname !== '/admin/settings'}
        href="/admin/settings"
        className={styles.button}
      >
        Settings
      </Button>
    </aside>
  );
};

export default Sidebar;
