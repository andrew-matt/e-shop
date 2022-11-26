import { FC } from 'react';

import style from './Preloader.module.scss';

type PreloaderPropsType = {
  className?: string;
};

export const Preloader: FC<PreloaderPropsType> = ({ className }) => {
  return <div className={`${style.preloader} ${className}`} />;
};
