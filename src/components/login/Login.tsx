import { FC } from 'react';

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import style from './Login.module.scss';

import { Button } from 'common/components/button/Button';
import { CustomForm } from 'common/components/formik/custom_form/CustomForm';
import { CustomInput } from 'common/components/formik/custom_input/CustomInput';
import { signIn } from 'components/login/login-sagas';

export const Login: FC = () => {
  const dispatch = useDispatch();

  const initialValues = { email: '', password: '' };
  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleLogin = (email: string, password: string): void => {
    dispatch(signIn(email, password));
  };

  return (
    <div className={style.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => handleLogin(values.email, values.password)}
      >
        <CustomForm className={style.form}>
          <CustomInput name="email" placeholder="email" className={style.input} />
          <CustomInput name="password" placeholder="password" className={style.input} />
          <Button title="Sign in" submit className={style.button} />
        </CustomForm>
      </Formik>
    </div>
  );
};
