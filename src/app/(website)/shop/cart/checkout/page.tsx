import Button from '@components/system/Button/Button';
import Section from '@components/website/layout/Section/Section';
import { generateCustomMetaData } from '@utils/metadata';
import { cookies } from 'next/headers';
import styles from './styles.module.scss';
import { getProductsById } from '@lib/products';
import { redirect } from 'next/navigation';
import Checkout from '@components/website/shop/Checkout/Checkout';
import { calculateDeliveryFee } from '@lib/settings';
import { ICartItem, ICartItemWithPrice } from '@types';
import { validateCart } from '@lib/cart';

export const revalidate = 0;
export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const fetchCache = 'force-no-store';

export const metadata = generateCustomMetaData({
  title: 'Checkout | C-DOC',
  description: 'Checkout',
  robots: {
    index: false,
    follow: false,
  }
});

const CartCheckoutPage = async () => {
  const cookieStore = cookies();
  const cookie = cookieStore.get('C-DOC_Cart');

  if (!cookie) {
    return redirect('/shop/cart');
  }

  let cart: ICartItem[];

  try {
    cart = JSON.parse(cookie.value);
  } catch (e) {
    return redirect('/shop/cart');
  }

  if (cart.length === 0) {
    return redirect('/shop/cart');
  }

  const cartIsValid = await validateCart(cart);

  if (!cartIsValid) {
    return redirect('/shop/cart');
  }


  const productsFromCart = await getProductsById(cart.map((item) => item.id));

  const cartWithPrices: ICartItemWithPrice[] = productsFromCart.map((product) => ({
    id: product.id,
    price: product.price,
    quantity: cart.find((item) => item.id === product.id).quantity,
  }));

  const subTotal: number = productsFromCart.reduce((acc, product) => {
    const productQuantity = cart.find((item) => item.id === product.id).quantity;
    return acc + (product.price * productQuantity);
  }, 0);

  const deliveryFee = await calculateDeliveryFee(10000);

  return (
    <main>
      <Section
        heading='Checkout'
      >
        <div className={styles.CheckoutPage}>
          <Checkout subTotal={subTotal} deliveryFee={deliveryFee} cart={cartWithPrices} />
          <div className={styles.buttons}>
            <Button href='/shop/cart' outlined>
              Back to Cart
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default CartCheckoutPage;
