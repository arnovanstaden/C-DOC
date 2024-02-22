import { IBooking } from '@types';
import ViewItem from '@components/admin/atoms/ViewItem/ViewItem';

const Booking: React.FC<IBooking> = (booking) => {
  return (
    <div >
      <ViewItem {...booking} />
    </div>
  );
};

export default Booking;
