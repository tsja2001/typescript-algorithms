export class Heap<T> {
  data: T[] = []
  // 标识是否为最大堆
  isMax: boolean = true
  private length: number = 0

  constructor(arr: T[] = [], isMax: boolean = true) {
    this.isMax = isMax
    if (arr.length === 0) return
    this.build_heap(arr)
  }

  private swap(i: number, j: number) {
    const temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }

  insert(value: T) {
    // 将元素插入尾部
    this.length++
    this.data.push(value)

    // 上滤操作, 保持最大堆的特性
    this.heapify_up()
  }

  // 上滤操作
  private heapify_up() {
    let index = this.length - 1
    while (index > 0) {
      // 父节点小于子节点, 交换
      let parentIndex = Math.floor((index - 1) / 2)
      if (this.compare(parentIndex, index)) {
        break
      }
      this.swap(index, parentIndex)
      index = parentIndex
    }
  }

  // 提取(大根堆->提取最大值)
  extract(): T | undefined {
    if (this.length === 0) {
      return undefined
    }
    // 1. 只有一个元素, 直接提取并返回
    if (this.length === 1) {
      this.length--
      return this.data.pop()!
    }

    // 2. 提取并返回最大值
    const resValue = this.data[0]
    this.data[0] = this.data.pop()!
    this.length--

    // 3. 下滤操作
    this.heapify_down(0)
    return resValue
  }

  // 下滤操作
  private heapify_down(index: number) {
    // 1. 定义当前索引位置
    while (index * 2 + 1 < this.length) {
      // 2. 找到左右子节点
      const leftChildIndex = index * 2 + 1
      const rightChildIndex = index * 2 + 2
      // 3. 找到左右子节点中比较大的值
      let largerIndex = leftChildIndex
      if (
        rightChildIndex < this.length &&
        this.compare(rightChildIndex, leftChildIndex) 
      ) {
        largerIndex = rightChildIndex
      }
      // 4. 比较较大的值和index位置谁大
      if (this.compare(index, largerIndex)) {
        break
      }
      // 5. 交换位置
      this.swap(index, largerIndex)
      index = largerIndex
    }
  }

  peek(): T | undefined {
    return this.data[0]
  }

  size(): number {
    return this.length
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  build_heap(arr: T[]) {
    this.data = arr
    this.length = arr.length

    let start = Math.floor((this.length - 1) / 2)
    for (let i = start; i >= 0; i--) {
      this.heapify_down(i)
    }
  }

  private compare(i: number, j: number): boolean {
    if (this.isMax) {
      return this.data[i] >= this.data[j]
    } else {
      return this.data[i] <= this.data[j]
    }
  }
}

const heap = new Heap<number>(
  [19, 100, 36, 17, 3, 25],
  false
)

console.log(heap.data)
// const heap = new Heap<number>([], false)
// const arr = [19, 100, 36, 17, 3, 25]
// arr.forEach((item) => {
//   heap.insert(item)
// })

// console.log(heap.data)
// console.log(heap.extract())
