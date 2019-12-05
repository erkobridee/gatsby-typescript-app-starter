import * as Check from '../check';

describe('helpers/check', () => {
	describe('isFunction', () => {
		it('should be a function', () => {
			expect(Check.isFunction(() => undefined)).toBeTruthy();
		});

		it('should not be a function', () => {
			expect(Check.isFunction({})).toBeFalsy();
			expect(Check.isFunction(null)).toBeFalsy();
			expect(Check.isFunction(undefined)).toBeFalsy();
			expect(Check.isFunction('')).toBeFalsy();
			expect(Check.isFunction(123)).toBeFalsy();
		});
	});

	describe('isUndefined', () => {
		it('should be undefined', () => {
			expect(Check.isUndefined(undefined)).toBeTruthy();
		});

		it('should not be undefined', () => {
			expect(Check.isUndefined(1)).toBeFalsy();
			expect(Check.isUndefined('')).toBeFalsy();
			expect(Check.isUndefined(null)).toBeFalsy();
			expect(Check.isUndefined({})).toBeFalsy();
			expect(Check.isUndefined([])).toBeFalsy();
			expect(Check.isUndefined(() => undefined)).toBeFalsy();
		});
	});

	describe('isObject', () => {
		it('should be an object', () => {
			expect(Check.isObject({})).toBeTruthy();
		});

		it('should not be an object', () => {
			expect(Check.isObject(() => undefined)).toBeFalsy();
			expect(Check.isObject(null)).toBeFalsy();
			expect(Check.isObject(undefined)).toBeFalsy();
			expect(Check.isObject(123)).toBeFalsy();
			expect(Check.isObject('')).toBeFalsy();
		});
	});

	describe('isArray', () => {
		it('should be an array', () => {
			expect(Check.isArray([])).toBeTruthy();
			expect(Check.isArray([1, 2, 3])).toBeTruthy();
			expect(Check.isArray(['a', 'b', 'c'])).toBeTruthy();
			expect(Check.isArray(['', 1, NaN, undefined, null, {}, []])).toBeTruthy();
		});

		it('should not be an array', () => {
			expect(Check.isArray('hello')).toBeFalsy();
			expect(Check.isArray({})).toBeFalsy();
			expect(Check.isArray(null)).toBeFalsy();
			expect(Check.isArray(undefined)).toBeFalsy();
			expect(Check.isArray(123)).toBeFalsy();
		});
	});

	describe('isString', () => {
		it('should be a string', () => {
			expect(Check.isString('')).toBeTruthy();
		});

		it('should not be a string', () => {
			expect(Check.isString(123)).toBeFalsy();
			expect(Check.isString({})).toBeFalsy();
			expect(Check.isString([])).toBeFalsy();
			expect(Check.isString(null)).toBeFalsy();
			expect(Check.isString(undefined)).toBeFalsy();
			expect(Check.isString(() => undefined)).toBeFalsy();
		});
	});

	describe('isNumber', () => {
		it('should be a number', () => {
			expect(Check.isNumber(123)).toBeTruthy();
		});

		it('should not be a number', () => {
			expect(Check.isNumber('')).toBeFalsy();
			expect(Check.isNumber({})).toBeFalsy();
			expect(Check.isNumber([])).toBeFalsy();
			expect(Check.isNumber(null)).toBeFalsy();
			expect(Check.isNumber(undefined)).toBeFalsy();
			expect(Check.isNumber(() => undefined)).toBeFalsy();
		});
	});

	describe('isTrue', () => {
		it('should be true', () => {
			expect(Check.isTrue(1)).toBeTruthy();
			expect(Check.isTrue('true')).toBeTruthy();
			expect(Check.isTrue(true)).toBeTruthy();
		});

		it('should be false', () => {
			expect(Check.isTrue(0)).toBeFalsy();
			expect(Check.isTrue('false')).toBeFalsy();
			expect(Check.isTrue(false)).toBeFalsy();
			expect(Check.isTrue(null)).toBeFalsy();
			expect(Check.isTrue(undefined)).toBeFalsy();
			expect(Check.isTrue(NaN)).toBeFalsy();
			expect(Check.isTrue([])).toBeFalsy();
			expect(Check.isTrue({})).toBeFalsy();
		});
	});
});
