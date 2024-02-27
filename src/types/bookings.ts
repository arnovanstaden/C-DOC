import { IPocketBaseBase } from '@types';
import { ICourse, ICourseDate } from './courses';

export interface IBookingSimple extends IPocketBaseBase {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  total: number;
  course: string;
  courseDates: ICourseDate;
  coupon?: string;
  proofOfPayment: string;
}

export interface IBooking extends Omit<IBookingSimple, 'course'> {
  course: ICourse
}

export interface IExpandedBooking extends Omit<IBooking, 'course'> {
  expand: {
    course: ICourse;
  }
}

export interface INewBooking extends Omit<IBooking, 'id' | 'proofOfPayment'> {
  proofOfPayment: File;
}

export interface IBookingForm extends Omit<IBooking, 'id' | 'proofOfPayment'> {
  proofOfPayment: FileList;
}