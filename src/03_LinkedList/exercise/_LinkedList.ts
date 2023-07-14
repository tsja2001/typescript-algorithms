import { resourceUsage } from 'process'
import { ILinkedList } from '../types/ILinkedList'
export class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(val: T) {
    this.value = val
  }
}
export class LinkedList<T> implements ILinkedList<T> {
  length: number = 0
  head: Node<T> | null = null

  append(value: T): void {
    const node: Node<T> = new Node(value)

    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    this.length++
  }

  traverse(): void {
    let resArr = []
    let current = this.head

    while (current) {
      resArr.push(current.value)
      current = current.next
    }

    console.log(resArr.join(' -> '))
  }
  insert(value: T, position: number): boolean {
    const newNode = new Node(value)
    // 插在第一个
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
      this.length++

      return true
    }

    const prevNode = this.getNode(position - 1)

    if (prevNode === null) return false

    newNode.next = prevNode.next
    prevNode.next = newNode
    this.length++

    return true
  }
  removeAt(position: number): T | null {
    if (position < 0 || position >= this.length) return null

    let removedValue: T | null = null

    if (position === 0) {
      removedValue = this.head?.value ?? null
      this.head = this.head?.next ?? null
    } else {
      const prevNode = this.getNode(position - 1)

      removedValue = prevNode!.next?.value ?? null
      prevNode!.next = prevNode!.next?.next ?? null
    }

    this.length--

    return removedValue
  }
  remove(value: T): boolean {
    let prev = null
    let current = this.head

    while (current) {
      if (current.value === value) {
        if (current === this.head) {
          this.head = current.next
        } else {
          prev!.next = current.next
        }
        this.length--
        return true
      }
      prev = current
      current = current.next
    }

    return false
  }
  get(position: number): T | null {
    if(position < 0 || position > this.length - 1) return null

    let current = this.head
    while (position-- > 0 && current) {
      current = current?.next
    }

    return current?.value ?? null
  }
  getNode(position: number): Node<T> | null {
    if (position < 0) return null

    let current = this.head
    while (position-- > 0 && current) {
      current = current?.next
    }

    return current
  }
  update(value: T, position: number): boolean {
    if (position < 0 || position > this.length - 1) return false

    const current = this.getNode(position)
    if (current) {
      current.value = value
    }

    return true
  }
  indexOf(value: T): number {
    let index = 0
    let current = this.head
    while(current){
      if(current.value === value) return index
      current = current.next
      index++
    }
    return -1
  }
  isEmpty(): boolean {
    return this.length === 0
  }
  pick: () => T | undefined = () => {
    return this.head?.value
  }
  size: () => number = () => {
    return this.length
  }
}
