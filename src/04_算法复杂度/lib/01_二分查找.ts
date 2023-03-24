const binarySearch = (arrs: number[], num: number) => {
  let left = 0
  let right = arrs.length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    let midNum = arrs[middle]


    if (midNum === num) {
      return middle
    } else if (midNum > num) {
      right = middle - 1
    } else if (midNum < num) {
      left = middle + 1
    }
  }

  return -1
}

const res = binarySearch([1, 2, 4, 5, 7, 10, 33, 435], 435)

console.log(res)

console.log(performance)
