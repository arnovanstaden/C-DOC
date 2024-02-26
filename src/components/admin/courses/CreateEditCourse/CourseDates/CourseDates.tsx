import { useEffect, useState } from 'react';
import styles from './CourseDates.module.scss';
import { ICourseDate } from '@types';
import Button from '@components/system/Button/Button';
import DeleteIcon from '@mui/icons-material/Delete';

interface CourseDatesProps {
  setFormDates: (dates: ICourseDate[]) => void;
  dates?: ICourseDate[];
}

const CourseDates: React.FC<CourseDatesProps> = (props) => {
  const [dates, setDates] = useState<ICourseDate[] | undefined>(props.dates);

  const addEmptyDate = () => {
    const newDate = { from: new Date().toISOString().substring(0, 10), to: new Date().toISOString().substring(0, 10) };
    setDates((prev) => prev ? [...prev, newDate] : [newDate]);
  };

  const removeDate = (index: number) => {
    setDates((prev) => prev.filter((_, i) => i !== index));
  };

  const updateDate = (index: number, type: 'to' | 'from', date: string) => {
    setDates((prev) => prev.map((d, i) => i === index ? { ...d, [type]: date } : d));
  };

  useEffect(() => {
    if (!dates) return;
    props.setFormDates(dates);
  }, [dates]);

  return (
    <div className={styles.CourseDates}>
      <div className={styles.row}>
        <input
          type="checkbox"
          name="dates"
          onChange={(e) => e.target.checked ? addEmptyDate() : setDates(undefined)}
          checked={!!dates}
        />
        <label htmlFor="dates">This course has dates</label>

      </div>
      {!!dates && (
        <>
          {dates.map((_, i) => (
            <div className={styles.dateRow} key={i}>
              <h5>{i}</h5>
              <div className={styles.date}>
                <label htmlFor="dates">From</label>
                <input
                  type="date"
                  value={dates[i].from}
                  onChange={(e) => updateDate(i, 'from', e.target.value)}
                />
              </div>
              <div className={styles.date}>
                <label htmlFor="dates">To</label>
                <input
                  type="date"
                  value={dates[i].to}
                  onChange={(e) => updateDate(i, 'to', e.target.value)}
                />
              </div>
              <DeleteIcon className={styles.deleteButton} onClick={() => removeDate(i)} />
            </div>
          ))}
          <Button type='button' onClick={addEmptyDate}>Add Another Date</Button>
        </>
      )}
    </div>
  );
};

export default CourseDates;
