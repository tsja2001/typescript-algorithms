export class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(val: T) {
    this.value = val
  }
}
