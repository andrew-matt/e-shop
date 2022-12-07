import { FC, ReactNode, useEffect } from 'react';

import { Formik, FormikHelpers, FormikValues } from 'formik';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import style from './Auth.module.scss';

import { CustomForm } from 'common/components/formik/custom_form/CustomForm';
import { CustomInput } from 'common/components/formik/custom_input/CustomInput';
import { selectIsLoggedIn } from 'components/auth/auth-selectors';

type AuthPropsType = {
  handleSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<{ email: string; password: string }>,
  ) => void;
  children: ReactNode;
};

export const Auth: FC<AuthPropsType> = ({ handleSubmit, children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const navigate = useNavigate();

  const initialValues = { email: '', password: '' };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate(-1);
    }
  }, [isLoggedIn]);

  return (
    <div className={style.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <CustomForm className={style.form}>
          <CustomInput name="email" placeholder="email" className={style.input} />
          <CustomInput name="password" placeholder="password" className={style.input} />
          {children}
        </CustomForm>
      </Formik>
    </div>
  );
};
