import { getBookings } from '@lib/bookings';
import Link from 'next/link';
import styles from './BookingList.module.scss';
import { formatDate } from '@utils/utils';

const BookingList = async () => {
  const bookings = await getBookings();

  return (
    <div className={styles.BookingList}>
      {
        bookings.length === 0
          ? <p>You have no bookings</p>
          : (
            <ul>
              {bookings.map((booking) => (
                <Link href={`/admin/bookings/${booking.id}`} key={booking.id}>
                  <li className={styles.booking}>
                    <p>
                      <b>{booking.name}</b>
                    </p>
                    <p>{formatDate(booking.created)}</p>
                    <p>R {booking.total}</p>
                  </li>
                </Link>
              ))}
            </ul>
          )}
    </div>
  );
};

export default BookingList;
