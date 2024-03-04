// Styles
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './styles.module.scss';
import React from 'react';

interface ITextAreaPropsBase {
  name: string;
  label?: string;
  textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}

interface IPropsRegister extends ITextAreaPropsBase {
  register: UseFormRegisterReturn;
  error?: string;
}

interface IPropsManual extends ITextAreaPropsBase {
  value: string;
  onChange?: (newValue: string) => void; // Textarea typically handles string values
}

/**
 * Type guard to check if props are of type IPropsRegister
 */
const isRegisterProps = (props: IPropsRegister | IPropsManual): props is IPropsRegister => {
  return (props as IPropsRegister).register !== undefined;
};

/**
 * TextArea component that can be registered with react-hook-form or used manually.
 * @param props - The textarea component props.
 * @returns The textarea element.
 */
const TextArea: React.FC<IPropsRegister | IPropsManual> = (props): JSX.Element => {
  if (isRegisterProps(props)) {
    // Props include register
    return (
      <div className={styles.inputGroup}>
        <label htmlFor={props.name}>{props.label}</label>
        <textarea {...props.textareaProps} {...props.register} />
        {props.error && <small>{props.error}</small>}
      </div>
    );
  }

  // Manual props
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={props.name}>{props.label}</label>
      <textarea
        {...props.textareaProps}
        value={props.value}
        onChange={(e) => props.onChange?.(e.target.value)}
      />
    </div>
  );
};

export default TextArea;
