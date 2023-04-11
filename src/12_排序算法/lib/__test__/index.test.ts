import fs from 'fs'
import { bubbleSort } from '../01_bubbleSort'
import { selectionSort } from '../02_selectionSort'
import { insertionSort } from '../03_insertSort'
import { mergeSort } from '../04_mergeSort'
import path from 'path'

function shuffle<T>(array: T[]): T[] {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

describe('Sorting algorithms', () => {
  const testCases = [
    {
      description: 'empty array',
      input: [],
      expected: []
    },
    {
      description: 'array with one element',
      input: [1],
      expected: [1]
    },
    {
      description: 'array in descending order',
      input: [3, 2, 1],
      expected: [1, 2, 3]
    },
    {
      description: 'array with repeated elements',
      input: [5, 2, 7, 2, 8, 6],
      expected: [2, 2, 5, 6, 7, 8]
    },
    {
      description: 'array in ascending order',
      input: [1, 2, 3, 4, 5],
      expected: [1, 2, 3, 4, 5]
    },
    {
      description: 'array with negative numbers',
      input: [5, -2, 7, 3, -8, 6],
      expected: [-8, -2, 3, 5, 6, 7]
    },
    {
      description: 'array with large number of elements',
      input: shuffle(Array.from({ length: 9999 }, (_, i) => i)),
      expected: Array.from({ length: 9999 }, (_, i) => i)
    },
    {
      description:
        'array with large number of elements in descending order',
      input: Array.from({ length: 9999 }, (_, i) => 9998 - i),
      expected: Array.from({ length: 9999 }, (_, i) => i)
    }
  ]

  const results: Record<string, Record<string, any>> = {}

  test.each`
    sortFn           | functionName
    ${bubbleSort}    | ${'bubble sort'}
    ${selectionSort} | ${'selection sort'}
    ${insertionSort} | ${'insertion sort'}
    ${mergeSort}     | ${'merge sort'}
  `('$functionName', ({ sortFn, functionName }) => {
    results[functionName] = {}
    testCases.forEach(({ description, input, expected }) => {
      const start = performance.now()
      sortFn(input)
      const end = performance.now()
      const duration = end - start
      results[functionName][description] = duration * 1000
      expect(sortFn(input)).toEqual(expected)
    })
    const durations = Object.values(results[functionName])
    const avgDuration =
      durations.reduce((sum, duration) => sum + duration, 0) /
      durations.length
    results[functionName]['average'] = avgDuration
  })

  afterAll(() => {
    const filePath = path.resolve(__dirname, './results.json')
    const output = { algorithms: results }
    fs.writeFile(filePath, JSON.stringify(output, null, 2), (err) => {
      if (err) throw err
      console.log('Results saved to file!')
    })
  })
})
