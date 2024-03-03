'use server';

import { IEquipment } from '@types';
import { authPb, pb } from './pocketbase';

export const getEquipment = async (): Promise<IEquipment[]> => {
  await authPb();

  try {
    const result = await pb.collection('equipment').getList();
    return result.items;
  }
  catch (e) {
    return undefined;
  }
};

