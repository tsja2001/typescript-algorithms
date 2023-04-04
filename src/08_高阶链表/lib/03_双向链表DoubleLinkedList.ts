import { DoublyNode } from './../types/LinkedNode'
import { LinkedList } from './01_单向链表LinkedList'

export class DoublyLinkedList<T> extends LinkedList<T> {
  tail: DoublyNode<T> | null = null
  head: DoublyNode<T> | null = null

  append(value: T): void {
    const newNode = new DoublyNode(value)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail!.next = newNode
      this.tail = newNode
    }

    this.length++
  }

  // 向尾部插入
  prepend(value: T) {
    const newNode = new DoublyNode(value)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }

    this.length++
  }

  // 反向遍历
  postTraverse() {
    const values = []
    let currentNode = this.tail
    while (currentNode) {
      values.push(currentNode.value)
      currentNode = currentNode.prev
    }

    console.log(values.join(' -> '))
  }

  // 插入
  insert(value: T, position: number, showLog?: boolean): boolean {
    if (position < 0 || position > this.length) return false
    else if (position === 0) {
      this.prepend(value)
      return true
    } else if (position === this.length) {
      this.append(value)
      return true
    } else {
      const newNode = new DoublyNode(value)
      const currentNode = this.getNode(position)! as DoublyNode<T>
      newNode.next = currentNode
      newNode.prev = currentNode.prev
      currentNode.prev!.next = newNode
      currentNode.prev = newNode
      this.length++
      return true
    }
  }
}

const dLinkedList = new DoublyLinkedList<string>()
dLinkedList.append('aaa')
dLinkedList.append('bbb')
dLinkedList.append('ccc')
dLinkedList.append('ddd')
dLinkedList.traverse()
