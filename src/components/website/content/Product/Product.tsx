import Image from 'next/image';
import Link from 'next/link';
import { IProduct } from '../../../../utils/cart';


// Styles 
import styles from './product.module.scss';

export default function Product(product: IProduct) {

  if (!product.visibility) {
    return null
  }

  return (
    <Link href={`/shop/${product.id}`} className={styles.product} data-category={product.category}>
      <div className={styles.image}>
        <Image
          src={product.thumbnail}
          alt="Article Image"
          layout='fill'
        />
      </div>
      <h4>{product.name}</h4>
      <p>{product.price > 0 ? `R ${product.price}` : 'Free'}</p>
    </Link>
  )
}
