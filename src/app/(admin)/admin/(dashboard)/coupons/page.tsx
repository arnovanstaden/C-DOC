import CreateCoupons from '@components/admin/coupons/coupons';
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
      <CreateCoupons />
    </main>
  );
};

export default DashboardCoupons;
