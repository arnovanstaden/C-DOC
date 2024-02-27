import { IPocketBaseBase } from '@types';

export interface IArticle extends IPocketBaseBase {
  id: string;
  name: string;
  description: string;
  author: string;
  researcher: string;
  image: string;
  file: string;
}

export interface INewArticle extends Omit<IArticle, 'id' | 'image' | 'file'> {
  image: File;
  file: File;
}

export interface IArticleForm extends Omit<INewArticle, 'image' | 'file'> {
  file: FileList;
  image: FileList;
}