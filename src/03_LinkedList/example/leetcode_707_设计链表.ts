// https://leetcode.cn/problems/design-linked-list/

interface IListItem {
  val: number
  next: IListItem | null
}

class ListItem {
  constructor(val: number) {
    this.val = val
  }
  val: number
  next: IListItem | null = null
}

class MyLinkedList {
  private size: number = 0
  private head: IListItem | null = null

  getNode(index: number): IListItem | null {
    if (index < 0 || index > this.size - 1) {
      return null
    }

    let currentIndex = 0
    let currentNode = this.head
    while (currentIndex++ < index) {
      currentNode = currentNode!.next
    }

    return currentNode
  }

  get(index: number): number {
    const targetNode = this.getNode(index)

    if (targetNode) {
      return targetNode.val
    } else {
      return -1
    }
  }

  addAtHead(val: number): void {
    const node = new ListItem(val)

    this.size++

    if (this.size === 0) {
      this.head = node
      return
    }

    node.next = this.head
    this.head = node
  }

  addAtTail(val: number): void {
    if (this.size === 0) return this.addAtHead(val)

    const node = new ListItem(val)
    const prevTail = this.getNode(this.size - 1)

    if (prevTail) {
      prevTail.next = node
      this.size++
    }
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) return

    if (index === 0 || this.size === 0) return this.addAtHead(val)

    const node = new ListItem(val)
    const prevNode = this.getNode(index - 1)

    if (prevNode) {
      node.next = prevNode.next
      prevNode.next = node
      this.size++
    }
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index > this.size - 1 || this.size === 0) return

    this.size--

    if (index === 0) {
      this.head = this.head?.next ?? null
      return
    }

    const prevNode = this.getNode(index - 1)
    if (prevNode) {
      prevNode.next = prevNode?.next?.next ?? null
    }
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
