// Components
import Section from '@components/website/layout/Section/Section';

// Styles
import { generateCustomMetaData } from '@utils/metadata';
import CartSuccess from '@components/website/shop/CartSuccess/CartSuccess';

export const metadata = generateCustomMetaData({
  title: 'Success | C-DOC',
  description: 'Transaction Successful',
  robots: {
    index: false,
    follow: false,
  }
});

const SuccessPage = () => {
  return (
    <main>
      <Section
        heading="Success."
      >
        <CartSuccess />
      </Section>
    </main>
  );
};


export default SuccessPage;
