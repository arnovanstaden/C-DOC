'use server';

import { ISettings } from '@types';
import { authPb, pb } from './pocketbase';
import { revalidatePath } from 'next/cache';

const settingsId = '21bu4otyw9z21pb';

export const getSettings = async (): Promise<ISettings> => {
  await authPb();
  const result = await pb.collection('settings').getOne(settingsId);
  return result;
};

export const updateSettings = async (settings: ISettings): Promise<void> => {
  await authPb();
  await pb.collection('settings').update(settingsId, settings);
  revalidatePath('/', 'layout');
};