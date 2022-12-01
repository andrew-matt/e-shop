import { call, put, takeEvery } from 'redux-saga/effects';

import { authAPI } from 'api/auth-api';
import { showSnackBar } from 'common/components/snack_bar/snackBar-reducer';
import { handleFirebaseAuthError } from 'common/utils/error-utils';
import { setAuth } from 'components/login/auth/auth-reducer';

export function* loginWorkerSaga(
  action: ReturnType<typeof signIn>,
): Generator<any, void, { userEmail: string; userId: string }> {
  try {
    const { userEmail, userId }: { userEmail: string; userId: string } = yield call(
      authAPI.logIn,
      action.email,
      action.password,
    );

    yield put(setAuth({ userEmail, userId }));
    yield put(
      showSnackBar({ title: `You're logged in as: ${userEmail}.`, severity: 'success' }),
    );
  } catch (error) {
    const errorMessage = handleFirebaseAuthError(error);

    yield put(showSnackBar({ title: errorMessage, severity: 'error' }));
  }
}

export const signIn = (
  email: string,
  password: string,
): { type: string; email: string; password: string } =>
  ({ type: 'LOGIN/SIGN-IN', email, password } as const);

export function* loginWatcherSaga(): Generator {
  yield takeEvery('LOGIN/SIGN-IN', loginWorkerSaga);
}
