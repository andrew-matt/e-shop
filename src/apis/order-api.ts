import { arrayUnion, doc, setDoc } from 'firebase/firestore';
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
            orderedGoods: goodsIDs,
          },
        }),
      },
      { merge: true },
    );
  },
};
