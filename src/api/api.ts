import { doc, getDoc } from 'firebase/firestore';

import { GoodsItemType } from 'components/main/goods/goods-reducer';
import { db } from 'firebase-config';

export const api = {
  async getGoods(): Promise<GoodsItemType[] | undefined> {
    const docRef = doc(db, 'e-shop', 'goods');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().goods;
    }
  },
};
