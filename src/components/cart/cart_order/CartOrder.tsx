import { FC } from 'react';

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import style from './CartOrder.module.scss';

import { Button } from 'common/components/button/Button';
import { priceFormatter } from 'common/utils/utils';
import {
  selectDiscount,
  selectGoodsTotalCost,
  selectGoodsTotalCostWithoutDiscount,
  selectGoodsTotalCount,
  selectIsLoggedIn,
} from 'components/cart/cart_order/cart-order-selectors';

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
  const goodsTotalCost = useSelector(selectGoodsTotalCost);
  const goodsTotalCount = useSelector(selectGoodsTotalCount);
  const goodsTotalCostWithoutDiscount = useSelector(selectGoodsTotalCostWithoutDiscount);
  const discount = useSelector(selectDiscount);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={style.cartFormSidebar}>
      <div className={style.sidebarStickyWrap}>
        <div className={style.cartOrder}>
          <div className={style.cartOrderTop}>
            <p className={style.totalLine}>
              <span>Order total</span>
              <span>{priceFormatter(goodsTotalCost)} р.</span>
            </p>
            <div className={style.countLine}>
              <span>Goods, {goodsTotalCount} items</span>
              <span>{priceFormatter(goodsTotalCostWithoutDiscount)} р.</span>
            </div>
            <div className={style.discountLine}>
              <span>Discount</span>
              <span>&ndash; {priceFormatter(discount)} р.</span>
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
