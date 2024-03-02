import { IPocketBaseBase } from '@types';
import { ICourseDate } from './courses';

export interface IBooking extends IPocketBaseBase {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  total: number;
  course: string;
  courseDates?: ICourseDate;
  coupon?: string;
  proofOfPayment: string;
}

export interface IBookingExtended extends Omit<IBooking, 'course' | 'courseDates'> {
  courseName: string;
  courseLink: string;
  courseDates?: string;
}

export interface INewBooking extends Omit<IBooking, 'id' | 'proofOfPayment'> {
  proofOfPayment: File;
}

export interface IBookingForm extends Omit<IBooking, 'id' | 'proofOfPayment'> {
  proofOfPayment: FileList;
}