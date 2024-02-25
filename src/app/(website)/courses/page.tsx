import Landing from '@components/website/content/Landing/Landing';
import styles from './CoursesPage.module.scss';
import { generateCustomMetaData } from '@utils/metadata';
import { getCourses } from '@lib/courses';
import Courses from '@components/website/courses/CourseForm/CourseForm';

export const metadata = generateCustomMetaData({
  title: 'Courses | C-DOC',
  description: '',
  image: '/images/pages/courses/landing.jpeg',
});

const CoursesPage = async () => {
  const courses = await getCourses();

  return (
    <main className={styles.CoursesPage}>
      <Landing
        imageURL="/images/pages/courses/landing.jpeg"
      >
        <h1> Book a <span>Training Course</span></h1>
      </Landing>
      <Courses courses={courses} />
    </main>
  );
};

export default CoursesPage;
