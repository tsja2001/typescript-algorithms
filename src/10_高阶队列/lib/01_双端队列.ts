import { Queue } from '../../02_queue/lib/01_创建queue'

export class ArrayDeque<T> extends Queue<T> {
  addFront(value: T) {
    this.data.unshift(value)
  }
  removeBack(): T | undefined {
    return this.data.pop()
  }	
}
