import { PriorityQueue } from '../03_优先级队列'

describe('PriorityQueue', () => {
  let priorityQueue: PriorityQueue<Student>

  class Student {
    constructor(public name: string, public age: number) {}
    valueOf() {
      return this.age
    }
  }

  beforeEach(() => {
    priorityQueue = new PriorityQueue<Student>()
  })
  describe('enqueue', () => {
    test('enqueue test', () => {
			priorityQueue.enqueue(new Student('a', 1))
			priorityQueue.enqueue(new Student('b', 2))
			priorityQueue.enqueue(new Student('c', 3))
			expect(priorityQueue.dequeue()?.name).toBe('c')
    })
  })

  describe('dequeue', () => {
    test('dequeue test', () => {
			priorityQueue.enqueue(new Student('a', 1))
			priorityQueue.enqueue(new Student('b', 2))
			priorityQueue.enqueue(new Student('c', 3))
			expect(priorityQueue.dequeue()?.name).toBe('c')
			expect(priorityQueue.dequeue()?.name).toBe('b')
			expect(priorityQueue.dequeue()?.name).toBe('a')
    })
  })

  describe('peek', () => {
    test('peek test', () => {
			priorityQueue.enqueue(new Student('a', 1))
			priorityQueue.enqueue(new Student('b', 2))
			priorityQueue.enqueue(new Student('c', 3))
			expect(priorityQueue.peek()?.name).toBe('c')
			expect(priorityQueue.peek()?.name).toBe('c')
    })
  })

  describe('isEmpty', () => {
		test('isEmpty test', () => {
			expect(priorityQueue.isEmpty()).toBe(true)
			priorityQueue.enqueue(new Student('a', 1))
			expect(priorityQueue.isEmpty()).toBe(false)
		})
  })

  describe('size', () => {
    test('size test', () => {
			expect(priorityQueue.size()).toBe(0)
			priorityQueue.enqueue(new Student('a', 1))
			expect(priorityQueue.size()).toBe(1)
    })
  })
})
