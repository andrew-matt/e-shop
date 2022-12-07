import { FC } from 'react';

import { FormikHelpers, FormikValues } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Button } from 'common/components/button/Button';
import { Auth } from 'components/auth/Auth';
import { signIn } from 'components/auth/auth-sagas';
import style from 'components/auth/Auth.module.scss';
import { selectIsFetching } from 'components/auth/login/login-selectors';

export const Login: FC = () => {
  const dispatch = useDispatch();

  const isFetching = useSelector(selectIsFetching);

  const handleLogin = (email: string, password: string): void => {
    dispatch(signIn(email, password));
  };

  const handleSubmit = (
    values: FormikValues,
    formikHelpers: FormikHelpers<{ email: string; password: string }>,
  ): void => {
    handleLogin(values.email, values.password);
    formikHelpers.setFieldValue('password', '', false);
  };

  return (
    <Auth handleSubmit={handleSubmit}>
      <Button title="Sign in" submit className={style.button} disabled={isFetching} />
      <div>Don&apos;t have an account?</div>
      <NavLink to="/register">sign up</NavLink>
    </Auth>
  );
};
