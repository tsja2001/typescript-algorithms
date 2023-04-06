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
}
