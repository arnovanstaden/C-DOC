import { Control, Controller, UseFormRegisterReturn } from 'react-hook-form';
import styles from './Select.module.scss';
import { MenuItem, Select as MUISelect } from '@mui/material';

interface SelectProps {
  label: string,
  options: { value: string, label: string }[],
  register: UseFormRegisterReturn;
  control: Control
  name: string;
}

const Select: React.FC<SelectProps> = (props) => {
  return (
    <div className={styles.Select}>
      <label htmlFor={props.label}>{props.label}</label>
      <Controller
        name={props.name}
        control={props.control}
        defaultValue=""
        render={({ field }) => (
          <MUISelect
            className={styles.muiSelect}
            displayEmpty
            inputProps={{
              'aria-label': props.label,
            }}
            classes={{
              select: styles.innerSelect,
            }}
            {...field}
          >
            {props.options.map((option) => (
              <MenuItem value={option.value} key={option.value}>{option.label}</MenuItem>
            ))}
          </MUISelect>
        )}
      />
    </div>
  );
};

export default Select;
