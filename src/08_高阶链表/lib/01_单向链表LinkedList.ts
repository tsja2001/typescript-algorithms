import { ILinkedList, Node } from '../types/ILinkedList'

export class LinkedList<T> implements ILinkedList<T> {
  // 重构: protected属性修饰符: 继承自己的类可以访问到
  protected length: number = 0
  protected head: Node<T> | null = null
  // 重构: 新增属性 指向链表尾部
  protected tail: Node<T> | null = null

  size() {
    return this.length
  }

  pick() {
    return this.head?.value
  }

  protected getNode(position: number): Node<T> | null {
    let currentNode = this.head

    if (position < 0 || position > this.length - 1) {
      return null
    }

    let index = 0
    while (index++ < position && currentNode) {
      currentNode = currentNode?.next
    }

    return currentNode ?? null
  }

  // 重构 判断是否为最后一个节点
  private isTail(node: Node<T>): boolean {
    return node === this.tail
  }

  // 向链表中追加元素 重构
  append(value: T) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
    } else {
      this.tail!.next = newNode
    }

    this.tail = newNode
    this.length++
  }

  // 遍历打印链表
  traverse() {
    let current = this.head

    const values: T[] = []

    while (current) {
      values.push(current.value)
      if (this.isTail(current)) {
        current = null
      } else {
        current = current.next
      }
    }

    // 如果是循环链表, 多打印个一个头
    if (this.head && this.head === this.tail?.next) {
      values.push(this.head.value)
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
    if (position < 0 || position > this.length) return false

    const newNode = new Node(value)

    // 插入第一个位置
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    }
    // 插入的不是第一个位置
    else {
      const previous = this.getNode(position - 1)

      newNode.next = previous?.next ?? null
      previous!.next = newNode

      // 重构 只有向最后一个位置插入时(类似append操作), 需要考虑tail指向
      if (position === this.length) {
        this.tail = newNode
      }
    }

    this.length++

    if (showLog) {
      console.log(`在${position}位置插入${value}, 插入后为⬇️`)
      this.traverse()
    }

    return true
  }

  // 删除节点根据索引
  removeAt(position: number, showLog: boolean = false): T | null {
    if (position < 0 || position >= this.length) return null

    let current = this.head

    if (position === 0) {
      this.head = current?.next ?? null

      // 如果当前只有一个节点, 且要删除这个节点时, 清空tail
      if (this.length === 1) {
        this.tail = null
      }
    } else {
      const previous = this.getNode(position - 1)

      current = previous?.next ?? null

      previous!.next = current?.next ?? null

      // 如果要删除最后一个, 则tail指向前一个
      if (position === this.length - 1) {
        this.tail = previous
      }
    }

    this.length--

    if (showLog) {
      console.log(`在${position}位置删除, 删除后为⬇️`)
      this.traverse()
    }

    return current?.value ?? null
  }

  // 删除节点根据值
  remove(value: T): boolean {
    const index = this.indexOf(value)
    if (index === -1) return false
    this.removeAt(index)

    return true
  }

  // 查找节点
  get(position: number, showLog: boolean = false): T | null {
    if (position < 0 || position > this.length - 1) {
      return null
    }

    const current = this.getNode(position)

    if (showLog) {
      console.log(`在${position}位置找到${current?.value}`)
      this.traverse()
    }

    return current?.value ?? null
  }

  // 更新节点
  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.length) return false

    const node = this.getNode(position)
    node!.value = value

    return true
  }

  // 查找索引
  indexOf(value: T): number {
    let currentNode = this.head
    let index = 0
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index
      }

      if (this.isTail(currentNode)) {
        currentNode = null
      } else {
        currentNode = currentNode.next
      }

      index++
    }

    return -1
  }

  // 判断节点是否为空
  isEmpty(): boolean {
    return this.length === 0
  }
}

const linkedlist = new LinkedList<string>()

// console.log(linkedlist.isEmpty())
// linkedlist.append('aaaa')
// linkedlist.append('bbbb')
// linkedlist.append('cccc')
// linkedlist.append('dddd')

// console.log('当前链表')
// linkedlist.traverse()

// console.log(linkedlist.indexOf('aaaa'))
// console.log(linkedlist.indexOf('bbbbb'))
// console.log(linkedlist.isEmpty())

// console.log('当前链表')
// linkedlist.traverse()
// //
