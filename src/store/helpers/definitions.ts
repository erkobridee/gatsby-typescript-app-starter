import { AnyAction, Action, Reducer } from 'redux';

export interface IAction<P = any, T = string> extends Action<T> {
	payload?: P;
}

export interface IReducerOptions<S = any, A extends Action = AnyAction> {
	state: S;
	action: A;
}

export type TReducer<S = any, A extends Action = AnyAction> = (state: S, action: A) => S;

export interface IReducerMap<S, A extends Action = AnyAction> {
	[key: string]: TReducer<S, A>;
}

export type TReducerMapFunction<S, A extends Action = AnyAction> = (reducerMap: IReducerMap<S, A>) => Reducer<S, A>;
