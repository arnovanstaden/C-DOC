import Section from '@components/website/layout/Section/Section';
import { generateCustomMetaData } from '@utils/metadata';

export const metadata = generateCustomMetaData({
  title: 'Cart | C-DOC',
  description: 'Your Cart',
  robots: {
    index: false,
    follow: false,
  }
});

const CartPage = async () => {
  return (
    <main>
      <Section
        heading='Your Cart'
      >
        Hi
      </Section>
    </main>
  );
};

export default CartPage;
