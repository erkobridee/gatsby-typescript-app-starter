import { isObject, isArray } from './check';

//----------------------------------------------------------------------------//

export const getPropertyValue = <TObject, Key extends keyof TObject>(
  object: TObject,
  propertyName: Key
): TObject[Key] => object[propertyName];

export const setPropertyValue = <TObject, Key extends keyof TObject, TValue extends TObject[Key]>(
  object: TObject,
  propertyName: Key,
  value: TValue
): TObject => {
  object[propertyName] = value;
  return object;
};

//----------------------------------------------------------------------------//

export const randomFloat = (min: number, max: number): number => Math.random() * (max - min) + min;

export const randomDecimalString = (min: number, max: number, fixed = 2): string =>
  randomFloat(min, max).toFixed(fixed);

export const randomDecimal = (min: number, max: number, fixed = 2): number => +randomDecimalString(min, max, fixed);

export const randomInt = (min: number, max: number): number => Math.floor(randomFloat(min, max));

export const randomIntAsString = (min: number, max: number, padStart = 2): string => {
  return String(randomInt(min, max)).padStart(padStart, '0');
};

export const randomBoolean = (): boolean => randomInt(0, 1) === 0;

export const randomValue = <T extends any>(options: T | T[], inNumber?: number): T | undefined => {
  if (!isObject(options) && !isArray(options)) {
    return;
  }
  if (isObject(options)) {
    options = Object.values(options as any);
  }
  inNumber = Math.min(inNumber || Number.MAX_SAFE_INTEGER, options.length);
  return options[randomInt(0, inNumber - 1)];
};

//----------------------------------------------------------------------------//

export const calculateAvailablePages = <T extends any>(data: T[], pageSize = 25): number =>
  Math.ceil(data.length / pageSize);

export const paginate = <T extends any>(data: T[], start = 0, pageSize = 25): T[] => {
  const { length } = data;
  if (length === 0 || start > length) {
    return [];
  }

  if (start + pageSize > length) {
    return data.slice(start, length);
  }

  return data.slice(start, start + pageSize);
};

export const randomSetOfData = <T extends any>(data: T[], amount: number = randomInt(1, 10)): T[] => {
  const pagesAmount = calculateAvailablePages(data, amount);
  const randomPage = randomInt(1, pagesAmount);
  const pageStart = (randomPage - 1) * amount;
  return paginate(data, pageStart, amount);
};

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
