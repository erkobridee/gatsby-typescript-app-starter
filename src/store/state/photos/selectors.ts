import { IRootState } from 'store/definitions';

export const selectPhotos = (state: IRootState) => state.photos;

export const selectPhotosList = (state: IRootState) => selectPhotos(state).list;

export const selectPhotoById = (id: number) => (state: IRootState) =>
  selectPhotosList(state).find((photo) => photo.id === id);

export const selectHasMore = (state: IRootState) => selectPhotos(state).hasMore;

export const selectIsFetching = (state: IRootState) => selectPhotos(state).isFetching;
