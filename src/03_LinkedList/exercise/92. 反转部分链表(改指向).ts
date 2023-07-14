/**
 * Definition for singly-linked list.
 * class ListNode {
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


// 改变指向
function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (left === right || head === null || head.next === null)
    return head

  let current: ListNode | null = head
  let prev: ListNode | null = null

  for (let i = 1; i < left; i++) {
    prev = current
    current = current!.next
  }

  let reverseStartNode = current
  let reverseStartPrevNode = prev

  // let next = current?.next

  for (let i = left; i <= right; i++) {
    let next = current!.next
    current!.next = prev
    prev = current
    current = next
  }

  if (reverseStartPrevNode) {
    reverseStartPrevNode.next = prev
  }
  reverseStartNode!.next = current

  return head
}

export {}
