import { call, put, takeEvery } from 'redux-saga/effects';

import { authAPI } from 'api/auth-api';
import { setIsInitialized } from 'app/app-reducer';
import { setAuth } from 'components/auth/auth-reducer';

// sagas
export function* initializeAppWorkerSaga(): Generator<
  any,
  void,
  SignedInUserDataType | null
> {
  try {
    const data = yield call(authAPI.initializeApp);

    if (data !== null) {
      const { userEmail, userId } = data;

      yield put(setAuth({ userEmail, userId }));
    }
  } finally {
    yield put(setIsInitialized());
  }
}

// actions
export const initializeApp = () => ({ type: 'APP/INITIALIZE-APP' } as const);

// watcher
export function* appWatcherSaga(): Generator {
  yield takeEvery('APP/INITIALIZE-APP', initializeAppWorkerSaga);
}

// types
export type SignedInUserDataType = {
  userEmail: string;
  userId: string;
};
