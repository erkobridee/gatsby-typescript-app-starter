export interface IHasMoreDataOptions {
	offset?: number;
	previousLength?: number;
	length: number;
	totalCount: number;
}

/**
 * Check if there is more available data to be fetched on the API, the previous amount could be a previous count or
 * an offset value, if the offset is present that will be used to do the check
 *
 * @param {IHasMoreDataOptions} options
 *
 * @returns {boolean} boolean
 */
export const hasMoreData = (options: IHasMoreDataOptions): boolean => {
	const { offset, previousLength = 0, length, totalCount } = options;
	const currentTotal = (offset ? offset : previousLength) + length;
	return length > 0 && currentTotal < totalCount - 1; // totalCount - 1, because the JS Array first index is 0
};

export default hasMoreData;
