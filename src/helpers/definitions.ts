import { LocaleData } from 'react-intl';

// ---------------------------------------------------------------------------- //
// @begin: constants block

export const TO_STRING = {}.toString;

// @end: constants block
// ---------------------------------------------------------------------------- //
// @begin: enums block

export enum JSTypeof {
	UNDEFINED = 'undefined',
	FUNCTION = 'function',
	OBJECT = 'object',
	STRING = 'string',
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

// @end: enums block
// ---------------------------------------------------------------------------- //
// @begin: types block

export type TObjectMap<V = any> = { [key: string]: V };

export type TFunction = (...args: any[]) => any;

export type TEmptyCallback = () => void;

export type TCallback = TEmptyCallback | TFunction;

export type TRenderFunction<T> = (options?: T) => JSX.Element;

export type TRender<T = any> = TRenderFunction<T> | React.ReactNode;

//---

/**
 * Possible request body to be sended to the API
 */
export type TRequestBody = string | FormData | undefined;

/**
 * Possible default response types returned from the buildRequest function
 */
export type TAPIResponse = IAPIResponse | IErrorAPIResponse | IImageAPIResponse;

// @end: types block
// ---------------------------------------------------------------------------- //
// @begin: interfaces block

export interface IProjectWindow extends Window {
	CSS?: any;
}

export interface ILocale {
	locale: string;
	localeData: LocaleData;
	messages: TObjectMap<string>;
}

/**
 * Define a way to access the response status code and its headers
 */
export interface IAPIResponseMetadata {
	readonly statusCode: number;
	readonly headers: Headers;
	readonly body: any;
}

/**
 * Base response object returned from the buildRequest
 */
export interface IAPIResponse {
	readonly __metadata__: IAPIResponseMetadata;
}

/**
 * Base error response object returned from the buildRequest
 */
export interface IErrorAPIResponse extends IAPIResponse {
	error: any;
}

/**
 * Base image response object returned from the buildRequest
 */
export interface IImageAPIResponse extends IAPIResponse {
	data: string;
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
	variables?: TObjectMap;
	parameters?: TObjectMap;
	noCache?: boolean;
}

// @end: interfaces block
// ---------------------------------------------------------------------------- //
