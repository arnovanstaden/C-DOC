'use client';

import styles from './ViewItem.module.scss';
import { useRouter } from 'next/navigation';
import Button from '@components/system/Button/Button';
import { camelCaseToTitleCase, formatDate, isOneLevelDeep } from '@utils/utils';
import ViewObject from './ViewObject/ViewObject';
import React from 'react';

const Item = ({ name, value }: { name: string, value: string | number | boolean | object }) => {
  if (!value) {
    return '-';
  };

  if (typeof value === 'object') {
    if (isOneLevelDeep(value)) {
      return <ViewObject data={value} />;
    }

    return 'object';
  }

  if (name === 'created' && typeof value === 'string') {
    return <p>{formatDate(value)}</p>;
  }

  if (name.toLowerCase().endsWith('link') || (typeof value === 'string' && /^(https?:\/\/)?([\w-]+\.)+[\w-]+(:\d+)?(\/\S*)?$/.test(value))) {
    return (
      <Button href={value as string} target="_blank">
        View
      </Button>
    );
  }

  return <p>{value}</p>;
};

interface IProps {
  item: object;
  customAction?: React.ReactNode;
}
const ViewItem: React.FC<IProps> = ({ item, customAction }) => {
  const router = useRouter();

  const keys = Object.keys(item);

  const noShow = ['collectionId', 'collectionName', 'id', 'updated'];

  const showKeys = keys.filter((key) => !noShow.includes(key));

  return (
    <div className={styles.ViewItem}>
      <div className={styles.buttons}>
        <Button onClick={() => router.back()}>
          Back
        </Button>
        {customAction}
      </div>

      <ul>
        {showKeys.map((key) => (
          <li key={key}>
            <h4>{camelCaseToTitleCase(key)} </h4>
            <Item name={key} value={item[key]} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewItem;