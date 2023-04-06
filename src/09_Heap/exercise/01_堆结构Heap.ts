export class Heap<T> {
  length: number = 0
  constructor(public data: T[] = [], private isMax = true) {
    this.data = data
    this.isMax = isMax
  }

  private swap(i: number, j: number) {
    const value = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = value
  }

  insert(value: T) {
    this.data.push(value)
    this.length++
    this.heapify_up()
  }

  // 上滤操作
  private heapify_up() {
    let index = this.length - 1

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      if (this.compare(parentIndex, index)) {
        break
      }
      this.swap(index, parentIndex)
      index = parentIndex
    }
  }

  // 提取(大根堆->提取最大值)
  extract(): T | undefined {
    if (this.length === 0) return undefined
    if (this.length === 1) {
      this.length--
      return this.data.pop()
    }
    const resValue = this.data[0]
    this.data[0] = this.data.pop()!
    this.length--

    this.heapify_down(0)

    return resValue
  }

  // 下滤操作
  private heapify_down(index: number) {
    let currentIndex = index

    while (currentIndex * 2 + 1 < this.length) {
      let leftChildIndex = currentIndex * 2 + 1
      let rightChildIndex = currentIndex * 2 + 2
      let largerChildIndex = leftChildIndex

      if (
        // this.data[rightChildIndex] !== null &&
        rightChildIndex < this.length &&
        this.compare(rightChildIndex, leftChildIndex)
      ) {
        largerChildIndex = rightChildIndex
      }

      if (this.compare(currentIndex, largerChildIndex)) {
        break
      }
      this.swap(currentIndex, largerChildIndex)
      currentIndex = largerChildIndex
    }
  }

  peek(): T | undefined {
    return this.data?.[0]
  }

  size(): number {
    return this.length
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  build_heap(arr: T[]) {}

  private compare(i: number, j: number): boolean {
    if (this.isMax) {
      return this.data[i] >= this.data[j]
    } else {
      return this.data[i] <= this.data[j]
    }
  }
}
