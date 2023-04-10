import { TreeNode } from '../../types/TreeNode'

export class AVLTreeNode<T> extends TreeNode<T> {
  left: AVLTreeNode<T> | null = null
  right: AVLTreeNode<T> | null = null
  parent: AVLTreeNode<T> | null = null

  // 获取每个节点高度
  getHeight(): number {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0
    // const higher = leftHeight > rightHeight ? leftHeight : rightHeight
    return Math.max(leftHeight, rightHeight) + 1
  }

  // 获取平衡因子
  getBalanceFactor(): number {
    const leftHeight = this.left?.getHeight() ?? 0
    const rightHeight = this.right?.getHeight() ?? 0
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
    const ifLeft = this.isLeft
    const isRight = this.isRight

    // 处理pivot及其指向的parent
    const pivot = this.left!
    pivot.parent = this.parent

    // 处理pivot的right
    this.left = pivot.right
    if (pivot.right) {
      pivot.right.parent = this
    }

    pivot.right = this
    this.parent = pivot

    if (ifLeft) {
      pivot.parent!.left = pivot
    } else if (isRight) {
      pivot.parent!.right = pivot
    }

    return pivot
  }

  // 左旋转
  leftRotation() {
    const isLeft = this.isLeft
    const isRight = this.isRight

    const pivot = this.right!
    pivot.parent = this.parent

    this.right = pivot.left
    if (pivot.left) {
      pivot.left = this
    }

    pivot.left = this
    this.parent = pivot

    if (isLeft) {
      pivot.parent!.left = pivot
    } else if (isRight) {
      pivot.parent!.right = pivot
    }

    return pivot
  }
}
