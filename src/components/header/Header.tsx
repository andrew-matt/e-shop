import { FC, ReactNode } from 'react';

import { useSelector } from 'react-redux';

import style from './Header.module.scss';

import { priceFormatter } from 'common/utils/utils';
import { CartButton } from 'components/header/cart_button/CartButton';
import { selectGoodsTotalCost } from 'components/header/header-selectors';

export const Header: FC = () => {
  const goodsTotalCost = useSelector(selectGoodsTotalCost);

  const showGoodsTotalCost = (): ReactNode => {
    if (goodsTotalCost > 0) {
      return <span className={style.totalCost}>{priceFormatter(goodsTotalCost)} р.</span>;
    }
  };

  return (
    <div className={style.header}>
      <div className={style.wrapper}>
        {showGoodsTotalCost()}
        <CartButton />
      </div>
    </div>
  );
};
