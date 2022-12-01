import * as React from 'react';
import { FC, ReactNode } from 'react';

import { Form } from 'formik';

type CustomFormPropsType = {
  children: ReactNode;
  formId?: string;
  className?: string;
};

export const CustomForm: FC<CustomFormPropsType> = ({ children, formId, className }) => {
  return (
    <Form id={formId} className={className}>
      {children}
    </Form>
  );
};
