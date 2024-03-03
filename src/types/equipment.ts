import { IPocketBaseBase } from '@types';

export type IEquipmentCategory = 'C-DOC SYSTEMS MODULES (Includes Medical Content)' | 'C-DOC SYSTEMS, ADDITIONAL SUPPLIES' | 'DMAC 015 SATURATION DIVING SUPPORT EQUIPMENT' | 'DMAC 015 AIR DIVING SUPPORT EQUIPMENT';

export interface IEquipment extends IPocketBaseBase {
  name: string;
  category: IEquipmentCategory;
}

export interface IEquipmentForm {
  name: string,
  company: string,
  email: string,
  phone: string,
  country: string,
  city: string,
  enquiryType: string,
  items: {
    [key: string]: number;
  }
}
