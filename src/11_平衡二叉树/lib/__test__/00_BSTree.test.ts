import { BSTree } from '../00_BSTree'

describe('BSTree', () => {
  let bstree: BSTree<number>
  beforeEach(() => {
    bstree = new BSTree<number>()
  })
  describe('insert', () => {
    it('should insert a node', () => {
      bstree.insert(11)
      expect(bstree.root?.value).toBe(11)
    })
    it('should insert a node', () => {
      bstree.insert(11)
      bstree.insert(7)
      bstree.insert(15)
      bstree.insert(5)

      expect(bstree.root?.value).toBe(11)
      expect(bstree.root?.left?.value).toBe(7)
      expect(bstree.root?.right?.value).toBe(15)
      expect(bstree.root?.left?.left?.value).toBe(5)
    })
    it('should insert a node with parent', () => {
      bstree.insert(11)
      bstree.insert(7)
      bstree.insert(15)
      bstree.insert(5)

      expect(bstree.root?.parent).toBeNull()
      expect(bstree.root?.left?.parent?.value).toBe(11)
      expect(bstree.root?.right?.parent?.value).toBe(11)
      expect(bstree.root?.left?.left?.parent?.value).toBe(7)
    })
  })

  describe('searchNode', () => {
    it('should search a node', () => {
      bstree.insert(11)
      bstree.insert(7)
      bstree.insert(15)
      bstree.insert(5)

      expect(bstree.searchNode(11)?.value).toBe(11)
      expect(bstree.searchNode(7)?.value).toBe(7)
      expect(bstree.searchNode(15)?.value).toBe(15)
      expect(bstree.searchNode(5)?.value).toBe(5)
    })
  })

  describe('remove', () => {
    it('remove a leaf node', () => {
      bstree.insert(11)
      bstree.insert(7)
      bstree.insert(15)
      bstree.insert(5)

      bstree.remove(5)
      expect(bstree.root?.left?.left).toBeNull()
    })

    it('remove a node with one child', () => {
      bstree.insert(11)
      bstree.insert(7)
      bstree.insert(15)
      bstree.insert(5)

      bstree.remove(7)
      expect(bstree.root?.left?.value).toBe(5)
      expect(bstree.root?.left?.parent?.value).toBe(11)
    })

    describe('remove a node with two children', () => {
      it('the successor node is right child of delete node', () => {
        bstree.insert(11)
        bstree.insert(7)
        bstree.insert(15)
        bstree.insert(5)
        bstree.insert(9)
        bstree.insert(10)

        bstree.remove(7)

        expect(bstree.root?.left?.value).toBe(9)
        expect(bstree.root?.left?.parent?.value).toBe(11)
        expect(bstree.root?.left?.left?.value).toBe(5)
        expect(bstree.root?.left?.left?.parent?.value).toBe(9)
        expect(bstree.root?.left?.right?.value).toBe(10)
        expect(bstree.root?.left?.right?.parent?.value).toBe(9)
      })

      it('the successor node is not right child of delete node and successor do not has right child', () => {
        bstree.insert(11)
        bstree.insert(7)
        bstree.insert(15)
        bstree.insert(5)
        bstree.insert(9)
        bstree.insert(8)
        bstree.insert(10)

        bstree.remove(7)

        expect(bstree.root?.left?.value).toBe(8)
        expect(bstree.root?.left?.parent?.value).toBe(11)
        expect(bstree.root?.left?.left?.value).toBe(5)
        expect(bstree.root?.left?.left?.parent?.value).toBe(8)
        expect(bstree.root?.left?.right?.value).toBe(9)
        expect(bstree.root?.left?.right?.parent?.value).toBe(8)
        expect(bstree.root?.left?.right?.right?.value).toBe(10)
        expect(bstree.root?.left?.right?.right?.parent?.value).toBe(9)
      })

      it('the successor node is not right child of delete node and successor has right child', () => {
        bstree.insert(11)
        bstree.insert(7)
        bstree.insert(15)
        bstree.insert(5)
        bstree.insert(9)
        bstree.insert(8)
        bstree.insert(10)
        bstree.insert(8.5)

        bstree.remove(7)

        expect(bstree.root?.left?.value).toBe(8)
        expect(bstree.root?.left?.parent?.value).toBe(11)
        expect(bstree.root?.left?.left?.value).toBe(5)
        expect(bstree.root?.left?.left?.parent?.value).toBe(8)
        expect(bstree.root?.left?.right?.value).toBe(9)
        expect(bstree.root?.left?.right?.parent?.value).toBe(8)
        expect(bstree.root?.left?.right?.left?.value).toBe(8.5)
        expect(bstree.root?.left?.right?.left?.parent?.value).toBe(9)
        expect(bstree.root?.left?.right?.right?.value).toBe(10)
        expect(bstree.root?.left?.right?.right?.parent?.value).toBe(9)
      })
    })
  })

  // describe('traverse', () => {
  //   beforeEach(() => {
  //     bstree.insert(11)
  //     bstree.insert(7)
  //     bstree.insert(15)
  //     bstree.insert(5)
  //     bstree.insert(3)
  //     bstree.insert(9)
  //     bstree.insert(8)
  //     bstree.insert(10)
  //     bstree.insert(13)
  //     bstree.insert(12)
  //     bstree.insert(14)
  //     bstree.insert(20)
  //     bstree.insert(18)
  //     bstree.insert(25)
  //   })

  // it('should traverse inOrder', () => {
  //   const result: number[] = []
  //   bstree.traverse((node) => {
  //     result.push(node.value)
  //   })

  //   expect(result).toEqual([
  //     3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25
  //   ])
  // })
  // it('should traverse preOrder', () => {
  //   const result: number[] = []
  //   bstree.traverse((node) => {
  //     result.push(node.value)
  //   }, 'preOrder')

  //   expect(result).toEqual([
  //     11, 7, 5, 3, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25
  //   ])
  // })

  // it('should traverse postOrder', () => {
  //   const result: number[] = []
  //   bstree.traverse((node) => {
  //     result.push(node.value)
  //   }, 'postOrder')

  //   expect(result).toEqual([
  //     3, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11
  //   ])
  // })
  // })
})
