import Order from '@components/admin/orders/Order/Order';
import { getOrder } from '@lib/orders';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'View Order | C-DOC',
  description: 'View Order | C-DOC',
  robots: {
    index: false,
    follow: false,
  }
};

const DashboardOrdersEdit: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const order = await getOrder(params.id);

  if (!order) {
    return notFound();
  }

  return (
    <main>
      <Order {...order} />
    </main>
  );
};

export default DashboardOrdersEdit;
