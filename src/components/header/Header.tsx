import { FC, ReactNode } from 'react';

import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import style from './Header.module.scss';

import { Button } from 'common/components/button/Button';
import { priceFormatter } from 'common/utils/utils';
import { CartButton } from 'components/header/cart_button/CartButton';
import { selectGoodsTotalCost } from 'components/header/header-selectors';

export const Header: FC = () => {
  const goodsTotalCost = useSelector(selectGoodsTotalCost);

  const navigate = useNavigate();

  const location = useLocation();

  const onMainPageButtonClickHandler = (): void => navigate('/');

  const showGoodsTotalCost = (): ReactNode => {
    if (goodsTotalCost > 0) {
      return <span className={style.totalCost}>{priceFormatter(goodsTotalCost)} р.</span>;
    }
  };

  const showMainPageButton = (): ReactNode => {
    if (location.pathname !== '/') {
      return (
        <Button
          className={style.mainPageButton}
          title="Перейти на главную"
          onClick={onMainPageButtonClickHandler}
        />
      );
    }
  };

  return (
    <div className={style.header}>
      {showMainPageButton()}
      <div className={style.cartButtonWrapper}>
        {showGoodsTotalCost()}
        <CartButton />
      </div>
    </div>
  );
};
