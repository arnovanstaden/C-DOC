'use client';

import { BaseSelect } from '@components/system/Select/Select';
import styles from './OrderFilter.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';

const OrderFilter: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (newValue: string) => {
    if (newValue === 'all') {
      router.push('/admin/orders');
      return;
    }

    router.push(`/admin/orders?status=${newValue}`);
  };

  return (
    <div className={styles.OrderFilter}>
      <BaseSelect
        label='Status'
        options={[
          { value: 'all', label: 'All' },
          { value: 'pending', label: 'Pending' },
          { value: 'paid', label: 'Paid' },
        ]}
        defaultValue={searchParams.get('status') || 'all'}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default OrderFilter;
