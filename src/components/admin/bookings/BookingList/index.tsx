import { getBookings } from '@lib/bookings';
import Booking from '../Booking';

const BookingList = async () => {
  const bookings = await getBookings();

  return (
    bookings.length === 0
      ? <p>You have no bookings</p>
      : (
        <ul>
          {bookings.map((booking) => <Booking key={booking.id} booking={booking} />)}
        </ul>
      )
  );
};

export default BookingList;
