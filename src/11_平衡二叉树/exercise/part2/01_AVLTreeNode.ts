import { TreeNode } from '../../types/TreeNode'
export class AVLTreeNode<T> extends TreeNode<T> {
  left: AVLTreeNode<T> | null = null
  right: AVLTreeNode<T> | null = null
  parent: AVLTreeNode<T> | null = null

  getHeight(): number {
    return this.getNodeHeight(this)
  }

  getNodeHeight(node: AVLTreeNode<T>): number {
    const leftHeight = node.left ? this.getNodeHeight(node.left) : 0
    const rightHeight = node.right
      ? this.getNodeHeight(node.right)
      : 0

    return Math.max(leftHeight, rightHeight) + 1
  }

  getBalanceFactor(): number {
    const leftHeight = this.left ? this.getNodeHeight(this.left) : 0
    const rightHeight = this.right
      ? this.getNodeHeight(this.right)
      : 0

    return leftHeight - rightHeight
  }

  get isBalanced(): boolean {
    return Math.abs(this.getBalanceFactor()) <= 1
  }

  get higherChild(): AVLTreeNode<T> | null {
    const factor = this.getBalanceFactor()
    if (factor < 0) {
      return this.right
    } else if (factor > 0) {
      return this.left
    } else {
      if (this.isLeft) return this.left
      else return this.right
    }
  }

  rightRotation() {
    const isLeft = this.isLeft
    const isRight = this.isRight

    const pivot = this.left!
    pivot.parent = this.parent

    this.left = pivot.right
    if (pivot.right) {
      pivot.right.parent = this
    }

    pivot.right = this
    this.parent = pivot

    if (isLeft) {
      pivot.parent!.left = pivot
    } else if (isRight) {
      pivot.parent!.right = pivot
    }

    return pivot
  }

  leftRotation() {
    const isLeft = this.isLeft
    const isRight = this.isRight

    const pivot = this.right!
    pivot.parent = this.parent

    this.right = pivot.left
    if (pivot.left) {
      pivot.left.parent = this.right
    }

		pivot.left = this
		this.parent = pivot

		if(isLeft){
			pivot.parent!.left = pivot
		}else if(isRight){
			pivot.parent!.right = pivot
		}

		return pivot
  }
}
