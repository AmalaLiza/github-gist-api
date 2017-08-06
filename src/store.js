import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { mainReducer } from './reducers/mainReducer';

/* Combine Reducers */
const appReducer = combineReducers(Object.assign({}, {
  main: mainReducer,
}));

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}