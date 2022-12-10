import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { FormikValues } from 'formik';

import { convertDate } from 'common/utils/utils';
import { db } from 'firebase-config';

export const orderApi = {
  async addOrder(
    userId: string,
    userEmail: string,
    values: FormikValues,
    goodsIDs: number[],
  ) {
    const docRef = doc(db, 'e-shop', 'orders');
    const date = convertDate(new Date());

    await updateDoc(docRef, {
      [userId]: arrayUnion({
        date,
        userEmail,
        order: {
          userData: values,
          orderedGoods: goodsIDs,
        },
      }),
    });
  },
};
