import * as Values from '../values';
import { arrayFind } from '../arrays';

//----------------------------------------------------------------------------//

const REGEX_FLOAT_NUMBER = /^[+-]?\d+([.]\d*)?(e[+-]?\d+)?$/g;

const REGEX_INT_NUMBER = /^[+-]?\d+(e[+-]?\d+)?$/g;

const buildDecimalRegex = (fixed: number | string = 1) => new RegExp(`^[+-]?\\d+([.]\\d{${fixed}})$`, 'g');

const buildRandomIntAsStringRegex = (padStart = 2) =>
  new RegExp(`^0{${padStart - 1}}\\d+([.]\\d*)?(e[+-]?\\d+)?$`, `g`);

//----------------------------------------------------------------------------//

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
      const result = Values.randomDecimalString(min, max);
      expect(`${result}`).toMatch(buildDecimalRegex(fixed));
      const value = Number(result);
      expect(value >= min && value <= max).toBeTruthy();
    });

    it('should get a decimal number with fixed 3', () => {
      const min = 10;
      const max = 30;
      const fixed = 3;
      const result = Values.randomDecimalString(min, max, fixed);
      expect(`${result}`).toMatch(buildDecimalRegex(fixed));
      const value = Number(result);
      expect(value >= min && value <= max).toBeTruthy();
    });
  });

  describe('randomDecimal', () => {
    it('should get a decimal number with fixed {1,2}', () => {
      const min = 10;
      const max = 30;
      const fixed = 2;
      const result = Values.randomDecimal(min, max);
      expect(`${result}`).toMatch(buildDecimalRegex(`1,${fixed}`));
      const value = Number(result);
      expect(value >= min && value <= max).toBeTruthy();
    });

    it('should get a decimal number with fixed {1,3}', () => {
      const min = 10;
      const max = 30;
      const fixed = 3;
      const result = Values.randomDecimal(min, max, fixed);
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
      const result = Values.randomIntAsString(min, max);
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

  describe('randomValue', () => {
    it('should return undefined to not object or array as parameter', () => {
      expect(Values.randomValue(null)).toBeUndefined();
      expect(Values.randomValue(undefined)).toBeUndefined();
      expect(Values.randomValue(NaN)).toBeUndefined();
      expect(Values.randomValue(123)).toBeUndefined();
      expect(Values.randomValue('hello')).toBeUndefined();
    });

    describe('in an object values', () => {
      it('should get a random value from a given object', () => {
        const obj = { att1: 'value 1', att2: 'value 2', att3: 'value 3' };
        const objValues: any[] = Object.values(obj);
        const randomValue = Values.randomValue(obj);
        expect(randomValue).toBeDefined();
        expect(objValues.includes(randomValue)).toBeTruthy();
      });
    });

    describe('in an array values', () => {
      it('should get a random value from a plain array', () => {
        const values: any[] = ['a', 'b', 'c', 'd', 'e', 'f'];
        const randomValue = Values.randomValue(values);
        expect(randomValue).toBeDefined();
        expect(values.includes(randomValue)).toBeTruthy();
      });

      it('should get a random value from an object array', () => {
        const values: any[] = [{ att: 'a' }, { att: 'b' }, { att: 'c' }, { att: 'd' }, { att: 'e' }, { att: 'f' }];
        const randomValue = Values.randomValue(values);
        expect(randomValue).toBeDefined();
        expect(arrayFind(values, randomValue, 'att')).toBeDefined();
      });
    });
  });

  describe('calculateAvailablePages', () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    it('should use the default pageSize and return 1 as result', () => {
      expect(Values.calculateAvailablePages(values)).toEqual(1);
    });

    it('should use 5 items as page size ', () => {
      expect(Values.calculateAvailablePages(values, 5)).toEqual(2);
    });
  });

  describe('paginate', () => {
    const pageSize = 5;
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    it('should have an empty response to an empty data array', () => {
      const result = Values.paginate([], 0, pageSize);
      expect(result).toBeDefined();
      expect(result).toHaveLength(0);
    });

    it('should use the default values to get the first page', () => {
      const result = Values.paginate(values);
      expect(result).toBeDefined();
      expect(result).toHaveLength(10);
    });

    it('should get the first page', () => {
      const result = Values.paginate(values, 0, pageSize);
      expect(result).toBeDefined();
      expect(result).toHaveLength(pageSize);
    });

    it('should get the second page', () => {
      const result = Values.paginate(values, 5, pageSize);
      expect(result).toBeDefined();
      expect(result).toHaveLength(pageSize);
    });

    it('should get last 3 items from the array', () => {
      const result = Values.paginate(values, 7, pageSize);
      expect(result).toBeDefined();
      expect(result).toHaveLength(3);
    });
  });

  describe('randomSetOfData', () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    it('should get a random set of data between 1 and 10', () => {
      const result = Values.randomSetOfData(values);
      expect(result).toBeDefined();
      const { length } = result;
      expect(length >= 1 && length <= 10).toBeTruthy();
    });

    it('should get a random set of data with 5 items', () => {
      const pageSize = 5;
      const result = Values.randomSetOfData(values, pageSize);
      expect(result).toBeDefined();
      expect(result).toHaveLength(pageSize);
    });
  });

  describe('randomAmountOfData', () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    it('should get an empty array to a given empty data array', () => {
      const result = Values.randomAmountOfData([], 10);
      expect(result).toBeDefined();
      expect(result).toHaveLength(0);
    });

    it('should get a random amount of data between 1 and 10', () => {
      const result = Values.randomAmountOfData(values);
      expect(result).toBeDefined();
      const { length } = result;
      expect(length >= 1 && length <= 10).toBeTruthy();
    });

    it('should get a random amount of data with 5 items', () => {
      const pageSize = 5;
      const result = Values.randomAmountOfData(values, pageSize);
      expect(result).toBeDefined();
      expect(result).toHaveLength(pageSize);
    });
  });
});
