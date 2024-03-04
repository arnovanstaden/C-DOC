import { getProducts } from '@lib/products';
import { MetadataRoute } from 'next';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const url = 'https://www.c-doc.co.za';

  const basicPages = ['', 'about', 'contact', 'courses', 'equipment', 'news', 'services', 'shop'];

  const basicPagesSitemap = basicPages.map((page) => ({
    url: `${url}/${page}`,
    lastModified: new Date(),
  }));

  const products = await getProducts();

  const shopPagesSitemap = products.map((product) => ({
    url: `${url}/shop/${product.id}`,
    lastModified: new Date(),
  }));

  return [
    ...basicPagesSitemap,
    ...shopPagesSitemap,
  ];
};

export default sitemap;