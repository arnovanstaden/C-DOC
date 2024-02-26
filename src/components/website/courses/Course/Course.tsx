import { ICourse } from '@types';
import styles from './Course.module.scss';
import { Checkbox } from '@mui/material';

interface CourseProps {
  course: ICourse;
  selectCourse: (course: ICourse) => void;
  selected: boolean;
}

const Course: React.FC<CourseProps> = ({ course, selectCourse, selected }) => {
  const handleCheck = (checked: boolean) => {
    if (checked) {
      selectCourse(course);
      return;
    }

    selectCourse(undefined);
  };

  return (
    <div className={styles.Course} >
      <div className={styles.details}>
        <h3>{course.name}</h3>
        <p className={styles.price}>R {course.price}</p>
        <p>{course.description}</p>
      </div>
      <Checkbox checked={selected} onChange={(e) => handleCheck(e.target.checked)} />
    </div>
  );
};

export default Course;
