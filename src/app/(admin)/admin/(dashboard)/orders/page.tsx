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
      <h1>Orders</h1>
    </main>
  );
};

export default DashboardOrders;
