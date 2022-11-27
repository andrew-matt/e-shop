import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import style from 'app/App.module.scss';
import { Cart } from 'components/cart/Cart';
import { Header } from 'components/header/Header';
import { Main } from 'components/main/Main';
import { Order } from 'components/order/Order';

export const App: FC = () => {
  return (
    <div className={style.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
};
