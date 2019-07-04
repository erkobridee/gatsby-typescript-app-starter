/*
    manages all the application states through the react-redux
*/

import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { isBrowser } from 'helpers/check';
import * as reducers from './state';

const rootReducer = combineReducers(reducers);
const composeEnhancers = (isBrowser ? (window as any) : {}).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunkMiddleware];

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
export const dispatch = store.dispatch;
export const getState = () => store.getState();

export default store;
