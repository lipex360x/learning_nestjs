import Big from 'big.js';

import {
  arrayAverage,
  arrayCollumn,
  arraySum,
  arraySumByCollumn,
} from 'src/shared/helpers/common/arrays';

describe('arrays/arrayAverage', () => {
  it.each([
    ['2.5', [1, 2, 3, 4]],
    ['8', [7, 8, 9]],
    ['1', [1, 1, 1, 1]],
    ['3.5', [3, 4]],
    ['1', [1]],
  ])('shoud return %p properly', (expected, input) => {
    expect(arrayAverage(input.map((item) => Big(item)))).toEqual(Big(expected));
  });
});

describe('arrays/arrayCollumn', () => {
  it('should return properly', () => {
    expect(
      arrayCollumn(
        [
          { id: 1, name: 'any' },
          { id: 2, name: 'any' },
          { id: 3, name: 'any' },
          { id: 4, name: 'any' },
        ],
        'id',
      ),
    ).toEqual([1, 2, 3, 4]);
  });
});

describe('arrays/arraySum', () => {
  it.each([
    ['10', [1, 2, 3, 4]],
    ['4', [1, 1, 1, 1]],
    ['7', [3, 4]],
    ['1', [1]],
  ])('shoud return %p properly', (expected, input) => {
    expect(arraySum(input.map((item) => Big(item)))).toEqual(Big(expected));
  });
});

describe('arrays/arraySumByCollumn', () => {
  it.each([
    [
      '10',
      [
        { amount: 1, name: 'any' },
        { amount: 5, name: 'any' },
        { amount: 4, name: 'any' },
      ],
    ],
    [
      '4',
      [
        { amount: 2, name: 'any' },
        { amount: 2, name: 'any' },
      ],
    ],
    [
      '7',
      [
        { amount: 3, name: 'any' },
        { amount: 4, name: 'any' },
      ],
    ],
    ['1', [{ amount: 1, name: 'any' }]],
  ])('shoud return %p properly', (expected, input) => {
    expect(arraySumByCollumn(input, 'amount').toString()).toEqual(expected);
  });
});
