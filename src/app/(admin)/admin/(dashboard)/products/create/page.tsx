import CreateEditProduct from '@components/admin/products/CreateEditProduct/CreateEditProduct';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Product | C-DOC',
  description: 'Create Product | C-DOC',
  robots: {
    index: false,
    follow: false,
  }
};

const DashboardProductsCreate: React.FC = () => {
  return (
    <main>
      <CreateEditProduct />
    </main>
  );
};

export default DashboardProductsCreate;
