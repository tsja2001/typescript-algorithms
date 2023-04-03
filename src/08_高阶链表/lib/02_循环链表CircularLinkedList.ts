import { LinkedList } from './01_单向链表LinkedList'

class CircularLinkedList<T> extends LinkedList<T> {
  append(value: T): void {
    super.append(value)
    this.tail!.next = this.head
  }

  insert(value: T, position: number, showLog?: boolean): boolean {
    const isSuccess = super.insert(value, position, showLog)

    if (isSuccess && (position === this.length || position === 0)) {
      this.tail!.next = this.head
    }

    return isSuccess
  }

  removeAt(position: number, showLog?: boolean): T | null {
    const res = super.removeAt(position)
    if (
      (position === 0 || position === this.length) &&
      this.tail &&
      res
    ) {
      this.tail.next = this.head
    }
    return res
  }
}

const cLinkList = new CircularLinkedList<string>()

cLinkList.append('aaa')
cLinkList.append('bbb')
cLinkList.append('ccc')

cLinkList.traverse()
// cLinkList.removeAt(2)
console.log(cLinkList.indexOf('aaa'))

cLinkList.traverse()
