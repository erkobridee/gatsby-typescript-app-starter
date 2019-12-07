import * as Values from '../values';

const REGEX_FLOAT_NUMBER = /^[+-]?\d+([.]\d*)?(e[+-]?\d+)?$/g;

const REGEX_INT_NUMBER = /^[+-]?\d+(e[+-]?\d+)?$/g;

const buildDecimalRegex = (fixed: number | string = 1) => new RegExp(`^[+-]?\\d+([.]\\d{${fixed}})$`, 'g');

const buildRandomIntAsStringRegex = (padStart: number = 2) =>
	new RegExp(`^0{${padStart - 1}}\\d+([.]\\d*)?(e[+-]?\\d+)?$`, `g`);

describe('helpers/values', () => {
	describe('getPropertyValue', () => {
		it('should get an attribute value from a given object', () => {
			const value = 'hello';
			const obj = { att: value };
			expect(Values.getPropertyValue(obj, 'att')).toEqual(value);
		});
	});

	describe('setPropertyValue', () => {
		it('should set a value to a given object attribute', () => {
			const newValue = 'hello world';
			let obj = { att: 'hello' };
			expect(Values.getPropertyValue(obj, 'att')).not.toEqual(newValue);
			obj = Values.setPropertyValue(obj, 'att', newValue);
			expect(Values.getPropertyValue(obj, 'att')).toEqual(newValue);
		});
	});

	describe('randomFloat', () => {
		it('should get a random float number', () => {
			const min = 1;
			const max = 3;
			const result = Values.randomFloat(min, max);
			expect(`${result}`).toMatch(REGEX_FLOAT_NUMBER);
			expect(result >= min && result <= max).toBeTruthy();
		});
	});

	describe('randomDecimalString', () => {
		it('should get a decimal number with fixed 2', () => {
			const min = 10;
			const max = 30;
			const fixed = 2;
			let result = Values.randomDecimalString(min, max, fixed);
			expect(`${result}`).toMatch(buildDecimalRegex(fixed));
			const value = Number(result);
			expect(value >= min && value <= max).toBeTruthy();
		});
	});

	describe('randomDecimal', () => {
		it('should get a decimal number with fixed {1,3}', () => {
			const min = 10;
			const max = 30;
			const fixed = 3;
			let result = Values.randomDecimal(min, max, fixed);
			expect(`${result}`).toMatch(buildDecimalRegex(`1,${fixed}`));
			const value = Number(result);
			expect(value >= min && value <= max).toBeTruthy();
		});
	});

	describe('randomInt', () => {
		it('should get an integer number', () => {
			const min = 1;
			const max = 5;
			const result = Values.randomInt(min, max);
			expect(`${result}`).toMatch(REGEX_INT_NUMBER);
			expect(result >= min && result <= max).toBeTruthy();
		});
	});

	describe('randomIntAsString', () => {
		it('should get a random integer string with two 0 left', () => {
			const min = 1;
			const max = 5;
			const padStart = 2;
			const result = Values.randomIntAsString(min, max, padStart);
			expect(`${result}`).toMatch(buildRandomIntAsStringRegex(padStart));
			expect(result.length).toEqual(padStart);
			const value = Number(result);
			expect(value >= min && value <= max).toBeTruthy();
		});

		it('should get a random integer string with three 0 left', () => {
			const min = 1;
			const max = 5;
			const padStart = 3;
			const result = Values.randomIntAsString(min, max, padStart);
			expect(`${result}`).toMatch(buildRandomIntAsStringRegex(padStart));
			expect(result.length).toEqual(padStart);
			const value = Number(result);
			expect(value >= min && value <= max).toBeTruthy();
		});
	});

	describe('randomBoolean', () => {
		it('should be a boolean', () => {
			expect(typeof Values.randomBoolean()).toEqual('boolean');
		});
	});

	// TODO: define unit tests
	// describe('randomValue', () => {});

	// describe('calculateAvailablePages', () => {});

	// describe('paginate', () => {});

	// describe('randomSetOfData', () => {});

	// describe('randomAmountOfData', () => {});
});
