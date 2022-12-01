import { FC, ReactElement } from 'react';
import * as React from 'react';

import { useField } from 'formik';

import style from './CustomInput.module.scss';

export const CustomInput: FC<CustomInputPropsType> = ({
  name,
  placeholder,
  className,
}): ReactElement => {
  const [field, meta] = useField({
    name,
    placeholder,
    className,
  });

  return (
    <>
      <input
        className={`${style.input} ${className}`}
        {...field}
        name={name}
        placeholder={placeholder}
      />
      {meta.touched && meta.error ? (
        <div className={style.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

// types
type CustomInputPropsType = {
  name: string;
  placeholder?: string;
  className?: string;
};
