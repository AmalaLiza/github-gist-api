import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import mySaga from './sagas/loadPublicGistsOfUser.saga';
import {fromJS} from 'immutable';

const sagaMiddleware = createSagaMiddleware();

function getInitialStateFromLocalStorage() {
  const applicationState = localStorage.getItem('applicationState');

  if (!applicationState)
    return undefined;

  return undefined;
}

export default function configureStore() {

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // shouldHotReload: false
        deserializeState: (state) => {
          return Object.keys(state).reduce(function (previous, current) {
            previous[current] = fromJS(state[current]);
            return previous;
          }, {});
        }
      }) : compose;

  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

  const store = createStore(createReducer(), getInitialStateFromLocalStorage(), enhancer);

  //store.runSaga = sagaMiddleware.run;
  sagaMiddleware.run(mySaga)
  // Async reducer registry
  store.asyncReducers = {};


  return store;
}