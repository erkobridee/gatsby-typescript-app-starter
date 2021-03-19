import { PhotosActionTypes as Types, IPhotosAction, IPhotosState } from './definitions';

export const photosFetching = (): IPhotosAction => ({
  type: Types.FETCHING,
});

export const photosLoaded = (payload: IPhotosState): IPhotosAction => ({
  type: Types.LOADED,
  payload,
});

export const photosFetchError = (): IPhotosAction => ({
  type: Types.FETCH_ERROR,
});

export const photosReset = (): IPhotosAction => ({
  type: Types.RESET,
});
