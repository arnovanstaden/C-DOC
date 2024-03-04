import CreateEditCourse from '@components/admin/courses/CreateEditCourse/CreateEditCourse';
import { getCourse } from '@lib/courses';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Edit Course | C-DOC',
  description: 'Edit Course | C-DOC',
  robots: {
    index: false,
    follow: false,
  }
};

const DashboardCoursesEdit: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const course = await getCourse(params.id);

  if (!course) {
    return notFound();
  }

  return (
    <main>
      <CreateEditCourse course={course} />
    </main>
  );
};

export default DashboardCoursesEdit;
