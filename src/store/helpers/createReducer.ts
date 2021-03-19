import { AnyAction, Action } from 'redux';
import { isFunction } from 'helpers/check';
import { TReducerMapFunction } from './definitions';

/**
 * Define a reducer with a initial value and a map of reducer functions by the action type,
 * when there is no type matching the reducer will return the state value
 *
 * @param  {S} initialState
 * @return {TReducerMapFunction<S, A>} reducer function
 */
export function createReducer<A extends Action = AnyAction, S = any>(initialState: S): TReducerMapFunction<S, A> {
  return (reducerMap) => (state = initialState, action) => {
    const { type = '__[[__not__defined__]]__' } = action || {};
    const reducer = reducerMap[type];
    return isFunction(reducer) ? reducer(state, action) : state;
  };
}

export default createReducer;
