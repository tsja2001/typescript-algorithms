import { Heap } from '../../09_Heap/lib/01_堆结构Heap'

// 实现方法2: 入队时直接传入构建好的节点, 要求节点实现了valueOf属性

export class PriorityQueue<T> {
  private heap: Heap<T>
  constructor() {
    this.heap = new Heap<T>()
  }

  enqueue(node: T) {
		this.heap.insert(node)
	}
	
	dequeue(): T | undefined{
		return this.heap.extract()
	}

  peek(): T | undefined {
    return this.heap.peek()
  }

	isEmpty(): boolean {
		return this.heap.isEmpty()
	}

	size(): number {
		return this.heap.size()
	}
}

class Student {
	constructor(public name: string, public age: number) {}
	valueOf(){
		return this.age
	}
}

const priorityQueue = new PriorityQueue<Student>()
priorityQueue.enqueue(new Student('a', 1))
priorityQueue.enqueue(new Student('b', 2))
console.log(priorityQueue.dequeue()?.name)
console.log(priorityQueue.dequeue()?.name)
