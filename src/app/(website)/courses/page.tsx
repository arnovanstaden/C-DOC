import Landing from '@components/website/content/Landing/Landing';
import styles from './CoursesPage.module.scss';
import { generateCustomMetaData } from '@utils/metadata';

export const metadata = generateCustomMetaData({
  title: 'Courses | C-DOC',
  description: '',
});

const CoursesPage = () => {
  return (
    <main className={styles.CoursesPage}>
      <Landing
        imageURL="/images/pages/courses/landing.jpeg"
        custom={true}
      >
        Training Courses
      </Landing>

    </main>
  );
};

export default CoursesPage;
