import { IAction } from 'store/helpers/definitions';
import IPhotosModel from 'data/models/Photos';
import { IPhotosParams } from 'data/api/photos/definitions';

export enum PhotosActionTypes {
  FETCHING = 'photos/FETCHING',
  LOADED = 'photos/LOADED',
  FETCH_ERROR = 'photos/FETCH_ERROR',
  RESET = 'photos/RESET',
}

export interface IPhotosState {
  list: IPhotosModel[];
  hasMore: boolean;
  isFetching: boolean;
}

export interface IPhotosAction extends IAction<IPhotosState> {}

export interface IPhotosLoadParams extends IPhotosParams {}
