import CreateEditProduct from '@components/admin/products/CreateEditProduct/CreateEditProduct';
import { getProduct } from '@lib/products';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Edit Product | C-DOC',
  description: 'Edit Product | C-DOC',
  robots: {
    index: false,
    follow: false,
  }
};

const DashboardProductsEdit: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const product = await getProduct(params.id, false);

  if (!product) {
    return notFound();
  }

  return (
    <main>
      <CreateEditProduct product={product} />
    </main>
  );
};

export default DashboardProductsEdit;
