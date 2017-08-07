import { call, fork, take, cancel, put } from 'redux-saga/effects';
import request from '../request';
import { loadForksSuccess, loadForksError } from '../actions/action-creator';
import { ACTION_LOAD_FORKS } from '../actions/actions-constants';


/**
 * Makes GET request
 * @returns {*}
 */
export function* loadForks(action) {

  try {

    const URL_LOAD_FORKS = 'https://api.github.com/gists/8619433/forks';
    const response = yield call(request, URL_LOAD_FORKS, { method: 'GET' });
    response.gistId = action.payload.id;
    yield put(loadForksSuccess(response));
  } catch (error) {
    yield put(loadForksError(error));
    console.log(error);
  }
}

/**
 * Manages watcher lifecycle
 */
export default function* loadForksSaga() {
  while (true) {
    const action = yield take(ACTION_LOAD_FORKS);
    console.log(action);
    yield call(loadForks, action);
  }
}