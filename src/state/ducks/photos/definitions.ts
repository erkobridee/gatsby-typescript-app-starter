import { IAction } from 'state/helpers/definitions';
import IPhotosModel from 'data/models/Photos';
import { IPhotosParams } from 'data/api/photos/definitions';

export enum PhotosActionTypes {
	LOADED = 'photos/LOADED',
	RESET = 'photos/RESET',
}

// TODO: review
export interface IPhotosState {
	list: IPhotosModel[];
	hasMore: boolean;
}

export interface IPhotosAction extends IAction<IPhotosState> {}

export interface IPhotosLoadParams extends IPhotosParams {}
