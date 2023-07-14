/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseList(head: ListNode | null): ListNode | null {
	if(head === null) return head

  // 获取所有节点数据
	const valueList: number[] = []
	traverseLinkedList(head, (node) => {
		valueList.push(node.val)
	})
  // 重新赋值
	traverseLinkedList(head, (node) => {
		node.val = valueList.pop()!
	})

  return head
}

function traverseLinkedList(
  head: ListNode,
  cb: (node: ListNode) => void
) {
  let current: ListNode | null = head
  while (current) {
    cb(current)
    current = current.next
  }
}

export {}
