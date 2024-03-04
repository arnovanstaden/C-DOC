import Button from '@components/system/Button/Button';
import Section from '@components/website/layout/Section/Section';
import ShopProducts from '@components/website/shop/ShopProducts/ShopProducts';
import ShopSortFilter from '@components/website/shop/ShopSortFilter/ShopSortFilter';
import { getProducts } from '@lib/products';
import { } from '@mui/material';
import { generateCustomMetaData } from '@utils/metadata';

export const metadata = generateCustomMetaData({
  title: 'Shop | C-DOC',
  description: 'Browse C-DOC’s wide range of Medical Equipment, Clothing, Gear and E-Books.',
  image: '/images/pages/shop/landing.jpeg',
});

const ShopPage = async ({ searchParams }) => {
  const products = await getProducts();
  const categories = [...new Set(products.map((product) => product.category))];

  let productsToShow = products;
  if (searchParams.category) {
    productsToShow = productsToShow.filter((product) => product.category === searchParams.category);
  }

  if (searchParams.sort === 'price') {
    productsToShow = productsToShow.sort((a, b) => {
      if (a[searchParams.sort] > b[searchParams.sort]) {
        return 1;
      }
      if (a[searchParams.sort] < b[searchParams.sort]) {
        return -1;
      }
      return 0;
    });
  };

  return (
    <main>
      <Section
        heading="Shop."
        subHeading="Browse C-DOC’s wide range of Medical Equipment, Clothing, Gear and E-Books."
        centerAlign
        noCross
      >
        <ShopSortFilter categories={categories} />
        <ShopProducts products={productsToShow} />
      </Section>

      <Section
        colour="darkgrey"
        heading="C-DOC Medical Kits."
        centerAlign
      >
        <p>The C-DOC health and safety team design products with the specific knowledge and experience of commercial diving operations. These kits are not available for purchase online but can be ordered via our order form:</p>
        <Button href="/services#equipment">
          Medical Kits Enquiry
        </Button>
      </Section>
    </main>
  );
};

export default ShopPage;
