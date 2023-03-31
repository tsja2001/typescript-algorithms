import { IList } from '@src/00_types/IList'

export class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(val: T) {
    this.value = val
  }
}

export interface ILinkedList<T> extends IList<T> {
  // get length(): number
  // get head(): Node<T> | null
  append(value: T): void
  traverse(): void
  insert(value: T, position: number): boolean
  removeAt(position: number): T | null
  remove(value: T): boolean
  get(position: number): T | null
  update(value: T, position: number): boolean
  indexOf(value: T): number
  isEmpty(): boolean
}
