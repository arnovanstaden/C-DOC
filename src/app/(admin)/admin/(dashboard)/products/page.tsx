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
      <h1>Ola</h1>
    </main>
  );
};

export default DashboardProducts;
