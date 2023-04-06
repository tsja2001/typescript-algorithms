import { ArrayDeque } from "../01_双端队列"

describe('ArrayDeque', () => {
	let arrayDeque: ArrayDeque<string>
	beforeEach(() => {
		arrayDeque = new ArrayDeque<string>()
	})
	describe('enqueue', () => {
		test('enqueue test', () => {
			arrayDeque.addFront('a')
			arrayDeque.addFront('b')
			arrayDeque.addFront('c')
			debugger
			expect(arrayDeque.traverse()).toEqual(['c', 'b', 'a'])
		})
	})
	describe('removeBack', () => {
		test('removeBack test', () => {
			arrayDeque.addFront('a')
			arrayDeque.addFront('b')
			arrayDeque.addFront('c')
			const back = arrayDeque.removeBack()
			expect(arrayDeque.traverse()).toEqual(['c', 'b'])
			expect(back).toBe('a')
		})
	})
})
