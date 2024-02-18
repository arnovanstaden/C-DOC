// import { useState } from 'react';
// import { updateCart } from '@utils/cart';
// import Link from 'next/link';
// import Image from 'next/image';
// import Section from '@components/website/layout/Section/Section';
// import styles from '../../styles/pages/shop/[id].module.scss';
import { generateCustomMetaData } from '@utils/metadata';

export const generateMetadata = async () => {
  const product = {
    name: 'Product Name',
    description: 'Product Description',
  };

  return generateCustomMetaData({
    title: `${product.name} | C-DOC`,
    description: product.description,
  });
};

const ShopProductPage = async () => {
  return null;
  // State
  // const [quantity, setQuantity] = useState(1);

  // const product = undefined;
  // if (!product) return null;

  // const ProductOption = () => {
  //   if (product.price === 0 && product.digital) {
  //     return (
  //       <div className={styles.cart}>
  //         <button className={styles.freebie}>
  //           <a href={product.document} target="blank" download>Download Freebie</a>
  //         </button>
  //       </div>
  //     );
  //   }
  //   return (
  //     <div className={styles.cart}>
  //       <div className={styles.quantity}>
  //         <input min={1} type="number" name="quantity" value={quantity} onChange={e => setQuantity(parseInt(e.target.value))} />
  //       </div>
  //       <button className={styles.add} onClick={() => updateCart(product, quantity)}>
  //         <i className="icon-local_grocery_store"></i>
  //         Add To Cart
  //       </button>
  //     </div>
  //   );
  // };

  // return (
  //   <main>
  //     <Section
  //       noCross={true}
  //       className={styles.product}
  //     >
  //       <div className={styles.shop}>
  //         <Link href="/shop">
  //           <button className="button button--border">
  //             Back to Shop
  //           </button>
  //         </Link>
  //       </div>
  //       <div className={styles.grid}>
  //         <div className={styles.image}>
  //           <Image
  //             src={product.thumbnail} alt="Article Image"
  //             layout='fill'
  //           />
  //         </div>
  //         <div className={styles.content}>
  //           <p className={styles.category}>{product.category}</p>
  //           <h2 className={styles.name}>{product.name}</h2>
  //           <p className={styles.price}>{product.price > 0 ? `R ${product.price}` : 'Free'}</p>
  //           <div className={styles.details}>
  //             <p className={styles.active}>Description</p>
  //           </div>
  //           <p className={styles.description}>
  //             {product.description}
  //             {product.digital ? <span>This is a Digital Product</span> : null}
  //           </p>
  //           <ProductOption />
  //         </div>
  //       </div>
  //     </Section>
  //   </main>
  // );
};

export default ShopProductPage;