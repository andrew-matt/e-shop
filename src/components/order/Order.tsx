import React, { FC } from 'react';

import { Formik, FormikValues } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import * as Yup from 'yup';

import style from './Order.module.scss';

import { CustomForm } from 'common/components/formik/custom_form/CustomForm';
import { CustomInput } from 'common/components/formik/custom_input/CustomInput';
import { CartOrder } from 'components/cart/cart_order/CartOrder';
import { completeOrder } from 'components/order/order-sagas';
import {
  selectGoodsInCart,
  selectIsLoggedIn,
  selectOrderIsComplete,
  selectUserEmail,
  selectUserId,
} from 'components/order/order-selectors';

export const Order: FC = () => {
  const dispatch = useDispatch();

  const initialValues = {
    country: '',
    region: '',
    city: '',
    name: '',
    phone: '',
  };

  const validationSchema = Yup.object({
    country: Yup.string().required('Country is required'),
    region: Yup.string().required('Region is required'),
    city: Yup.string().required('City is required'),
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone number is required'),
  });

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const goodsInCart = useSelector(selectGoodsInCart);
  const userId = useSelector(selectUserId);
  const userEmail = useSelector(selectUserEmail);
  const orderIsComplete = useSelector(selectOrderIsComplete);

  const handleSubmit = (values: FormikValues): void => {
    const goodsIDs = goodsInCart.map(goodsItem => goodsItem.id);

    dispatch(completeOrder(userId, userEmail, values, goodsIDs));
  };

  if (!isLoggedIn || (goodsInCart.length === 0 && !orderIsComplete)) {
    return <Navigate to="/cart" />;
  }

  if (orderIsComplete) {
    return (
      <div>
        <h2>Your order is complete!</h2>
        <span>
          Find tracking information and order details from &quot;My orders&quot;
        </span>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <CustomForm formId="order-form" className={style.form}>
            <CustomInput name="country" placeholder="Country/Region" />
            <CustomInput name="region" placeholder="State / Province / Region" />
            <CustomInput name="city" placeholder="City" />
            <CustomInput name="name" placeholder="Full name (First and Last name)" />
            <CustomInput name="phone" placeholder="Phone number" />
          </CustomForm>
        </Formik>
        <CartOrder buttonTitle="Order" form="order-form" />
      </div>
    </div>
  );
};
