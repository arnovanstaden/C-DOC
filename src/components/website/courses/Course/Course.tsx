import { ICourse } from '@types';
import styles from './Course.module.scss';

interface CourseProps {
  course: ICourse;
  selectCourse: (course: ICourse) => void;
  selected: boolean;
}

const Course: React.FC<CourseProps> = ({ course, selectCourse, selected }) => {
  return (
    <div className={styles.Course} >
      <div className={styles.details}>
        <h3>{course.name}</h3>
        <p className={styles.price}>R {course.price}</p>
        {course.dates && (
          <div className={styles.date}>
            <span>Select Date:</span>
            <select name="Course Date" id={course.id}>
              {course.dates.map((date, index) => (
                <option value={`${date.from} - ${date.to}`} key={index}>{date.from.toLocaleString().substring(0, 10)} - {date.to.toLocaleString().substring(0, 10)}</option>
              ))}
            </select>
          </div>
        )}
        <p>{course.description}</p>
      </div>
      <input
        type="radio"
        name="Type"
        required
        checked={selected}
        onChange={(val) => val.target.checked ? selectCourse(course) : selectCourse(undefined)}
      />
    </div>
  );
};

export default Course;
