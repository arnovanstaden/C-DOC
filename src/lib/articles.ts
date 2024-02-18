import { IArticle } from '@types';
import { authPb, pb } from './pocketbase';

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
