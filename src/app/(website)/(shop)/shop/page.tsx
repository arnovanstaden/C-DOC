// import Link from 'next/link';
// import { useState, useRef } from 'react';
// import styles from '../../styles/pages/shop.module.scss';
// import { sortProducts } from '@utils/utils';
// import Section from '@components/website/layout/Section/Section';
// import Product from '@components/website/content/Product/Product';
// import { generateCustomMetaData } from '@utils/metadata';

import Landing from '@components/website/content/Landing/Landing';

// export const metadata = generateCustomMetaData({
//   title: 'Shop | C-DOC',
//   description: 'Browse C-DOC’s wide range of Medical Equipment, Clothing, Gear and E-Books.',
// });


const ShopPage = async () => {
  return (
    <main>
      <Landing
        imageURL="/images/pages/shop/landing.jpeg"
        custom={true}
      >
        Training Courses
      </Landing>
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

  //     <section className={styles.equipment}>
  //       <div className="heading">
  //         <h1>C-DOC Medical Kits.</h1>
  //         <span />
  //       </div>
  //       <p>The C-DOC health and safety team design products with the specific knowledge and experience of commercial diving operations. These kits are not available for puchase online but can be ordered via our order form:</p>
  //       <button className="button">
  //         <Link href="/services#equipment">
  //           Medical Kits Enquiry
  //         </Link>
  //       </button>
  //     </section>
  //   </main>
  // );
};

export default ShopPage;
