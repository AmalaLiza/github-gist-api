import {combineReducers} from 'redux';
import { mainReducer } from './mainReducer';

export default function createReducer(asyncReducers) {
  const appReducer = combineReducers({
    main: mainReducer,
    //write synchronous reducers above this line
    ...asyncReducers
  });

  return (state, action) => {
    return appReducer(state, action)
  };

};