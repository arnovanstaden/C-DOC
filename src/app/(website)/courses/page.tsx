import Landing from '@components/website/content/Landing/Landing';
import styles from './CoursesPage.module.scss';
import { generateCustomMetaData } from '@utils/metadata';
import { getCourses } from '@lib/courses';
import Courses from '@components/website/courses/CourseForm/CourseForm';
import Heading from '@components/website/layout/Heading';

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
        <Heading
          heading={<> Book a <span>Training Course</span></>}
          subHeading={<>C-DOC offers a range of training courses for commercial divers, supervisors and managers. Our courses are designed to meet the needs of the commercial diving industry and are delivered by experienced commercial divers and diving supervisors.</>}
          divider
        />
      </Landing>
      <Courses courses={courses} />
    </main>
  );
};

export default CoursesPage;
