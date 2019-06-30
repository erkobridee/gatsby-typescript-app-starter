import { IAction } from 'src/state/helpers/definitions';

export enum PhotosActionTypes {
	LOADED = 'photos/LOADED',
	RESET = 'photos/RESET',
}

// TODO: review and update the state attributes
export interface IPhotosState {
	list: any[]; // TODO: define an object model to it
	hasMore: boolean;
}

export interface IPhotosAction extends IAction<IPhotosState> {}
