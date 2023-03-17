import { Node } from '../../lib/LinkedList'
// https://leetcode.cn/problems/reverse-linked-list/submissions/
// Definition for singly-linked list.
// export class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val
//     this.next = next === undefined ? null : next
//   }
// }

// 使用栈结构实现(仅反转数据, 未反转节点)
export function reverseList<T>(head: Node<T> | null): Node<T> | null {
	if(head === null || head?.next === null){
		return head
	}

	const stack: Node<T>[] = []
	let currentNode: Node<T> | null = head
	let index = 0
	while(currentNode){
		stack.push(currentNode)
		currentNode = currentNode.next
		index++
	}

	currentNode = stack.pop()!
	const newHead = currentNode

	while(index - 1 >= 0){
		currentNode.next = stack.pop()!
		currentNode = currentNode?.next
		index--
	}

	return newHead
}


const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)

node1.next = node2
node2.next = node3
node3.next = node4

const newList = reverseList(node1)

console.log(newList?.value)
console.log(newList?.next?.value)
console.log(newList?.next?.next?.value)
console.log(newList?.next?.next?.next?.value)

