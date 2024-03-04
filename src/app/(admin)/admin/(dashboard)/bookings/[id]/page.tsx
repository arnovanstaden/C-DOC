import Booking from '@components/admin/bookings/Booking';
import { getBooking } from '@lib/bookings';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'View Booking | C-DOC',
  description: 'View Booking | C-DOC',
  robots: {
    index: false,
    follow: false,
  }
};

const DashboardBookingsEdit: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const booking = await getBooking(params.id);

  if (!booking) {
    return notFound();
  }

  return (
    <main>
      <Booking {...booking} />
    </main>
  );
};

export default DashboardBookingsEdit;
