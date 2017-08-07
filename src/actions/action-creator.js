import {ACTION_LOAD_PUBLIC_GISTS, ACTION_LOAD_PUBLIC_GISTS_SUCCESS, ACTION_LOAD_PUBLIC_GISTS_ERROR} from './actions-constants'

export function loadPublicGistOfUser() {
  return {
    type: ACTION_LOAD_PUBLIC_GISTS,
  };
}

export function loadPublicGistsOfUserSuccess() {
  return {
    type: ACTION_LOAD_PUBLIC_GISTS_SUCCESS,
  };
}

export function loadPublicGistsOfUserError() {
  return {
    type: ACTION_LOAD_PUBLIC_GISTS_ERROR,
  };
}