import { RelativeTimeLocaleData } from '@formatjs/intl-utils';

// ---------------------------------------------------------------------------- //
// @begin: constants block

export const DEFAULT_PAGE_SIZE = 25;

export const TO_STRING = {}.toString;

export const TRUTHY = /^(?:t(?:rue)?|y(?:es)?|on|1)$/i;

export const FALSY = /^(?:f(?:alse)?|no?|off|0)$/i;

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

export type TArrayFilter<Item> = (item: Item) => boolean;

export type TFunction<Tuple extends any[] = any[], Return = any> = (...args: Tuple) => Return;

export type TEmptyCallback = () => void;

export type TCallback<Tuple extends any[] = any[], Return = any> = TFunction<Tuple, Return> | TEmptyCallback;

export type TTypeCallback<Return, Options = any> = (options?: Options) => Return;

export type TRender<RenderOptions = any> = TFunction<[RenderOptions], JSX.Element> | React.ReactNode;

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
	localeData: RelativeTimeLocaleData;
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

export interface ICancelableBaseResponse<R extends IAPIResponse = IAPIResponse> {
	controller?: AbortController;
	request: TTypeCallback<Promise<R>>;
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
	headers?: IDictionary;
	noCache?: boolean;
	signal?: AbortSignal;
}

// @end: interfaces block
// ---------------------------------------------------------------------------- //
