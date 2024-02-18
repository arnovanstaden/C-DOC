// Styles
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './styles.module.scss';
import React from 'react';

interface IInputPropsBase {
  name: string;
  label?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

interface IPropsRegister extends IInputPropsBase {
  register: UseFormRegisterReturn;
  error?: string;
}

interface IPropsManual extends IInputPropsBase {
  value: string | number;
  onChange?: (newValue: string | number) => void; // Assuming onChange handles string to keep it consistent with e.target.value
}

/**
 * Type guard to check if props are of type IPropsRegister
 */
const isRegisterProps = (props: IPropsRegister | IPropsManual): props is IPropsRegister => {
  return (props as IPropsRegister).register !== undefined;
};

/**
 * Input component that can be registered with react-hook-form or used manually.
 * @param props - The input component props.
 * @returns The input element.
 */
const Input: React.FC<IPropsRegister | IPropsManual> = (props): JSX.Element => {
  if (isRegisterProps(props)) {
    // Props include register
    return (
      <div className={styles.inputGroup}>
        <label htmlFor={props.name}>{props.label}</label>
        <input {...props.inputProps} {...props.register} />
        {props.error && <small>{props.error}</small>}
      </div>
    );
  }

  // Manual props
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        {...props.inputProps}
        value={props.value}
        onChange={(e) => props.onChange?.(e.target.value)}
      />
    </div>
  );
};

export default Input;
