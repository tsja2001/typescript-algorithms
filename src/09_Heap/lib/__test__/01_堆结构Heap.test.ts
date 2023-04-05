import { Heap } from '../01_堆结构Heap'

describe('Heap', () => {
  let heap: Heap<number>
  beforeEach(() => {
    heap = new Heap<number>()
  })
  describe('insert', () => {
    test('insert test', () => {
      const arr = [19, 100, 36, 17, 3, 25, 1, 2, 7]
      arr.forEach((item) => {
        heap.insert(item)
      })
      expect(heap.data).toEqual([100, 19, 36, 17, 3, 25, 1, 2, 7])
    })
  })
})
