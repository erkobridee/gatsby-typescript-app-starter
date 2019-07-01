import { IBaseModel } from 'helpers/definitions';
import { IPhotoEntity } from 'data/schemas/JsonPlaceholder';

export interface IPhotoProps extends IPhotoEntity {}

export interface IPhotoModel extends IBaseModel<IPhotoProps> {
	readonly id: number;
	readonly title: string;
	readonly url: string;
}

export default class PhotoModel implements IPhotoModel {
	private props: IPhotoProps;

	constructor(props: IPhotoProps) {
		this.props = props;
	}

	get __innerprops__() {
		return this.props;
	}

	get id() {
		return this.props.id;
	}

	get title() {
		return this.props.title;
	}

	get url() {
		return `http://lorempixel.com/600/400/?_=${this.props.id}`;
	}

	toJSON() {
		return {
			id: this.id,
			title: this.title,
			url: this.url,
		};
	}
}
