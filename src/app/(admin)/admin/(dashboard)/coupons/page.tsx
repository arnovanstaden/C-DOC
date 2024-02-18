import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coupons | C-DOC',
  description: 'Coupons | C-DOC',
  robots: {
    index: false,
    follow: false,
  }
};
const DashboardCoupons: React.FC = () => {
  return (
    <main>
      <h1>Coupons</h1>
    </main>
  );
};

export default DashboardCoupons;
