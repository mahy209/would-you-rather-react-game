import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import combineReducers from './reducers'

// eslint-disable-next-line no-underscore-dangle
let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && 
window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
    devTools = a => a;
}

const initialState = {}
const middlewares = [thunk]
 export const store = createStore(combineReducers, initialState, compose(applyMiddleware(...middlewares),devTools))
