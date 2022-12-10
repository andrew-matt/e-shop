import { call, put, takeEvery } from 'redux-saga/effects';

import { authApi } from 'apis/auth-api';
import { setIsFetching } from 'app/app-reducer';
import { SignedInUserDataType } from 'app/app-sagas';
import { showSnackBar } from 'common/components/snack_bar/snackBar-reducer';
import { handleFirebaseAuthError } from 'common/utils/error-utils';
import { removeAuth, setAuth } from 'components/auth/auth-reducer';

// sagas
export function* signUpWorkerSaga(
  action: ReturnType<typeof signUp>,
): Generator<any, void, SignedInUserDataType> {
  try {
    yield put(setIsFetching({ isFetching: true }));
    const { userEmail, userId } = yield call(
      authApi.signUp,
      action.email,
      action.password,
    );

    yield put(setAuth({ userEmail, userId }));
    yield put(
      showSnackBar({
        title: `You're registered and logged in as: ${userEmail}.`,
        severity: 'success',
      }),
    );
  } catch (error) {
    const errorMessage = handleFirebaseAuthError(error);

    yield put(showSnackBar({ title: errorMessage, severity: 'error' }));
  } finally {
    yield put(setIsFetching({ isFetching: false }));
  }
}

export function* signInWorkerSaga(
  action: ReturnType<typeof signIn>,
): Generator<any, void, SignedInUserDataType> {
  try {
    yield put(setIsFetching({ isFetching: true }));
    const { userEmail, userId } = yield call(
      authApi.signIn,
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
  } finally {
    yield put(setIsFetching({ isFetching: false }));
  }
}

export function* signOutWorkerSaga(): Generator<any, void> {
  try {
    yield call(authApi.signOut);
    yield put(removeAuth());
    yield put(showSnackBar({ title: `You're now logged out.`, severity: 'success' }));
  } catch (error) {
    const errorMessage = handleFirebaseAuthError(error);

    yield put(showSnackBar({ title: errorMessage, severity: 'error' }));
  }
}

// actions
export const signUp = (email: string, password: string) =>
  ({ type: 'AUTH/SIGN-UP', email, password } as const);

export const signIn = (email: string, password: string) =>
  ({ type: 'AUTH/SIGN-IN', email, password } as const);

export const signOut = () => ({ type: 'AUTH/SIGN-OUT' } as const);

// watcher
export function* authWatcherSaga(): Generator {
  yield takeEvery('AUTH/SIGN-UP', signUpWorkerSaga);
  yield takeEvery('AUTH/SIGN-IN', signInWorkerSaga);
  yield takeEvery('AUTH/SIGN-OUT', signOutWorkerSaga);
}
