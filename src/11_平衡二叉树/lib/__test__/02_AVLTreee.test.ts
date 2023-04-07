import { AVLTreeNode } from '../01_AVLTreeNode'
import { AVLTree } from '../02_AVLTree'

describe('AVLTree', () => {
  let avlTree: AVLTree<number>
  beforeEach(() => {
    avlTree = new AVLTree<number>()
    avlTree.insert(1)
    avlTree.insert(2)
    avlTree.insert(3)
    avlTree.insert(4)
    avlTree.insert(5)
    avlTree.insert(15)
    avlTree.insert(14)
    avlTree.insert(13)
    avlTree.insert(12)
    avlTree.insert(11)
    avlTree.insert(10)
  })

  describe('insert', () => {
    it('should be balanced', () => {
      const root = avlTree.root as AVLTreeNode<number>
      expect(root.isBalanced).toBeTruthy()

      // expect tree to be: (preorder): 4 2 1 3 12 10 5 11 14 13 15
      expect(root.value).toBe(4)
      expect(root.left?.value).toBe(2)
      expect(root.left?.left?.value).toBe(1)
      expect(root.left?.right?.value).toBe(3)
      expect(root.right?.value).toBe(12)
      expect(root.right?.left?.value).toBe(10)
      expect(root.right?.left?.left?.value).toBe(5)
      expect(root.right?.left?.right?.value).toBe(11)
      expect(root.right?.right?.value).toBe(14)
      expect(root.right?.right?.left?.value).toBe(13)
      expect(root.right?.right?.right?.value).toBe(15)
    })
  })

  describe('remobve', () => {
    it('未发生rebalance', () => {
      const root = avlTree.root as AVLTreeNode<number>
      expect(root.isBalanced).toBeTruthy()
      avlTree.remove(10)
      avlTree.remove(11)
      // expect tree to be: (preorder): 4 2 1 3 12 5 14 13 15
      expect(root.value).toBe(4)
      expect(root.left?.value).toBe(2)
      expect(root.left?.left?.value).toBe(1)
      expect(root.left?.right?.value).toBe(3)
      expect(root.right?.value).toBe(12)
      expect(root.right?.left?.value).toBe(5)
      expect(root.right?.right?.value).toBe(14)
      expect(root.right?.right?.left?.value).toBe(13)
      expect(root.right?.right?.right?.value).toBe(15)
    })
  })

  it('移除叶节点, 发生rebalance', () => {
    const root = avlTree.root as AVLTreeNode<number>
    expect(root.isBalanced).toBeTruthy()
    avlTree.remove(10)
    avlTree.remove(11)
    avlTree.remove(5)
    // expect tree to be: (preorder): 4 2 1 3 14 12 13 15
    expect(root.value).toBe(4)
    expect(root.left?.value).toBe(2)
    expect(root.left?.left?.value).toBe(1)
    expect(root.left?.right?.value).toBe(3)
    expect(root.right?.value).toBe(14)
    expect(root.right?.left?.value).toBe(12)
    expect(root.right?.left?.right?.value).toBe(13)
    expect(root.right?.right?.value).toBe(15)
  })

  it('移除有两个子节点的节点, 发生rebalance', () => {
    const root = avlTree.root as AVLTreeNode<number>
    expect(root.isBalanced).toBeTruthy()
    avlTree.remove(10)
    avlTree.remove(11)
    avlTree.remove(5)
    // expect tree to be: (preorder): 4 2 1 3 14 12 13 15
    expect(root.value).toBe(4)
    expect(root.left?.value).toBe(2)
    expect(root.left?.left?.value).toBe(1)
    expect(root.left?.right?.value).toBe(3)
    expect(root.right?.value).toBe(14)
    expect(root.right?.left?.value).toBe(12)
    expect(root.right?.left?.right?.value).toBe(13)
    expect(root.right?.right?.value).toBe(15)
  })
})
