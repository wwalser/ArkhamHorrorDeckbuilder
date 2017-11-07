import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {initialStateAction} from '../actions';
import * as reducers from '../store';

const reducer = combineReducers(reducers);
export default function setupStore(initialState) {
  return applyMiddleware(thunkMiddleware)(createStore)(reducer, initialState);
}
