'use client';

import styles from './ViewItem.module.scss';
import { useRouter } from 'next/navigation';
import Button from '@components/system/Button/Button';

const ViewItem: React.FC<object> = (item) => {
  const router = useRouter();

  const keys = Object.keys(item);

  const noShow = ['collectionId', 'collectionName', 'id', 'updated'];

  const showKeys = keys.filter((key) => !noShow.includes(key));

  return (
    <div className={styles.ViewItem}>
      <Button onClick={() => router.back()}>
        Back
      </Button>
      <ul>
        {showKeys.map((key) => (
          <li key={key}>
            <h5>{key} </h5>
            <p>
              {key === 'created'
                ? `${new Date(item[key]).toLocaleDateString()} ${new Date(item[key]).toLocaleTimeString()}`
                : item[key] || '-'
              }
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewItem;
