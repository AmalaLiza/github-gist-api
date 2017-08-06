import {fromJS} from "immutable";

const initialState = fromJS({
  nothing: [],
});

export function mainReducer(state = initialState, action) {

  switch (action.type) {

    default:
      return state;
  }
}