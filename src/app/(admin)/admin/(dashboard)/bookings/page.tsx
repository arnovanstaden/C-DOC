import BookingList from '@components/admin/bookings/BookingList';
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
      <BookingList />
    </main>
  );
};

export default DashboardBookings;
