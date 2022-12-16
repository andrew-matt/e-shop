import { call, put, takeEvery } from 'redux-saga/effects';

import { userOrdersApi } from 'apis/user-orders-api';
import { setIsLoading } from 'app/app-reducer';
import { showSnackBar } from 'common/components/mui/snack_bar/snackBar-reducer';
import { handleFirebaseAuthError } from 'common/utils/error-utils';
import { OrderType, setOrders } from 'components/user_orders/user-orders-reducer';

// sagas
export function* fetchOrdersWorkerSaga(
  action: ReturnType<typeof fetchOrders>,
): Generator<any, void, OrderType[]> {
  try {
    yield put(setIsLoading({ isLoading: true }));
    const orders = yield call(userOrdersApi.getUserOrders, action.userId);

    yield put(setOrders({ orders }));
  } catch (error) {
    const errorMessage = handleFirebaseAuthError(error);

    yield put(showSnackBar({ title: errorMessage, severity: 'error' }));
  } finally {
    yield put(setIsLoading({ isLoading: false }));
  }
}

// actions
export const fetchOrders = (userId: string) =>
  ({ type: 'USER-ORDERS/FETCH-ORDERS', userId } as const);

// watcher
export function* userOrdersWatcherSaga(): Generator {
  yield takeEvery('USER-ORDERS/FETCH-ORDERS', fetchOrdersWorkerSaga);
}
