import Landing from '@components/website/content/Landing/Landing';
import styles from './EquipmentPage.module.scss';
import { generateCustomMetaData } from '@utils/metadata';

export const metadata = generateCustomMetaData({
  title: 'Equipment | C-DOC',
  description: '',
});

const EquipmentPage = () => {
  return (
    <main className={styles.EquipmentPage}>
      <Landing
        imageURL="/images/pages/equipment/landing.jpeg"
        custom={true}
      >
        Training Courses
      </Landing>
    </main>
  );
};

export default EquipmentPage;
