import { AVLTreeNode } from '../01_AVLTreeNode'
import { AVLTree } from '../02_AVLTree'

describe('AVLTree', () => {
  describe('rebalance', () => {
    let avlTree: AVLTree<number>
    let parent: AVLTreeNode<number>
    let root: AVLTreeNode<number>
    let pivot: AVLTreeNode<number>
    let current: AVLTreeNode<number>

    describe('LL', () => {
      function verifyLLRebalance(
        tree: AVLTree<number>,
        root: AVLTreeNode<number>,
        pivot: AVLTreeNode<number>,
        current: AVLTreeNode<number>
      ) {
        expect(tree.root?.left?.value).toBe(2)
        expect(tree.root?.left).toBe(pivot)

        expect(tree.root?.left?.left?.value).toBe(1)
        expect(tree.root?.left?.left).toBe(current)
        expect(tree.root?.left?.left?.parent).toBe(tree.root?.left)

        expect(tree.root?.left?.right?.value).toBe(3)
        expect(tree.root?.left?.right).toBe(root)
        expect(tree.root?.left?.right?.parent).toBe(tree.root?.left)
      }

      beforeEach(() => {
        avlTree = new AVLTree<number>()
        parent = new AVLTreeNode(4)
        root = new AVLTreeNode(3)
        pivot = new AVLTreeNode(2)
        current = new AVLTreeNode(1)

        parent.left = root
        root.parent = parent
        root.left = pivot
        pivot.parent = root
        pivot.left = current
        current.parent = pivot

        avlTree.root = parent
      })

      it('rebalance', () => {
        avlTree.rebalance(root)
        verifyLLRebalance(avlTree, root, pivot, current)
      })

      // it('checkBalance', () => {
      //   avlTree.checkBalance(root.left!)
      //   verifyLLRebalance(avlTree, root, pivot, current)
      // })

      // it('parent is correct', () => {
      //   avlTree.rebalance(root)

      //   expect(avlTree.root?.value).toBe(4)
      //   expect(avlTree.root).toBe(parent)
      //   expect(avlTree.root?.parent).toBeNull()
      //   expect(avlTree.root?.left).toBe(pivot)
      // })
    })

    // describe('RR', () => {
    //   function verifyRRRebalance(
    //     tree: AVLTree<number>,
    //     root: AVLTreeNode<number>,
    //     pivot: AVLTreeNode<number>,
    //     current: AVLTreeNode<number>
    //   ) {
    //     expect(avlTree.root?.right?.value).toBe(2)
    //     expect(avlTree.root?.right).toBe(pivot)

    //     expect(avlTree.root?.right?.left?.value).toBe(1)
    //     expect(avlTree.root?.right?.left).toBe(root)
    //     expect(avlTree.root?.right?.left?.parent).toBe(
    //       avlTree.root?.right
    //     )

    //     expect(avlTree.root?.right?.right?.value).toBe(3)
    //     expect(avlTree.root?.right?.right).toBe(current)
    //     expect(avlTree.root?.right?.right?.parent).toBe(
    //       avlTree.root?.right
    //     )
    //   }

    //   beforeEach(() => {
    //     avlTree = new AVLTree<number>()
    //     parent = new AVLTreeNode(0)
    //     root = new AVLTreeNode(1)
    //     pivot = new AVLTreeNode(2)
    //     current = new AVLTreeNode(3)

    //     parent.right = root
    //     root.parent = parent
    //     root.right = pivot
    //     pivot.parent = root
    //     pivot.right = current
    //     current.parent = pivot

    //     avlTree.root = parent
    //   })

    //   it('rebalance', () => {
    //     avlTree.rebalance(root)
    //     verifyRRRebalance(avlTree, root, pivot, current)
    //   })

    //   it('checkBalance', () => {
    //     avlTree.checkBalance(root.right!)
    //     verifyRRRebalance(avlTree, root, pivot, current)
    //   })

    //   it('parent is correct', () => {
    //     avlTree.rebalance(root)

    //     expect(avlTree.root?.value).toBe(0)
    //     expect(avlTree.root).toBe(parent)
    //     expect(avlTree.root?.parent).toBeNull()
    //     expect(avlTree.root?.right).toBe(pivot)
    //   })
    // })

    // describe('LR', () => {
    //   function verifyLRRebalance(
    //     tree: AVLTree<number>,
    //     root: AVLTreeNode<number>,
    //     pivot: AVLTreeNode<number>,
    //     current: AVLTreeNode<number>
    //   ) {
    //     expect(avlTree.root?.right?.value).toBe(2)
    //     expect(avlTree.root?.right).toBe(current)

    //     expect(avlTree.root?.right?.left?.value).toBe(1)
    //     expect(avlTree.root?.right?.left).toBe(pivot)
    //     expect(avlTree.root?.right?.left?.parent).toBe(
    //       avlTree.root?.right
    //     )

    //     expect(avlTree.root?.right?.right?.value).toBe(3)
    //     expect(avlTree.root?.right?.right).toBe(root)
    //     expect(avlTree.root?.right?.right?.parent).toBe(
    //       avlTree.root?.right
    //     )
    //   }

    //   beforeEach(() => {
    //     avlTree = new AVLTree<number>()
    //     parent = new AVLTreeNode(0)
    //     root = new AVLTreeNode(3)
    //     pivot = new AVLTreeNode(1)
    //     current = new AVLTreeNode(2)

    //     parent.right = root
    //     root.parent = parent
    //     root.left = pivot
    //     pivot.parent = root
    //     pivot.right = current
    //     current.parent = pivot

    //     avlTree.root = parent
    //   })

    //   it('rebalance', () => {
    //     avlTree.rebalance(root)
    //     verifyLRRebalance(avlTree, root, pivot, current)
    //   })

    //   it('checkBalance', () => {
    //     avlTree.checkBalance(root.left!)
    //     verifyLRRebalance(avlTree, root, pivot, current)
    //   })

    //   it('parent is correct', () => {
    //     avlTree.checkBalance(root.left!, true)
    //     expect(avlTree.root?.value).toBe(0)
    //     expect(avlTree.root).toBe(parent)
    //     expect(avlTree.root?.parent).toBeNull()
    //     expect(avlTree.root?.right).toBe(current)
    //   })
    // })

    // describe('RL', () => {
    //   function verifyLRRebalance(
    //     tree: AVLTree<number>,
    //     root: AVLTreeNode<number>,
    //     pivot: AVLTreeNode<number>,
    //     current: AVLTreeNode<number>
    //   ) {
    //     expect(avlTree.root?.left?.value).toBe(2)
    //     expect(avlTree.root?.left).toBe(current)

    //     expect(avlTree.root?.left?.left?.value).toBe(1)
    //     expect(avlTree.root?.left?.left).toBe(root)
    //     expect(avlTree.root?.left?.left?.parent).toBe(
    //       avlTree.root?.left
    //     )

    //     expect(avlTree.root?.left?.right?.value).toBe(3)
    //     expect(avlTree.root?.left?.right).toBe(pivot)
    //     expect(avlTree.root?.left?.right?.parent).toBe(
    //       avlTree.root?.left
    //     )
    //   }

    //   beforeEach(() => {
    //     avlTree = new AVLTree<number>()
    //     parent = new AVLTreeNode(4)
    //     root = new AVLTreeNode(1)
    //     pivot = new AVLTreeNode(3)
    //     current = new AVLTreeNode(2)

    //     parent.left = root
    //     root.parent = parent
    //     root.right = pivot
    //     pivot.parent = root
    //     pivot.left = current
    //     current.parent = pivot

    //     avlTree.root = parent
    //   })

    //   it('rebalance', () => {
    //     avlTree.rebalance(root)
    //     verifyLRRebalance(avlTree, root, pivot, current)
    //   })

    //   it('checkBalance', () => {
    //     avlTree.checkBalance(root.right!)
    //     verifyLRRebalance(avlTree, root, pivot, current)
    //   })

    //   it('parent is correct', () => {
    //     avlTree.checkBalance(root.right!, true)
    //     expect(avlTree.root?.value).toBe(4)
    //     expect(avlTree.root).toBe(parent)
    //     expect(avlTree.root?.parent).toBeNull()
    //     expect(avlTree.root?.left).toBe(current)
    //   })
    // })
  })

  // describe('insert', () => {
  //   let avlTree: AVLTree<number>
  //   beforeEach(() => {
  //     avlTree = new AVLTree<number>()
  //     avlTree.insert(1)
  //     avlTree.insert(2)
  //     avlTree.insert(3)
  //     avlTree.insert(4)
  //     avlTree.insert(5)
  //     avlTree.insert(15)
  //     avlTree.insert(14)
  //     avlTree.insert(13)
  //     avlTree.insert(12)
  //     avlTree.insert(11)
  //     avlTree.insert(10)
  //   })
  //   it('should be balanced', () => {
  //     const root = avlTree.root as AVLTreeNode<number>
  //     expect(root.isBalanced).toBeTruthy()

  //     // expect tree to be: (preorder): 4 2 1 3 12 10 5 11 14 13 15
  //     expect(root.value).toBe(4)
  //     expect(root.left?.value).toBe(2)
  //     expect(root.left?.left?.value).toBe(1)
  //     expect(root.left?.right?.value).toBe(3)
  //     expect(root.right?.value).toBe(12)
  //     expect(root.right?.left?.value).toBe(10)
  //     expect(root.right?.left?.left?.value).toBe(5)
  //     expect(root.right?.left?.right?.value).toBe(11)
  //     expect(root.right?.right?.value).toBe(14)
  //     expect(root.right?.right?.left?.value).toBe(13)
  //     expect(root.right?.right?.right?.value).toBe(15)
  //   })
  // })

  // describe('remove', () => {
  //   let avlTree: AVLTree<number>
  //   beforeEach(() => {
  //     avlTree = new AVLTree<number>()
  //     avlTree.insert(1)
  //     avlTree.insert(2)
  //     avlTree.insert(3)
  //     avlTree.insert(4)
  //     avlTree.insert(5)
  //     avlTree.insert(15)
  //     avlTree.insert(14)
  //     avlTree.insert(13)
  //     avlTree.insert(12)
  //     avlTree.insert(11)
  //     avlTree.insert(10)
  //   })
  //   it('未发生rebalance', () => {
  //     const root = avlTree.root as AVLTreeNode<number>
  //     expect(root.isBalanced).toBeTruthy()
  //     avlTree.remove(10)
  //     avlTree.remove(11)
  //     // expect tree to be: (preorder): 4 2 1 3 12 5 14 13 15
  //     expect(root.value).toBe(4)
  //     expect(root.left?.value).toBe(2)
  //     expect(root.left?.left?.value).toBe(1)
  //     expect(root.left?.right?.value).toBe(3)
  //     expect(root.right?.value).toBe(12)
  //     expect(root.right?.left?.value).toBe(5)
  //     expect(root.right?.right?.value).toBe(14)
  //     expect(root.right?.right?.left?.value).toBe(13)
  //     expect(root.right?.right?.right?.value).toBe(15)
  //   })
  //   it('移除叶节点, 发生rebalance', () => {
  //     const root = avlTree.root as AVLTreeNode<number>
  //     expect(root.isBalanced).toBeTruthy()
  //     avlTree.remove(10)
  //     avlTree.remove(11)
  //     avlTree.remove(5)
  //     // expect tree to be: (preorder): 4 2 1 3 14 12 13 15
  //     expect(root.value).toBe(4)
  //     expect(root.left?.value).toBe(2)
  //     expect(root.left?.left?.value).toBe(1)
  //     expect(root.left?.right?.value).toBe(3)
  //     expect(root.right?.value).toBe(14)
  //     expect(root.right?.left?.value).toBe(12)
  //     expect(root.right?.left?.right?.value).toBe(13)
  //     expect(root.right?.right?.value).toBe(15)
  //   })

  //   it('移除有两个子节点的节点, 发生rebalance', () => {
  //     const root = avlTree.root as AVLTreeNode<number>
  //     expect(root.isBalanced).toBeTruthy()
  //     avlTree.remove(10)
  //     avlTree.remove(11)
  //     avlTree.remove(5)
  //     // expect tree to be: (preorder): 4 2 1 3 14 12 13 15
  //     expect(root.value).toBe(4)
  //     expect(root.left?.value).toBe(2)
  //     expect(root.left?.left?.value).toBe(1)
  //     expect(root.left?.right?.value).toBe(3)
  //     expect(root.right?.value).toBe(14)
  //     expect(root.right?.left?.value).toBe(12)
  //     expect(root.right?.left?.right?.value).toBe(13)
  //     expect(root.right?.right?.value).toBe(15)
  //   })
  // })
})
