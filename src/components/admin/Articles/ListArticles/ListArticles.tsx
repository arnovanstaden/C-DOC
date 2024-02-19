import CreateAction from '@components/admin/layout/CreateAction/CreateAction';
import styles from './ListArticles.module.scss';
import { getArticles } from '@lib/articles';
import Link from 'next/link';

const ListArticles: React.FC = async () => {
  const articles = await getArticles();
  return (
    <div className={styles.ListArticles}>
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

export default ListArticles;
