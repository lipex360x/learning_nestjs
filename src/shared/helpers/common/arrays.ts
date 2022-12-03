import Big from 'big.js';

import { AnyObject } from '../types';

/**
 * Returns the sum of all array elements
 */
export function arraySum(numbers: Big[]) {
  return numbers.reduce((acc, current) => acc.add(current), new Big(0));
}

/**
 * Returns the arithmetic average of all array elements
 */
export function arrayAverage(numbers: Big[]) {
  return arraySum(numbers).div(numbers.length);
}

/**
 * Get an array with the values of a property
 */
export function arrayCollumn<T extends AnyObject, K extends keyof T>(
  input: T[],
  key: K,
) {
  return input.map((item) => item[key]);
}

/**
 * Returns the sum of all array elements by key
 */
export function arraySumByCollumn<T extends AnyObject, K extends keyof T>(
  input: T[],
  key: K,
) {
  return arraySum(arrayCollumn(input, key));
}
