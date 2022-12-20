import { FC, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from './UserOrders.module.scss';

import { useAppSelector } from 'common/hooks/hooks';
import { GoodsItem } from 'components/cart/cart_list/goods_item/GoodsItem';
import { fetchOrders } from 'components/user_orders/user-orders-sagas';

export const UserOrders: FC = () => {
  const dispatch = useDispatch();

  const userId = useAppSelector(state => state.auth.userId);
  const orders = useAppSelector(state => state.userOrders.orders);
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchOrders(userId));
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(-1);
    }
  }, [isLoggedIn]);

  return (
    <div className={style.orders}>
      <h2>Your orders</h2>
      {orders.map(order => {
        return (
          <div key={order.date} className={style.order}>
            <div className={style.orderInfoItem}>
              <span>Order date: {order.date}</span>
            </div>
            <div className={style.orderInfoItem}>
              <div>Ordered goods:</div>
              <div className={style.cartList}>
                {order.order.orderedGoods.map(goodsItem => {
                  return <GoodsItem key={goodsItem.id} goodsItem={goodsItem} />;
                })}
              </div>
            </div>
            <div>
              <div>Order details:</div>
              <div>{order.order.userData.country}</div>
              <div>{order.order.userData.region}</div>
              <div>{order.order.userData.city}</div>
              <div>{order.order.userData.name}</div>
              <div>{order.order.userData.phone}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
