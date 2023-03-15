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

  get length() {
    return this.size
  }

  private getNode(position: number): Node<T> | null {
    let currentNode = this.head

    if (position < 0 || position > this.size - 1) {
      return null
    }
    
    let index = 0
    while (index++ < position && currentNode) {
      currentNode = currentNode?.next
    }

    return currentNode ?? null
  }

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
    showLog: boolean = false
  ): boolean {
    // 如果越界, 返回false
    if (position < 0 || position > this.size) return false

    const newNode = new Node(value)

    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      const previous = this.getNode(position - 1)
      const node = new Node(value)

      node.next = previous?.next ?? null
      previous!.next = node
    }

    this.size++

    if (showLog) {
      console.log(`在${position}位置插入${value}, 插入后为⬇️`)
      this.traverse()
    }

    return true
  }

  // 删除节点
  removeAt(position: number, showLog: boolean = false): T | null {
    if (position < 0 || position >= this.size) return null

    let current = this.head
    
    if (position === 0) {
      this.head = current?.next ?? null
    } else {
      const previous = this.getNode(position - 1)

      current = previous?.next ?? null

      previous!.next = current?.next ?? null
    }

    this.size--

    if (showLog) {
      console.log(`在${position}位置删除, 删除后为⬇️`)
      this.traverse()
    }

    return current?.value ?? null
  }

  // 查找节点
  get(position: number, showLog: boolean = false): T | null {
    if (position < 0 || position > this.size - 1) {
      return null
    }

    const current = this.getNode(position)

    if (showLog) {
      console.log(`在${position}位置找到${current?.value}`)
      this.traverse()
    }

    return current?.value ?? null
  }
}

const linkedlist = new LinkedList<string>()

linkedlist.append('aaaa')
linkedlist.append('bbbb')
linkedlist.append('cccc')
linkedlist.append('dddd')

console.log('当前链表')
linkedlist.traverse()

linkedlist.get(1, true)
linkedlist.get(3, true)
linkedlist.get(2, true)

// linkedlist.removeAt(3, true)

console.log('当前链表')
linkedlist.traverse()
//
