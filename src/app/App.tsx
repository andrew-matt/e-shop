import React, { FC } from 'react';

import style from 'app/App.module.scss';
import { Header } from 'components/header/Header';
import { Main } from 'components/main/Main';

export const App: FC = () => {
  return (
    <div className={style.app}>
      <Header />
      <Main />
    </div>
  );
};
