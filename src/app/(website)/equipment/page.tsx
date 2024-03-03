import Landing from '@components/website/content/Landing/Landing';
import styles from './EquipmentPage.module.scss';
import { generateCustomMetaData } from '@utils/metadata';
import Heading from '@components/website/layout/Heading';
import EquipmentForm from '@components/website/equipment/EquipmentForm/EquipmentForm';
import { getEquipment } from '@lib/equipment';

export const metadata = generateCustomMetaData({
  title: 'Equipment | C-DOC',
  description: '',
  image: '/images/pages/equipment/landing.jpeg',
});

const EquipmentPage = async () => {
  const equipment = await getEquipment();

  return (
    <main className={styles.EquipmentPage}>
      <Landing
        imageURL="/images/pages/equipment/landing.jpeg"
      >
        <Heading
          heading="Equipment Enquiries"
          subHeading="C-DOC provides a wide range of medical equipment, clothing, gear and e-books."
          divider
        />
      </Landing>
      <EquipmentForm equipment={equipment} />
    </main>
  );
};

export default EquipmentPage;
