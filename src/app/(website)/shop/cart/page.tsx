import Button from '@components/system/Button/Button';
import Section from '@components/website/layout/Section/Section';
import { generateCustomMetaData } from '@utils/metadata';
import { cookies } from 'next/headers';
import styles from './CartPage.module.scss';
import { ICartItem } from '@utils/cart';
import { getProductsById } from '@lib/products';
import CartItem from '@components/website/shop/CartItem/CartItem';

export const revalidate = 0;
export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const fetchCache = 'force-no-store';

export const metadata = generateCustomMetaData({
  title: 'Cart | C-DOC',
  description: 'Your Cart',
  robots: {
    index: false,
    follow: false,
  }
});

const EmptyCart = () => (
  <main>
    <Section
      heading='Your Cart'
      centerAlign

    >
      <div className={styles.empty}>
        Your Cart is Empty :(
        <Button href='/shop'>
          Go Shopping
        </Button>
      </div>
    </Section>
  </main>
);

const CartPage = async () => {
  const cookieStore = cookies();
  const cookie = cookieStore.get('C-DOC_Cart');

  if (!cookie) {
    return <EmptyCart />;
  }

  const cart: ICartItem[] = JSON.parse(cookie.value);
  if (cart.length === 0) return <EmptyCart />;

  const productsFromCart = await getProductsById(cart.map((item) => item.id));

  return (
    <main>
      <Section
        heading='Your Cart'
      >
        <div className={styles.CartPage}>
          <div className={styles.list}>
            {productsFromCart.map((product) => (
              <CartItem
                product={product}
                key={product.id}
                quantity={cart.find((item) => item.id === product.id).quantity}
              />
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
};

export default CartPage;
