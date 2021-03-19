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

export const isFunction = <T extends TFunction>(value: unknown): value is T =>
  value !== null && typeof value === JSTypeof.FUNCTION;

export const isUndefined = <T extends unknown>(value: unknown): value is T =>
  value !== null && typeof value === JSTypeof.UNDEFINED;

const isObjectBasicCheck = <T extends unknown>(value: unknown): value is T =>
  value !== null && typeof value === JSTypeof.OBJECT;

export const isObject = <T extends unknown>(value: unknown): value is T =>
  isObjectBasicCheck(value) && TO_STRING.call(value) === '[object Object]';

export const isArray = <T extends unknown[]>(value: unknown): value is T => Array.isArray(value);

export const isString = <T extends string>(value: unknown): value is T =>
  value !== null && typeof value === JSTypeof.STRING && TO_STRING.call(value) === '[object String]';

export const isNumber = <T extends number>(value: unknown): value is T =>
  value !== null && typeof value === JSTypeof.NUMBER;

export const isTrue = (value: unknown): boolean => TRUTHY.test(String(value)) && !!value;

export const isReactElement = <T extends React.ReactNode>(value: unknown): value is T =>
  /* eslint-disable-next-line */ isObjectBasicCheck(value) && '$$typeof' in (value as any);

export const isEmptyChildren = (value: React.ReactNode) => React.Children.count(value) === 0;

// @end: check values
// ---------------------------------------------------------------------------- //
