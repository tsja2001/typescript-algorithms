// https://leetcode.cn/problems/reverse-linked-list/submissions/
// Definition for singly-linked list.
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// 使用栈结构实现(仅反转数据, 未反转节点)
export function reverseList1(head: ListNode | null): ListNode | null {
  const storedList = []

  let currentNode = head

  while (currentNode) {
    storedList.push(currentNode.val)
    currentNode = currentNode.next
  }

  currentNode = head

  while (currentNode) {
    currentNode.val = storedList.pop()!
    currentNode = currentNode.next
  }

  return head
}

// 使用栈结构实现(反转节点)
export function reverseList3(head: ListNode | null): ListNode | null {
	if(head === null || head.next === null) return head

  const storedList = []
  let currentNode: ListNode | null = head

  while (currentNode) {
    storedList.push(currentNode)
    currentNode = currentNode.next ?? null
  }

	let popCurrentNode: ListNode | null = storedList.pop()!
	let returnHead = popCurrentNode


  while (popCurrentNode) {
    popCurrentNode!.next = storedList.pop() ?? null
    popCurrentNode = popCurrentNode!.next ?? null
  }

  return returnHead
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
node1.next = node2
node2.next = node3

const reversedNode = reverseList3(node1)

console.log(reversedNode?.val)
console.log(reversedNode?.next?.val)
console.log(reversedNode?.next?.next?.val)
console.log(reversedNode?.next?.next?.next?.val)


function reverseList2(head: ListNode | null): ListNode | null {
  const storedList = []

  let currentNode = head

  while (currentNode) {
    storedList.push(currentNode.val)
    currentNode = currentNode.next
  }

  currentNode = head

  while (currentNode) {
    currentNode.val = storedList.pop()!
    currentNode = currentNode.next
  }

  return head
}
