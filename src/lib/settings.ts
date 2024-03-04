'use server';

import { ISettings } from '@types';
import { authPb, pb } from './pocketbase';
import { revalidatePath } from 'next/cache';

const settingsId = '21bu4otyw9z21pb';

export const getShopSettings = async (): Promise<ISettings> => {
  await authPb();
  const result = await pb.collection('settings').getOne(settingsId);
  return result;
};

export const updateShopSettings = async (settings: ISettings): Promise<void> => {
  await authPb();
  await pb.collection('settings').update(settingsId, settings);
  revalidatePath('/', 'layout');
};

export const calculateDeliveryFee = async (subTotal: number): Promise<number> => {
  const shopSettings = await getShopSettings();
  if (subTotal < shopSettings.threshold1) {
    return shopSettings.deliveryFee1;
  } else if (subTotal < shopSettings.threshold2) {
    return shopSettings.deliveryFee2;
  } else if (subTotal < shopSettings.threshold3) {
    return shopSettings.deliveryFee3;
  } else {
    return shopSettings.upperFee;
  }
};