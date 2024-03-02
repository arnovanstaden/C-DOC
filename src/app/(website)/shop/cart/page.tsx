import Button from '@components/system/Button/Button';
import Section from '@components/website/layout/Section/Section';
import { generateCustomMetaData } from '@utils/metadata';
import { cookies } from 'next/headers';
import styles from './CartPage.module.scss';
import { getProductsById } from '@lib/products';
import CartItem from '@components/website/shop/CartItem/CartItem';
import { ICartItem } from '@types';
import { validateCart } from '@lib/cart';
import EmptyCart from '@components/website/shop/EmptyCart';

export const revalidate = 0;
export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const fetchCache = 'force-no-store';

const cookieName = 'C-DOC_Cart';

export const metadata = generateCustomMetaData({
  title: 'Cart | C-DOC',
  description: 'Your Cart',
  robots: {
    index: false,
    follow: false,
  }
});



const CartPage = async () => {
  const cookieStore = cookies();
  const cookie = cookieStore.get(cookieName);

  if (!cookie) {
    return <EmptyCart />;
  }

  let cart: ICartItem[];

  try {
    cart = JSON.parse(cookie.value);
  } catch (e) {
    return <EmptyCart clearCart />;
  }

  if (cart.length === 0) return <EmptyCart />;

  const cartIsValid = await validateCart(cart);

  if (!cartIsValid) {
    return <EmptyCart clearCart />;
  }

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
          <div className={styles.buttons}>
            <Button href='/shop' outlined>
              Continue Shopping
            </Button>
            <Button href='/shop/cart/checkout'>
              Checkout
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default CartPage;
