import React from 'react';
import styles from './FormRow.module.scss';

const FormRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const columnCount = React.Children.count(children);

  return (
    <div className={styles.FormRow} style={{
      gridTemplateColumns: `repeat(${columnCount}, 1fr)`
    }}>
      {children}
    </div>
  );
};

export default FormRow;
