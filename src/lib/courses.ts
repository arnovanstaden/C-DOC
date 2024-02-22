'use server';

import { ICourse } from '@types';
import { authPb, pb } from './pocketbase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const getCourse = async (id: string): Promise<ICourse> => {
  await authPb();
  const course = await pb.collection('courses').getOne(id);
  return course;
};

export const getCourses = async (): Promise<ICourse[]> => {
  await authPb();
  const courses = await pb.collection('courses').getList();
  return courses.items;
};

export const createCourse = async (course: ICourse): Promise<void> => {
  await authPb();
  await pb.collection('courses').create(course);
  revalidatePath('/admin/courses');
  revalidatePath('/courses');
  redirect('/admin/courses');
};

export const updateCourse = async (course: ICourse): Promise<void> => {
  await authPb();
  await pb.collection('courses').update('', course);
  revalidatePath('/admin/courses');
  revalidatePath('/courses');
  redirect('/admin/courses');
};

export const deleteCourse = async (id: string): Promise<void> => {
  await authPb();
  await pb.collection('courses').delete(id);
  revalidatePath('/admin/courses');
  revalidatePath('/courses');
  redirect('/admin/courses');
};