import { FormikValues } from 'formik';
import { call, put, takeEvery } from 'redux-saga/effects';

import { orderApi } from 'apis/order-api';
import { setIsFetching } from 'app/app-reducer';
import { showSnackBar } from 'common/components/snack_bar/snackBar-reducer';
import { handleFirebaseAuthError } from 'common/utils/error-utils';
import { emptyCart } from 'components/cart/cart-reducer';
import { GoodsItemType } from 'components/main/goods/goods-reducer';
import { setOrderIsComplete } from 'components/order/order-reducer';

// sagas
export function* completeOrderWorkerSaga(
  action: ReturnType<typeof completeOrder>,
): Generator<any, void> {
  try {
    yield put(setIsFetching({ isFetching: true }));
    yield call(
      orderApi.addOrder,
      action.userId,
      action.userEmail,
      action.values,
      action.orderedGoods,
    );
    yield put(emptyCart());
    yield put(setOrderIsComplete({ orderIsComplete: true }));
  } catch (error) {
    const errorMessage = handleFirebaseAuthError(error);

    yield put(showSnackBar({ title: errorMessage, severity: 'error' }));
  } finally {
    yield put(setIsFetching({ isFetching: false }));
  }
}

// actions
export const completeOrder = (
  userId: string,
  userEmail: string,
  values: FormikValues,
  orderedGoods: GoodsItemType[],
) => ({ type: 'ORDER/COMPLETE-ORDER', userId, userEmail, values, orderedGoods } as const);

// watcher
export function* orderWatcherSaga(): Generator {
  yield takeEvery('ORDER/COMPLETE-ORDER', completeOrderWorkerSaga);
}
