import { PriorityQueue } from "../02_优先级队列"

describe('PriorityQueue', () => {
	let priorityQueue: PriorityQueue<string>
	beforeEach(() => {
		priorityQueue = new PriorityQueue<string>()
	})
	describe('enqueue', () => {
		test('enqueue test', () => {
			priorityQueue.enqueue('a', 1)
			priorityQueue.enqueue('b', 2)
			priorityQueue.enqueue('c', 3)
			expect(priorityQueue.peek()).toBe('c')
		})
	})

	describe('dequeue', () => {
		test('dequeue test', () => {
			priorityQueue.enqueue('a', 1)
			priorityQueue.enqueue('b', 2)
			priorityQueue.enqueue('c', 3)
			expect(priorityQueue.dequeue()).toBe('c')
			expect(priorityQueue.dequeue()).toBe('b')
			expect(priorityQueue.dequeue()).toBe('a')
		})
	})

	describe('peek', () => {
		test('peek test', () => {
			priorityQueue.enqueue('a', 1)
			priorityQueue.enqueue('b', 2)
			priorityQueue.enqueue('c', 3)
			expect(priorityQueue.peek()).toBe('c')
			expect(priorityQueue.peek()).toBe('c')
		})
	})

	describe('isEmpty', () => {
		test('isEmpty test', () => {
			expect(priorityQueue.isEmpty()).toBe(true)
			priorityQueue.enqueue('a', 1)
			expect(priorityQueue.isEmpty()).toBe(false)
		})
	})

	describe('size', () => {
		test('size test', () => {
			expect(priorityQueue.size()).toBe(0)
			priorityQueue.enqueue('a', 1)
			expect(priorityQueue.size()).toBe(1)
		})
	})
})
