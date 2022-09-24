import {MediaTypeModel} from './MediaTypeModel';
import {mediaDbTag} from '../utils/Utils';
import {MediaType} from '../utils/MediaType';


export class BoardGameModel extends MediaTypeModel {
	genres: string[];
	onlineRating: number;
	image?: string;

	released: boolean;

	userData: {
		played: boolean;
		personalRating: number;
	};


	constructor(obj: any = {}) {
		super();

		this.genres = undefined;
		this.onlineRating = undefined;
		this.image = undefined;
		this.released = undefined;
		this.userData = {
			played: undefined,
			personalRating: undefined,
		};

		Object.assign(this, obj);

		this.type = this.getMediaType();
	}

	getTags(): string[] {
		return [mediaDbTag, 'boardgame'];
	}

	getMediaType(): MediaType {
		return MediaType.BoardGame;
	}

	getSummary(): string {
		return this.englishTitle + ' (' + this.year + ')';
	}

}
