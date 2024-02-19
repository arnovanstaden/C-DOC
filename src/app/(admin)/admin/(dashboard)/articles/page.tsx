import ListArticles from '@components/admin/Articles/ListArticles/ListArticles';
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
      <ListArticles />
    </main>
  );
};

export default DashboardArticles;
