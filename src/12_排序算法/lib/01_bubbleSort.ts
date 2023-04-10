import { swap } from './utils'

export function bubbleSort(arr: number[]): number[] {
  const n = arr.length

  let swaped = false

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        swaped = true
      }
    }
		
    if (!swaped) {
      break
    }
  }

  return arr
}

const arr = [9, 5, 8, 3, 1, 0]

const sortArr = bubbleSort(arr)

console.log(sortArr)
