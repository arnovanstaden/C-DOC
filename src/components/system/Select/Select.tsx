import { Control, Controller, ControllerRenderProps, FieldValues, UseFormRegisterReturn } from 'react-hook-form';
import styles from './Select.module.scss';
import { MenuItem, Select as MUISelect } from '@mui/material';
import classNames from 'classnames';

interface IOption {
  value: string;
  label: string;
}

interface BaseSelectProps {
  label: string,
  options: IOption[],
  field?: ControllerRenderProps<FieldValues, string>;
  className?: string;
  onChange?: (newValue: string) => void;
  defaultValue?: string;
}

export const BaseSelect: React.FC<BaseSelectProps> = (props) => (
  <MUISelect
    className={classNames(styles.Select, props.className)}
    displayEmpty
    inputProps={{
      'aria-label': props.label,
    }}
    classes={{
      select: styles.innerSelect,
    }}
    onChange={(e) => props.onChange && props.onChange(e.target.value as string)}
    defaultValue={props.defaultValue}
    {...props.field}
  >
    {props.options.map((option) => (
      <MenuItem value={option.value} key={option.value}>{option.label}</MenuItem>
    ))}
  </MUISelect>
);

interface SelectProps {
  label: string,
  options: IOption[],
  register: UseFormRegisterReturn;
  control: Control
  name: string;
  error?: string;
  defaultValue?: string;
}

const Select: React.FC<SelectProps> = (props) => {
  return (
    <div className={styles.Select}>
      <label htmlFor={props.label}>{props.label}</label>
      <Controller
        name={props.name}
        control={props.control}
        defaultValue={props.defaultValue}
        render={({ field }) => (
          <BaseSelect
            options={props.options}
            field={field}
            label={props.label}
            defaultValue={props.defaultValue}
          />
        )}
      />
      {props.error && <small>{props.error}</small>}
    </div>
  );
};

export default Select;
