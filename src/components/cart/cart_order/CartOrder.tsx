import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import style from './CartOrder.module.scss';

import { Button } from 'common/components/button/Button';
import { useAppSelector } from 'common/hooks/hooks';
import { changePriceFormat } from 'common/utils/utils';

type CartOrderPropsType = {
  buttonTitle: string;
  onButtonClick?: () => void;
  form?: string;
};

export const CartOrder: FC<CartOrderPropsType> = ({
  buttonTitle,
  onButtonClick,
  form,
}) => {
  const goodsCost = useAppSelector(state => state.cart.goodsCost);
  const goodsAmount = useAppSelector(state => state.cart.goodsAmount);
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  return (
    <div className={style.cartFormSidebar}>
      <div className={style.sidebarStickyWrap}>
        <div className={style.cartOrder}>
          <div className={style.cartOrderTop}>
            <p className={style.totalLine}>
              <span>Order total</span>
              <span>${changePriceFormat(goodsCost)}</span>
            </p>
            <div className={style.countLine}>
              <span>Goods, {goodsAmount} items</span>
            </div>
          </div>
          {isLoggedIn ? (
            <Button
              className={style.cartOrderButton}
              title={buttonTitle}
              onClick={onButtonClick}
              form={form}
              submit
            />
          ) : (
            <div>
              Please, <NavLink to="/login">sign in</NavLink> to proceed to checkout.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
