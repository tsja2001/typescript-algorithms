import { IStack } from './IStack';
export class Stack<T> implements IStack<T> {
  private data: T[] = []

  pop(): T | undefined {
    return this.data.pop()
  }

  push(element: T): void {
    this.data.push(element)
  }

  pick(): T | undefined {
    return this.data[this.data.length - 1]
  }

  isEmpty(): boolean {
    return !this.data.length
  }

  size(): number {
    return this.data.length
  }
}
