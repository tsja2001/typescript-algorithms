import { AVLTreeNode } from '../01_AVLTreeNode'

describe('AVLTreeNode', () => {
  let avlNode: AVLTreeNode<number>
  beforeEach(() => {
    avlNode = new AVLTreeNode<number>(10)
  })

  describe('getHeight', () => {
    test('getHeight test', () => {
      expect(avlNode.getHeight()).toEqual(1)
      avlNode.right = new AVLTreeNode(11)
      avlNode.right.right = new AVLTreeNode(12)
      expect(avlNode.getHeight()).toEqual(3)
      expect(avlNode.right.getHeight()).toEqual(2)
    })
  })

  describe('getBalance', () => {
    test('balanceFactor & isBalanced test', () => {
      expect(avlNode.getBalanceFactor()).toEqual(0)
      expect(avlNode.isBalanced).toEqual(true)
      avlNode.right = new AVLTreeNode(11)
      expect(avlNode.getBalanceFactor()).toEqual(-1)
      expect(avlNode.isBalanced).toEqual(true)
      avlNode.right.right = new AVLTreeNode(12)
      expect(avlNode.getBalanceFactor()).toEqual(-2)
      expect(avlNode.isBalanced).toEqual(false)
      avlNode.left = new AVLTreeNode(13)
      expect(avlNode.getBalanceFactor()).toEqual(-1)
      expect(avlNode.isBalanced).toEqual(true)
      avlNode.left.right = new AVLTreeNode(14)
      expect(avlNode.getBalanceFactor()).toEqual(0)
      expect(avlNode.isBalanced).toEqual(true)
    })
  })

  describe('higherChild', () => {
    test('higherChild test', () => {
      expect(avlNode.higherChild).toEqual(null)
      avlNode.right = new AVLTreeNode(11)
      expect(avlNode.higherChild).toEqual(avlNode.right)
      avlNode.right.right = new AVLTreeNode(12)
      expect(avlNode.higherChild).toEqual(avlNode.right)
      avlNode.left = new AVLTreeNode(13)
      expect(avlNode.higherChild).toEqual(avlNode.right)

      avlNode.right.left = new AVLTreeNode(14)
      avlNode.right.parent = avlNode
      expect(avlNode.right.higherChild).toEqual(avlNode.right.right)
    })
  })

  describe('rotation', () => {
    describe('rightRotation', () => {
      test('rightRotation test', () => {
        const avlNode0 = new AVLTreeNode(0)
        const avlNode1 = new AVLTreeNode(1)
        const avlNode2 = new AVLTreeNode(2)
        const avlNode3 = new AVLTreeNode(3)

        avlNode0.left = avlNode1
        avlNode1.parent = avlNode0
        avlNode1.left = avlNode2
        avlNode2.parent = avlNode1
        avlNode2.left = avlNode3
        avlNode3.parent = avlNode2

        const pivot = avlNode1.rightRotation()
        expect(pivot).toEqual(avlNode2)

        expect(avlNode0.left).toEqual(pivot)
        expect(pivot.parent).toEqual(avlNode0)

        expect(pivot.left).toEqual(avlNode3)
        expect(avlNode3).toEqual(pivot.left)

        expect(pivot.right).toEqual(avlNode1)
        expect(avlNode1).toEqual(pivot.right)
      })
    })

    describe('leftRotation', () => {
      test('leftRotation test', () => {
        const avlNode0 = new AVLTreeNode(0)
        const avlNode1 = new AVLTreeNode(1)
        const avlNode2 = new AVLTreeNode(2)
        const avlNode3 = new AVLTreeNode(3)

        avlNode0.right = avlNode1
        avlNode1.parent = avlNode0
        avlNode1.right = avlNode2
        avlNode2.parent = avlNode1
        avlNode2.right = avlNode3
        avlNode3.parent = avlNode2

        const pivot = avlNode1.leftRotation()
        expect(pivot).toEqual(avlNode2)

        expect(avlNode0.right).toEqual(pivot)
        expect(pivot.parent).toEqual(avlNode0)

        expect(pivot.right).toEqual(avlNode3)
        expect(avlNode3).toEqual(pivot.right)

        expect(pivot.left).toEqual(avlNode1)
        expect(avlNode1).toEqual(pivot.left)
      })
    })
  })
})
