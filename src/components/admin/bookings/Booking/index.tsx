import { IBookingExtended } from '@types';
import ViewItem from '@components/admin/atoms/ViewItem/ViewItem';

const Booking: React.FC<IBookingExtended> = async (booking) => {
  return (
    <div >
      <h4>Booking No {booking.id}</h4>
      <ViewItem item={booking} />
    </div>
  );
};

export default Booking;
