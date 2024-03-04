import { IEquipment, IEquipmentForm } from '@types';
import styles from './EquipmentList.module.scss';
import { UseFormRegister } from 'react-hook-form';

interface IEquipmentListProps {
  equipment: IEquipment[]
  register: UseFormRegister<IEquipmentForm>;
}

const EquipmentList: React.FC<IEquipmentListProps> = ({ equipment, register }) => {
  const categories = equipment.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc; // This line was missing
  }, []);

  return (
    <div className={styles.EquipmentList}>
      {categories.map((category) => (
        <div className={styles.category} key={category}>
          <h4>{category}</h4>
          <ul>
            {equipment.filter((eq) => eq.category === category)
              .map((item) => (
                <li key={item.name}>
                  <label>{item.name}</label>
                  <input
                    type="number"
                    {...register(`items.${item.id}`)}
                  />
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default EquipmentList;
