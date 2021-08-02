import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from '../src/reducers/index';

const middleware = [thunk]
export const store = createStore(combineReducers, applyMiddleware(...middleware));

