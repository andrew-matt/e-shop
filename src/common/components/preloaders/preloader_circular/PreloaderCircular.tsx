import { FC } from 'react';

import style from 'common/components/preloaders/preloader_circular/PreloaderCircular.module.scss';

type PreloaderPropsType = {
  className?: string;
};

export const PreloaderCircular: FC<PreloaderPropsType> = ({ className }) => {
  return <div className={`${style.preloader} ${className}`} />;
};
