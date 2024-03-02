import CreateEditArticle from '@components/admin/articles/CreateEditArticle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Article | C-DOC',
  description: 'Create Article | C-DOC',
  robots: {
    index: false,
    follow: false,
  }
};

const DashboardArticlesCreate: React.FC = () => {
  return (
    <main>
      <CreateEditArticle />
    </main>
  );
};

export default DashboardArticlesCreate;
