import React from 'react';
import styles from './FormRow.module.scss';

const FormRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.FormRow}>
      {children}
    </div>
  );
};

export default FormRow;
