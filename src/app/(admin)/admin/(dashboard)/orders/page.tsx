import OrderList from '@components/admin/orders/OrderList/OrderList';
import { getOrders } from '@lib/orders';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orders | C-DOC',
  description: 'Orders | C-DOC',
  robots: {
    index: false,
    follow: false,
  }
};

const DashboardOrders: React.FC = async () => {
  const orders = await getOrders();

  return (
    <main>
      <OrderList orders={orders} />
    </main>
  );
};

export default DashboardOrders;
