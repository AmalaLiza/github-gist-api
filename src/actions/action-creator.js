import { ACTION_HIDE_ERROR, ACTION_SIGN_IN, ACTION_SIGN_IN_ERROR, ACTION_SIGN_IN_SUCCESS } from './actions-constants';

export function signIn(username, password) {
  return {
    type: ACTION_SIGN_IN,
    payload: { username, password },
  };
}

export function signInSuccess(payload) {
  return {
    type: ACTION_SIGN_IN_SUCCESS,
    payload,
  };
}

export function signInError(error) {
  return {
    type: ACTION_SIGN_IN_ERROR,
    error,
  };
}

export function hideError() {
  return {
    type: ACTION_HIDE_ERROR,
  };
}