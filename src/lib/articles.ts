import { IArticle } from '@types';
import { authPb, pb } from './pocketbase';

export const getArticle = async (id: string): Promise<IArticle> => {
  await authPb();
  const result = await pb.collection('articles').getOne(id);
  const article: IArticle = {
    ...result,
    image: pb.files.getUrl(result, result.image),
    file: `${pb.files.getUrl(result, result.file)}`,
  };

  return article;
};


export const getArticles = async (): Promise<IArticle[]> => {
  await authPb();
  const result = await pb.collection('articles').getList();
  const articles: IArticle[] = result.items.map((article) => ({
    ...article,
    image: pb.files.getUrl(article, article.image),
    file: `${pb.files.getUrl(article, article.file)}?download=1`,
  }));

  return articles;
};

export const addArticle = async (newArticle: FormData): Promise<IArticle> => {
  await authPb();
  const result = await pb.collection('articles').create(newArticle);
  return result;
};