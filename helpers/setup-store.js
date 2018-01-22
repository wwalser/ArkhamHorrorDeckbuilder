/* @flow */

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../store';

import type {Store} from '../store';

const reducer = combineReducers(reducers);

// $FlowFixMe
export default createStore(
  reducer,
  applyMiddleware(thunkMiddleware),
);
