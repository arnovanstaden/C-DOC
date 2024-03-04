import { IProduct } from '@types';
import styles from './ShopProducts.module.scss';
import Product from './Product/Product';

const ShopProducts: React.FC<{ products: IProduct[] }> = ({ products }) => {
  return (
    <div className={styles.ShopProducts}>
      {products.map((product) => (
        <Product {...product} key={product.id} />))}
    </div>
  );
};

export default ShopProducts;
