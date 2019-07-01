import { PhotosActionTypes as Types, IPhotosAction, IPhotosState } from './definitions';

export const photosLoaded = (payload: IPhotosState): IPhotosAction => ({
	type: Types.LOADED,
	payload,
});

export const photosReset = (): IPhotosAction => ({
	type: Types.RESET,
});
