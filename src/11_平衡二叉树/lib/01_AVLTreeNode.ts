import { btPrint } from 'hy-algokit'
import { TreeNode } from '../types/TreeNode'

export class AVLTreeNode<T> extends TreeNode<T> {
  left: AVLTreeNode<T> | null = null
  right: AVLTreeNode<T> | null = null
  parent: TreeNode<T> | null = null

  // 获取每个节点
  getHeight(): number {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0
    return Math.max(leftHeight, rightHeight) + 1
  }

  // 获取平衡因子
  getBalanceFactor(): number {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0

    return leftHeight - rightHeight
  }

  // 判断是否平衡
  get isBalanced(): boolean {
    return Math.abs(this.getBalanceFactor()) <= 1
  }

  // 获取更高子节点(左右子树谁高返回谁)
  public get higherChild(): AVLTreeNode<T> | null {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0

    if (leftHeight > rightHeight) return this.left
    if (leftHeight < rightHeight) return this.right

    // 当左右高度相同时, 按照惯例: 左边高返回左边, 右边高返回右边
    return this.isLeft ? this.left : this.right
  }

  // 右旋转
  rightRotation() {
    const isLeft = this.isLeft
    const isRight = this.isRight
    // 1. 处理pivot节点(要旋转成为根节点的节点)
    const pivot = this.left!
    pivot.parent = this.parent
    // 2. 处理pivot的right
    this.left = pivot.right
    if (pivot.right) {
      pivot.right.parent = this
    }
    // 3. 处理this(当前根节点)
    pivot.right = this
    this.parent = pivot
    // 4. 挂载pivot
    if (!pivot.parent) {
      return pivot
    } else if (isLeft) {
      pivot.parent.left = pivot
    } else if (isRight) {
      pivot.parent.right = pivot
    }

    return pivot
  }

  // 左旋转
  leftRotation1() {
    const isLeft = this.isLeft
    const isRight = this.isRight

    // 处理pivot
    const pivot = this.right!
    if (this.parent) {
      pivot.parent = this.parent
    }

    // 处理pivot的left
    this.right = pivot.left
    if (pivot.left) {
      pivot.left.parent = this
    }

    // 处理root(this)
    pivot.left = this
    this.parent = pivot

    if (!pivot.parent) {
      return pivot
    } else if (isLeft) {
      pivot.parent.left = pivot
    } else if (isRight) {
      pivot.parent.right = pivot
    }

    return pivot
  }
}

const avlNode0 = new AVLTreeNode(1)
const avlNode1 = new AVLTreeNode(2)
const avlNode2 = new AVLTreeNode(3)
const avlNode3 = new AVLTreeNode(4)

avlNode0.right = avlNode1
avlNode1.parent = avlNode0
avlNode1.right = avlNode2
avlNode2.parent = avlNode1
avlNode2.right = avlNode3
avlNode3.parent = avlNode2

btPrint(avlNode0)

avlNode1.leftRotation()

btPrint(avlNode0)
