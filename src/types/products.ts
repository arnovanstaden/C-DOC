import { IPocketBaseBase } from '@types';

export type TProductCategory = 'Medical Equipment' | 'Clothing & Gear' | 'Guidance Documents';

export interface IProduct extends IPocketBaseBase {
  id: string;
  category: TProductCategory;
  name: string;
  description: string;
  price: number;
  thumbnail: string;
  code: string;
  visible: boolean;
  deleted: boolean;
  images?: string[];
  document?: string
}

export interface IProductForm extends Omit<IProduct, 'thumbnail' | 'document' | 'images'> {
  document: FileList;
  thumbnail: FileList;
  images: FileList;
}

export interface INewProduct extends Omit<IProduct, 'thumbnail' | 'document' | 'images' | 'deleted'> {
  document: File;
  thumbnail: File;
  images: File[];
  deleted: false;
}
