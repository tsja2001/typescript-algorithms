export const insertionSort = (arr: number[]) => {
  const n = arr.length
  for (let i = 1; i < n; i++) {
		const newNum = arr[i]
		let j = i - 1
    while (arr[j] > newNum  && j >= 0) {
			arr[j + 1] = arr[j]
      j--
    }
		arr[j + 1] = newNum
  }

  return arr
}
const arr = [9, 5, 8, 3, 1, 0]

const sortArr = insertionSort(arr)

console.log(sortArr)
