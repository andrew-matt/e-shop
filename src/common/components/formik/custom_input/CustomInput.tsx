import { FC, ReactElement } from 'react';
import * as React from 'react';

import { useField } from 'formik';

import style from './CustomInput.module.scss';

export const CustomInput: FC<CustomInputPropsType> = ({ ...props }): ReactElement => {
  const [field, meta] = useField(props);

  return (
    <>
      <input className={style.input} {...field} {...props} />
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
};
