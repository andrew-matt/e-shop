import { FC } from 'react';

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import style from './LogoButton.module.scss';

export const LogoButton: FC = () => {
  const navigate = useNavigate();

  const onLogoClickHandler = (): void => {
    navigate('/');
  };

  return (
    <Button onClick={onLogoClickHandler}>
      <div className={style.logo}>E-shop</div>
    </Button>
  );
};
