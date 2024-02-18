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
      <h1>Articles</h1>
    </main>
  );
};

export default DashboardArticles;
