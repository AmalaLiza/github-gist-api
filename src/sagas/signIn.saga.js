import { call, fork, put, take } from 'redux-saga/effects';
import { signInError, signInSuccess, } from '../actions/action-creator';
import { ACTION_SIGN_IN, URL_SIGN_IN } from '../actions/actions-constants';
import request from '../request';

/**
 * Makes GET request
 * @returns {*}
 */

export function* signIn(action) {
  try {
    const { payload } = action;
    const response = yield call(request, URL_SIGN_IN,
      {
        method: 'POST',
        body: {
          username: payload.username,
          password: payload.password,
        },
      });
    yield put(signInSuccess(response));
  } catch (error) {
    yield put(signInError(error));
  }
}

/**
 * Manages watcher lifecycle
 */

export default function* signInSaga() {
  while (true) {
    const action = yield take(ACTION_SIGN_IN);
    yield fork(signIn, action);
  }
}