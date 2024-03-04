import { Metadata } from 'next';

/**
 * Generates Custom Meta Data for Pages
 * @param appRoute predefined app route key
 * @param customPrefix custom string to prefix title
 * @returns Metadata
 */

interface IProps {
  title: string;
  description: string;
  image?: string;
  robots?: Metadata['robots'],
}

export const generateCustomMetaData = ({ title, description, image, robots }: IProps): Metadata => {
  const url = 'https://www.c-doc.co.za';

  const images = image ?
    [{
      url: image,
      width: 500,
      height: 500,
    }]
    : [{
      url: '/images/logos/og_image.png',
      width: 500,
      height: 500,
    }];

  const metadata: Metadata = {
    title,
    description,
    metadataBase: new URL(url),
    openGraph: {
      description,
      url: url,
      siteName: 'C-DOC | Commercial Diving and Offshore Consultancy',
      images,
    },
    robots: robots || {
      index: true,
      follow: true,
    }
  };
  return metadata;
};