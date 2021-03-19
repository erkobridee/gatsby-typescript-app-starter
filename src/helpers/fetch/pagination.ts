import { isUndefined, isNumber } from 'helpers/check';
import { IPaginationRequestParams } from 'helpers/definitions';

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
  const { offset, previousLength, length, totalCount } = options;

  if (isUndefined(offset) && isUndefined(previousLength) && isNumber(length) && isNumber(totalCount)) {
    return length > 0 && length < totalCount - 1; // totalCount - 1, because the JS Array first index is 0
  }

  if (isNumber(length) && isNumber(totalCount) && (isNumber(offset) || isNumber(previousLength))) {
    const currentTotal = (offset ? offset : previousLength || 0) + length;
    return length > 0 && currentTotal < totalCount - 1; // totalCount - 1, because the JS Array first index is 0
  }

  return false;
};

/**
 * Process and update the pagination params attributes
 *
 * @param {T extends IPaginationRequestParams = IPaginationRequestParams} params
 *
 * @returns {T} processed params
 */
export const updatePaginationAttributes = <T extends IPaginationRequestParams = IPaginationRequestParams>(
  params: T
): T => {
  const { countPerPage, previousTotalCount } = params;
  const { offset, page } = params;

  if (offset || page) {
    return params;
  }

  if (isNumber(previousTotalCount)) {
    if (isUndefined(offset) && isUndefined(page)) {
      params.page = Math.floor(previousTotalCount / countPerPage);
      return params;
    }
  }

  return {
    ...params,
    page: 0,
  };
};

export default {
  updatePaginationAttributes,
  hasMoreData,
};
