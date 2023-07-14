import { LinkedList, Node } from '../_LinkedList'
// import { LinkedList } from './LinkedList';

describe('LinkedList', () => {
  let linkedList: LinkedList<number>

  beforeEach(() => {
    linkedList = new LinkedList<number>()
  })

  describe('append', () => {
    test('should add an element to an empty list', () => {
      linkedList.append(1)
      expect(linkedList.length).toBe(1)
      expect(linkedList.get(0)).toBe(1)
    })

    test('should add an element to a non-empty list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      expect(linkedList.length).toBe(3)
      expect(linkedList.get(0)).toBe(1)
      expect(linkedList.get(1)).toBe(2)
      expect(linkedList.get(2)).toBe(3)
    })
  })

  describe('traverse', () => {
    test('should print an empty list', () => {
      const consoleSpy = jest
        .spyOn(console, 'log')
        .mockImplementation()
      linkedList.traverse()
      expect(consoleSpy).toHaveBeenCalledWith('')
      consoleSpy.mockRestore()
    })

    test('should print a non-empty list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      const consoleSpy = jest
        .spyOn(console, 'log')
        .mockImplementation()
      linkedList.traverse()
      expect(consoleSpy).toHaveBeenCalledWith('1 -> 2 -> 3')
      consoleSpy.mockRestore()
    })
  })

  describe('insert', () => {
    test('should insert an element at the beginning of the list', () => {
      linkedList.append(1)
      linkedList.insert(0, 0)
      expect(linkedList.length).toBe(2)
      expect(linkedList.get(0)).toBe(0)
      expect(linkedList.get(1)).toBe(1)
    })

    test('should insert an element in the middle of the list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      linkedList.insert(4, 1)
      expect(linkedList.length).toBe(4)
      expect(linkedList.get(0)).toBe(1)
      expect(linkedList.get(1)).toBe(4)
      expect(linkedList.get(2)).toBe(2)
      expect(linkedList.get(3)).toBe(3)
    })

    test('should insert an element at the end of the list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.insert(3, 2)
      expect(linkedList.length).toBe(3)
      expect(linkedList.get(0)).toBe(1)
      expect(linkedList.get(1)).toBe(2)
      expect(linkedList.get(2)).toBe(3)
    })

    test('should not insert an element at an invalid position', () => {
      linkedList.append(1)
      expect(linkedList.insert(2, -1)).toBe(false)
      expect(linkedList.insert(2, 2)).toBe(false)
      expect(linkedList.length).toBe(1)
    })
  })

  describe('removeAt', () => {
    test('should remove the only element in the list', () => {
      linkedList.append(1)
      expect(linkedList.removeAt(0)).toBe(1)
      expect(linkedList.length).toBe(0)
      expect(linkedList.get(0)).toBe(null)
    })

    test('should remove the first element in the list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      expect(linkedList.removeAt(0)).toBe(1)
      expect(linkedList.length).toBe(2)
      expect(linkedList.get(0)).toBe(2)
      expect(linkedList.get(1)).toBe(3)
    })

    test('should remove the last element in the list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      expect(linkedList.removeAt(2)).toBe(3)
      expect(linkedList.length).toBe(2)
      expect(linkedList.get(0)).toBe(1)
      expect(linkedList.get(1)).toBe(2)
    })

    test('should remove an element in the middle of the list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      expect(linkedList.removeAt(1)).toBe(2)
      expect(linkedList.length).toBe(2)
      expect(linkedList.get(0)).toBe(1)
      expect(linkedList.get(1)).toBe(3)
    })

    test('should not remove an element at an invalid position', () => {
      linkedList.append(1)
      expect(linkedList.removeAt(-1)).toBe(null)
      expect(linkedList.removeAt(1)).toBe(null)
      expect(linkedList.length).toBe(1)
    })
  })

  describe('remove', () => {
    test('should remove the first occurrence of an element from the list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      expect(linkedList.remove(1)).toBe(true)
      expect(linkedList.length).toBe(2)
      expect(linkedList.get(0)).toBe(2)
      expect(linkedList.get(1)).toBe(3)
    })

    test('should remove the last occurrence of an element from the list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(2)
      linkedList.append(3)
      expect(linkedList.remove(2)).toBe(true)
      expect(linkedList.length).toBe(3)
      expect(linkedList.get(0)).toBe(1)
      expect(linkedList.get(1)).toBe(2)
      expect(linkedList.get(2)).toBe(3)
    })

    test('should not remove an element that does not exist in the list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      expect(linkedList.remove(4)).toBe(false)
      expect(linkedList.length).toBe(3)
    })
  })

  
  describe('update', () => {
    test('should update the first element in the list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      expect(linkedList.indexOf(0)).toBe(-1)
      expect(linkedList.indexOf(2)).toBe(1)
      expect(linkedList.indexOf(3)).toBe(2)
    })

    test('should update the last element in the list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      expect(linkedList.update(4, 2)).toBe(true)
      expect(linkedList.get(2)).toBe(4)
    })

    test('should update an element in the middle of the list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      expect(linkedList.update(4, 1)).toBe(true)
      expect(linkedList.get(1)).toBe(4)
    })

    test('should not update an element at an invalid position', () => {
      linkedList.append(1)
      expect(linkedList.update(2, -1)).toBe(false)
      expect(linkedList.update(2, 1)).toBe(false)
      expect(linkedList.length).toBe(1)
    })
  })

  describe('indexOf', () => {
    test('should return the index of the first occurrence of an element in the list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      expect(linkedList.indexOf(1)).toBe(0)
      expect(linkedList.indexOf(2)).toBe(1)
      expect(linkedList.indexOf(3)).toBe(2)
    })

    test('should return -1 if the element is not found in the list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      expect(linkedList.indexOf(4)).toBe(-1)
    })
  })

  describe('get', () => {
    test('should get the first element in the list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      expect(linkedList.get(0)).toBe(1)
    })
    test('should get the last element in the list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      expect(linkedList.get(2)).toBe(3)
    })

    test('should get an element in the middle of the list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      expect(linkedList.get(1)).toBe(2)
    })

    test('should not get an element at an invalid position', () => {
      linkedList.append(1)
      expect(linkedList.get(-1)).toBe(null)
      expect(linkedList.get(1)).toBe(null)
    })
  })

  describe('update', () => {
    test('should update the first element in the list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      expect(linkedList.update(0, 0)).toBe(true)
      expect(linkedList.get(0)).toBe(0)
    })

    test('should update the last element in the list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      expect(linkedList.update(4, 2)).toBe(true)
      expect(linkedList.get(2)).toBe(4)
    })

    test('should update an element in the middle of the list', () => {
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      expect(linkedList.update(4, 1)).toBe(true)
      expect(linkedList.get(1)).toBe(4)
    })

    test('should not update an element at an invalid position', () => {
      linkedList.append(1)
      expect(linkedList.update(2, -1)).toBe(false)
      expect(linkedList.update(2, 1)).toBe(false)
      expect(linkedList.length).toBe(1)
    })
  })

})
