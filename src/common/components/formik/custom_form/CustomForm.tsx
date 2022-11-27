import * as React from 'react';
import { FC, ReactNode } from 'react';

import { Form, Formik } from 'formik';

type CustomFormPropsType = {
  initialValues: { [key: string]: string };
  validationSchema: any | (() => any);
  children: ReactNode;
  className?: string;
};

export const CustomForm: FC<CustomFormPropsType> = ({
  initialValues,
  validationSchema,
  children,
  className,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => console.log(values)}
    >
      <Form id="order-form" className={className}>
        {children}
      </Form>
    </Formik>
  );
};
