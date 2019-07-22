import { LocaleData } from 'react-intl';

// ---------------------------------------------------------------------------- //
// @begin: constants block

export const DEFAULT_PAGE_SIZE = 25;

export const TO_STRING = {}.toString;

// @end: constants block
// ---------------------------------------------------------------------------- //
// @begin: enums block

export enum JSTypeof {
	UNDEFINED = 'undefined',
	FUNCTION = 'function',
	OBJECT = 'object',
	STRING = 'string',
	NUMBER = 'number',
}

export enum RequestProtocol {
	HTTP = 'http',
	HTTPS = 'https',
}

/**
 * Defines HTTP Request Methods
 */
export enum RequestMethod {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	PATCH = 'PATCH',
	DELETE = 'DELETE',
}

/**
 * Defines request content types
 */
export enum RequestContentTypes {
	IMAGE = 'image/jpg, image/png',
	JSON = 'application/json',
	FORM = '',
}

export enum APIResponseStatus {
	SUCCESS = 'api:response::success',
	ERROR = 'api:response::error',
}

// @end: enums block
// ---------------------------------------------------------------------------- //
// @begin: types block

export type TJSObject = Record<string, any>;

export type TJSValue = TJSObject | any;

export type TArrayFilter<T> = (x: T) => boolean;

export type TFunction = (...args: any[]) => any;

export type TEmptyCallback = () => void;

export type TCallback = TEmptyCallback | TFunction;

export type TTypeCallback<R, P = any> = (options?: P) => R;

export type TRenderFunction<T> = (options?: T) => JSX.Element;

export type TRender<T = any> = TRenderFunction<T> | React.ReactNode;

//---

/**
 * Possible request body to be sended to the API
 */
export type TRequestBody = string | FormData | undefined;

export type TAPIResponse = IStringAPIResponse | IAPIResponse;

// @end: types block
// ---------------------------------------------------------------------------- //
// @begin: interfaces block

export interface IDictionary<T = any> {
	[key: string]: T;
}

export interface IProjectWindow extends Window {
	CSS?: any;
}

export interface ILocale {
	locale: string;
	localeData: LocaleData;
	messages: IDictionary<string>;
}

export interface IBaseModel<T = any> {
	readonly __innerprops__: T;
}

export interface IBaseResponse<T = any> {
	status: APIResponseStatus;
	statusCode: number;
	data: T;
	/** defined when the API has "pagination" support */
	totalCount?: number;
}

/**
 * Base response object returned from the buildRequest
 */
export interface IAPIResponse<T = any> {
	readonly statusCode: number;
	readonly headers: Headers;
	readonly body: T;

	// defined to be able to use the Pick<IAPIResponse, '__bodyType__'>
	// and read the generic type assigned to it
	__bodyType__?: T;
}

export interface IStringAPIResponse<T = string> extends IAPIResponse<T> {}

export interface IPaginationRequestParams {
	offset?: number;
	page?: number;
	countPerPage: number;
	previousTotalCount?: number;
}

/**
 * Defines api request options that is used to build an api call.
 */
export interface IRequestOptions {
	/** like passing the access token with the value: `Bearer ${accessToken}` */
	authorization?: string;
	contentType?: RequestContentTypes;
	protocol?: RequestProtocol | string;
	method?: RequestMethod;
	host?: string;
	api?: string;
	urlPath: string;
	variables?: IDictionary;
	parameters?: IDictionary;
	noCache?: boolean;
}

// @end: interfaces block
// ---------------------------------------------------------------------------- //
