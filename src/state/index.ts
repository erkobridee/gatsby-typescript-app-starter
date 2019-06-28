/*
    manages all the application states through the react-redux

    IMPORTANT:
        this project uses the re-duck architecture to organize itself
        learn more about it on the links bellow
        https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be
        https://github.com/FortechRomania/react-redux-complete-example
*/

import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { isBrowser } from 'helpers/check';
import * as reducers from './ducks';

const rootReducer = combineReducers(reducers);
const composeEnhancers = (isBrowser ? (window as any) : {}).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunkMiddleware];

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
export const dispatch = store.dispatch;
export const getState = () => store.getState();

export default store;
