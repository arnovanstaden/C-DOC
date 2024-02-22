import CreateAction from '@components/admin/layout/CreateAction/CreateAction';
import { getCourses } from '@lib/courses';
import Link from 'next/link';

const CourseList: React.FC = async () => {
  const courses = await getCourses();

  return (
    <div>
      <CreateAction label="Create Course" href="/admin/courses/create" />
      <ul>
        {courses.map((course) => (
          <Link href={`/admin/courses/${course.id}`} key={course.id}>
            <li>{course.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
