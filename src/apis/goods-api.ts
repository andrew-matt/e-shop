import { doc, getDoc } from 'firebase/firestore';

import { db } from 'firebase-config';

// apis
export const goodsApi = {
  async getGoods(): Promise<ResponseGoodsItemType[] | undefined> {
    const docRef = doc(db, 'goods', 'televisions');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().data;
    }
  },
};

// types
export type ResponseGoodsItemType = {
  brand: string;
  description: string;
  id: string;
  image: string;
  price: number;
};
