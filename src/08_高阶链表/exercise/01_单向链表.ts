import { ILinkedList, Node } from '../types/ILinkedList'
export class _LinkList<T> implements ILinkedList<T> {
  length: number = 0
  private head: Node<T> | null = null
  pick() {
    return this.head?.value
  }
  size() {
    return this.length
  }

  append(value: T): void {
    const node = new Node<T>(value)

    if (!this.head) {
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
    let current = this.head

    while (current) {
      console.log(current.value)
      current = current.next
    }
  }
  getNode(position: number): Node<T> | null {
    if (position > this.length - 1 || position < 0) {
      return null
    }

    let current = this.head
		let index = 0

    while (index < position) {
      current = current!.next
			index++
    }

    return current
  }
  insert(value: T, position: number): boolean {
    if (position > this.length || position < 0) return false

    const node = new Node(value)
    if (position === 0) {
      node.next = this.head!
      this.head = node
    } else {
      const prevNode = this.getNode(position - 1)!
      node.next = prevNode.next
      prevNode.next = node
    }

		this.length ++

    return true
  }
  removeAt(position: number): T | null {
    if (position >= this.length || position < 0) return null

    let removeValue: T | null = null
    if (position === 0) {
      removeValue = this.head?.value ?? null
      this.head = this.head?.next ?? null
    } else {
      const prevNode = this.getNode(position - 1)!
      removeValue = prevNode.next?.value ?? null
      prevNode.next = prevNode.next?.next ?? null
    }

    this.length --

    return removeValue
  }
  remove(value: T): boolean {
    const index = this.indexOf(value)
    if (index === -1) return false
    const removeValue = this.removeAt(index)
    if (removeValue === null) return false

    return true
  }
  get(position: number): T | null {
    return this.getNode(position)?.value ?? null
  }
  update(value: T, position: number): boolean {
    const targerNode = this.getNode(position)
    if (!targerNode) {
      return false
    }

    targerNode.value = value
    return true
  }
  indexOf(value: T): number {
    let current = this.head
    let index = -1
    while (index++ < this.length - 1) {
      if (current!.value === value) {
        return index
      }
			current = current!.next
    }

    return -1
  }
  isEmpty(): boolean {
    return this.length === 0
  }
}

const _linkList = new _LinkList<number>()

_linkList.append(1)
_linkList.append(2)
_linkList.append(3)
_linkList.traverse()
console.log('------')

// console.log( _linkList.indexOf(2))
console.log( _linkList.remove(2))
console.log('------')
_linkList.traverse()
// console.log( _linkList.getNode(1)?.value)
// console.log( _linkList.getNode(2)?.value)
