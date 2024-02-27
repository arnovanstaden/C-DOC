import { IPocketBaseBase } from '@types';

export type TCourseCategory = 'Online Distance Learning (ODL)' | 'Blended learning: Online Theory + Onsite skills development and assessment';

export interface ICourseDate {
  from: string;
  to: string;
}

export interface ICourse extends IPocketBaseBase {
  id: string;
  name: string;
  description: string;
  code: string;
  price: number;
  category: TCourseCategory;
  deleted: boolean;
  dates?: ICourseDate[];
}

export interface INewCourse extends Omit<ICourse, 'id' | 'deleted'> {
  deleted: false;
};