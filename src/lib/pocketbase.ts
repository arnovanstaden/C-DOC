import { IArticle, IBooking, ICoupon, ICourse, IOrder, IProduct } from '@types';
import PocketBase, { RecordService } from 'pocketbase';

const url = 'https://c-doc.pockethost.io/';

interface TypedPocketBase extends PocketBase {
  collection(idOrName: string): RecordService // default fallback for any other collection
  collection(idOrName: 'articles'): RecordService<IArticle>
  collection(idOrName: 'bookings'): RecordService<IBooking>
  collection(idOrName: 'coupons'): RecordService<ICoupon>
  collection(idOrName: 'courses'): RecordService<ICourse>
  collection(idOrName: 'orders'): RecordService<IOrder>
  collection(idOrName: 'products'): RecordService<IProduct>
}

export const pb = new PocketBase(url) as TypedPocketBase;
pb.autoCancellation(false);

export const authPb = async () => {
  if (!pb.authStore.isValid) {
    await pb.admins.authWithPassword(process.env.PB_ADMIN_EMAIL!, process.env.PB_ADMIN_PASSWORD!);
  }
};