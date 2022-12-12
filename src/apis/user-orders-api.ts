import { doc, getDoc } from 'firebase/firestore';

import { OrderType } from 'components/user_orders/user-orders-reducer';
import { db } from 'firebase-config';

export const userOrdersApi = {
  async getUserOrders(userId: string): Promise<OrderType[] | undefined> {
    const docRef = doc(db, 'orders', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().orders;
    }
  },
};
