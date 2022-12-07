import { FC } from 'react';

import { FormikHelpers, FormikValues } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Button } from 'common/components/button/Button';
import { Auth } from 'components/auth/Auth';
import { signUp } from 'components/auth/auth-sagas';
import style from 'components/auth/Auth.module.scss';
import { selectIsFetching } from 'components/auth/register/register-selectors';

export const Register: FC = () => {
  const dispatch = useDispatch();

  const isFetching = useSelector(selectIsFetching);

  const handleRegister = (email: string, password: string): void => {
    dispatch(signUp(email, password));
  };

  const handleSubmit = (
    values: FormikValues,
    formikHelpers: FormikHelpers<{ email: string; password: string }>,
  ): void => {
    handleRegister(values.email, values.password);
    formikHelpers.setFieldValue('password', '', false);
  };

  return (
    <Auth handleSubmit={handleSubmit}>
      <Button title="Sign up" submit className={style.button} disabled={isFetching} />
      <div>Already have an account?</div>
      <NavLink to="/login">sign in</NavLink>
    </Auth>
  );
};
