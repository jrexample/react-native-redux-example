import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { middleware } from './utils/redux';

const middlewares = [thunk, middleware];

if (__DEV__) {
  middlewares.push(logger);
}

export default createStore(
  reducers,
  applyMiddleware(...middlewares),
);
