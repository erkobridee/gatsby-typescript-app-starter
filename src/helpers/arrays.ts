import { TArrayFilter, TJSValue } from 'helpers/definitions';
import { isObject, isArray } from 'helpers/check';

/*
function prop<T extends TJSValue>(object: T, key: string) {
	return object[key];
}
*/

/**
 * array filter function to get the intersection
 *
 * @param {T[]} values
 * @param {string} byObjectProperty
 *
 * @return {TFilter<T>}
 */
function filterIntersection<T extends TJSValue>(values: T[], byObjectProperty?: string): TArrayFilter<T> {
	if (byObjectProperty) {
		return (x: T) => values.some(y => x[byObjectProperty] === y[byObjectProperty]);
	}
	return (x: T) => values.includes(x);
}

/**
 * array filter function to get the difference
 *
 * @param {T[]} values
 * @param {string} byObjectProperty
 *
 * @return {TArrayFilter<T>}
 */
function filterDifference<T extends TJSValue>(values: T[], byObjectProperty?: string): TArrayFilter<T> {
	if (byObjectProperty) {
		return (x: T) => !values.some(y => x[byObjectProperty] === y[byObjectProperty]);
	}
	return (x: T) => !values.includes(x);
}

// -------------------------------------------------------------------------- //

/**
 * array find function
 *
 * @param {T} value
 * @param {string} byObjectProperty
 *
 * @return {TArrayFilter<T>}
 */
function filterFindValue<T extends TJSValue>(value: T, byObjectProperty?: string): TArrayFilter<T> {
	if (byObjectProperty) {
		return (x: T) => x[byObjectProperty] === (isObject(value) ? value[byObjectProperty] : value);
	}
	return (x: T) => x === value;
}

// -------------------------------------------------------------------------- //

/**
 * from a given array get the unique elements from it
 *
 * @param {T[]} values
 * @param {string} byObjectProperty - optional parameter in case of array of objects
 *
 * @return {T[]} values without repetition
 */
function unique<T>(values: T[], byObjectProperty?: string): T[] {
	return values.reduce((unique, item) => {
		return filterIntersection(unique, byObjectProperty)(item) ? unique : [...unique, item];
	}, [] as T[]);
}

/**
 * get only the values present on both parameters arrays
 *
 * @param {T[]} arr1
 * @param {T[]} arr2
 * @param {string} byObjectProperty - optional parameter in case of array of objects
 *
 * @return {T[]} values present on both arrays
 */
function intersection<T>(arr1: T[], arr2: T[], byObjectProperty?: string): T[] {
	return arr1.filter(filterIntersection(arr2, byObjectProperty));
}

/**
 * check if the first parameter contains the values from the second parameter
 *
 * @param {T[]} sourceArray
 * @param {T | T[]} matchValue
 * @param {string} byObjectProperty - optional parameter in case of array of objects
 *
 * @return {boolean} flag
 */
function contains<T>(sourceArray: T[], matchValue: T | T[], byObjectProperty?: string): boolean {
	if (isArray(matchValue)) {
		const arr2Lenght = matchValue.length;
		const arr3 = intersection<T>(sourceArray, matchValue, byObjectProperty);
		return arr2Lenght === arr3.length;
	}
	return filterIntersection(sourceArray, byObjectProperty)(matchValue as T);
}

/**
 * get the different values present on the first parameter
 *
 * @param {T[]} sourceArray
 * @param {T[]} matchArray
 * @param {string} byObjectProperty - optional parameter in case of array of objects
 *
 * @return {T[]}
 */
function difference<T>(sourceArray: T[], matchArray: T[], byObjectProperty?: string): T[] {
	return sourceArray.filter(filterDifference(matchArray, byObjectProperty));
}

/**
 * get the different values present on both parameters arrays
 *
 * @param {T[]} arr1
 * @param {T[]} arr2
 * @param {string} byObjectProperty - optional parameter in case of array of objects
 *
 * @return {T[]}
 */
function symmetricDifference<T>(arr1: T[], arr2: T[], byObjectProperty?: string): T[] {
	return arr1
		.filter(filterDifference(arr2, byObjectProperty))
		.concat(arr2.filter(filterDifference(arr1, byObjectProperty)));
}

/**
 * find a value inside of the given values array
 *
 * @param {T[]} values
 * @param {T | string} value
 * @param {string} byObjectProperty - optional parameter in case of array of objects
 *
 * @return {T | undefined} value founded or undefined
 */
function find<T extends TJSValue>(values: T[], value: T | string, byObjectProperty?: string): T | undefined {
	return values.find(filterFindValue(value, byObjectProperty));
}

/**
 * Merge two arrays of given type where will return a new array with the values updates
 * and the new non repeted elements added to it
 *
 * @param {T[]} sourceArray
 * @param {T[]} withArray
 * @param {string} byObjectProperty - optional parameter in case of array of objects
 */
function merge<T>(sourceArray: T[], withArray: T[], byObjectProperty?: string): T[] {
	return [
		...sourceArray.map(item => {
			const element = find(withArray, item, byObjectProperty);
			if (element) {
				return element;
			}
			return item;
		}),
		...difference(withArray, sourceArray, byObjectProperty),
	];
}

// -------------------------------------------------------------------------- //

export {
	unique as arrayUnique,
	intersection as arrayIntersection,
	contains as arrayContains,
	difference as arrayDifference,
	symmetricDifference as arraySymmetricDifference,
	find as arrayFind,
	merge as arrayMerge,
};

// -------------------------------------------------------------------------- //

export default {
	unique,
	intersection,
	contains,
	difference,
	symmetricDifference,
	find,
	merge,
};
