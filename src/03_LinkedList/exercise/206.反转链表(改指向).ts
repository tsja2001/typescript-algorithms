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
	if(head === null || head.next === null) return head
  
  let current: ListNode | null = head
  let prev: ListNode | null = null
  let next: ListNode | null = current.next
  
  
  
  while (current) {
    current.next = prev

    prev = current
    current = next
    next = next?.next ?? null
  }

  return prev
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
