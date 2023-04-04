import { DoublyLinkedList } from '../../lib/03_双向链表DoubleLinkedList'

describe('LinkedList', () => {
  // let linkedList: _LinkList<number>
  let dLinkedList: DoublyLinkedList<string>

  beforeEach(() => {
    dLinkedList = new DoublyLinkedList<string>()
  })

  describe('append', () => {
		test('append test', () => {
			dLinkedList.append('aaa')
			dLinkedList.append('bbb')
			dLinkedList.append('ccc')
			dLinkedList.append('ddd')
	
			expect(dLinkedList.size()).toBe(4)
			const consoleSpy = jest.spyOn(console, 'log')
			dLinkedList.traverse()
			expect(consoleSpy).toHaveBeenCalledWith('aaa -> bbb -> ccc -> ddd')
			consoleSpy.mockRestore()
		})
  })

  describe('prepend', () => {
		test('prepend as a not null linklist', () => {
			dLinkedList.append('aaa')
			dLinkedList.append('bbb')
			dLinkedList.prepend('ccc')
			dLinkedList.prepend('ddd')
	
			expect(dLinkedList.size()).toBe(4)
			const consoleSpy = jest.spyOn(console, 'log')
			dLinkedList.traverse()
			expect(consoleSpy).toHaveBeenCalledWith('ddd -> ccc -> aaa -> bbb')
			consoleSpy.mockRestore()
		})

		test('prepend as a null linklist', () => {
			dLinkedList.prepend('ccc')
			dLinkedList.prepend('ddd')
	
			expect(dLinkedList.size()).toBe(2)
			const consoleSpy = jest.spyOn(console, 'log')
			dLinkedList.traverse()
			expect(consoleSpy).toHaveBeenCalledWith('ddd -> ccc')
			consoleSpy.mockRestore()
		})
  })

  describe('postTraverse', () => {
		test('postTraverse test', () => {
			dLinkedList.append('aaa')
			dLinkedList.append('bbb')
			dLinkedList.append('ccc')
			dLinkedList.append('ddd')
	
			const consoleSpy = jest.spyOn(console, 'log')
			dLinkedList.postTraverse()
			expect(consoleSpy).toHaveBeenCalledWith('ddd -> ccc -> bbb -> aaa')
			consoleSpy.mockRestore()
		})
  })

  describe('insert', () => {
		test('insert at middle', () => {
			dLinkedList.append('aaa')
			dLinkedList.append('bbb')
	
			const consoleSpy = jest.spyOn(console, 'log')
			dLinkedList.insert('abc', 1)
			dLinkedList.traverse()
			expect(consoleSpy).toHaveBeenCalledWith('aaa -> abc -> bbb')
			expect(dLinkedList.size()).toBe(3)
			consoleSpy.mockRestore()
		})
		test('insert head', () => {
			dLinkedList.append('aaa')
			dLinkedList.append('bbb')
	
			const consoleSpy = jest.spyOn(console, 'log')
			dLinkedList.insert('abc', 0)
			dLinkedList.traverse()
			expect(consoleSpy).toHaveBeenCalledWith('abc -> aaa -> bbb')
			expect(dLinkedList.size()).toBe(3)
			consoleSpy.mockRestore()
		})
		test('insert tail', () => {
			dLinkedList.append('aaa')
			dLinkedList.append('bbb')
	
			const consoleSpy = jest.spyOn(console, 'log')
			dLinkedList.insert('abc', 2)
			dLinkedList.traverse()
			expect(consoleSpy).toHaveBeenCalledWith('aaa -> bbb -> abc')
			expect(dLinkedList.size()).toBe(3)
			consoleSpy.mockRestore()
		})
		test('insert at forbidden', () => {
			dLinkedList.append('aaa')
			dLinkedList.append('bbb')
	
			const consoleSpy = jest.spyOn(console, 'log')
			const res = dLinkedList.insert('abc', 3)
			expect(res).toBe(false)
			dLinkedList.traverse()
			expect(consoleSpy).toHaveBeenCalledWith('aaa -> bbb')
			expect(dLinkedList.size()).toBe(2)
			consoleSpy.mockRestore()
		})
  })
})
