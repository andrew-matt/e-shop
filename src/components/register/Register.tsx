import { FC } from 'react';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Formik } from 'formik';
import * as Yup from 'yup';

import style from './Register.module.scss';

import { Button } from 'common/components/button/Button';
import { CustomForm } from 'common/components/formik/custom_form/CustomForm';
import { CustomInput } from 'common/components/formik/custom_input/CustomInput';

export const Register: FC = () => {
  const initialValues = { email: '', password: '' };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleRegister = async (email: string, password: string): Promise<void> => {
    try {
      const auth = getAuth();

      const promise = await createUserWithEmailAndPassword(auth, email, password);

      console.log(promise);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => handleRegister(values.email, values.password)}
      >
        <CustomForm className={style.form}>
          <CustomInput name="email" placeholder="email" className={style.input} />
          <CustomInput name="password" placeholder="password" className={style.input} />
          <Button title="Sign up" submit className={style.button} />
        </CustomForm>
      </Formik>
    </div>
  );
};
