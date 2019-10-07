/*
    manages all the application states through the react-redux
*/
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import { isBrowser } from 'helpers/check';
import * as reducers from './state';
import persistConfig from './state/persistConfig';

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = (isBrowser ? (window as any) : {}).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunkMiddleware];

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));
export const persistor = persistStore(store);

export const dispatch = store.dispatch;
export const getState = () => store.getState();

export default store;
