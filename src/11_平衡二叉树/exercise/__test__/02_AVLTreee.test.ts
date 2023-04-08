import { AVLTreeNode } from '../01_AVLTreeNode'
import { AVLTree } from '../02_AVLTree'

describe('AVLTree', () => {
  describe('rebalance', () => {
    describe('rebalance by self', () => {
      it('LL', () => {
        const avlTree = new AVLTree<number>()
        const root = new AVLTreeNode(3)
        const pivot = new AVLTreeNode(2)
        const current = new AVLTreeNode(1)

        root.left = pivot
        pivot.parent = root
        pivot.left = current
        current.parent = pivot

        avlTree.root = root

        avlTree.rebalance(root)

        expect(avlTree.root?.value).toBe(2)
        expect(avlTree.root).toBe(pivot)

        expect(avlTree.root?.left?.value).toBe(1)
        expect(avlTree.root?.left).toBe(current)
        expect(avlTree.root?.left?.parent).toBe(avlTree.root)

        expect(avlTree.root?.right?.value).toBe(3)
        expect(avlTree.root?.right).toBe(root)
        expect(avlTree.root?.right?.parent).toBe(avlTree.root)
      })

      it('RR', () => {
        const avlTree = new AVLTree<number>()
        const root = new AVLTreeNode(1)
        const pivot = new AVLTreeNode(2)
        const current = new AVLTreeNode(3)

        root.right = pivot
        pivot.parent = root
        pivot.right = current
        current.parent = pivot

        avlTree.root = root

        avlTree.rebalance(root)

        expect(avlTree.root?.value).toBe(2)
        expect(avlTree.root).toBe(pivot)

        expect(avlTree.root?.left?.value).toBe(1)
        expect(avlTree.root?.left).toBe(root)
        expect(avlTree.root?.left?.parent).toBe(avlTree.root)

        expect(avlTree.root?.right?.value).toBe(3)
        expect(avlTree.root?.right).toBe(current)
        expect(avlTree.root?.right?.parent).toBe(avlTree.root)
      })

      it('LR', () => {
        const avlTree = new AVLTree<number>()
        const root = new AVLTreeNode(3)
        const pivot = new AVLTreeNode(1)
        const current = new AVLTreeNode(2)

        root.left = pivot
        pivot.parent = root
        pivot.right = current
        current.parent = pivot

        avlTree.root = root

        avlTree.rebalance(root)

        expect(avlTree.root?.value).toBe(2)
        expect(avlTree.root).toBe(current)

        expect(avlTree.root?.left?.value).toBe(1)
        expect(avlTree.root?.left).toBe(pivot)
        expect(avlTree.root?.left?.parent).toBe(avlTree.root)

        expect(avlTree.root?.right?.value).toBe(3)
        expect(avlTree.root?.right).toBe(root)
        expect(avlTree.root?.right?.parent).toBe(avlTree.root)
      })

      it('RL', () => {
        const avlTree = new AVLTree<number>()
        const root = new AVLTreeNode(1)
        const pivot = new AVLTreeNode(3)
        const current = new AVLTreeNode(2)

        root.right = pivot
        pivot.parent = root
        pivot.left = current
        current.parent = pivot

        avlTree.root = root

        avlTree.rebalance(root)

        expect(avlTree.root?.value).toBe(2)
        expect(avlTree.root).toBe(current)

        expect(avlTree.root?.left?.value).toBe(1)
        expect(avlTree.root?.left).toBe(root)
        expect(avlTree.root?.left?.parent).toBe(avlTree.root)

        expect(avlTree.root?.right?.value).toBe(3)
        expect(avlTree.root?.right).toBe(pivot)
        expect(avlTree.root?.right?.parent).toBe(avlTree.root)
      })
    })
    describe('rebalance with parent', () => {
      it('LL', () => {
        const avlTree = new AVLTree<number>()
        const parent = new AVLTreeNode(4)
        const root = new AVLTreeNode(3)
        const pivot = new AVLTreeNode(2)
        const current = new AVLTreeNode(1)

        parent.left = root
        root.parent = parent

        root.left = pivot
        pivot.parent = root

        pivot.left = current
        current.parent = pivot

        avlTree.root = parent

        avlTree.rebalance(root)

        expect(avlTree.root?.value).toBe(4)
        expect(avlTree.root).toBe(parent)
        expect(avlTree.root?.parent).toBeNull()

        expect(avlTree.root?.left).toBe(pivot)
      })

      it('RR', () => {
        const avlTree = new AVLTree<number>()
        const parent = new AVLTreeNode(1)
        const root = new AVLTreeNode(2)
        const pivot = new AVLTreeNode(3)
        const current = new AVLTreeNode(4)

        parent.right = root
        root.parent = parent

        root.right = pivot
        pivot.parent = root

        pivot.right = current
        current.parent = pivot

        avlTree.root = parent

        avlTree.rebalance(root)

        expect(avlTree.root?.value).toBe(1)
        expect(avlTree.root).toBe(parent)
        expect(avlTree.root?.parent).toBeNull()

        expect(avlTree.root?.right).toBe(pivot)
      })

      it('LR', () => {
        const avlTree = new AVLTree<number>()
        const parent = new AVLTreeNode(4)
        const root = new AVLTreeNode(2)
        const pivot = new AVLTreeNode(1)
        const current = new AVLTreeNode(3)

        parent.left = root
        root.parent = parent

        root.left = pivot
        pivot.parent = root

        pivot.right = current
        current.parent = pivot

        avlTree.root = parent

        avlTree.rebalance(root)

        expect(avlTree.root?.value).toBe(4)
        expect(avlTree.root).toBe(parent)
        expect(avlTree.root?.parent).toBeNull()

        expect(avlTree.root?.left).toBe(current)
      })

      it('RL', () => {
        const avlTree = new AVLTree<number>()
        const parent = new AVLTreeNode(1)
        const root = new AVLTreeNode(3)
        const pivot = new AVLTreeNode(4)
        const current = new AVLTreeNode(2)

        parent.right = root
        root.parent = parent

        root.right = pivot
        pivot.parent = root

        pivot.left = current
        current.parent = pivot

        avlTree.root = parent

        avlTree.rebalance(root)

        expect(avlTree.root?.value).toBe(1)
        expect(avlTree.root).toBe(parent)
        expect(avlTree.root?.parent).toBeNull()

        expect(avlTree.root?.right).toBe(current)
      })
    })
  })
  describe('insert', () => {
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

  describe('remove', () => {
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
})
