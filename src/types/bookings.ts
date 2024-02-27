import { IPocketBaseBase } from '@types';
import { ICourse, ICourseDate } from './courses';

export interface IBooking extends IPocketBaseBase {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  total: number;
  course: ICourse; courseDates: ICourseDate;
  coupon?: string;
  proofOfPayment: string;
}

export interface INewBooking extends Omit<IBooking, 'id' | 'proofOfPayment'> {
  proofOfPayment: File;
}

export interface IBookingForm extends Omit<IBooking, 'id' | 'proofOfPayment'> {
  proofOfPayment: FileList;
}