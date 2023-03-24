import { binarySearch } from './../lib/01_二分查找'
describe('binarySearch', () => {
  it('should return the correct index when the number is present in the array', () => {
    const arr = [1, 3, 5, 7, 9]
    const num = 7
    expect(binarySearch(arr, num)).toBe(3)
  })

  it('should return -1 when the number is not present in the array', () => {
    const arr = [1, 3, 5, 7, 9]
    const num = 4
    expect(binarySearch(arr, num)).toBe(-1)
  })

  it('should return the correct index when the array has only one element and it is the number', () => {
    const arr = [3]
    const num = 3
    expect(binarySearch(arr, num)).toBe(0)
  })

  it('should return -1 when the array has only one element and it is not the number', () => {
    const arr = [3]
    const num = 5
    expect(binarySearch(arr, num)).toBe(-1)
  })

  it('should return -1 when the array is empty', () => {
    const arr: number[] = []
    const num = 3
    expect(binarySearch(arr, num)).toBe(-1)
  })
})
