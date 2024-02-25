'use client';

import styles from './ViewItem.module.scss';
import { useRouter } from 'next/navigation';
import Button from '@components/system/Button/Button';
import { camelCaseToTitleCase, formatDate } from '@utils/utils';

const Item = ({ name, value }: { name: string, value: string | number | boolean | object }) => {
  if (!value) {
    return '-';
  };

  if (typeof value === 'object') {
    return JSON.stringify(value, null, 2);
  }

  if (name === 'created' && typeof value === 'string') {
    return formatDate(value);
  }

  if (typeof value === 'string' && /^(https?:\/\/)?([\w-]+\.)+[\w-]+(:\d+)?(\/\S*)?$/.test(value)) {
    return <a href={value} target="_blank">View</a>;
  }

  return value;
};

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
            <h5>{camelCaseToTitleCase(key)} </h5>
            <p>
              <Item name={key} value={item[key]} />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewItem;