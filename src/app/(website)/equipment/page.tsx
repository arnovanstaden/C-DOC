import Landing from '@components/website/content/Landing/Landing';
import styles from './EquipmentPage.module.scss';
import { generateCustomMetaData } from '@utils/metadata';

export const metadata = generateCustomMetaData({
  title: 'Equipment | C-DOC',
  description: '',
  image: '/images/pages/equipment/landing.jpeg',
});

const EquipmentPage = () => {
  return (
    <main className={styles.EquipmentPage}>
      <Landing
        imageURL="/images/pages/equipment/landing.jpeg"
      >
        Training Courses
      </Landing>
    </main>
  );
};

export default EquipmentPage;
