import { Heap } from '../../09_Heap/lib/01_堆结构Heap'
import { PriorityNode } from '../type/PriorityNode'

// 实现方法1: 入队时传入value和priority, 在内部构件节点

export class PriorityQueue<T> {
  private heap: Heap<PriorityNode<T>>
  constructor() {
    this.heap = new Heap<PriorityNode<T>>()
  }

  enqueue(value: T, priority: number) {
		const priorityNode = new PriorityNode<T>(value, priority)
		this.heap.insert(priorityNode)
	}
	
	dequeue(): T | undefined{
		return this.heap.extract()?.value
	}

  peek(): T | undefined {
    return this.heap.peek()?.value
  }

	isEmpty(): boolean {
		return this.heap.isEmpty()
	}

	size(): number {
		return this.heap.size()
	}
}
