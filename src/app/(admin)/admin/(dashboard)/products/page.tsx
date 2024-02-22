import ProductList from '@components/admin/products/ProductList/ProductList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | C-DOC',
  description: 'Products | C-DOC',
  robots: {
    index: false,
    follow: false,
  }
};

const DashboardProducts: React.FC = () => {
  return (
    <main>
      <ProductList />
    </main>
  );
};

export default DashboardProducts;
