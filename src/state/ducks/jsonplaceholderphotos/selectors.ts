import { IRootState } from 'state/definitions';

export const selectPhotos = (state: IRootState) => state.photos;

export const selectPhotosList = (state: IRootState) => selectPhotos(state).list;

export const selectHasMore = (state: IRootState) => selectPhotos(state).hasMore;
