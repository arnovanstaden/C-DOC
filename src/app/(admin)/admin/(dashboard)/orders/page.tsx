import OrderList from '@components/admin/orders/OrderList/OrderList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orders | C-DOC',
  description: 'Orders | C-DOC',
  robots: {
    index: false,
    follow: false,
  }
};

const DashboardOrders: React.FC = () => {
  return (
    <main>
      <OrderList />
    </main>
  );
};

export default DashboardOrders;
