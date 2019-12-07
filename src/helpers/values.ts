import { isObject, isArray } from './check';

//----------------------------------------------------------------------------//

export const getPropertyValue = <Object, Key extends keyof Object>(object: Object, propertyName: Key): Object[Key] =>
	object[propertyName];

export const setPropertyValue = <Object, Key extends keyof Object, Value extends Object[Key]>(
	object: Object,
	propertyName: Key,
	value: Value
): Object => {
	object[propertyName] = value;
	return object;
};

//----------------------------------------------------------------------------//

export const randomFloat = (min: number, max: number): number => Math.random() * (max - min) + min;

export const randomDecimalString = (min: number, max: number, fixed: number = 2): string =>
	randomFloat(min, max).toFixed(fixed);

export const randomDecimal = (min: number, max: number, fixed: number = 2): number =>
	+randomDecimalString(min, max, fixed);

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

export const randomAmountOfData = <T extends any>(data: T[], amount: number = randomInt(1, 10)): T[] => {
	const output: T[] = [];
	if (data.length === 0) {
		return output;
	}
	data = [...data];
	while (output.length < amount) {
		const index = randomInt(0, data.length - 1);
		output.push(data[index]);
		data.splice(index, 1);
		data = [...data];
	}
	return output;
};

//----------------------------------------------------------------------------//
