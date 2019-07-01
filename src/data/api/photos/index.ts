import buildRequest from 'helpers/fetch/buildRequest';
import { isNumber } from 'helpers/check';
import { IAPIResponse, APIResponseStatus, DEFAULT_PAGE_SIZE } from 'helpers/definitions';
import PhotoModel from 'data/models/Photos';
import { IPhotosParams, IPhotosAPIResponse, IPhotosResponse } from './definitions';

export const loadPhotos = async (parameters?: IPhotosParams): Promise<IPhotosResponse> => {
	let apiParams;
	if (parameters) {
		const { offset, page = 0, countPerPage = DEFAULT_PAGE_SIZE } = parameters;
		const _start = isNumber(offset) ? offset : page * countPerPage;
		apiParams = { _start, _limit: countPerPage };
	}

	try {
		const responseObject = await buildRequest<IPhotosAPIResponse>({
			urlPath: 'jsonplaceholder.typicode.com/photos',
			parameters: apiParams,
		});

		const { statusCode, headers, body } = responseObject;
		const xTotalCount = headers.get('x-total-count') || 0;
		const totalCount = Number(xTotalCount);
		const data = body.map(entity => new PhotoModel(entity));
		return {
			status: APIResponseStatus.SUCCESS,
			statusCode,
			data,
			totalCount,
		};
	} catch (e) {
		const errorObject: IAPIResponse = e;
		const { statusCode, body } = errorObject;
		throw {
			status: APIResponseStatus.ERROR,
			statusCode,
			body,
		};
	}
};
