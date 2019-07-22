import uuidv4 from 'uuid/v4';
import { isObject, isArray, isFunction } from './check';
import { TTypeCallback } from './definitions';

//----------------------------------------------------------------------------//

export const randomFloat = (min: number, max: number): number => Math.random() * (max - min + 1) + min;

export const randomDecimal = (min: number, max: number, fixed: number = 2): number =>
	+randomFloat(min, max).toFixed(fixed);

export const randomInt = (min: number, max: number): number => Math.floor(randomFloat(min, max));

export const randomIntAsString = (min: number, max: number, padStart: number = 2): string => {
	return String(randomInt(min, max)).padStart(padStart, '0');
};

export const randomBoolean = (): boolean => randomInt(0, 1) === 0;

export const randomValue = <T extends any>(options: T | T[], inNumber?: number): T | undefined => {
	if (!isObject(options) || !isArray(options)) {
		return;
	}
	if (isObject(options)) {
		options = Object.values(options);
	}
	inNumber = Math.min(inNumber || Number.MAX_SAFE_INTEGER, options.length);
	return options[randomInt(0, inNumber)];
};

//----------------------------------------------------------------------------//

export const calculateAvailablePages = <T extends any>(data: T[], pageSize: number = 25): number =>
	Math.ceil(data.length / pageSize);

export const paginate = <T extends any>(data: T[], start: number = 0, pageSize: number = 25): T[] => {
	const { length } = data;
	if (length === 0 || start > length) {
		return [];
	}

	if (start + pageSize > length) {
		return data.slice(start, length);
	}

	return data.slice(start, start + pageSize);
};

export const randomSetOfData = <T extends any>(data: T[], amount: number = randomInt(1, 10)): T[] =>
	paginate(data, calculateAvailablePages(data, amount), amount);

export const randomAmountOfData = <T extends any>(
	data: T[],
	amount: number = randomInt(1, 10),
	key: TTypeCallback<string> | string = () => uuidv4()
): T[] => {
	const output: T[] = [];
	const { length: dataLength } = data;
	if (dataLength === 0) {
		return output;
	}

	const map: Map<string, undefined> = new Map();
	const getKey = (value: T) => (!isObject(value) ? value : isFunction(key) ? key() : value[key]);
	while (output.length < amount) {
		const item = randomValue(data, dataLength);
		if (item) {
			const mapKey = getKey(item);
			if (!map.has(mapKey)) {
				output.push(item);
				map.set(mapKey, undefined);
			}
		}
	}
	map.clear();

	return output;
};

//----------------------------------------------------------------------------//
