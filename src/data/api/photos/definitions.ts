import { IAPIResponse, IBaseResponse, IPaginationRequestParams } from 'helpers/definitions';
import { IPhotoEntity } from 'data/schemas/JsonPlaceholder';
import PhotoModel from 'data/models/Photos';

export interface IPhotosAPIResponse extends IAPIResponse<IPhotoEntity[]> {}

export interface IPhotosParams extends IPaginationRequestParams {}

export interface IPhotosResponse extends IBaseResponse<PhotoModel[]> {}
