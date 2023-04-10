import { bubbleSort } from '../01_bubbleSort'

describe('Sorting algorithms', () => {
  const testCases = [
    { input: [], expected: [] },
    { input: [1], expected: [1] },
    { input: [3, 2, 1], expected: [1, 2, 3] },
    { input: [5, 2, 7, 3, 8, 6], expected: [2, 3, 5, 6, 7, 8] },
    { input: [5, 2, 7, 2, 8, 6], expected: [2, 2, 5, 6, 7, 8] },
    { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
    { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] },
    { input: [5, -2, 7, 3, -8, 6], expected: [-8, -2, 3, 5, 6, 7] },
  ]

  test.each`
    sortFn        | functionName
    ${bubbleSort} | ${'bubble sort'}
  `('$functionName', ({ sortFn }) => {
    testCases.forEach(({ input, expected }) => {
      expect(sortFn(input)).toEqual(expected)
    })
  })
})
