import { arrayUnion, doc, setDoc } from 'firebase/firestore';
import { FormikValues } from 'formik';

import { convertDate } from 'common/utils/utils';
import { GoodsItemType } from 'components/main/goods/goods-reducer';
import { db } from 'firebase-config';

export const orderApi = {
  async addOrder(
    userId: string,
    userEmail: string,
    values: FormikValues,
    orderedGoods: GoodsItemType[],
  ) {
    const docRef = doc(db, 'orders', userId);
    const date = convertDate(new Date());

    await setDoc(
      docRef,
      {
        orders: arrayUnion({
          date,
          userEmail,
          order: {
            userData: values,
            orderedGoods,
          },
        }),
      },
      { merge: true },
    );
  },
};
