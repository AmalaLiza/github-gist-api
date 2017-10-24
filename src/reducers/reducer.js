import { fromJS } from 'immutable';
import { ACTION_HIDE_ERROR, } from '../actions/actions-constants';

const initialState = fromJS({
  error: false,
});

export function reducer(state = initialState, action) {

  switch (action.type) {

    case ACTION_HIDE_ERROR:
      return state.update('error', () => false);

    default:
      return state;
  }
}