// ---------------------------------------------------------------------------- //
// @begin: constants block

export const TO_STRING = {}.toString;

// @end: constants block
// ---------------------------------------------------------------------------- //
// @begin: enums block

export enum JSTypeofEnum {
	UNDEFINED = 'undefined',
	FUNCTION = 'function',
	OBJECT = 'object',
	STRING = 'string',
}

// @end: enums block
// ---------------------------------------------------------------------------- //
// @begin: types block

export type TFunction = (...args: any[]) => any;

export type TEmptyCallback = () => void;

export type TCallback = TEmptyCallback | TFunction;

export type TRenderFunction<T> = (options?: T) => JSX.Element;

export type TRender<T = any> = TRenderFunction<T> | React.ReactNode;

// @end: types block
// ---------------------------------------------------------------------------- //
// @begin: interfaces block

export interface IProjectWindow extends Window {
	CSS?: any;
}

// @end: interfaces block
// ---------------------------------------------------------------------------- //
