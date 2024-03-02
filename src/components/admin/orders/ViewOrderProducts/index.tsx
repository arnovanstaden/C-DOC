import { ICartItemExtended } from '@types';
import styles from './ViewOrderProducts.module.scss';
import Button from '@components/system/Button/Button';

const ViewOrderProducts: React.FC<{ cart: ICartItemExtended[] }> = ({ cart }) => {
  return (
    <div className={styles.ViewOrderProducts}>
      <h3>Cart</h3>
      <div className={styles.item}>
        <h4>Name</h4>
        <h4>Code</h4>
        <h4>Quantity</h4>
        <h4>Price</h4>
        <h4>Link</h4>
      </div>
      {cart.map((item) => (
        <div className={styles.item} key={item.id}>
          <p>{item.name}</p>
          <p>{item.code}</p>
          <p>{item.quantity}</p>
          <p>R {item.price}</p>
          <Button href={item.link} target="_blank" >
            View
          </Button>
        </div>
      ))
      }
    </div >
  );
};

export default ViewOrderProducts;
