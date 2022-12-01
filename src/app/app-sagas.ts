import { call, put, takeEvery } from 'redux-saga/effects';

import { authAPI } from 'api/auth-api';
import { setIsInitialized } from 'app/app-reducer';
import { setAuth } from 'components/login/auth/auth-reducer';

export function* initializeAppWorkerSaga(): Generator<
  any,
  void,
  { userEmail: string; userId: string }
> {
  const { userEmail, userId }: { userEmail: string; userId: string } = yield call(
    authAPI.initializeApp,
  );

  yield put(setAuth({ userEmail, userId }));
  yield put(setIsInitialized());
}

export const initializeApp = (): { type: string } =>
  ({ type: 'APP/INITIALIZE-APP' } as const);

export function* appWatcherSaga(): Generator {
  yield takeEvery('APP/INITIALIZE-APP', initializeAppWorkerSaga);
}
