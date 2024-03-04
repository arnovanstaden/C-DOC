import CreateAction from '@components/admin/atoms/CreateAction/CreateAction';
import { getArticles } from '@lib/articles';
import Link from 'next/link';

const ArticleList: React.FC = async () => {
  const articles = await getArticles();

  return (
    <div>
      <CreateAction label="Create Article" href="/admin/articles/create" />
      <ul>
        {articles.map((article) => (
          <Link href={`/admin/articles/${article.id}`} key={article.id}>
            <li>{article.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
