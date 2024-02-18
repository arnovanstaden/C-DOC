import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bookings | C-DOC',
  description: 'Bookings | C-DOC',
  robots: {
    index: false,
    follow: false,
  }
};
const DashboardBookings: React.FC = () => {
  return (
    <main>
      <h1>Bookings</h1>
    </main>
  );
};

export default DashboardBookings;
