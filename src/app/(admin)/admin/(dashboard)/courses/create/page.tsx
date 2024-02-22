import CreateEditCourse from '@components/admin/courses/CreateEditCourse/CreateEditCourse';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Course | C-DOC',
  description: 'Create Course | C-DOC',
  robots: {
    index: false,
    follow: false,
  }
};

const DashboardCoursesCreate: React.FC = () => {
  return (
    <main>
      <CreateEditCourse />
    </main>
  );
};

export default DashboardCoursesCreate;
