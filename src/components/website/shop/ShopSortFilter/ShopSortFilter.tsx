'use client';

import Button from '@components/system/Button/Button';
import styles from './ShopSortFilter.module.scss';
import { useSearchParams } from 'next/navigation';

const ShopSortFilter: React.FC<{ categories: string[] }> = ({ categories }) => {
  let currentCategory = undefined;
  const searchParams = useSearchParams();

  const category = searchParams.get('category');
  if (category) {
    currentCategory = category;
  }

  return (
    <div className={styles.ShopSortFilter}>
      <div className={styles.categories}>
        <Button href="/shop" outlined={!!currentCategory}>
          All Products
        </Button>
        {categories.map((category) => (
          <Button href={`/shop?category=${category}`} key={category} outlined={category !== currentCategory}>
            {category}
          </Button>
        ))}
      </div>
      <div className={styles.sort}>

      </div>
    </div>
  );
};

export default ShopSortFilter;
