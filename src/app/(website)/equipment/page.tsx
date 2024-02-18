import styles from './EquipmentPage.module.scss';
import { generateCustomMetaData } from '@utils/metadata';

export const metadata = generateCustomMetaData({
  title: 'Equipment | C-DOC',
  description: '',
});

const EquipmentPage = () => {
  return (
    <main className={styles.EquipmentPage}>

    </main>
  );
};

export default EquipmentPage;
