export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr

  const middle = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, middle)
  const rightArr = arr.slice(middle)

  const lastLeftArr = mergeSort(leftArr)
  const lastRightArr = mergeSort(rightArr)

  let i = 0
  let j = 0

  const resArr = []

  while (i < lastLeftArr.length && j < lastRightArr.length) {
    if (lastLeftArr[i] < lastRightArr[j]) {
      resArr.push(lastLeftArr[i])
      i++
    } else {
      resArr.push(lastRightArr[j])
      j++
    }
  }

  if (i < lastLeftArr.length) {
    resArr.push(...lastLeftArr.slice(i))
  }
  if (j < lastRightArr.length) {
    resArr.push(...lastRightArr.slice(j))
  }

	return resArr
}

const arr = [9, 5, 8, 3, 1, 0]
debugger

const sortArr = mergeSort(arr)

console.log(sortArr)

