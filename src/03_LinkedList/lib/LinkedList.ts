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
  insert(
    value: T,
    position: number,
    changeLog: boolean = false
  ): boolean {
    // 如果越界, 返回false
    if (position < 0 || position > this.size) return false

    const newNode = new Node(value)

    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let current = this.head
      let previous: Node<T> | null = null

      let index = 0

      while (index < position) {
        index++
        previous = current
        current = current!.next
      }

      const node = new Node(value)

      node.next = current
      previous!.next = node
    }

    this.size++

    if (changeLog) {
      console.log(`在${position}位置插入${value}, 插入后为⬇️`)
      this.traverse()
    }

    return true
  }

  // 删除节点
  removeAt(position: number, changeLog: boolean = false): T | null {
    if (position < 0 || position >= this.size) return null

    let current = this.head
    let previous: Node<T> | null = null

    if (position === 0) {
      this.head = current?.next ?? null
    } else {
      let index = 0
      while (index++ < position && current) {
        previous = current
        current = current.next
      }

      previous!.next = current?.next ?? null
    }

    this.size--

    if (changeLog) {
      console.log(`在${position}位置删除, 删除后为⬇️`)
      this.traverse()
    }

    return current?.value ?? null
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

linkedlist.removeAt(3, true)

console.log('当前链表')
// linkedlist.traverse()
//
