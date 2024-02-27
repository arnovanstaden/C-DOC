import React from 'react';
import styles from './ViewObject.module.scss';
import { camelCaseToTitleCase } from '@utils/utils';

interface IViewObjectProps {
  data: object;
}

const ViewObject: React.FC<IViewObjectProps> = ({ data }) => {
  let items: React.ReactNode = null;

  // Check if data is an object or an array
  if (Array.isArray(data)) {
    // If data is an array of objects
    items = data.map((item, key1) => (
      <ul className={styles.list} key={key1}>
        {Object.entries(item).map(([key2, value]) => (
          <li key={key2} className={styles.row}>
            <b>{camelCaseToTitleCase(key2)}:</b>
            {value as string}
          </li>
        ))}
      </ul>
    ));
  } else if (typeof data === 'object') {
    // If data is a single object
    items = (
      <ul className={styles.list}>
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className={styles.row}>
            <b>{camelCaseToTitleCase(key)}:</b>
            {value}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={styles.ViewObject}>
      {items}
    </div>
  );
};

export default ViewObject;
