'use server';

import { ICourse, INewCourse } from '@types';
import { authPb, pb } from './pocketbase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const revalidateCourses = () => {
  revalidatePath('/', 'layout');
  redirect('/admin/courses');
};

export const getCourse = async (id: string): Promise<ICourse | undefined> => {
  await authPb();
  try {
    const course = await pb.collection('courses').getOne(id);
    return course;
  }
  catch (e) {
    return undefined;
  }
};

export const getCourses = async (): Promise<ICourse[]> => {
  await authPb();
  const courses = await pb.collection('courses').getList();
  return courses.items;
};

export const createCourse = async (course: INewCourse): Promise<void> => {
  const newCourse: INewCourse = {
    ...course,
    deleted: false,
  };
  await authPb();
  await pb.collection('courses').create(newCourse);
  revalidateCourses();
};

export const updateCourse = async (id: string, course: INewCourse): Promise<void> => {
  await authPb();
  await pb.collection('courses').update(id, course);
  revalidateCourses();

};

export const deleteCourse = async (id: string): Promise<void> => {
  await authPb();
  await pb.collection('courses').delete(id);
  revalidateCourses();
};