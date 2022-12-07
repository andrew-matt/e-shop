import { FC } from 'react';

import LinearProgress from '@mui/material/LinearProgress';

import style from './PreloaderLinear.module.scss';

export const PreloaderLinear: FC = () => {
  return <LinearProgress className={style.preloader} />;
};
