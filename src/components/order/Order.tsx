import { FC } from 'react';

import * as Yup from 'yup';

import style from './Order.module.scss';

import { CustomForm } from 'common/components/formik/custom_form/CustomForm';
import { CustomInput } from 'common/components/formik/custom_input/CustomInput';
import { CartOrder } from 'components/cart/cart_order/CartOrder';

export const Order: FC = () => {
  const customFormInitialValues = {
    country: '',
    region: '',
    city: '',
    name: '',
    phone: '',
  };

  const customFormValidationSchema = Yup.object({
    country: Yup.string().required('Country is required'),
    region: Yup.string().required('Region is required'),
    city: Yup.string().required('City is required'),
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone is required'),
  });

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <CustomForm
          initialValues={customFormInitialValues}
          validationSchema={customFormValidationSchema}
          className={style.form}
        >
          <CustomInput name="country" placeholder="Country/Region" />
          <CustomInput name="region" placeholder="State / Province / Region" />
          <CustomInput name="city" placeholder="City" />
          <CustomInput name="name" placeholder="Full name (First and Last name)" />
          <CustomInput name="phone" placeholder="Phone number" />
        </CustomForm>
        <CartOrder buttonTitle="Order" form="order-form" />
      </div>
    </div>
  );
};
