// import { Node } from '../../00_types/Node'
// class TreeNode<T> extends Node<T> {
//   left: TreeNode<T> | null = null
//   right: TreeNode<T> | null = null
//   parent: TreeNode<T> | null = null
//   get isLeft() {
//     return this.parent?.left === this
//   }
//   get isRight() {
//     return this.parent?.right === this
//   }
// }

export class Heap<T> {
  data: T[] = []
  private length: number = 0

  private swap(i: number, j: number) {
    const temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }

  insert1(value: T) {
    this.length++
    if (this.length === 0) {
      this.data[0] = value
    } else {
      this.data.push(value)
      let currentIndex = this.length - 1
      let parentIndex = Math.floor((currentIndex - 1) / 2)
      while (parentIndex >= 0) {
        // 父节点小于子节点, 交换
        if (this.data[parentIndex] < this.data[currentIndex]) {
          console.log('swap')
          this.swap(parentIndex, currentIndex)
          currentIndex = parentIndex
          parentIndex = Math.floor((currentIndex - 1) / 2)
          console.log(currentIndex)
        } else {
          // continue
          return
        }
      }
    }
  }
  insert(value: T) {
    // 将元素插入尾部
    this.length++
    this.data.push(value)
    
    // 上滤操作, 保持最大堆的特性
    this.heapify_up()
  }

  heapify_up() {
    let index = this.length - 1
    while (index > 0) {
      // 父节点小于子节点, 交换
      let parentIndex = Math.floor((index - 1) / 2)
      if (this.data[index] <= this.data[parentIndex]) {
        break
      }
      this.swap(index, parentIndex)
      index = parentIndex
    }
  }

  extract(): T | undefined {
    return undefined
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

  buildHeap(arr: T[]) {}
}

const heap = new Heap<number>()
// heap.insert(0)
// heap.insert(2)
// heap.insert(4)
// heap.insert(4)
// heap.insert(3)

const arr = [19, 100, 36, 17, 3, 25, 1, 2, 7]
arr.forEach((item) => {
  heap.insert(item)
})
// heap.insert(133)

console.log(heap.data)
