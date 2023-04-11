import { measureSort } from 'hy-algokit'
import { swap } from './utils'

export function selectionSort(arr: number[]): number[] {
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

		// 优化: 如果当前元素不需要移动, 则不进行交换
    if (i !== minIndex) {
      swap(arr, i, minIndex)
    }
  }

  return arr
}
const arr = [9, 5, 8, 3, 1, 0]

const sortArr = selectionSort(arr)

console.log(sortArr)
measureSort(selectionSort)
