import * as path from 'path';
import * as url from 'url';
import * as qs from 'qs';
import {
	IDictionary,
	RequestContentTypes,
	RequestMethod,
	TRequestBody,
	IRequestOptions,
	IAPIResponse,
	TAPIResponse,
} from 'helpers/definitions';
import readImageBlobAsDataURL from './readImageBlobAsDataURL';

/**
 * Build an output response object that implements the IAPIResponse readonly attributes
 *
 * @param {Response} response
 * @param {any} body
 *
 * @returns {R} output response object
 */
function buildResponseOutput<R extends IAPIResponse = TAPIResponse>(
	response: Response,
	bodyObject: Pick<R, '__bodyType__'> = {}
): R {
	const { status, headers } = response;
	return {
		get statusCode() {
			return status;
		},
		get headers() {
			return headers;
		},
		get body() {
			return bodyObject;
		},
	} as R;
}

/**
 * 	Build and handle a fetch request
 *
 * @param {IRequestOptions} options
 *
 * @returns {Promise<R extends IAPIResponse = IAPIResponse>} promise
 */
export async function buildRequest<R extends IAPIResponse = IAPIResponse>(options: IRequestOptions): Promise<R> {
	let { parameters } = options;
	const { useDefaultPrefix = false } = options;
	const {
		authorization,
		method = RequestMethod.GET,
		contentType = RequestContentTypes.JSON,
		protocol,
		host = useDefaultPrefix ? process.env.API_HOST || undefined : undefined,
		api = useDefaultPrefix ? process.env.API_PREFIX || undefined : undefined,
		urlPath,
		variables = {},
		headers: extraHeaders = {},
		noCache,
		signal,
	} = options;

	/**
	 * No cache parameter
	 */
	if (noCache) {
		parameters = { ...parameters, _: Math.random() };
	}

	const getRequestURL = () => {
		const pathname = api ? path.join(api, urlPath) : urlPath;
		if (!host) {
			return pathname;
		}

		return url.format({
			...{
				slashes: true,
				host,
				pathname,
			},
			...(protocol ? { protocol } : {}),
		});
	};

	/**
	 * Request URL is the URL that we will call and all the variable is replaced to values
	 * @type {string}
	 */
	let requestUrl = getRequestURL();

	/**
	 * Replace url path variables, like {userId}
	 */
	for (const variable in variables) {
		if (variables.hasOwnProperty(variable)) {
			requestUrl = requestUrl.replace(`{${variable}}`, variables[variable]);
		}
	}

	/**
	 * Prepare parameters that will be sent to the api.
	 */
	let body: TRequestBody;
	if (parameters) {
		switch (method) {
			case RequestMethod.GET:
				requestUrl += `?${qs.stringify(parameters)}`;
				break;
			default:
				switch (contentType) {
					case RequestContentTypes.JSON:
						body = JSON.stringify(parameters);
						break;
					case RequestContentTypes.FORM:
						body = new FormData();
						for (const parameter in parameters) {
							if (parameters.hasOwnProperty(parameter)) {
								body.append(parameter, parameters[parameter]);
							}
						}
						break;
				}
				break;
		}
	}

	/**
	 * Prepare headers
	 */
	const headers: IDictionary = {
		Accept: contentType,
		'Content-Type': contentType,
	};

	/**
	 * If there is any authorization added to the header
	 */
	if (authorization) {
		headers.Authorization = authorization;
	}

	for (const extraHeader in extraHeaders) {
		if (extraHeaders.hasOwnProperty(extraHeader)) {
			headers[extraHeader] = extraHeaders[extraHeader];
		}
	}

	/**
	 * Do the fetch call and process its response
	 */
	try {
		const response = await fetch(requestUrl, {
			method,
			headers,
			body,
			signal,
		});

		if (!response.ok) {
			throw response;
		}

		let outputObject = {};
		if (contentType === RequestContentTypes.IMAGE) {
			const imageBlob = await response.blob();
			const imageAsString = await readImageBlobAsDataURL(imageBlob);
			outputObject = imageAsString;
		} else {
			try {
				outputObject = await response.json();
			} catch (e) {
				/* comment to fix the tslint empty block warning */
			}
		}
		return buildResponseOutput<R>(response, outputObject);
	} catch (error) {
		let finalError: R;
		try {
			finalError = await error.json();
		} catch (e) {
			finalError = error;
		}
		throw buildResponseOutput<R>(error, finalError);
	}
}

export default buildRequest;
