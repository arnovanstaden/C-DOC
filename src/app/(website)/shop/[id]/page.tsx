import Section from '@components/website/layout/Section/Section';
import styles from './ShopProductPage.module.scss';
import ProductOption from '@components/website/shop/ProductOption';
import { getProduct, getProducts } from '@lib/products';
import { Container } from '@mui/material';
import { generateCustomMetaData } from '@utils/metadata';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ShopProducts from '@components/website/shop/ShopProducts/ShopProducts';

export const generateMetadata = async ({ params }: { params: { id: string } }) => {
  const product = await getProduct(params.id);

  if (!product) return notFound();

  return generateCustomMetaData({
    title: `${product.name} | C-DOC`,
    description: product.description,
    image: product.thumbnail,
  });
};

const ShopProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await getProduct(params.id);
  let similarProducts = await getProducts(product.category);
  similarProducts = similarProducts.filter((p) => p.id !== product.id);

  if (!product) return notFound();

  return (
    <main className={styles.Product}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.image}>
            <Image
              src={product.thumbnail}
              alt="Article Image"
              layout='fill'
            />
          </div>
          <div className={styles.content}>
            <p className={styles.category}>{product.category}</p>
            <h2 className={styles.name}>{product.name}</h2>
            <p className={styles.price}>{product.price > 0 ? `R ${product.price}` : 'Free'}</p>
            <p className={styles.description}>
              {product.description}
              {product.document ? <span>This is a Digital Product</span> : null}
            </p>
            <ProductOption {...product} />
          </div>
        </div>
        {similarProducts.length > 0 && (
          <Section
            heading="Similar Products"
          >
            <ShopProducts products={similarProducts.slice(0, 4)} />
          </Section>
        )}
      </Container>
    </main>
  );
};

export default ShopProductPage;