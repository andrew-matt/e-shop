import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { initializeApp } from 'app/app-sagas';
import { selectIsInitialized } from 'app/app-selectors';
import style from 'app/App.module.scss';
import { SnackBar } from 'common/components/mui/snack_bar/SnackBar';
import { PreloaderCircular } from 'common/components/preloaders/preloader_circular/PreloaderCircular';
import { Login } from 'components/auth/login/Login';
import { Register } from 'components/auth/register/Register';
import { Cart } from 'components/cart/Cart';
import { Header } from 'components/header/Header';
import { Main } from 'components/main/Main';
import { Order } from 'components/order/Order';
import { UserOrders } from 'components/user_orders/UserOrders';

export const App: FC = () => {
  const dispatch = useDispatch();

  const isInitialized = useSelector(selectIsInitialized);

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  if (!isInitialized) {
    return <PreloaderCircular />;
  }

  return (
    <div className={style.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-orders" element={<UserOrders />} />
      </Routes>
      <SnackBar />
    </div>
  );
};
