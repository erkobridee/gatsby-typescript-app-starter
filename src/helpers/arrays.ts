type TFilter<T> = (x: T) => boolean;

/**
 * array filter function to get the intersection
 *
 * @param {T[]} values
 * @param {string} byObjectProperty
 *
 * @return {TFilter<T>}
 */
function filterIntersection<T>(values: T[], byObjectProperty?: string): TFilter<T> {
	if (byObjectProperty) {
		return (x: T) => values.some(y => (x as any)[byObjectProperty] === (y as any)[byObjectProperty]);
	}
	return (x: T) => values.includes(x);
}

/**
 * array filter function to get the difference
 *
 * @param {T[]} values
 * @param {string} byObjectProperty
 *
 * @return {TFilter<T>}
 */
function filterDifference<T>(values: T[], byObjectProperty?: string): TFilter<T> {
	if (byObjectProperty) {
		return (x: T) => !values.some(y => (x as any)[byObjectProperty] === (y as any)[byObjectProperty]);
	}
	return (x: T) => !values.includes(x);
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
	return values.reduce(
		(unique, item) => {
			return filterIntersection(unique, byObjectProperty)(item) ? unique : [...unique, item];
		},
		[] as T[]
	);
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
 * @param {T[]} arr1 - source array
 * @param {T[]} arr2 - match array
 * @param {string} byObjectProperty - optional parameter in case of array of objects
 *
 * @return {boolean} flag
 */
function contains<T>(arr1: T[], arr2: T[], byObjectProperty?: string): boolean {
	const arr2Lenght = arr2.length;
	const arr3 = intersection<T>(arr1, arr2, byObjectProperty);
	return arr2Lenght === arr3.length;
}

/**
 * get the different values present on the first parameter
 *
 * @param {T[]} arr1 - source array
 * @param {T[]} arr2 - match array
 * @param {string} byObjectProperty - optional parameter in case of array of objects
 *
 * @return {T[]}
 */
function difference<T>(arr1: T[], arr2: T[], byObjectProperty?: string): T[] {
	return arr1.filter(filterDifference(arr2, byObjectProperty));
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

// -------------------------------------------------------------------------- //

export {
	unique as arrayUnique,
	intersection as arrayIntersection,
	difference as arrayDifference,
	contains as arrayContains,
	symmetricDifference as arraySymmetricDifference,
};

// -------------------------------------------------------------------------- //

export default {
	unique,
	intersection,
	difference,
	contains,
	symmetricDifference,
};
