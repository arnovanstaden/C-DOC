import styles from './CoursesPage.module.scss';
import { generateCustomMetaData } from '@utils/metadata';

export const metadata = generateCustomMetaData({
  title: 'Courses | C-DOC',
  description: '',
});

const CoursesPage = () => {
  return (
    <main className={styles.CoursesPage}>

    </main>
  );
};

export default CoursesPage;
