import { FC } from 'react';

import style from './Main.module.scss';

import { Goods } from 'components/main/goods/Goods';

export const Main: FC = () => {
  return (
    <div className={style.container}>
      <Goods />
      <Goods />
      <Goods />
    </div>
  );
};
