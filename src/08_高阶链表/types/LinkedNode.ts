export class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(val: T) {
    this.value = val
  }
}

export class DoublyNode<T> extends Node<T>{
	prev: DoublyNode<T> | null = null
	// 对next重写
	next: DoublyNode<T> | null = null
}
