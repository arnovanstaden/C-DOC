import CreateEditArticle from '@components/admin/Articles/CreateEditArticle';
import { getArticle } from '@lib/articles';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Edit Article | C-DOC',
  description: 'Edit Article | C-DOC',
  robots: {
    index: false,
    follow: false,
  }
};

const DashboardArticlesEdit: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const article = await getArticle(params.id);

  if (!article) {
    return notFound();
  }

  return (
    <main>
      <CreateEditArticle article={article} />
    </main>
  );
};

export default DashboardArticlesEdit;
