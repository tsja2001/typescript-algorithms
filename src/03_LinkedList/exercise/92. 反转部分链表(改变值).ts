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

// 改变值
function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let startReverseNode = head
  for (let i = 1; i < left; i++) {
    startReverseNode = startReverseNode!.next
  }

  let currentNode = startReverseNode
  const valueList: number[] = []
  for (let i = left; i <= right; i++) {
    valueList.push(currentNode!.val)
    currentNode = currentNode!.next
  }

  for (let i = left; i <= right; i++) {
    startReverseNode!.val = valueList.pop()!
    startReverseNode = startReverseNode!.next
  }

  return head
}
export {}
