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

const DashboardOrders: React.FC = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
  const orders = await getOrders(searchParams?.status);

  return (
    <main>
      <OrderList orders={orders} />
    </main>
  );
};

export default DashboardOrders;
