import Link from 'next/link';
import { getProducts } from '@lib/products';
import styles from './styles.module.scss';
import CreateAction from '@components/admin/layout/CreateAction/CreateAction';

const ProductList = async () => {
  const product = await getProducts();

  return (
    <div className={styles.ProductList}>
      <CreateAction label="Create Product" href="/admin/products/create" />
      {
        product.length === 0
          ? <p>You have no products</p>
          : (
            <ul>
              {product.map((product) => (
                <Link href={`/admin/products/${product.id}`} key={product.id}>
                  <li className={styles.Product} >
                    <p>{product.name}</p>
                    <p>{product.category}</p>
                    <p>
                      <b>R {product.price}</b>
                    </p>
                  </li>
                </Link>
              ))}
            </ul>
          )
      }
    </div>
  );
};

export default ProductList;
