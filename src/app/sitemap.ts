import { MetadataRoute } from 'next';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const url = 'https://www.c-doc.co.za';

  const basicPages = ['', 'about', 'contact', 'news', 'services'];

  const basicPagesSitemap = basicPages.map((page) => ({
    url: `${url}/${page}`,
    lastModified: new Date(),
  }));

  return basicPagesSitemap;
};

export default sitemap;