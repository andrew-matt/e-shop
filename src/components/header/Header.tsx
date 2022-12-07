import { FC, ReactNode } from 'react';

import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import style from './Header.module.scss';

import { Button } from 'common/components/button/Button';
import { PreloaderLinear } from 'common/components/preloaders/preloader_linear/PreloaderLinear';
import { priceFormatter } from 'common/utils/utils';
import { CartButton } from 'components/header/cart_button/CartButton';
import {
  selectGoodsTotalCost,
  selectIsFetching,
} from 'components/header/header-selectors';
import { ProfileButtonContainer } from 'components/header/profile_button_container/ProfileButtonContainer';

export const Header: FC = () => {
  const goodsTotalCost = useSelector(selectGoodsTotalCost);
  const isFetching = useSelector(selectIsFetching);

  const navigate = useNavigate();

  const location = useLocation();

  const showGoodsTotalCost = (): ReactNode => {
    if (goodsTotalCost > 0) {
      return <span className={style.totalCost}>{priceFormatter(goodsTotalCost)} р.</span>;
    }
  };

  const showNavButton = (): ReactNode => {
    const onMainPageButtonClickHandler = (): void => navigate('/');
    const onCartButtonClickHandler = (): void => navigate('/cart');

    if (location.pathname === '/cart') {
      return (
        <Button
          className={style.navButton}
          title="Return to main page"
          onClick={onMainPageButtonClickHandler}
        />
      );
    }
    if (location.pathname === '/order') {
      return (
        <Button
          className={style.navButton}
          title="Return to cart"
          onClick={onCartButtonClickHandler}
        />
      );
    }
  };

  return (
    <div className={style.header}>
      {showNavButton()}
      <div className={style.menuWrapper}>
        <div className={style.cartButtonWrapper}>
          {showGoodsTotalCost()}
          <CartButton />
        </div>
        <ProfileButtonContainer />
      </div>
      {isFetching && <PreloaderLinear />}
    </div>
  );
};
