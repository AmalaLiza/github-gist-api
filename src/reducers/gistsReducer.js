import { fromJS } from 'immutable';
import {
  ACTION_LOAD_PUBLIC_GISTS_SUCCESS,
  ACTION_LOAD_FORKS_SUCCESS,
} from '../actions/actions-constants';

const initialState = fromJS({
  user: {},
  publicGists: {},
});

export function gistsReducer(state = initialState, action) {

  switch (action.type) {

    case ACTION_LOAD_PUBLIC_GISTS_SUCCESS:
      state = state.set('user', fromJS(action.payload.user));
      return state.set('publicGists', fromJS(action.payload.gists));

    case ACTION_LOAD_FORKS_SUCCESS:
      const sortedForks = action.payload.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      sortedForks.splice(3, sortedForks.length - 3);
      return state.updateIn(['publicGists', action.payload.gistId, 'forks'], () => fromJS(sortedForks));

    default:
      return state;
  }
}