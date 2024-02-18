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
      <h1>Courses</h1>
    </main>
  );
};

export default DashboardCourses;
