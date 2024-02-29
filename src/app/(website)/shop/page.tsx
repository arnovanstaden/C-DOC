import Button from '@components/system/Button/Button';
import Landing from '@components/website/content/Landing/Landing';
import Heading from '@components/website/layout/Heading';
import Section from '@components/website/layout/Section/Section';
import ShopProducts from '@components/website/shop/ShopProducts/ShopProducts';
import ShopSortFilter from '@components/website/shop/ShopSortFilter/ShopSortFilter';
import { getProducts } from '@lib/products';
import { Container } from '@mui/material';
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
      <Landing
        imageURL="/images/pages/shop/landing.jpeg"
      >
        <Heading
          heading={<>Shop</>}
          subHeading={<>Browse C-DOC’s wide range of Medical Equipment, Clothing, Gear and E-Books.</>}
          divider
        />
      </Landing>
      <Container>
        <ShopSortFilter categories={categories} />
        <ShopProducts products={productsToShow} />
      </Container>

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

  // Refs
  // const sortRef = useRef();

  // // State
  // const [filter, setFilter] = useState('All Products');
  // const [productsToShow, setProductsToShow] = useState(sortProducts(products, 'name'));

  // // Handlers

  // const handleFilter = (clickedElement) => {

  //   // Active Category
  //   const tabs = document.querySelectorAll(`.${styles.categories} button`);
  //   tabs.forEach((elem) => {
  //     elem.classList.remove(styles.active);
  //   });
  //   clickedElement.target.classList.add(styles.active);
  //   setFilter(clickedElement.target.textContent);
  // };

  // const handleSort = () => {
  //   const select = sortRef.current as HTMLSelectElement;
  //   setProductsToShow(sortProducts([...products], select.value));
  // };

  // return (
  //   <main>
  //     <Section
  //       heading="Shop"
  //       subHeading="Browse C-DOC’s wide range of Medical Equipment, Clothing, Gear and E-Books."
  //       noCross={true}
  //       className={styles.shop}
  //     >
  //       <div className={styles.categories}>
  //         <button className={`${styles.button} ${styles.active}`} onClick={(e) => handleFilter(e)}>All Products</button>
  //         <button className={styles.button} onClick={(e) => handleFilter(e)}>Medical Equipment</button>
  //         <button className={styles.button} onClick={(e) => handleFilter(e)}>Clothing &amp; Gear</button>
  //         <button className={styles.button} onClick={(e) => handleFilter(e)}>Guidance Documents</button>
  //       </div>
  //       <div className={styles.sort}>
  //         <label htmlFor="sort">Sort By:</label>
  //         <select name="sort" id="sort" onChange={handleSort} ref={sortRef}>
  //           <option value="name">Name</option>
  //           <option value="price">Price</option>
  //         </select>
  //       </div>
  //       <div className={styles.grid}>
  //         {productsToShow.map((product, index) => (
  //           (filter === 'All Products' || filter === product.category) ? <Product {...product} key={index} /> : null
  //         ))}
  //       </div>
  //     </Section>

  // <section className={styles.equipment}>
  //   <div className="heading">
  //     <h1>C-DOC Medical Kits.</h1>
  //     <span />
  //   </div>
  //   <p>The C-DOC health and safety team design products with the specific knowledge and experience of commercial diving operations. These kits are not available for puchase online but can be ordered via our order form:</p>
  //   <button className="button">
  //     <Link href="/services#equipment">
  //       Medical Kits Enquiry
  //     </Link>
  //   </button>
  // </section>
  //   </main>
  // );
};

export default ShopPage;
