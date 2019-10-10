import 'abortcontroller-polyfill/dist/polyfill-patch-fetch';
import { IAPIResponse, ICancelableBaseResponse, IRequestOptions } from 'helpers/definitions';
import buildRequest from './buildRequest';

/**
 * 	Build and handle a cancelable fetch request
 *
 * @param {IRequestOptions} options
 *
 * @returns {Promise<R extends IAPIResponse = IAPIResponse>} promise
 */
export function buildCancelableRequest<R extends IAPIResponse = IAPIResponse>(
	options: IRequestOptions
): ICancelableBaseResponse<R> {
	const controller = new AbortController();
	const signal = controller.signal;

	return {
		request: () =>
			buildRequest<R>({
				...options,
				signal,
			}),
		controller,
	};
}
