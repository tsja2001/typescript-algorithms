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
		test('balanceFactor test', () => {
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
})
