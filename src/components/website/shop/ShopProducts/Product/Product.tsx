import Image from 'next/image';
import Link from 'next/link';


// Styles 
import styles from './product.module.scss';
import { IProduct } from '@types';

export default function Product(product: IProduct) {
  if (!product.visible) {
    return null;
  }

  return (
    <Link
      href={`/shop/${product.id}`}
      className={styles.Product}
    >
      <div className={styles.image}>
        <Image
          src={product.thumbnail}
          alt="Product Image"
          width={300}
          height={300}
        />
      </div>
      <h4>{product.name}</h4>
      <p>{product.price > 0 ? `R ${product.price}` : 'Free'}</p>
    </Link>
  );
}
