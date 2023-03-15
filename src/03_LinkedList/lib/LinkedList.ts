export class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(val: T) {
    this.value = val
  }
}

export class LinkedList<T> {
  private size: number = 0
  private head: Node<T> | null = null

  // 向链表中追加元素
  append(value: T) {
    const newNode = new Node(value)

    this.size++

    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }

      current.next = newNode
    }
  }

  // 遍历打印链表
  traverse() {
    let current = this.head

    const values: T[] = []

    while (current) {
      values.push(current.value)
      current = current.next
    }

    console.log(values.join(' -> '))
  }

  // 插入节点
  insert(value: T, index: number): boolean {
    if (index < 0 || index > this.size) return false

    const newNode = new Node(value)

    // 头节点
    if (index === 0) {
      newNode.next = this.head
      this.head = newNode
    }

    return true
  }

  get length() {
    return this.size
  }
}

const linkedlist = new LinkedList<string>()

linkedlist.append('aaaa')
linkedlist.append('bbbb')
linkedlist.append('cccc')
linkedlist.append('dddd')

console.log('当前链表')
linkedlist.traverse()
console.log('头插入元素')
linkedlist.insert('123', 0)
linkedlist.insert('aaa', 0)
console.log('当前链表')
linkedlist.traverse()
