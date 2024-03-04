import CourseList from '@components/admin/courses/CourseList/CourseList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Courses | C-DOC',
  description: 'Courses | C-DOC',
  robots: {
    index: false,
    follow: false,
  }
};

const DashboardCourses: React.FC = () => {
  return (
    <main>
      <CourseList />
    </main>
  );
};

export default DashboardCourses;
