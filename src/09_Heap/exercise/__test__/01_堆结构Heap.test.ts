import { Heap } from '../01_堆结构Heap'

describe('Heap', () => {
  describe('Heap Max', () => {
    let heap: Heap<number>
    beforeEach(() => {
      heap = new Heap<number>([], true)
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

    describe('extract', () => {
      test('extract test', () => {
        const arr = [19, 100, 36, 17, 3, 25, 1, 2, 7]
        arr.forEach((item) => {
          heap.insert(item)
        })

        expect(heap.extract()).toBe(100)
        expect(heap.data).toEqual([36, 19, 25, 17, 3, 7, 1, 2])

        expect(heap.extract()).toBe(36)
        expect(heap.data).toEqual([25, 19, 7, 17, 3, 2, 1])
      })
    })

    // describe('build_heap', () => {
    //   test('build_heap test', () => {
    //     const arr = [19, 100, 36, 17, 3, 25, 1, 2, 7]
    //     heap.build_heap(arr)
    //     expect(heap.data).toEqual([100, 19, 36, 17, 3, 25, 1, 2, 7])
    //   })
    // })
  })
  describe('Heap Min', () => {
    let heap: Heap<number>
    beforeEach(() => {
      heap = new Heap<number>([], false)
    })
    describe('insert', () => {
      test('insert test', () => {
        const arr = [19, 100, 36, 17, 3, 25]
        arr.forEach((item) => {
          heap.insert(item)
        })
        expect(heap.data).toEqual([3, 17, 25, 100, 19, 36 ])
      })
    })

    describe('extract', () => {
      test('extract test', () => {
        const arr = [19, 100, 36, 17, 3, 25]
        arr.forEach((item) => {
          heap.insert(item)
        })

        expect(heap.extract()).toBe(3)
        expect(heap.data).toEqual([ 17, 19, 25, 100, 36 ])

        expect(heap.extract()).toBe(17)
        expect(heap.data).toEqual([ 19, 36, 25, 100 ])
      })
    })

    // describe('build_heap', () => {
    //   test('build_heap test', () => {
    //     const arr = [19, 100, 36, 17, 3, 25]
    //     heap.build_heap(arr)
    //     expect(heap.data).toEqual([ 3, 17, 25, 19, 100, 36 ])
    //   })
    // })
  })
})
