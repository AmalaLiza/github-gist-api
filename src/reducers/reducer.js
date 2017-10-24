import { fromJS } from 'immutable';
import {
  ACTION_SIGN_IN_ERROR,
  ACTION_HIDE_ERROR,
} from '../actions/actions-constants';

const initialState = fromJS({
  user: {},
  publicGists: {},
  error: false,
});

export function reducer(state = initialState, action) {

  switch (action.type) {

    case ACTION_SIGN_IN_ERROR:
      return state.set('publicGists', fromJS(action.payload.gists));

    case ACTION_HIDE_ERROR:
      return state.update('error', () => false);

    default:
      return state;
  }
}