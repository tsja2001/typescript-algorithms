const binarySearch = (arrs: number[], num: number) => {
  let left = 0
  let right = arrs.length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (arrs[middle] < num) {
      left = middle + 1
    } else if (arrs[middle] > num) {
      right = middle - 1
    }
    if (arrs[middle] === num) {
      return middle
    }
  }

  return -1
}

const res = binarySearch([0, 1, 2, 3, 4, 5], 5)
console.log(res)

export {}
