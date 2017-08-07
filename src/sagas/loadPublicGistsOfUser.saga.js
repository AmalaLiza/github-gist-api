import { call, fork, take, cancel, put } from 'redux-saga/effects';
import request from '../request';
import { loadPublicGistsOfUserSuccess, loadPublicGistsOfUserError } from '../actions/action-creator';
import {
  ACTION_LOAD_PUBLIC_GISTS,
  URL_LOAD_PUBLIC_GISTS,
} from '../actions/actions-constants';


/**
 * Makes GET request
 * @returns {*}
 */
export function* loadPublicGistsOfUser(action) {

  try {
    const response = yield call(request, URL_LOAD_PUBLIC_GISTS, { method: 'GET' });

    console.log(response);
    //yield put(loadPublicGistsOfUserSuccess(normalizeItems(response.result, 'eaiId')));
  } catch (error) {
    yield put(loadPublicGistsOfUserError(error));
    console.log(error);
  }
}

/**
 * watches for ACTION_LOAD_PUBLIC_GISTS and calls loadPublicGistsOfUser
 */
export function* loadPublicGistsOfUserWatcher() {
  while (true) {
    yield call(loadPublicGistsOfUser, yield take('gga/LOAD_PUBLIC_GISTS'));
  }
}

/**
 * Manages watcher lifecycle
 */
export default function* mySaga() {
  // Fork watcher so we can continue execution
  yield fork(loadPublicGistsOfUserWatcher);
}