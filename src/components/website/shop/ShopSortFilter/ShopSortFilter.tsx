'use client';

import Button from '@components/system/Button/Button';
import styles from './ShopSortFilter.module.scss';
import { useSearchParams } from 'next/navigation';
import { BaseSelect } from '@components/system/Select/Select';
import { useRouter } from 'next/navigation';

const ShopSortFilter: React.FC<{ categories: string[] }> = ({ categories }) => {
  let currentCategory = undefined;
  const searchParams = useSearchParams();
  const router = useRouter();

  const category = searchParams.get('category');
  if (category) {
    currentCategory = category;
  }

  const updateCategoryParam = (value?: string) => {
    const newPath = `/shop${(value && value !== currentCategory) ? `?category=${value}` : ''}`;
    router.push(newPath, { scroll: false });
  };

  const updateSearchParam = (value: string) => {
    if (value === 'name') return router.push('/shop', { scroll: false });;
    const newPath = `/shop${value ? `?sort=${value}` : ''}`;
    router.push(newPath, { scroll: false });
  };

  return (
    <div className={styles.ShopSortFilter}>
      <div className={styles.categories}>
        <Button onClick={() => updateCategoryParam()} outlined={!!currentCategory}>
          All Products
        </Button>
        {categories.map((category) => (
          <Button onClick={() => updateCategoryParam(category)} key={category} outlined={category !== currentCategory}>
            {category}
          </Button>
        ))}
      </div>
      <div className={styles.sort}>
        <BaseSelect
          label='Sort By'
          defaultValue='name'
          onChange={(value) => updateSearchParam(value)}
          options={[{
            value: 'name',
            label: 'Name',
          }, {
            value: 'price',
            label: 'Price',
          }]}
        />
      </div>
    </div>
  );
};

export default ShopSortFilter;
