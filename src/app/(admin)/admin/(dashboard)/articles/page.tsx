import ArticleList from '@components/admin/articles/ArticleList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles | C-DOC',
  description: 'Articles | C-DOC',
  robots: {
    index: false,
    follow: false,
  }
};

const DashboardArticles: React.FC = () => {
  return (
    <main>
      <ArticleList />
    </main>
  );
};

export default DashboardArticles;
