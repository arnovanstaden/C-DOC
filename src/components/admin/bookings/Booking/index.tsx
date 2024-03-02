import { IBookingExtended } from '@types';
import ViewItem from '@components/admin/atoms/ViewItem/ViewItem';

const Booking: React.FC<IBookingExtended> = async (booking) => {
  return (
    <div >
      <ViewItem {...booking} />
    </div>
  );
};

export default Booking;
