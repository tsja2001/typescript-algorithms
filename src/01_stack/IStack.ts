export interface IStack<T> {
  push(element: T): void
  pop(): T | undefined
  pick(): T | undefined
  isEmpty(): boolean
  size(): number
}
