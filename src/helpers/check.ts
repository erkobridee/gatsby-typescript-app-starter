import * as React from 'react';
import { IProjectWindow, TRUTHY, TO_STRING, JSTypeof, TFunction } from './definitions';

// ---------------------------------------------------------------------------- //
// @begin: pre defined values

export const isProduction = process.env.NODE_ENV === 'production';

export const isDevelopment = process.env.NODE_ENV === 'development';

export const isBrowser = typeof window !== 'undefined';

const localWindow = isBrowser ? window : {};
const { CSS = {} } = localWindow as IProjectWindow;

export const hasCssVariablesSupport = isBrowser && CSS && CSS.supports && CSS.supports('(--a: 0)');

// @end: pre defined values
// ---------------------------------------------------------------------------- //
// @begin: check values

export const isFunction = <T extends TFunction>(value: any): value is T =>
	value !== null && typeof value === JSTypeof.FUNCTION;

export const isUndefined = <T extends object>(value: any): value is T =>
	value !== null && typeof value === JSTypeof.UNDEFINED;

const isObjectBasicCheck = <T extends object>(value: any): value is T =>
	value !== null && typeof value === JSTypeof.OBJECT;

export const isObject = <T extends object>(value: any): value is T =>
	isObjectBasicCheck(value) && TO_STRING.call(value) === '[object Object]';

export const isArray = <T extends []>(value: any): value is T => Array.isArray(value);

export const isString = <T extends string>(value: any): value is T =>
	value !== null && typeof value === JSTypeof.STRING && TO_STRING.call(value) === '[object String]';

export const isNumber = <T extends number>(value: any): value is T =>
	value !== null && typeof value === JSTypeof.NUMBER;

export const isTrue = (value: any): boolean => TRUTHY.test(value) && !!value;

export const isReactElement = <T extends React.ReactNode>(value: any): value is T =>
	isObjectBasicCheck(value) && '$$typeof' in value;

export const isEmptyChildren = (value: React.ReactNode) => React.Children.count(value) === 0;

// @end: check values
// ---------------------------------------------------------------------------- //
