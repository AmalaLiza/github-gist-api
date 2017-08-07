import { call, take, cancel, put } from 'redux-saga/effects';
import request from '../request';
import { loadPublicGistsOfUserSuccess, loadPublicGistsOfUserError } from '../actions/action-creator';
import {
  BASE_URL,
  ACTION_LOAD_PUBLIC_GISTS,
} from '../actions/actions-constants';
import { normalizeItems } from '../utils';

/**
 * Makes GET request
 * @returns {*}
 */
export function* loadPublicGistsOfUser(action) {

  try {

    const URL_LOAD_PUBLIC_GISTS = BASE_URL + '/users/' + action.userName + '/gists';
    const response = yield call(request, URL_LOAD_PUBLIC_GISTS, { method: 'GET' });

    yield put(loadPublicGistsOfUserSuccess(normalizeItems(response, 'id'), response[0].owner));
  } catch (error) {
    yield put(loadPublicGistsOfUserError(error));
    console.log(error);
  }
}

/**
 * Manages watcher lifecycle
 */
export default function* loadPublicGistsOfUserSaga() {
  while (true) {
    const action = yield take(ACTION_LOAD_PUBLIC_GISTS);
    yield call(loadPublicGistsOfUser, action);
  }
}